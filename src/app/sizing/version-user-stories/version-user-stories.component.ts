import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IUserStory } from 'src/models/api-interfaces';
import { MatPaginator } from '@angular/material/paginator';
import { UserStoriesService } from '../services/user-stories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-version-user-stories',
  templateUrl: './version-user-stories.component.html',
  styleUrls: ['./version-user-stories.component.css']
})
export class VersionUserStoriesComponent implements OnInit {


  dataSource: MatTableDataSource<IUserStory>;

  displayedColumns: string[] = ['userStory', 'fp', 'action'];

  @ViewChild(MatPaginator, null) paginator: MatPaginator;

  userStories: IUserStory[];
  // tslint:disable-next-line: no-input-rename
  @Input('versionId') versionId: number;

  constructor(private userStoriesServcie: UserStoriesService, private router: Router) { }



  ngOnInit() {
    this.userStoriesServcie
    .getItem(this.versionId)
    .then((result: IUserStory[]) => {
      this.userStories = result;
      this.dataSource = new MatTableDataSource(this.userStories);
      this.dataSource.paginator = this.paginator;
    });

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteUserStory(userStoryId) {
    this.userStoriesServcie
    .deleteItem(userStoryId)
    .catch(err => {
      console.log(err);
    })
    .then(() => {
      this.userStoriesServcie
        .getItem(this.versionId)
        .then((result: IUserStory[]) => {
          this.userStories = result;
          this.dataSource = new MatTableDataSource(this.userStories);
          this.dataSource.paginator = this.paginator;
        });
    });
  }



}
