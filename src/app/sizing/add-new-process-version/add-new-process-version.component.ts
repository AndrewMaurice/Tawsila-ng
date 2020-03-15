import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VersionsService } from '../services/versions.service';
import { ProcessesService } from '../services/processes.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IProcess, IVersion } from 'src/models/api-interfaces';

@Component({
  selector: 'app-add-new-process-version',
  templateUrl: './add-new-process-version.component.html',
  styleUrls: ['./add-new-process-version.component.css']
})
export class AddNewProcessVersionComponent implements OnInit, AfterViewInit {

  addNewVersionFormGroup = new FormGroup({
    versionName: new FormControl('', [Validators.required]),
    processName: new FormControl('')
  });

  currentProcess: IProcess;

  constructor(private activatedRoute: ActivatedRoute,
              private versionsService: VersionsService,
              private processService: ProcessesService) { }

  ngOnInit() {

    this.activatedRoute
    .params
    .subscribe(params => {
      this.processService
      .getItem(params.processId)
      .then((result: IProcess) => {
        this.currentProcess = result;
      });
    });


  }

  ngAfterViewInit() {
    this.addNewVersionFormGroup
    .controls
    .processName
    .setValue(this.currentProcess.processName);
  }


  get processName() {
    return this.addNewVersionFormGroup.controls.processName;
  }

  get versionName() {
    return this.addNewVersionFormGroup.controls.versionName;
  }

  addNewVersion() {
    const version: IVersion = {
      versionId: 0,
      versionName: this.versionName.value,
      fkProcessId: this.currentProcess.processId,
      process: null,
      lastVersion: true
    };

    this.processService
    .postItem(version)
    .then(() => {

    })
    .catch(error => {

    });
  }

}
