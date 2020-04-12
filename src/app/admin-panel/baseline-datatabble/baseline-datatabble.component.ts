import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { IFiscalYear, IBaseline } from 'src/models/api-interfaces';
import { FiscalYearsService } from '../services/fiscal-years.service';
import { BaselinesService } from 'src/app/sizing/services/baselines.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { successAddMessage, sucessHeader, successTimeOut, errorheader, errorTimeOut, successDeleteMessage, successUpdateMessage } from 'src/common/global-variables';

@Component({
  selector: 'app-baseline-datatabble',
  templateUrl: './baseline-datatabble.component.html',
  styleUrls: ['./baseline-datatabble.component.css']
})
export class BaselineDatatabbleComponent implements OnInit {

  addBaseLineFormGroup = new FormGroup({
    baselineProdFp: new FormControl('', [Validators.required]),
    marketAvgProdFp: new FormControl('', [Validators.required]),
    targetProdFp: new FormControl('', [Validators.required]),
    fiscalYear: new FormControl('', [Validators.required])
  });

  fiscalYears: IFiscalYear[];

  dataSource: MatTableDataSource<IBaseline>;
  displayedColumns = ['baselineProdFp', 'marketAvgProdFp', 'targetProdFp', 'fiscalYear', 'action'];

  @ViewChild(MatPaginator, null) paginator: MatPaginator;

  constructor(private fiscalYearsServcie: FiscalYearsService,
              private baselinesService: BaselinesService,
              private snakBar: MatSnackBar) { }

  ngOnInit() {
    this.fiscalYearsServcie
    .getAllData()
    .then((result: IFiscalYear[]) => {
      this.fiscalYears = result;
    });

    this.baselinesService
    .getAllData()
    .then((result: IBaseline[]) => {
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.paginator = this.paginator;
    });
  }


  get baselineProdFp() {
    return this.addBaseLineFormGroup.controls.baselineProdFp;
  }

  get marketAvgProdFp() {
    return this.addBaseLineFormGroup.controls.marketAvgProdFp;
  }

  get targetProdFp() {
    return this.addBaseLineFormGroup.controls.targetProdFp;
  }

  get fiscalYear() {
    return this.addBaseLineFormGroup.controls.fiscalYear;
  }


  addBaseLine() {
    const newBaseline: IBaseline = {
      baseLineId: 0,
      baselineProdFp: this.baselineProdFp.value,
      marketAvgProdFp: this.marketAvgProdFp.value,
      targetProdFp: this.targetProdFp.value,
      fiscalYearId: this.fiscalYear.value,
      fiscalYear: null
    };

    this.baselinesService
      .postItem(newBaseline)
      .then(() => {
        this.snakBar.open(successAddMessage, sucessHeader, { duration: successTimeOut });
      })
      .catch(err => this.snakBar.open(err.message, errorheader, { duration: errorTimeOut }))
      .finally(() => {
        this.baselinesService
          .getAllData()
          .then((result: IBaseline[]) => {
            this.dataSource = new MatTableDataSource(result);
            this.dataSource.paginator = this.paginator;
          });
      });
  }

  deleteItem(itemId) {
    this.baselinesService
    .deleteItem(itemId)
    .then(() => {
      this.snakBar.open(successDeleteMessage, sucessHeader, {duration: successTimeOut});
    })
    .catch(err => this.snakBar.open(err.message, errorheader, { duration: errorTimeOut }))
    .finally(() => {
      this.baselinesService
        .getAllData()
        .then((result: IBaseline[]) => {
          this.dataSource = new MatTableDataSource(result);
          this.dataSource.paginator = this.paginator;
        });
    });

  }

  updateItem(baseLineId, baselineProdFp, marketAvgProdFp, targetProdFp, fiscalYearId) {
    const updatedBaseline: IBaseline = {
      baseLineId, baselineProdFp, marketAvgProdFp, targetProdFp, fiscalYearId, fiscalYear: null
    };

    this.baselinesService
    .putItem(baseLineId, updatedBaseline)
    .then(() => {
      this.snakBar.open(successUpdateMessage, sucessHeader, {duration: successTimeOut});
    })
    .catch(err => this.snakBar.open(err.message, errorheader, { duration: errorTimeOut }))
    .finally(() => {
      this.baselinesService
        .getAllData()
        .then((result: IBaseline[]) => {
          this.dataSource = new MatTableDataSource(result);
          this.dataSource.paginator = this.paginator;
        });
    });

  }

}
