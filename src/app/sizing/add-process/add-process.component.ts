import { Component, OnInit, ViewChild } from '@angular/core';
import { ProcessesService } from '../services/processes.service';
import { CustomersService } from 'src/app/admin-panel/services/customers.service';
import { BusinessDomainsService } from 'src/app/admin-panel/services/business-domains.service';
import { ApplicationTypesService } from 'src/app/admin-panel/services/application-types.service';
import { ProjectsService } from 'src/app/admin-panel/services/projects.service';
import { ProductivityAnalystsService } from 'src/app/admin-panel/services/productivity-analysts.service';
import { TechnologiesService } from 'src/app/admin-panel/services/technologies.service';
import { RpaTypesService } from 'src/app/admin-panel/services/rpa-types.service';
import { TargetSystemsService } from 'src/app/admin-panel/services/target-systems.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// tslint:disable-next-line: max-line-length
import { ICustomer, IApplicationType, IBusinessDomain, IProductivityAnalyst, IProject, Itechnology, IRPAType, ITargetSystem, IFiscalYear, IMonth, IProcess, IBaseline } from 'src/models/api-interfaces';
import { Router } from '@angular/router';
import { BaselinesService } from '../services/baselines.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-add-process',
  templateUrl: './add-process.component.html',
  styleUrls: ['./add-process.component.css']
})
export class AddProcessComponent implements OnInit {

  addNewProcessFormGroup = new FormGroup({
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

  dataSource: MatTableDataSource<IProcess>;
  displayedColumns = ['ProcessName', 'Customer', 'Applicationtype',
    'businessDomain', 'productivityAnalyst', 'Project', 'technology', 'rpaType', 'targetSystem', 'baseline'];

  @ViewChild(MatPaginator, null) paginator: MatPaginator;

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
              private baslinesServcie: BaselinesService) { }

  ngOnInit() {

    this.processService
      .getAllData()
      .then((result: IProcess[]) => {
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.paginator = this.paginator;
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
    return this.addNewProcessFormGroup.controls.baseline;
  }

  get targetSystem() {
    return this.addNewProcessFormGroup.controls.targetSystem;
  }

  get RPA_Type() {
    return this.addNewProcessFormGroup.controls.RPA_Type;
  }

  get technology() {
    return this.addNewProcessFormGroup.controls.technology;
  }

  get project() {
    return this.addNewProcessFormGroup.controls.project;
  }

  get productivityAnalyst() {
    return this.addNewProcessFormGroup.controls.productivityAnalyst;
  }

  get businessDomain() {
    return this.addNewProcessFormGroup.controls.businessDomain;
  }

  get applicationType() {
    return this.addNewProcessFormGroup.controls.applicationType;
  }

  get citrix() {
    return this.addNewProcessFormGroup.controls.citrix;
  }



  get customer() {
    return this.addNewProcessFormGroup.controls.customer;
  }

  get processName() {
    return this.addNewProcessFormGroup.controls.processName;
  }

  addNewProcess() {
    const newProcess: IProcess = {
      processId: 0,
      processName: this.processName.value,
      citrix: this.citrix.value === '1' ? true : false,
      fKApplicationTypeId: this.applicationType.value,
      fKapplicationType: null,
      fKBusinessDomainId: this.businessDomain.value,
      fKBusinessDomain: null,
      fKCustomerId: this.customer.value,
      fKcustomer: null,
      fKProductivityAnalystId: this.productivityAnalyst.value,
      fKproductivityAnalyst: null,
      fKProjectId: this.project.value,
      fKproject: null,
      technologyId: this.technology.value,
      technology: null,
      fkRpaTypeId: this.RPA_Type.value,
      fKRpaType: null,
      targetSystemId: this.targetSystem.value,
      baselineId: this.baseline.value,
      baseline: null
    };

    this.processService
      .postItem(newProcess)
      .then((result: IProcess) => {
        console.log(result);
        this.router.navigate(['add-new-process-version', result.processId]);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        this.processService
          .getAllData()
          .then((result: IProcess[]) => {
            this.dataSource = new MatTableDataSource(result);
            this.dataSource.paginator = this.paginator;
          });
      });
  }

}
