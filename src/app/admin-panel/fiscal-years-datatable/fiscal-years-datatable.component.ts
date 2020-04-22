import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { IFiscalYear as IFiscalYear } from 'src/models/api-interfaces';
import { MatPaginator } from '@angular/material/paginator';
import { TransactionTypeValuesService } from '../services/transaction-type-values.service';
import { ToastrService } from 'ngx-toastr';
import { successDeleteMessage, sucessHeader, successTimeOut,
  errorheader, errorTimeOut, successAddMessage, successUpdateMessage } from 'src/common/global-variables';
import { isNullOrUndefined } from 'util';
import { FiscalYearsService } from '../services/fiscal-years.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-fiscal-years-datatable',
  templateUrl: './fiscal-years-datatable.component.html',
  styleUrls: ['./fiscal-years-datatable.component.css']
})
export class FiscalYearsDatatableComponent implements OnInit {

  addNewFiscalYearFormGroup = new FormGroup({
    fiscalYearName: new FormControl('', [Validators.required]),
    startDate: new FormControl('', [Validators.required])
  });

  get fiscalYearName() {
    return this.addNewFiscalYearFormGroup.controls.fiscalYearName;
  }

  get startDate() {
    return this.addNewFiscalYearFormGroup.controls.startDate;
  }

  displayedColumns: string[] = ['Name', 'StartDate', 'EndDate', 'Action'];
  dataSource = new MatTableDataSource<IFiscalYear>();
  @ViewChild(MatPaginator, null) paginator: MatPaginator;



  constructor(private apiDataService: FiscalYearsService,
              private toastrService: MatSnackBar) { }

  ngOnInit() {
    this.apiDataService
      .getAllData()
      .then((result: IFiscalYear[]) => {
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
            .then((result: IFiscalYear[]) => {
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

  update(id: number, fiscalYearName: string, startDate: string) {
    if (isNullOrUndefined(fiscalYearName) || isNullOrUndefined(startDate)) {
      this.toastrService
      .open('All the fields are required', errorheader, {
        duration: errorTimeOut
      });
    } else {
      const yearToBeUpdated: IFiscalYear = {
        fiscalYearId: id,
        fiscalYearName,
        startDate,
        endDate: this.calculateEndDate(startDate)
      };

      this.apiDataService
      .putItem(id, yearToBeUpdated)
      .then(() => {
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
    const itemToBeAdded: IFiscalYear = {
      fiscalYearId: 0,
      fiscalYearName: this.fiscalYearName.value,
      startDate: this.startDate.value,
      endDate: this.calculateEndDate(this.startDate.value)
    };

    this.apiDataService
    .postItem(itemToBeAdded)
    .then(() => {
      this.toastrService
      .open(successAddMessage, sucessHeader, {
        duration: successTimeOut
      });

      this.apiDataService
      .getAllData()
      .then((result: IFiscalYear[]) => {
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

  private calculateEndDate(value: string): string {
    const startDate: Date = new Date(value);
    const newYear = startDate.getFullYear() + 1;
    const newMonth = startDate.getMonth() - 1 === 0 ? 12 : startDate.getMonth() - 1;
    const newDay = newMonth === 1 || newMonth === 3 || newMonth === 7 || newMonth === 5
     || newMonth === 8 || newMonth === 10 || newMonth === 12 ? 31 : 30;
    return new Date(newYear, newMonth, newDay).toLocaleDateString();
  }

}
