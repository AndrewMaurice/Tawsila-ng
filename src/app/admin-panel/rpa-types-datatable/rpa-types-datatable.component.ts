import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IRPAType  } from 'src/models/api-interfaces';
import { MatPaginator } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
import { successDeleteMessage, sucessHeader,
  successTimeOut, errorheader, errorTimeOut, successUpdateMessage, successAddMessage } from 'src/common/global-variables';
import { isNullOrUndefined } from 'util';
import { RpaTypesService } from '../services/rpa-types.service';

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
              private toastrService: ToastrService) { }

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

  // tslint:disable-next-line: variable-name
  update(id: number, RPA_TypeName: string) {

    if (this.isValidInput(RPA_TypeName)) {
      this.toastrService
        .error('Cannot add an empty name', errorheader, {
          timeOut: errorTimeOut
        });
    } else {
      const updatedAppType: IRPAType = {
        RPA_TypeID: id,
        RPA_TypeName
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
    // tslint:disable-next-line: variable-name
    const RPA_TypeName = this.addNewItem.nativeElement.value;
    if (this.isValidInput(RPA_TypeName)) {
      this.toastrService
        .error('Cannot add an empty name', errorheader, {
          timeOut: errorTimeOut
        });
    } else {
      const newAppType: IRPAType = {
        RPA_TypeID: 0,
        RPA_TypeName
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
