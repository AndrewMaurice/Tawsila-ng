import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { RouterModule } from '@angular/router';
import { adminPanelRoutes } from './admin-panel.routes';
import { LookupsTabsComponent } from './lookups-tabs/lookups-tabs.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ApplicationTypeDatatableComponent } from './application-type-datatable/application-type-datatable.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApplicationTypesService } from './services/application-types.service';
import { AttachmentTypeDatatableComponent } from './attachment-type-datatable/attachment-type-datatable.component';
import { BusinessDomainDatatableComponent } from './business-domain-datatable/business-domain-datatable.component';
import { CustomersDatatableComponent } from './customers-datatable/customers-datatable.component';
import { ProductivityAnalystsDatatableComponent } from './productivity-analysts-datatable/productivity-analysts-datatable.component';

import { RpaTypesDatatableComponent } from './rpa-types-datatable/rpa-types-datatable.component';
import { TargetSystemDatatableComponent } from './target-system-datatable/target-system-datatable.component';
import { TechnologyDatatableComponent } from './technology-datatable/technology-datatable.component';
import { TransactionTypeDatatableComponent } from './transaction-type-datatable/transaction-type-datatable.component';
import { TransactionTypeValueDatatableComponent } from './transaction-type-value-datatable/transaction-type-value-datatable.component';
import { FiscalYearsDatatableComponent } from './fiscal-years-datatable/fiscal-years-datatable.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AddProcessComponent } from './add-process/add-process.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { EditProcessComponent } from './edit-process/edit-process.component';
import { BaselineDatatabbleComponent } from './baseline-datatabble/baseline-datatabble.component';

@NgModule({
  declarations: [AdminPanelComponent, LookupsTabsComponent,
    ApplicationTypeDatatableComponent, AttachmentTypeDatatableComponent,
    BusinessDomainDatatableComponent, CustomersDatatableComponent,
    ProductivityAnalystsDatatableComponent,
    RpaTypesDatatableComponent, TargetSystemDatatableComponent, TechnologyDatatableComponent,
    TransactionTypeDatatableComponent, TransactionTypeValueDatatableComponent,
    FiscalYearsDatatableComponent, AddProcessComponent, EditProcessComponent, BaselineDatatabbleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(adminPanelRoutes),
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    NgbModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [ApplicationTypesService]
})
export class AdminPanelModule { }
