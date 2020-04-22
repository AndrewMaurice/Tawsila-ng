import { Component, OnInit } from '@angular/core';
import { VersionsService } from '../services/versions.service';
import { UserStoriesService } from '../services/user-stories.service';
import { IVersion, IUserStory, ITransactionTypeValue, ITransactionType } from 'src/models/api-interfaces';
import { TransactionTypesService } from 'src/app/admin-panel/services/transaction-types.service';
import { TransactionTypeValuesService } from 'src/app/admin-panel/services/transaction-type-values.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { errorheader, errorTimeOut, successUpdateMessage, sucessHeader, successTimeOut } from 'src/common/global-variables';
import { ValueTransformer } from '@angular/compiler/src/util';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';

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
  inputs: ITransactionTypeValue[];
  outputs: ITransactionTypeValue[];
  enquiry: ITransactionTypeValue[];
  idgs: ITransactionTypeValue[];
  edgs: ITransactionTypeValue[];
  businessRules: ITransactionTypeValue[];

  updateUserStoryFormGroup = new FormGroup({
    versionName: new FormControl(),
    userStoryName: new FormControl('', [Validators.required]),
    fp: new FormControl(),
    it: new FormControl(),
    itCount: new FormControl('', Validators.pattern(/[0-9]/)),
    ia: new FormControl(),
    iaCount: new FormControl('', Validators.pattern(/[0-9]/)),
    oa: new FormControl(),
    ot: new FormControl(),
    otCount: new FormControl('', Validators.pattern(/[0-9]/)),
    oaCount: new FormControl('', Validators.pattern(/[0-9]/)),
    et: new FormControl(),
    etCount: new FormControl('', Validators.pattern(/[0-9]/)),
    br: new FormControl(),
    brCount: new FormControl('', Validators.pattern(/[0-9]/)),
    edg: new FormControl(),
    edgCount: new FormControl('', Validators.pattern(/[0-9]/)),
    idg: new FormControl(),
    idgCount: new FormControl('', Validators.pattern(/[0-9]/))
  });

  constructor(private userStoiresService: UserStoriesService,
              private versionsServcie: VersionsService,
              private transactionTypesServcie: TransactionTypesService,
              private transactionTypesValuesServcie: TransactionTypeValuesService,
              private snackBar: MatSnackBar,
              private router: Router) {}

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


      this.inputs = this.transactionTypeValues.filter(values => {
        if (values.transactionTypeId >= 1 && values.transactionTypeId <= 3) {
          return values;
        }
      });

      this.enquiry = this.transactionTypeValues.filter(values => {
        if (values.transactionTypeId >= 4 && values.transactionTypeId <= 6) {
          return values;
        }
      });

      this.outputs = this.transactionTypeValues.filter(Values => {
        if (Values.transactionTypeId >= 7 && Values.transactionTypeId <= 9 ) {
          return Values;
        }
      });

      this.businessRules = this.transactionTypeValues.filter(values => {
        if (values.transactionTypeId >= 10 && values.transactionTypeId <= 13) {
          return values;
        }
      });

      this.idgs = this.transactionTypeValues.filter(values => {
        if (values.transactionTypeId >= 14 && values.transactionTypeId <= 16) {
          return values;
        }
      });

      this.edgs = this.transactionTypeValues.filter(values => {
        if (values.transactionTypeId >= 17 && values.transactionTypeId <= 19) {
          return values;
        }
      });


    });

    // get the version and the userstory.
    this.currentVersion = history.state.currentVersion;
    this.currentUserStory = history.state.currentStory;

    // setting the default values for the form.
    this.fp.setValue(this.currentUserStory.fp);
    this.versionName.setValue(this.currentVersion.versionName);
    this.userStoryName.setValue(this.currentUserStory.userStoryName);
    this.iaCount.setValue(0);
    this.itCount.setValue(0);
    this.oaCount.setValue(0);
    this.otCount.setValue(0);
    this.etCount.setValue(0);
    this.brCount.setValue(0);
    this.idgCount.setValue(0);
    this.edgCount.setValue(0);
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

  get it() {
    return this.updateUserStoryFormGroup.controls.it;
  }

  get itCount() {
    return this.updateUserStoryFormGroup.controls.itCount;
  }

  get ia() {
    return this.updateUserStoryFormGroup.controls.ia;
  }

  get iaCount() {
    return this.updateUserStoryFormGroup.controls.iaCount;
  }

  get ot() {
    return this.updateUserStoryFormGroup.controls.ot;
  }

  get otCount() {
    return this.updateUserStoryFormGroup.controls.otCount;
  }

  get oa() {
    return this.updateUserStoryFormGroup.controls.oa;
  }

  get oaCount() {
    return this.updateUserStoryFormGroup.controls.oaCount;
  }

  get et() {
    return this.updateUserStoryFormGroup.controls.et;
  }

  get etCount() {
    return this.updateUserStoryFormGroup.controls.etCount;
  }

  get br() {
    return this.updateUserStoryFormGroup.controls.it;
  }

  get brCount() {
    return this.updateUserStoryFormGroup.controls.brCount;
  }

  get edg() {
    return this.updateUserStoryFormGroup.controls.edg;
  }

  get edgCount() {
    return this.updateUserStoryFormGroup.controls.edgCount;
  }

  get idg() {
    return this.updateUserStoryFormGroup.controls.idg;
  }

  get idgCount() {
    return this.updateUserStoryFormGroup.controls.idgCount;
  }

  updateUserStory() {

    this.currentVersion.totalFp -= this.fp.value;
    this.currentUserStory.fp = this.calculateTheFp();
    this.currentVersion.totalFp += this.currentUserStory.fp;

    this.userStoiresService
    .putItem(this.currentUserStory.userStoryId, this.currentUserStory)
    .catch(err => this.snackBar.open(err.message, errorheader, {duration: errorTimeOut}))
    .then(() => {
      this.versionsServcie
      .putItem(this.currentVersion.versionId, this.currentVersion)
      .catch(err => this.snackBar.open(err.message, errorheader, {duration: errorTimeOut}))
      .then(() => {
        this.snackBar
        .open(successUpdateMessage, sucessHeader, {
          duration: successTimeOut
        });
        // setting the default values for the form.
        this.fp.setValue(this.currentUserStory.fp);
        this.versionName.setValue(this.currentVersion.versionName);
        this.userStoryName.setValue(this.currentUserStory.userStoryName);
        this.iaCount.setValue(0);
        this.itCount.setValue(0);
        this.oaCount.setValue(0);
        this.otCount.setValue(0);
        this.etCount.setValue(0);
        this.brCount.setValue(0);
        this.idgCount.setValue(0);
        this.edgCount.setValue(0);
        this.router.navigate(['view-versions', this.currentVersion.versionId]);
      });
    });
  }

  private calculateTheFp(): number {
    let result = 0;

    const it = isNullOrUndefined(this.it.value) ? 0 : this.it.value;
    const ia = isNullOrUndefined(this.ia.value) ? 0 : this.ia.value;
    const ot = isNullOrUndefined(this.ot.value) ? 0 : this.ot.value;
    const oa = isNullOrUndefined(this.oa.value) ? 0 : this.oa.value;
    const et = isNullOrUndefined(this.et.value) ? 0 : this.et.value;
    const idg = isNullOrUndefined(this.idg.value) ? 0 : this.idg.value;
    const br = isNullOrUndefined(this.br.value) ? 0 : this.br.value;
    const edg = isNullOrUndefined(this.edg.value) ? 0 : this.edg.value;

    const itC = isNullOrUndefined(this.itCount) ? 0 : this.itCount.value;
    const iaC = isNullOrUndefined(this.iaCount) ? 0 : this.iaCount.value;
    const otC = isNullOrUndefined(this.otCount) ? 0 : this.otCount.value;
    const oaC = isNullOrUndefined(this.oaCount) ? 0 : this.oaCount.value;
    const etC = isNullOrUndefined(this.etCount) ? 0 : this.etCount.value;
    const brC = isNullOrUndefined(this.brCount) ? 0 : this.brCount.value;
    const idgC = isNullOrUndefined(this.idgCount) ? 0 : this.idgCount.value;
    const edgC = isNullOrUndefined(this.edgCount) ? 0 : this.edgCount.value;


    result = (it * itC) + (ia * iaC)
    + (ot * otC) + (oa * oaC)
    + (et * etC) + (br * brC)
    + (idg * idgC) + (edg * edgC);

    console.log(result);

    return result;
  }


  navigateToVersionDetails() {
    this.router.navigate(['view-versions', this.currentVersion.versionId]);
  }
}
