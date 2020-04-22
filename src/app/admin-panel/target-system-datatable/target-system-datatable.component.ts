import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ITargetSystem as ITargetSystem } from 'src/models/api-interfaces';
import { MatPaginator } from '@angular/material/paginator';
import { RpaTypesService } from '../services/rpa-types.service';
import { ToastrService } from 'ngx-toastr';
import { successDeleteMessage, sucessHeader, successTimeOut,
  errorheader, errorTimeOut, successUpdateMessage, successAddMessage } from 'src/common/global-variables';
import { isNullOrUndefined } from 'util';
import { TargetSystemsService } from '../services/target-systems.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-target-system-datatable',
  templateUrl: './target-system-datatable.component.html',
  styleUrls: ['./target-system-datatable.component.css']
})
export class TargetSystemDatatableComponent implements OnInit {

  @ViewChild('addNewItem', null) addNewItem: ElementRef;

  displayedColumns: string[] = ['Name', 'Action'];
  dataSource = new MatTableDataSource<ITargetSystem>();
  @ViewChild(MatPaginator, null) paginator: MatPaginator;

  constructor(private apiDataService: TargetSystemsService,
              private toastrService: MatSnackBar) { }

  ngOnInit() {
    this.apiDataService
      .getAllData()
      .then((result: ITargetSystem[]) => {
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
            .then((result: ITargetSystem[]) => {
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
  update(id: number, tagetSystemName: string) {

    if (!this.isValidInput(tagetSystemName)) {
      this.toastrService
        .open('Cannot add an empty name', errorheader, {
          duration: errorTimeOut
        });
    } else {
      const updatedAppType: ITargetSystem = {
        targetSystemId: id,
        tagetSystemName
      };
      this.apiDataService
        .putItem(id, updatedAppType)
        .then(() => {
          // refresh the list.
          this.apiDataService
            .getAllData()
            .then((result: ITargetSystem[]) => {
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
    const tagetSystemName = this.addNewItem.nativeElement.value;
    if (!this.isValidInput(tagetSystemName)) {
      this.toastrService
        .open('Cannot add an empty name', errorheader, {
          duration: errorTimeOut
        });
    } else {
      const newAppType: ITargetSystem = {
        targetSystemId: 0,
        tagetSystemName
      };

      this.apiDataService
        .postItem(newAppType)
        .then(() => {
          // refresh the list.
          this.apiDataService
            .getAllData()
            .then((result: ITargetSystem[]) => {
              this.dataSource = new MatTableDataSource(result);
              this.dataSource.paginator = this.paginator;
              console.log(result);
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
