import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IProject } from 'src/models/api-interfaces';
import { MatPaginator } from '@angular/material/paginator';

import { ToastrService } from 'ngx-toastr';
import { successDeleteMessage, sucessHeader, successTimeOut,
  errorheader, errorTimeOut, successUpdateMessage, successAddMessage } from 'src/common/global-variables';
import { isNullOrUndefined } from 'util';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-project-datatable',
  templateUrl: './project-datatable.component.html',
  styleUrls: ['./project-datatable.component.css']
})
export class ProjectDatatableComponent implements OnInit {

  @ViewChild('addNewItem', null) addNewItem: ElementRef;

  displayedColumns: string[] = ['Name', 'Action'];
  dataSource = new MatTableDataSource<IProject>();
  @ViewChild(MatPaginator, null) paginator: MatPaginator;

  constructor(private apiDataService: ProjectsService,
              private toastrService: ToastrService) { }

  ngOnInit() {
    this.apiDataService
      .getAllData()
      .then((result: IProject[]) => {
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.paginator = this.paginator;
      });
  }

  delete(id: number) {
    this.apiDataService
      .deleteItem(id)
      .then(() => {

        this.toastrService
          .success(successDeleteMessage, sucessHeader, {
            timeOut: successTimeOut
          });
      })
      .catch(error => {
        this.toastrService
          .error(error.message, errorheader, {
            timeOut: errorTimeOut
          });
      });
  }

  update(id: number, projectName: string) {

    if (this.isValidInput(projectName)) {
      this.toastrService
        .error('Cannot add an empty name', errorheader, {
          timeOut: errorTimeOut
        });
    } else {
      const updatedAppType: IProject = {
        projectID: id,
        projectName
      };
      this.apiDataService
        .putItem(id, updatedAppType)
        .then(() => {
          // refresh the list.
          this.apiDataService
            .getAllData()
            .then((result: IProject[]) => {
              this.dataSource = new MatTableDataSource(result);
              this.dataSource.paginator = this.paginator;
            });
          this.toastrService
            .success(successUpdateMessage, sucessHeader, {
              timeOut: successTimeOut
            });
        })
        .catch(error => {
          this.toastrService
            .error(error.message, errorheader, {
              timeOut: errorTimeOut
            });
        });
    }

  }

  add() {
    const projectName = this.addNewItem.nativeElement.value;
    if (this.isValidInput(projectName)) {
      this.toastrService
        .error('Cannot add an empty name', errorheader, {
          timeOut: errorTimeOut
        });
    } else {
      const newAppType: IProject = {
        projectID: 0,
        projectName
      };

      this.apiDataService
        .postItem(newAppType)
        .then(() => {
          // refresh the list.
          this.apiDataService
            .getAllData()
            .then((result: IProject[]) => {
              this.dataSource = new MatTableDataSource(result);
              this.dataSource.paginator = this.paginator;
            });

          this.toastrService
            .success(successAddMessage, sucessHeader, {
              timeOut: successTimeOut
            });
        }).catch(error => {
          this.toastrService
            .error(error.message, errorheader, {
              timeOut: errorTimeOut
            });
        });
    }

  }

  // tslint:disable-next-line: ban-types
  private isValidInput(value: string): Boolean {
    if (isNullOrUndefined(value)) {
      return false;
    } else {
      return true;
    }
  }

}
