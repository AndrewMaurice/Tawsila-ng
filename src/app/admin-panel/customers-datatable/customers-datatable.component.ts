import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ICustomer } from 'src/models/api-interfaces';
import { MatPaginator } from '@angular/material/paginator';
import { BusinessDomainsService } from '../services/business-domains.service';
import { ToastrService } from 'ngx-toastr';
import { successDeleteMessage, sucessHeader, successTimeOut,
  errorheader, errorTimeOut, successUpdateMessage, successAddMessage } from 'src/common/global-variables';
import { isNullOrUndefined } from 'util';
import { CustomersService } from '../services/customers.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-customers-datatable',
  templateUrl: './customers-datatable.component.html',
  styleUrls: ['./customers-datatable.component.css']
})
export class CustomersDatatableComponent implements OnInit {

  @ViewChild('addNewItem', null) addNewItem: ElementRef;

  displayedColumns: string[] = ['Name', 'Action'];
  dataSource = new MatTableDataSource<ICustomer>();
  @ViewChild(MatPaginator, null) paginator: MatPaginator;

  constructor(private apiDataService: CustomersService,
              private toastrService: MatSnackBar) { }

  ngOnInit() {
    this.apiDataService
      .getAllData()
      .then((result: ICustomer[]) => {
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
          // refresh the list.
        this.apiDataService
          .getAllData()
          .then((result: ICustomer[]) => {
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

  update(id: number, customerName: string) {

    if (!this.isValidInput(customerName)) {
      this.toastrService
        .open('Cannot add an empty name', errorheader, {
          duration: errorTimeOut
        });
    } else {
      const updatedAppType: ICustomer = {
        customerId: id,
        customerName
      };
      this.apiDataService
        .putItem(id, updatedAppType)
        .then(() => {
          // refresh the list.
          this.apiDataService
            .getAllData()
            .then((result: ICustomer[]) => {
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
    const customerName = this.addNewItem.nativeElement.value;
    if (!this.isValidInput(customerName)) {
      this.toastrService
        .open('Cannot add an empty name', errorheader, {
          duration: errorTimeOut
        });
    } else {
      const newAppType: ICustomer = {
        customerId: 0,
        customerName
      };

      this.apiDataService
        .postItem(newAppType)
        .then(() => {
          // refresh the list.
          this.apiDataService
            .getAllData()
            .then((result: ICustomer[]) => {
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
