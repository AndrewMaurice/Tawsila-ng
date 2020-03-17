export interface Itechnology {
  technologyId: number;
  technologyName: string;
}

export interface IMonth {
  monthId: number;
  monthName: string;
}

export interface IFiscalYear {
  fiscalYearId: number;
  fiscalYearName: string;
  startDate: string;
  endDate: string;
}

export interface ICustomer {
  customerId: number;
  customerName: string;
}

export interface IApplicationType {
  applicationTypeId: number;
  applicationTypeName: string;
}


export interface IAttachmentType {
  attachmentId: number;
  attachmentTypeName: string;
}

export interface IAttachment {
  attachmentId: number;
  attachmentTypeId: number;
  attachmentType: IAttachmentType;
  versionID: number;
  version: IVersion;
}

export interface IVersion {
  versionId: number;
  versionName: string;
  fkProcessId: number;
  process: IProcess;
  lastVersion: boolean;
  sizingDate: string;
  monthId: number;
  month: IMonth;
  totalFp: number;
  fiscalYearId: number;
  fiscalYear: IFiscalYear;
  versionTypeId: number;
  versionType: IVersionType;
}

export interface IBusinessDomain {
  businessDomainId: number;
  businessDomainName: string;
}

export interface IProductivityAnalyst {
  productivityAnalystId: number;
  productivityAnalystName: string;
}

export interface IRPAType {
  rpaTypeId: number;
  rpaTypeName: string;
}

export interface ITargetSystem {
  targetSystemId: number;
  tagetSystemName: string;
}

export interface ITransactionType {
  transactionTypeId: number;
  transactionTypeName: string;
}

export interface ITransactionTypeValue {
  transactionTypeValueId: number;
  transactionTypeId: number;
  transactionTypeDTO: ITransactionType;
  value: number;
}


export interface IVersionType {
  versionTypeId: number;
  versionTypeName: string;
}

export interface IProcess {
  processId: number;
  processName: string;
  citrix: boolean;
  fKApplicationTypeId: number;
  fKapplicationType: IApplicationType;
  fKBusinessDomainId: number;
  fKBusinessDomain: IBusinessDomain;
  fKCustomerId: number;
  fKcustomer: ICustomer;
  fKProductivityAnalystId: number;
  fKproductivityAnalyst: IProductivityAnalyst;
  fKProjectId: number;
  fKproject: IProject;
  technologyId: number;
  technology: Itechnology;
  fkRpaTypeId: number;
  fKRpaType: IRPAType;
  targetSystemId: number;
  targetSystem: ITargetSystem;
  baseline: number;

}

export interface IUserStory {
  userStoryId: number;
  userStoryName: string;
  fkProcessId: number;
  process: IProcess;
  FP: number;
  fkVersionId: number;
  version: IVersion;
}

export interface IProject {
  projectId: number;
  projectName: string;
}


