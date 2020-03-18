import { Component, OnInit, Input, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IUserStory, IVersion } from 'src/models/api-interfaces';
import { MatPaginator } from '@angular/material/paginator';
import { UserStoriesService } from '../services/user-stories.service';
import { Router } from '@angular/router';
import { VersionsService } from '../services/versions.service';

@Component({
  selector: 'app-version-user-stories',
  templateUrl: './version-user-stories.component.html',
  styleUrls: ['./version-user-stories.component.css']
})
export class VersionUserStoriesComponent implements OnInit {


  dataSource: MatTableDataSource<IUserStory>;

  displayedColumns: string[] = ['userStory', 'fp', 'action'];

  @ViewChild(MatPaginator, null) paginator: MatPaginator;

  // tslint:disable-next-line: no-output-rename
  @Output('versionUpdate') versionUpdate = new EventEmitter();

  userStories: IUserStory[];
  // tslint:disable-next-line: no-input-rename
  @Input('versionId') versionId: number;
  // tslint:disable-next-line: no-input-rename
  @Input('version') currentVerion: IVersion;

  constructor(private userStoriesServcie: UserStoriesService,
              private router: Router,
              private verisonsService: VersionsService) { }



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

  deleteUserStory(userStoryId, fp) {
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

          // updating the version info
          this.currentVerion.totalFp -= fp;
          this.verisonsService
          .putItem(this.versionId, this.currentVerion)
          .catch(err => console.log(err))
          .finally(() => this.onVersionUpdate());
        });
    });
  }

  private onVersionUpdate() {
    console.log(this.currentVerion.totalFp);
    return this.versionUpdate.emit(this.currentVerion.totalFp);
  }



}
