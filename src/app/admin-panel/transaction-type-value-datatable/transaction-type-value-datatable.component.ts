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
import { MatSnackBar } from '@angular/material/snack-bar';

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
              private toastrService: MatSnackBar) { }

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
          .open(successDeleteMessage, sucessHeader, {
            duration: successTimeOut
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
          .open(error.message, errorheader, {
            duration: errorTimeOut
          });
      });
  }

  update(id: number, value: number, transactionTypeId: number) {

    const newObjectToBeAdded: ITransactionTypeValue = {
      transactionTypeId,
      value,
      transactionTypeValueId: id,
      transactionTypeDTO: null
    };
    this.apiDataService
      .putItem(id, newObjectToBeAdded)
      .then(() => {
        this.toastrService
          .open(successAddMessage, sucessHeader, {
            duration: successTimeOut
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
          .open(error.message, errorheader, {
            duration: errorTimeOut
          });
      });


  }

  add() {
    const newObjectToBeAdded: ITransactionTypeValue = {
      transactionTypeId: this.transactionType.value,
      value: this.value.value,
      transactionTypeValueId: 0,
      transactionTypeDTO: null
    };
    console.log(newObjectToBeAdded);
    this.apiDataService
      .postItem(newObjectToBeAdded)
      .then(() => {
        this.toastrService
          .open(successAddMessage, sucessHeader, {
            duration: successTimeOut
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
          .open(error.message, errorheader, {
            duration: errorTimeOut
          });
      });

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
