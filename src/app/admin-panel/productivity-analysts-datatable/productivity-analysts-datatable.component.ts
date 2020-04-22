import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IProductivityAnalyst } from 'src/models/api-interfaces';
import { MatPaginator } from '@angular/material/paginator';
import { CustomersService } from '../services/customers.service';
import { ToastrService } from 'ngx-toastr';
import { successDeleteMessage, sucessHeader, successTimeOut,
  errorheader, errorTimeOut, successUpdateMessage, successAddMessage } from 'src/common/global-variables';
import { isNullOrUndefined } from 'util';
import { ProductivityAnalystsService } from '../services/productivity-analysts.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-productivity-analysts-datatable',
  templateUrl: './productivity-analysts-datatable.component.html',
  styleUrls: ['./productivity-analysts-datatable.component.css']
})
export class ProductivityAnalystsDatatableComponent implements OnInit {

  @ViewChild('addNewItem', null) addNewItem: ElementRef;

  displayedColumns: string[] = ['Name', 'Action'];
  dataSource = new MatTableDataSource<IProductivityAnalyst>();
  @ViewChild(MatPaginator, null) paginator: MatPaginator;

  constructor(private apiDataService: ProductivityAnalystsService,
              private toastrService: MatSnackBar) { }

  ngOnInit() {
    this.apiDataService
      .getAllData()
      .then((result: IProductivityAnalyst[]) => {
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
            .then((result: IProductivityAnalyst[]) => {
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

  update(id: number, productivityAnalystName: string) {

    if (!this.isValidInput(productivityAnalystName)) {
      this.toastrService
        .open('Cannot add an empty name', errorheader, {
          duration: errorTimeOut
        });
    } else {
      const updatedAppType: IProductivityAnalyst = {
        productivityAnalystId: id,
        productivityAnalystName
      };
      this.apiDataService
        .putItem(id, updatedAppType)
        .then(() => {
          // refresh the list.
          this.apiDataService
            .getAllData()
            .then((result: IProductivityAnalyst[]) => {
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
    const productivityAnalystName = this.addNewItem.nativeElement.value;
    if (!this.isValidInput(productivityAnalystName)) {
      this.toastrService
        .open('Cannot add an empty name', errorheader, {
          duration: errorTimeOut
        });
    } else {
      const newAppType: IProductivityAnalyst = {
        productivityAnalystId: 0,
        productivityAnalystName
      };

      this.apiDataService
        .postItem(newAppType)
        .then(() => {
          // refresh the list.
          this.apiDataService
            .getAllData()
            .then((result: IProductivityAnalyst[]) => {
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
