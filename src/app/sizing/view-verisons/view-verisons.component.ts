import { Component, OnInit, ViewChild } from '@angular/core';
import { VersionsService } from '../services/versions.service';
import { IVersion } from 'src/models/api-interfaces';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-view-verisons',
  templateUrl: './view-verisons.component.html',
  styleUrls: ['./view-verisons.component.css']
})
export class ViewVerisonsComponent implements OnInit {

  private versions: IVersion[];
  displayedColumns: string[] = ['versionName', 'fp'];
  dataSource = new MatTableDataSource<IVersion>();
  @ViewChild(MatPaginator, null) paginator: MatPaginator;

  constructor(private versionsService: VersionsService) { }

  ngOnInit() {
    this.versionsService
    .getAllData()
    .then((result: IVersion[]) => {
      console.log(result);
      this.versions = result;
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
