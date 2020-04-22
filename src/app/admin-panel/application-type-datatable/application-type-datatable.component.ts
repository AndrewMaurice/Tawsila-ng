import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ApplicationTypesService } from '../services/application-types.service';
import { IApplicationType } from 'src/models/api-interfaces';
import {
  successDeleteMessage, sucessHeader, successTimeOut,
  errorheader, errorTimeOut, successUpdateMessage, successAddMessage
} from 'src/common/global-variables';
import { isNullOrUndefined } from 'util';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-application-type-datatable',
  templateUrl: './application-type-datatable.component.html',
  styleUrls: ['./application-type-datatable.component.css']
})
export class ApplicationTypeDatatableComponent implements OnInit {

  @ViewChild('addNewApplicationTypeName', null) addNewApplicationTypeName: ElementRef;

  displayedColumns: string[] = ['ApplicationType', 'Action'];
  dataSource = new MatTableDataSource<IApplicationType>();
  @ViewChild(MatPaginator, null) paginator: MatPaginator;

  constructor(private applicationTypesService: ApplicationTypesService,
              private toastrService: MatSnackBar) { }

  ngOnInit() {
    this.applicationTypesService
      .getAllData()
      .then((result: IApplicationType[]) => {
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.paginator = this.paginator;

      });
  }

  delete(id: number) {
    this.applicationTypesService
      .deleteItem(id)
      .then(() => {
        this.applicationTypesService
        .getAllData()
        .then((result: IApplicationType[]) => {
          this.dataSource = new MatTableDataSource(result);
          this.dataSource.paginator = this.paginator;

        });
        this.toastrService
          .open(successDeleteMessage, sucessHeader, {
            duration: successTimeOut
          });
      })
      .catch(error => {
        this.toastrService
          .open(error.message, errorheader, {
            duration: errorTimeOut
          });
      });
  }

  update(id: number, applicationTypeName: string) {

    if (!this.isValidInput(applicationTypeName)) {
      this.toastrService
        .open('Cannot add an empty name', errorheader, {
          duration: errorTimeOut
        });
    } else {
      const updatedAppType: IApplicationType = {
        applicationTypeId: id,
        applicationTypeName
      };
      this.applicationTypesService
        .putItem(id, updatedAppType)
        .then(() => {
          // refresh the list.
          this.applicationTypesService
            .getAllData()
            .then((result: IApplicationType[]) => {
              this.dataSource = new MatTableDataSource(result);
              this.dataSource.paginator = this.paginator;

            });
          this.toastrService
            .open(successUpdateMessage, sucessHeader, {
              duration: successTimeOut
            });
        })
        .catch(error => {
          this.toastrService
            .open(error.message, errorheader, {
              duration: errorTimeOut
            });
        });
    }

  }

  add() {
    const applicationTypeName = this.addNewApplicationTypeName.nativeElement.value;
    if (!this.isValidInput(applicationTypeName)) {
      this.toastrService
        .open('Cannot add an empty name', errorheader, {
          duration: errorTimeOut
        });
    } else {
      const newAppType: IApplicationType = {
        applicationTypeId: 0,
        applicationTypeName
      };

      this.applicationTypesService
        .postItem(newAppType)
        .then(() => {
          // refresh the list.
          this.applicationTypesService
            .getAllData()
            .then((result: IApplicationType[]) => {
              this.dataSource = new MatTableDataSource(result);
              this.dataSource.paginator = this.paginator;
            });

          this.toastrService
            .open(successAddMessage, sucessHeader, {
              duration: successTimeOut
            });
        }).catch(error => {
          this.toastrService
            .open(error.message, errorheader, {
              duration: errorTimeOut
            });
        });
    }

  }

  // tslint:disable-next-line: ban-types
  private isValidInput(value: string): Boolean {
    value.trim();
    if (value.length > 0) {
      return true;
    } else {
      return false;
    }
  }

}
