import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VersionsService } from '../services/versions.service';
import { ProcessesService } from '../services/processes.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IProcess, IVersion, IFiscalYear, IMonth, IVersionType } from 'src/models/api-interfaces';
import { FiscalYearsService } from 'src/app/admin-panel/services/fiscal-years.service';
import { MonthsService } from '../services/months.service';
import { VersionTypesService } from '../services/version-types.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-add-new-process-version',
  templateUrl: './add-new-process-version.component.html',
  styleUrls: ['./add-new-process-version.component.css']
})
export class AddNewProcessVersionComponent implements OnInit {

  addNewVersionFormGroup = new FormGroup({
    versionName: new FormControl('', [Validators.required]),
    processName: new FormControl(''),
    fiscalYear: new FormControl('', [Validators.required]),
    totalFp: new FormControl(),
    sizingDate: new FormControl('', [Validators.required]),
    month: new FormControl('', [Validators.required]),
    versionType: new FormControl('', [Validators.required]),
  });

  currentProcess: IProcess;
  fiscalYears: IFiscalYear[];
  months: IMonth[];
  versionTypes: IVersionType[];

  constructor(private activatedRoute: ActivatedRoute,
              private versionsService: VersionsService,
              private processService: ProcessesService,
              private fiscalYearService: FiscalYearsService,
              private monthsService: MonthsService,
              private versionTypesService: VersionTypesService,
              private router: Router) { }

  ngOnInit() {

    this.activatedRoute
    .params
    .subscribe(params => {
      this.processService
      .getItem(params.processId)
      .then((result: IProcess) => {
        this.currentProcess = result;
        console.log(result);
        this.addNewVersionFormGroup
        .controls
        .processName
        .setValue(this.currentProcess.processName);
      });
    });

    this.fiscalYearService
    .getAllData()
    .then((result: IFiscalYear[]) => {
      this.fiscalYears = result;
    });

    this.monthsService
    .getAllData()
    .then((result: IMonth[]) => {
      this.months = result;
    });

    this.versionTypesService
    .getAllData()
    .then((result: IVersionType[]) => {
      this.versionTypes = result;
    });


  }



  get processName() {
    return this.addNewVersionFormGroup.controls.processName;
  }

  get versionName() {
    return this.addNewVersionFormGroup.controls.versionName;
  }

  get fiscalYear() {
    return this.addNewVersionFormGroup.controls.fiscalYear;
  }

  get totalFp() {
    return this.addNewVersionFormGroup.controls.totalFp;
  }

  get versionType() {
    return this.addNewVersionFormGroup.controls.versionType;
  }

  get month() {
    return this.addNewVersionFormGroup.controls.month;
  }

  get sizingDate() {
    return this.addNewVersionFormGroup.controls.sizingDate;
  }

  addNewVersion() {
    const version: IVersion = {
      versionId: 0,
      versionName: this.versionName.value,
      fkProcessId: this.currentProcess.processId,
      process: null,
      sizingDate: this.sizingDate.value,
      lastVersion: true,
      monthId: this.month.value,
      month: null,
      totalFp: 0,
      fiscalYear: null,
      fiscalYearId: this.fiscalYear.value,
      versionTypeId: this.versionType.value,
      versionType: null
    };

    this.versionsService
    .postItem(version)
    .then((result: IVersion) => {
      // navigate to the sizing pag with the ID.
      this.router.navigate(['sizing', result.versionId]);
    })
    .catch(error => {
      console.log(error.message);
    });
  }

}