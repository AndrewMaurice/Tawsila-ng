import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IProject, IRPAType, ICustomer } from 'src/models/api-interfaces';
import { MatPaginator } from '@angular/material/paginator';

import { ToastrService } from 'ngx-toastr';
import { successDeleteMessage, sucessHeader, successTimeOut,
  errorheader, errorTimeOut, successUpdateMessage, successAddMessage } from 'src/common/global-variables';
import { isNullOrUndefined } from 'util';
import { ProjectsService } from '../services/projects.service';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { RpaTypesService } from '../services/rpa-types.service';
import { CustomersService } from '../services/customers.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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

        this.toastrService
          .success(successDeleteMessage, sucessHeader, {
            timeOut: successTimeOut
          });
        this.apiDataService
            .getAllData()
            .then((result: IProject[]) => {
              this.dataSource = new MatTableDataSource(result);
              this.dataSource.paginator = this.paginator;
            });
      })
      .catch(error => {
        this.toastrService
          .error(error.message, errorheader, {
            timeOut: errorTimeOut
          });
      });
  }

  update(id: number, projectName: string) {

    // if (!this.isValidInput(projectName)) {
    //   this.toastrService
    //     .error('Cannot add an empty name', errorheader, {
    //       timeOut: errorTimeOut
    //     });
    // } else {
    //   const updatedAppType: IProject = {
    //     projectId: id,
    //     projectName
    //   };
    //   this.apiDataService
    //     .putItem(id, updatedAppType)
    //     .then(() => {
    //       // refresh the list.
    //       this.apiDataService
    //         .getAllData()
    //         .then((result: IProject[]) => {
    //           this.dataSource = new MatTableDataSource(result);
    //           this.dataSource.paginator = this.paginator;
    //         });
    //       this.toastrService
    //         .success(successUpdateMessage, sucessHeader, {
    //           timeOut: successTimeOut
    //         });
    //     })
    //     .catch(error => {
    //       this.toastrService
    //         .error(error.message, errorheader, {
    //           timeOut: errorTimeOut
    //         });
    //     });
    // }

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
