import { Component, OnInit, ViewChild } from '@angular/core';
import { VersionsService } from '../services/versions.service';
import { IVersion, ITransactionType, ITransactionTypeValue, IUserStory, IMonth } from 'src/models/api-interfaces';
import { ActivatedRoute, Router } from '@angular/router';
import { UserStoriesService } from '../services/user-stories.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { TransactionTypesService } from '../services/transaction-types.service';
import { TransactionTypeValuesService } from '../services/transaction-type-values.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MonthsService } from '../services/months.service';

@Component({
  selector: 'app-view-version-details',
  templateUrl: './view-version-details.component.html',
  styleUrls: ['./view-version-details.component.css']
})
export class ViewVersionDetailsComponent implements OnInit {

  updateVersionFormGroup = new FormGroup({
    versionName: new FormControl('', [Validators.required]),
    totalFp: new FormControl(),
    month: new FormControl('', [Validators.required]),
    sizingDate: new FormControl('', [Validators.required]),
  });

  transactionTypes: ITransactionType[];
  transactionTypeValues: ITransactionTypeValue[];
  userStories: IUserStory[];

  version: IVersion;
  months: IMonth[];

  displayedColumns: string[] = ['userStoryName', 'transactionCount', 'transaction'];
  dataSource = new MatTableDataSource<IUserStory>();
  @ViewChild(MatPaginator, null) paginator: MatPaginator;

  constructor(private versionsService: VersionsService,
              private activatedRouter: ActivatedRoute,
              private userStoriesService: UserStoriesService,
              private transactionTypesService: TransactionTypesService,
              private transactionTypesvaluesService: TransactionTypeValuesService,
              private monthsService: MonthsService,
              private router: Router) { }

  ngOnInit() {

    // get the version.
    this.activatedRouter
    .params
    .subscribe(params => {
      this.versionsService
      .getItem(params.versionId)
      .then((result: IVersion) => {
        this.version = result;
        // get the userstories.
        this.userStoriesService
          .getItem(this.version.versionId)
          .then((us: IUserStory[]) => {
            this.userStories = us;
          });
        this.versionName.setValue(result.versionName);
        this.totalFp.setValue(result.totalFp);
        this.sizingDate.setValue(new Date(result.sizingDate));
        this.month.setValue(result.monthId);
      });
    });



    // get the transaction types.
    this.transactionTypesService
    .getAllData()
    .then((result: ITransactionType[]) => {
      this.transactionTypes = result;
    });

    // get the transaction types value.
    this.transactionTypesvaluesService
    .getAllData()
    .then((result: ITransactionTypeValue[]) => {
      this.transactionTypeValues = result;
    });


    // months service.
    this.monthsService
    .getAllData()
    .then((result: IMonth[]) => {
      this.months = result;
    });

  }

  get versionName() {
    return this.updateVersionFormGroup.controls.versionName;
  }

  get month() {
    return this.updateVersionFormGroup.controls.month;
  }

  get sizingDate() {
    return this.updateVersionFormGroup.controls.sizingDate;
  }

  get totalFp() {
    return this.updateVersionFormGroup.controls.totalFp;
  }

  updateVersionData() {
    this.version.versionName = this.versionName.value;
    this.version.sizingDate = this.sizingDate.value;
    this.version.monthId = this.month.value;

    this.versionsService
    .putItem(this.version.versionId, this.version)
    .catch(err => console.log(err))
    .finally(() => {
      this.updateVersionFormGroup.reset();
      this.sizingDate.setValue(this.version.sizingDate);
      this.month.setValue(this.version.monthId);
      this.versionName.setValue(this.version.versionName);
      this.totalFp.setValue(this.version.totalFp);
    });
  }

  adduserStory() {
    this.router.navigate(['sizing', this.version.versionId]);
  }

}
