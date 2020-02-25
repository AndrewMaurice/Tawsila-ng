import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ITransactionTypeValue as ITransactionTypeValue, ITransactionType } from 'src/models/api-interfaces';
import { MatPaginator } from '@angular/material/paginator';
import { TransactionTypesService } from '../services/transaction-types.service';
import { ToastrService } from 'ngx-toastr';
import {
  successDeleteMessage, sucessHeader, successTimeOut,
  errorheader, errorTimeOut, successUpdateMessage, successAddMessage
} from 'src/common/global-variables';
import { isNullOrUndefined } from 'util';
import { TransactionTypeValuesService } from '../services/transaction-type-values.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-transaction-type-value-datatable',
  templateUrl: './transaction-type-value-datatable.component.html',
  styleUrls: ['./transaction-type-value-datatable.component.css']
})
export class TransactionTypeValueDatatableComponent implements OnInit {

  addNewTransactionTypeFormGroup = new FormGroup({
    transactionType: new FormControl('', [Validators.required]),
    value: new FormControl('', [Validators.required, Validators.pattern(/[0-9]/)])
  });

  get transactionType() {
    return this.addNewTransactionTypeFormGroup.controls.transactionType;
  }

  get value() {
    return this.addNewTransactionTypeFormGroup.controls.value;
  }

  displayedColumns: string[] = ['Name', 'Value', 'Action'];
  dataSource = new MatTableDataSource<ITransactionTypeValue>();
  @ViewChild(MatPaginator, null) paginator: MatPaginator;

  transactionTypes: ITransactionType[];

  constructor(private apiDataService: TransactionTypeValuesService,
              private transactionTypesService: TransactionTypesService,
              private toastrService: ToastrService) { }

  ngOnInit() {
    this.apiDataService
      .getAllData()
      .then((result: ITransactionTypeValue[]) => {
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.paginator = this.paginator;
      });

    this.transactionTypesService
      .getAllData()
      .then((result: ITransactionType[]) => {
        this.transactionTypes = result;
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

  update(id: number, value: number, transactionTypeID: number) {

    const newObjectToBeAdded: ITransactionTypeValue = {
      transactionTypeID,
      value,
      transactionTypeValueID: id,
      transactionType: null
    };
    this.apiDataService
      .putItem(id, newObjectToBeAdded)
      .then(() => {
        this.toastrService
          .success(successAddMessage, sucessHeader, {
            timeOut: successTimeOut
          });

        this.apiDataService
          .getAllData()
          .then((result: ITransactionTypeValue[]) => {
            this.dataSource = new MatTableDataSource(result);
            this.dataSource.paginator = this.paginator;
          });
      })
      .catch(error => {
        this.toastrService
          .error(error.message, errorheader, {
            timeOut: errorTimeOut
          });
      });


  }

  add() {
    if (this.value.errors.required || this.value.errors.pattern) {
      this.toastrService
        .error('Please fix the errors in the value field', errorheader, {
          timeOut: errorTimeOut
        });
    } else if (this.transactionType.errors.required) {
      this.toastrService
        .error('Transaction type is required', errorheader, {
          timeOut: errorTimeOut
        });
    } else {
      const newObjectToBeAdded: ITransactionTypeValue = {
        transactionTypeID: this.transactionType.value,
        value: this.value.value,
        transactionTypeValueID: 0,
        transactionType: null
      };
      this.apiDataService
        .postItem(newObjectToBeAdded)
        .then(() => {
          this.toastrService
            .success(successAddMessage, sucessHeader, {
              timeOut: successTimeOut
            });

          this.apiDataService
            .getAllData()
            .then((result: ITransactionTypeValue[]) => {
              this.dataSource = new MatTableDataSource(result);
              this.dataSource.paginator = this.paginator;
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

  // tslint:disable-next-line: ban-types
  private isValidInput(value: string): Boolean {
    if (isNullOrUndefined(value)) {
      return false;
    } else {
      return true;
    }
  }

}
