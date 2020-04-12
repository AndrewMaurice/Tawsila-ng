import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserStoriesService } from '../services/user-stories.service';
import { TransactionTypesService } from 'src/app/admin-panel/services/transaction-types.service';
import { TransactionTypeValuesService } from 'src/app/admin-panel/services/transaction-type-values.service';
import { IUserStory, ITransactionType, IVersion, ITransactionTypeValue } from 'src/models/api-interfaces';
import { VersionsService } from '../services/versions.service';
import { ActivatedRoute } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { errorheader, errorTimeOut, successAddMessage, sucessHeader, successTimeOut } from 'src/common/global-variables';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sizing',
  templateUrl: './sizing.component.html',
  styleUrls: ['./sizing.component.css']
})
export class SizingComponent implements OnInit, AfterViewInit {
  inputs: ITransactionTypeValue[];
  outputs: ITransactionTypeValue[];
  enquiry: ITransactionTypeValue[];
  idgs: ITransactionTypeValue[];
  edgs: ITransactionTypeValue[];
  businessRules: ITransactionTypeValue[];

  userStoriesFormGroup = new FormGroup({
    version: new FormControl(),
    userStoryName: new FormControl('', [Validators.required]),
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

  userStories: IUserStory[];
  transcationTypes: ITransactionType[];
  currentVersion: IVersion;
  transactionTypeValues: ITransactionTypeValue[];

  constructor(private userStoriesService: UserStoriesService,
              private transactionTypesService: TransactionTypesService,
              private transactionTypesValuesService: TransactionTypeValuesService,
              private versionService: VersionsService,
              private activatedRouter: ActivatedRoute,
              private snackbar: MatSnackBar) { }


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
          if (Values.transactionTypeId >= 7 && Values.transactionTypeId <= 9) {
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

    this.activatedRouter
      .params
      .subscribe(params => {
        this.versionService
          .getItem(params.versionId)
          .then((result: IVersion) => {
            this.currentVersion = result;
            this.version.setValue(this.currentVersion.versionName);
          });
      });


  }


  ngAfterViewInit(): void {

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
      fp,
      fkProcessId: this.currentVersion.fkProcessId,
      fkVersionId: this.currentVersion.versionId,
      version: null,
      process: null,
      userStoryId: 0,
      userStoryName: this.userStoryName.value
    };


    // save the user story in the database.
    this.userStoriesService
    .postItem(userStory)
    .then((result) => {
      if (!isNullOrUndefined(this.currentVersion.totalFp)) {
        this.currentVersion.totalFp += fp;
      } else {
        this.currentVersion.totalFp = fp;
      }

      // update the current version FP in DB.
      this.versionService
      .putItem(this.currentVersion.versionId, this.currentVersion)
      .then(() => {
        this.snackbar.open(successAddMessage, sucessHeader, {duration: successTimeOut});
      })
      .catch((err) => {
        this.snackbar.open(err.message, errorheader, {duration: errorTimeOut});
      })
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
      this.snackbar.open(err.message, errorheader, {duration: errorTimeOut});
    });

    this.userStoriesFormGroup.reset();
    this.version.setValue(this.currentVersion.versionName);

  }



  get it() {
    return this.userStoriesFormGroup.controls.it;
  }

  get itCount() {
    return this.userStoriesFormGroup.controls.itCount;
  }

  get ia() {
    return this.userStoriesFormGroup.controls.ia;
  }

  get iaCount() {
    return this.userStoriesFormGroup.controls.iaCount;
  }

  get ot() {
    return this.userStoriesFormGroup.controls.ot;
  }

  get otCount() {
    return this.userStoriesFormGroup.controls.otCount;
  }

  get oa() {
    return this.userStoriesFormGroup.controls.oa;
  }

  get oaCount() {
    return this.userStoriesFormGroup.controls.oaCount;
  }

  get et() {
    return this.userStoriesFormGroup.controls.et;
  }

  get etCount() {
    return this.userStoriesFormGroup.controls.etCount;
  }

  get br() {
    return this.userStoriesFormGroup.controls.it;
  }

  get brCount() {
    return this.userStoriesFormGroup.controls.brCount;
  }

  get edg() {
    return this.userStoriesFormGroup.controls.edg;
  }

  get edgCount() {
    return this.userStoriesFormGroup.controls.edgCount;
  }

  get idg() {
    return this.userStoriesFormGroup.controls.idg;
  }

  get idgCount() {
    return this.userStoriesFormGroup.controls.idgCount;
  }

  private getTheCurrentFpValue() {

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


}
