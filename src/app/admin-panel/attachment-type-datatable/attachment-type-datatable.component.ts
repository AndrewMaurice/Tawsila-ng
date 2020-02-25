import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IAttachmentType } from 'src/models/api-interfaces';
import { MatPaginator } from '@angular/material/paginator';
import { ApplicationTypesService } from '../services/application-types.service';
import { ToastrService } from 'ngx-toastr';
import { successDeleteMessage, sucessHeader, successTimeOut,
  errorheader, errorTimeOut, successUpdateMessage, successAddMessage } from 'src/common/global-variables';
import { isNullOrUndefined } from 'util';
import { AttachmentTypesService } from '../services/attachment-types.service';

@Component({
  selector: 'app-attachment-type-datatable',
  templateUrl: './attachment-type-datatable.component.html',
  styleUrls: ['./attachment-type-datatable.component.css']
})
export class AttachmentTypeDatatableComponent implements OnInit {

  @ViewChild('addNewAttachmentTypeName', null) addNewAttachmentTypeName: ElementRef;

  displayedColumns: string[] = ['AttachmentType', 'Action'];
  dataSource = new MatTableDataSource<IAttachmentType>();
  @ViewChild(MatPaginator, null) paginator: MatPaginator;

  constructor(private attachmentTypesService: AttachmentTypesService,
              private toastrService: ToastrService) { }

  ngOnInit() {
    this.attachmentTypesService
      .getAllData()
      .then((result: IAttachmentType[]) => {
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.paginator = this.paginator;
      });
  }

  delete(id: number) {
    this.attachmentTypesService
      .deleteItem(id)
      .then(() => {

        this.toastrService
          .success(successDeleteMessage, sucessHeader, {
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

  update(id: number, attachmentTypeName: string) {

    if (this.isValidInput(attachmentTypeName)) {
      this.toastrService
        .error('Cannot add an empty name', errorheader, {
          timeOut: errorTimeOut
        });
    } else {
      const updatedAppType: IAttachmentType = {
        attachmentID: id,
        attachmentTypeName
      };
      this.attachmentTypesService
        .putItem(id, updatedAppType)
        .then(() => {
          // refresh the list.
          this.attachmentTypesService
            .getAllData()
            .then((result: IAttachmentType[]) => {
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
    const attachmentTypeName = this.addNewAttachmentTypeName.nativeElement.value;
    if (this.isValidInput(attachmentTypeName)) {
      this.toastrService
        .error('Cannot add an empty name', errorheader, {
          timeOut: errorTimeOut
        });
    } else {
      const newAppType: IAttachmentType = {
        attachmentID: 0,
        attachmentTypeName
      };

      this.attachmentTypesService
        .postItem(newAppType)
        .then(() => {
          // refresh the list.
          this.attachmentTypesService
            .getAllData()
            .then((result: IAttachmentType[]) => {
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
