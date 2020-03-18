import { Component, OnInit } from '@angular/core';
import { VersionsService } from '../services/versions.service';
import { UserStoriesService } from '../services/user-stories.service';
import { IVersion, IUserStory, ITransactionTypeValue, ITransactionType } from 'src/models/api-interfaces';
import { TransactionTypesService } from 'src/app/admin-panel/services/transaction-types.service';
import { TransactionTypeValuesService } from 'src/app/admin-panel/services/transaction-type-values.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-version-user-story-details',
  templateUrl: './version-user-story-details.component.html',
  styleUrls: ['./version-user-story-details.component.css']
})
export class VersionUserStoryDetailsComponent implements OnInit {

  currentVersion: IVersion;
  currentUserStory: IUserStory;
  transactionTypes: ITransactionType[];
  transactionTypeValues: ITransactionTypeValue[];

  updateUserStoryFormGroup = new FormGroup({
    versionName: new FormControl(),
    userStoryName: new FormControl('', [Validators.required]),
    fp: new FormControl(),
    transactionCount: new FormControl('', [Validators.required, Validators.pattern(/[0-9]/), Validators.min(1)]),
    transactionType: new FormControl('', [Validators.required])
  });

  constructor(private userStoiresService: UserStoriesService,
              private versionsServcie: VersionsService,
              private transactionTypesServcie: TransactionTypesService,
              private transactionTypesValuesServcie: TransactionTypeValuesService) {}

  ngOnInit() {

    // Transaction types from DB.
    this.transactionTypesServcie
    .getAllData()
    .then((result: ITransactionType[]) => {
      this.transactionTypes = result;
    });

    // Transaction type values from DB.
    this.transactionTypesValuesServcie
    .getAllData()
    .then((result: ITransactionTypeValue[]) => {
      this.transactionTypeValues = result;
    });

    // get the version and the userstory.
    this.currentVersion = history.state.currentVersion;
    this.currentUserStory = history.state.currentStory;

    // setting the default values for the form.
    this.fp.setValue(this.currentUserStory.fp);
    this.versionName.setValue(this.currentVersion.versionName);
    this.userStoryName.setValue(this.currentUserStory.userStoryName);
    this.transactionCount.setValue(1);


  }


  get versionName() {
    return this.updateUserStoryFormGroup.controls.versionName;
  }

  get userStoryName() {
    return this.updateUserStoryFormGroup.controls.userStoryName;
  }

  get fp() {
    return this.updateUserStoryFormGroup.controls.fp;
  }

  get transactionCount() {
    return this.updateUserStoryFormGroup.controls.transactionCount;
  }

  get tarnsactionType() {
    return this.updateUserStoryFormGroup.controls.transactionType;
  }


  updateUserStory() {
    /*
    TODO:
      1- update the version object i.e. subtract the function points from the current version.
      2- update the user story object.
      3- update the version fp.
      4- update the user story in DB.
      5- update the version in DB.
    */

    this.currentVersion.totalFp -= this.fp.value;
    this.currentUserStory.fp = this.calculateTheFp();
    this.currentVersion.totalFp += this.currentUserStory.fp;

    this.userStoiresService
    .putItem(this.currentUserStory.userStoryId, this.currentUserStory)
    .catch(err => console.log(err))
    .then(() => {
      this.versionsServcie
      .putItem(this.currentVersion.versionId, this.currentVersion)
      .catch(err => console.log(err))
      .then(() => {
        // setting the default values for the form.
        this.fp.setValue(this.currentUserStory.fp);
        this.versionName.setValue(this.currentVersion.versionName);
        this.userStoryName.setValue(this.currentUserStory.userStoryName);
        this.transactionCount.setValue(1);
      });
    });
  }

  private calculateTheFp(): number {
    let result = this.transactionCount.value;

    this.transactionTypeValues.forEach(element => {
      // tslint:disable-next-line: triple-equals
      if (element.transactionTypeDTO.transactionTypeId == this.tarnsactionType.value) {
        result *= element.value;
      }
    });

    return result;
  }

}
