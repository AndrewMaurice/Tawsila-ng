import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Itechnology as ITechnology } from 'src/models/api-interfaces';
import { MatPaginator } from '@angular/material/paginator';
import { ProductivityAnalystsService } from '../services/productivity-analysts.service';
import { ToastrService } from 'ngx-toastr';
import { successDeleteMessage, sucessHeader, successTimeOut,
  errorheader, errorTimeOut, successUpdateMessage, successAddMessage } from 'src/common/global-variables';
import { isNullOrUndefined } from 'util';
import { TechnologiesService } from '../services/technologies.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-technology-datatable',
  templateUrl: './technology-datatable.component.html',
  styleUrls: ['./technology-datatable.component.css']
})
export class TechnologyDatatableComponent implements OnInit {

  @ViewChild('addNewItem', null) addNewItem: ElementRef;

  displayedColumns: string[] = ['Name', 'Action'];
  dataSource = new MatTableDataSource<ITechnology>();
  @ViewChild(MatPaginator, null) paginator: MatPaginator;

  constructor(private apiDataService: TechnologiesService,
              private toastrService: MatSnackBar) { }

  ngOnInit() {
    this.apiDataService
      .getAllData()
      .then((result: ITechnology[]) => {
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
            .then((result: ITechnology[]) => {
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

  update(id: number, technologyName: string) {

    if (!this.isValidInput(technologyName)) {
      this.toastrService
        .open('Cannot add an empty name', errorheader, {
          duration: errorTimeOut
        });
    } else {
      const updatedAppType: ITechnology = {
        technologyId: id,
        technologyName
      };
      this.apiDataService
        .putItem(id, updatedAppType)
        .then(() => {
          // refresh the list.
          this.apiDataService
            .getAllData()
            .then((result: ITechnology[]) => {
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
    const technologyName = this.addNewItem.nativeElement.value;
    if (!this.isValidInput(technologyName)) {
      this.toastrService
        .open('Cannot add an empty name', errorheader, {
          duration: errorTimeOut
        });
    } else {
      const newAppType: ITechnology = {
        technologyId: 0,
        technologyName
      };

      this.apiDataService
        .postItem(newAppType)
        .then(() => {
          // refresh the list.
          this.apiDataService
            .getAllData()
            .then((result: ITechnology[]) => {
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
