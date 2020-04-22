import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IBaseline, ICustomer, IApplicationType, IBusinessDomain, IProductivityAnalyst, IProject, Itechnology, IRPAType, ITargetSystem, IProcess } from 'src/models/api-interfaces';
import { ProcessesService } from 'src/app/sizing/services/processes.service';
import { CustomersService } from '../services/customers.service';
import { ApplicationTypesService } from '../services/application-types.service';
import { BusinessDomainsService } from '../services/business-domains.service';
import { ProductivityAnalystsService } from '../services/productivity-analysts.service';
import { ProjectsService } from '../services/projects.service';
import { TechnologiesService } from '../services/technologies.service';
import { RpaTypesService } from '../services/rpa-types.service';
import { TargetSystemsService } from '../services/target-systems.service';
import { BaselinesService } from 'src/app/sizing/services/baselines.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { errorheader, errorTimeOut, successUpdateMessage, sucessHeader, successTimeOut } from 'src/common/global-variables';

@Component({
  selector: 'app-edit-process',
  templateUrl: './edit-process.component.html',
  styleUrls: ['./edit-process.component.css']
})
export class EditProcessComponent implements OnInit {
  updateProcessFormGroup = new FormGroup({
    customer: new FormControl('', [Validators.required]),
    processName: new FormControl('', [Validators.required]),
    citrix: new FormControl('', [Validators.required]),
    applicationType: new FormControl('', [Validators.required]),
    businessDomain: new FormControl('', [Validators.required]),
    productivityAnalyst: new FormControl('', [Validators.required]),
    project: new FormControl('', [Validators.required]),
    technology: new FormControl('', [Validators.required]),
    RPA_Type: new FormControl('', [Validators.required]),
    targetSystem: new FormControl('', [Validators.required]),
    baseline: new FormControl('', [Validators.required]),
  });

  baselines: IBaseline[];
  customers: ICustomer[];
  applicationTypes: IApplicationType[];
  businessDomains: IBusinessDomain[];
  productivityAnalysts: IProductivityAnalyst[];
  projects: IProject[];
  technologies: Itechnology[];
  rpaTypes: IRPAType[];
  targetSystems: ITargetSystem[];
  currentProcess: IProcess;

  constructor(private processService: ProcessesService,
              private customerService: CustomersService,
              private applicationTypesService: ApplicationTypesService,
              private businessDomainsService: BusinessDomainsService,
              private productivityAnalystsService: ProductivityAnalystsService,
              private projectsServices: ProjectsService,
              private technologyService: TechnologiesService,
              private rpaTypeServices: RpaTypesService,
              private targetSystemService: TargetSystemsService,
              private router: Router,
              private baslinesServcie: BaselinesService,
              private activatedRoute: ActivatedRoute,
              private snackbar: MatSnackBar) { }

  ngOnInit() {

    this.activatedRoute
      .params
      .subscribe(params => {
        this.processService
          .getItem(params.proccessId)
          .then((result: IProcess) => {
            this.currentProcess = result;
            // initializing the form.
            this.processName.setValue(this.currentProcess.processName);
            this.baseline.setValue(this.currentProcess.baseline.baselineProdFp);
            this.RPA_Type.setValue(this.currentProcess.fkRpaTypeId);
            this.targetSystem.setValue(this.currentProcess.targetSystemId);
            this.technology.setValue(this.currentProcess.technologyId);
            this.applicationType.setValue(this.currentProcess.fkApplicationTypeId);
            this.businessDomain.setValue(this.currentProcess.fkBusinessDomainId);
            this.customer.setValue(this.currentProcess.fkCustomerId);
            this.project.setValue(this.currentProcess.fkProjectId);
            this.productivityAnalyst.setValue(this.currentProcess.fkProductivityAnalystId);
            this.citrix.setValue(this.currentProcess.citrix || false);

          });
      });

    this.customerService
      .getAllData()
      .then((result: ICustomer[]) => {
        this.customers = result;
      });

    this.applicationTypesService
      .getAllData()
      .then((result: IApplicationType[]) => {
        this.applicationTypes = result;
      });

    this.businessDomainsService
      .getAllData()
      .then((result: IBusinessDomain[]) => {
        this.businessDomains = result;
      });

    this.productivityAnalystsService
      .getAllData()
      .then((result: IProductivityAnalyst[]) => {
        this.productivityAnalysts = result;
      });

    this.projectsServices
      .getAllData()
      .then((result: IProject[]) => {
        this.projects = result;
      });

    this.technologyService
      .getAllData()
      .then((result: Itechnology[]) => {
        this.technologies = result;
      });

    this.rpaTypeServices
      .getAllData()
      .then((result: IRPAType[]) => {
        this.rpaTypes = result;
      });

    this.targetSystemService
      .getAllData()
      .then((result: ITargetSystem[]) => {
        this.targetSystems = result;
      });

    this.baslinesServcie
      .getAllData()
      .then((result: IBaseline[]) => {
        this.baselines = result;
      });


  }

  get baseline() {
    return this.updateProcessFormGroup.controls.baseline;
  }

  get targetSystem() {
    return this.updateProcessFormGroup.controls.targetSystem;
  }

  get RPA_Type() {
    return this.updateProcessFormGroup.controls.RPA_Type;
  }

  get technology() {
    return this.updateProcessFormGroup.controls.technology;
  }

  get project() {
    return this.updateProcessFormGroup.controls.project;
  }

  get productivityAnalyst() {
    return this.updateProcessFormGroup.controls.productivityAnalyst;
  }

  get businessDomain() {
    return this.updateProcessFormGroup.controls.businessDomain;
  }

  get applicationType() {
    return this.updateProcessFormGroup.controls.applicationType;
  }

  get citrix() {
    return this.updateProcessFormGroup.controls.citrix;
  }

  get customer() {
    return this.updateProcessFormGroup.controls.customer;
  }

  get processName() {
    return this.updateProcessFormGroup.controls.processName;
  }

  updateProcess() {
    const newProcess: IProcess = {
      processId: this.currentProcess.processId,
      processName: this.processName.value,
      citrix: this.citrix.value === '1' ? true : false,
      fkApplicationTypeId: this.applicationType.value,
      fkapplicationType: null,
      fkBusinessDomainId: this.businessDomain.value,
      fkBusinessDomain: null,
      fkCustomerId: this.customer.value,
      fkcustomer: null,
      fkProductivityAnalystId: this.productivityAnalyst.value,
      fkproductivityAnalyst: null,
      fkProjectId: this.project.value,
      fkproject: null,
      technologyId: this.technology.value,
      technology: null,
      fkRpaTypeId: this.RPA_Type.value,
      fkRpaType: null,
      targetSystemId: this.targetSystem.value,
      baselineId: this.baseline.value,
      baseline: null
    };

    this.processService
      .putItem(this.currentProcess.processId, newProcess)
      .then(() => {
        this.snackbar.open(successUpdateMessage, sucessHeader, {
          duration: successTimeOut
        });
        this.router.navigate(['admin-panel']);
      })
      .catch(error => {
        this.snackbar.open(error.message, errorheader, {
          duration: errorTimeOut
        });
      });
  }


}
