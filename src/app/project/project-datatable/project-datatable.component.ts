import { Component, OnInit, ViewChild } from '@angular/core';import { ICustomer, IRPAType, IProject } from 'src/models/api-interfaces';import { FormGroup, FormControl, Validators } from '@angular/forms';import { MatTableDataSource } from '@angular/material/table';import { MatPaginator } from '@angular/material/paginator';import { ProjectsService } from 'src/app/admin-panel/services/projects.service';import { ToastrService } from 'ngx-toastr';import { RpaTypesService } from 'src/app/admin-panel/services/rpa-types.service';import { CustomersService } from 'src/app/admin-panel/services/customers.service';import { MatSnackBar } from '@angular/material/snack-bar';import { successDeleteMessage, sucessHeader, successTimeOut, errorheader, errorTimeOut, successUpdateMessage, successAddMessage } from 'src/common/global-variables';import { isNullOrUndefined } from 'util';


@Component({
  selector: 'app-project-datatable',
  templateUrl: './project-datatable.component.html',
  styleUrls: ['./project-datatable.component.css']
})
export class ProjectDatatableComponent implements OnInit {


  customers: ICustomer[];
  rpaTypes: IRPAType[];

  addNewProjectFormGroup = new FormGroup({
    projectName: new FormControl('', [Validators.required]),
    rpaType: new FormControl('', [Validators.required]),
    customer: new FormControl('', [Validators.required])
  });

  get projectName() {
    return this.addNewProjectFormGroup.controls.projectName;
  }

  get rpaType() {
    return this.addNewProjectFormGroup.controls.rpaType;
  }

  get customer() {
    return this.addNewProjectFormGroup.controls.customer;
  }

  displayedColumns: string[] = ['Name', 'RpaTye', 'Customer', 'Action'];
  dataSource = new MatTableDataSource<IProject>();
  @ViewChild(MatPaginator, null) paginator: MatPaginator;

  constructor(private apiDataService: ProjectsService,
              private toastrService: ToastrService,
              private rpaTypesServcie: RpaTypesService,
              private customersServcie: CustomersService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.apiDataService
      .getAllData()
      .then((result: IProject[]) => {
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.paginator = this.paginator;
      });

    this.customersServcie
    .getAllData()
    .then((result: ICustomer[]) => {
      this.customers = result;
    });

    this.rpaTypesServcie
    .getAllData()
    .then((result: IRPAType[]) => {
      this.rpaTypes = result;
    });


  }

  delete(id: number) {
    this.apiDataService
      .deleteItem(id)
      .then(() => {

        this.snackBar.open(successDeleteMessage, sucessHeader, {
          duration: successTimeOut
        });

        this.apiDataService
            .getAllData()
            .then((result: IProject[]) => {
              this.dataSource = new MatTableDataSource(result);
              this.dataSource.paginator = this.paginator;
            });
      })
      .catch(error => {
        this.snackBar
        .open(error.message, errorheader, {
          duration: errorTimeOut
        });
      });
  }

  update(id: number, projectName: string, deliveryLine: number, customer: number) {

    const project: IProject = {
      projectId: id,
      customerId: customer,
      rpaTypeId: deliveryLine,
      rpaType: null,
      customer: null,
      projectName
    };

    this.apiDataService
    .putItem(id, project)
    .then(() => {
      this.snackBar
      .open(successUpdateMessage, sucessHeader, {
        duration: successTimeOut
      });
    })
    .catch(err => {
      this.snackBar
      .open(err.message, errorheader, {
        duration: errorTimeOut
      });
    });

  }

  add() {
    const newProject: IProject = {
      projectId: 0,
      projectName: this.projectName.value,
      customer: null,
      rpaType: null,
      customerId: this.customer.value,
      rpaTypeId: this.rpaType.value
    };

    this.apiDataService
    .postItem(newProject)
    .then(() => {

      this.snackBar.open(successAddMessage, sucessHeader, {
        duration: successTimeOut
      });

      // on success refresh the table.
      this.apiDataService
      .getAllData()
      .then((result: IProject[]) => {
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.paginator = this.paginator;
      });
    })
    .catch(err => {
      this.snackBar
      .open(err.message, errorheader, {
        duration: errorTimeOut
      });
    });

  }

  // tslint:disable-next-line: ban-types
  private isValidInput(value: string): Boolean {
    if (isNullOrUndefined(value)) {
      return false;
    } else {
      return true;
    }
  }

}
