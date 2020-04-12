import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IBusinessDomain } from 'src/models/api-interfaces';
import { MatPaginator } from '@angular/material/paginator';
import { ApplicationTypesService } from '../services/application-types.service';
import { ToastrService } from 'ngx-toastr';
import { successDeleteMessage, sucessHeader, successTimeOut,
  errorheader, errorTimeOut, successUpdateMessage, successAddMessage } from 'src/common/global-variables';
import { isNullOrUndefined } from 'util';
import { BusinessDomainsService } from '../services/business-domains.service';

@Component({
  selector: 'app-business-domain-datatable',
  templateUrl: './business-domain-datatable.component.html',
  styleUrls: ['./business-domain-datatable.component.css']
})
export class BusinessDomainDatatableComponent implements OnInit {

  @ViewChild('addNewBusinsessDomainName', null) addNewBusinessDomainName: ElementRef;

  displayedColumns: string[] = ['BusinessDomain', 'Action'];
  dataSource = new MatTableDataSource<IBusinessDomain>();
  @ViewChild(MatPaginator, null) paginator: MatPaginator;

  constructor(private apiDataService: BusinessDomainsService,
              private toastrService: ToastrService) { }

  ngOnInit() {
    this.apiDataService
      .getAllData()
      .then((result: IBusinessDomain[]) => {
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.paginator = this.paginator;

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

          // refresh the list.
        this.apiDataService
            .getAllData()
            .then((result: IBusinessDomain[]) => {
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

  update(id: number, businessDomainName: string) {

    if (!this.isValidInput(businessDomainName)) {
      this.toastrService
        .error('Cannot add an empty name', errorheader, {
          timeOut: errorTimeOut
        });
    } else {
      const updatedAppType: IBusinessDomain = {
        businessDomainId: id,
        businessDomainName
      };
      this.apiDataService
        .putItem(id, updatedAppType)
        .then(() => {
          // refresh the list.
          this.apiDataService
            .getAllData()
            .then((result: IBusinessDomain[]) => {
              this.dataSource = new MatTableDataSource(result);
              this.dataSource.paginator = this.paginator;
            });
          this.toastrService
            .success(successUpdateMessage, sucessHeader, {
              timeOut: successTimeOut
            });
        })
        .catch(error => {
          this.toastrService
            .error(error.message, errorheader, {
              timeOut: errorTimeOut
            });
        });
    }

  }

  add() {
    const businessDomainName = this.addNewBusinessDomainName.nativeElement.value;
    if (!this.isValidInput(businessDomainName)) {
      this.toastrService
        .error('Cannot add an empty name', errorheader, {
          timeOut: errorTimeOut
        });
    } else {
      const newAppType: IBusinessDomain = {
        businessDomainId: 0,
        businessDomainName
      };

      this.apiDataService
        .postItem(newAppType)
        .then(() => {
          // refresh the list.
          this.apiDataService
            .getAllData()
            .then((result: IBusinessDomain[]) => {
              this.dataSource = new MatTableDataSource(result);
              this.dataSource.paginator = this.paginator;
            });

          this.toastrService
            .success(successAddMessage, sucessHeader, {
              timeOut: successTimeOut
            });
        }).catch(error => {
          this.toastrService
            .error(error.message, errorheader, {
              timeOut: errorTimeOut
            });
        });
    }

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
