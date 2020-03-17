import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserStoriesService } from '../services/user-stories.service';
import { TransactionTypesService } from 'src/app/admin-panel/services/transaction-types.service';
import { TransactionTypeValuesService } from 'src/app/admin-panel/services/transaction-type-values.service';
import { IUserStory, ITransactionType, IVersion, ITransactionTypeValue } from 'src/models/api-interfaces';
import { VersionsService } from '../services/versions.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sizing',
  templateUrl: './sizing.component.html',
  styleUrls: ['./sizing.component.css']
})
export class SizingComponent implements OnInit, AfterViewInit {

  userStoriesFormGroup = new FormGroup({
    version: new FormControl(),
    userStoryName: new FormControl('', [Validators.required]),
    transactionType: new FormControl('', [Validators.required]),
    transactionCount: new FormControl('', [Validators.required, Validators.pattern(/[0-9]/)])
  });

  userStories: IUserStory[];
  transcationTypes: ITransactionType[];
  currentVersion: IVersion;
  transactionTypesValues: ITransactionTypeValue[];

  constructor(private userStoriesService: UserStoriesService,
              private transactionTypesService: TransactionTypesService,
              private transactionTypesValuesService: TransactionTypeValuesService,
              private versionService: VersionsService,
              private activatedRouter: ActivatedRoute) { }


  ngOnInit() {
    this.userStoriesService
      .getAllData()
      .then((result: IUserStory[]) => {
        this.userStories = result;
      });

    this.transactionTypesService
      .getAllData()
      .then((result: ITransactionType[]) => {
        this.transcationTypes = result;
      });

    this.transactionTypesValuesService
      .getAllData()
      .then((result: ITransactionTypeValue[]) => {
        this.transactionTypesValues = result;
      });

    this.activatedRouter
      .params
      .subscribe(params => {
        this.versionService
          .getItem(params.verisonId)
          .then((result: IVersion) => {
            this.currentVersion = result;
          });
      });
  }


  ngAfterViewInit(): void {
    this.version.setValue(this.currentVersion.versionName);
  }

  get version() {
    return this.userStoriesFormGroup.controls.version;
  }

  get userStoryName() {
    return this.userStoriesFormGroup.controls.userStoryName;
  }

  get transactionType() {
    return this.userStoriesFormGroup.controls.transactionType;
  }

  get transactionCount() {
    return this.userStoriesFormGroup.controls.transactionCount;
  }

  addUserStory() {
    // calculate the current FP for the givin user story.
    const fp = this.getTheCurrentFpValue();

    // extract a savable object from the form.
    const userStory: IUserStory = {
      FP: fp,
      fK_ProcessId: this.currentVersion.fkProcessId,
      fK_VersionId: this.currentVersion.versionId,
      version: null,
      process: null,
      userStoryId: 0,
      userStoryName: this.userStoryName.value
    };

    // save the user story in the database.
    this.userStoriesService
    .postItem(userStory)
    .then((result) => {
      console.log(result);
      if (this.currentVersion.totalFp) {
        this.currentVersion.totalFp += fp;
      } else {
        this.currentVersion.totalFp = fp;
      }

      // update the current version FP in DB.
      this.versionService
      .putItem(this.currentVersion.versionId, this.currentVersion)
      .finally(() => {

        // update the current version image in the component.
        this.versionService
        .getItem(this.currentVersion.versionId)
        .then((version: IVersion) => {
          this.currentVersion = version;
        });
      });
    })
    .catch(err => {
      console.log(err.message);
    });

  }

  private getTheCurrentFpValue(): number {
    const currentTransactionValue: any
    = this.transactionTypesValues
    .filter(value => {
      // tslint:disable-next-line: no-unused-expression
      value.transactionTypeId === this.transactionType.value;
    });

    return currentTransactionValue.value * this.transactionCount.value;
  }

}
