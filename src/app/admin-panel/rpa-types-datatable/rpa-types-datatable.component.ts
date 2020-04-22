import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IRPAType  } from 'src/models/api-interfaces';
import { MatPaginator } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
import { successDeleteMessage, sucessHeader,
  successTimeOut, errorheader, errorTimeOut, successUpdateMessage, successAddMessage } from 'src/common/global-variables';
import { isNullOrUndefined } from 'util';
import { RpaTypesService } from '../services/rpa-types.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-rpa-types-datatable',
  templateUrl: './rpa-types-datatable.component.html',
  styleUrls: ['./rpa-types-datatable.component.css']
})
export class RpaTypesDatatableComponent implements OnInit {

  @ViewChild('addNewItem', null) addNewItem: ElementRef;

  displayedColumns: string[] = ['Name', 'Action'];
  dataSource = new MatTableDataSource<IRPAType>();
  @ViewChild(MatPaginator, null) paginator: MatPaginator;

  constructor(private apiDataService: RpaTypesService,
              private toastrService: MatSnackBar) { }

  ngOnInit() {
    this.apiDataService
      .getAllData()
      .then((result: IRPAType[]) => {
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.paginator = this.paginator;
      });
  }

  delete(id: number) {
    this.apiDataService
      .deleteItem(id)
      .then(() => {

        this.toastrService
          .open(successDeleteMessage, sucessHeader, {
            duration: successTimeOut
          });
        this.apiDataService
            .getAllData()
            .then((result: IRPAType[]) => {
              this.dataSource = new MatTableDataSource(result);
              this.dataSource.paginator = this.paginator;
            });
      })
      .catch(error => {
        this.toastrService
          .open(error.message, errorheader, {
            duration: errorTimeOut
          });
      });
  }

  // tslint:disable-next-line: variable-name
  update(id: number, rpaTypeName: string) {

    if (!this.isValidInput(rpaTypeName)) {
      this.toastrService
        .open('Cannot add an empty name', errorheader, {
          duration: errorTimeOut
        });
    } else {
      const updatedAppType: IRPAType = {
        rpaTypeId: id,
        rpaTypeName
      };
      this.apiDataService
        .putItem(id, updatedAppType)
        .then(() => {
          // refresh the list.
          this.apiDataService
            .getAllData()
            .then((result: IRPAType[]) => {
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
    // tslint:disable-next-line: variable-name
    const rpaTypeName = this.addNewItem.nativeElement.value;
    if (!this.isValidInput(rpaTypeName)) {
      this.toastrService
        .open('Cannot add an empty name', errorheader, {
          duration: errorTimeOut
        });
    } else {
      const newAppType: IRPAType = {
        rpaTypeId: 0,
        rpaTypeName
      };

      this.apiDataService
        .postItem(newAppType)
        .then(() => {
          // refresh the list.
          this.apiDataService
            .getAllData()
            .then((result: IRPAType[]) => {
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
    if (isNullOrUndefined(value)) {
      return false;
    } else {
      return true;
    }
  }

}
