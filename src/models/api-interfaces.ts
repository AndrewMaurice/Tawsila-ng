export interface Itechnology {
  technologyID: number;
  technologyName: string;
}

export interface IMonth {
  monthId: number;
  monthName: string;
}

export interface IFiscalYear {
  fiscalYearID: number;
  fiscalYearName: string;
  startDate: string;
  endDate: string;
}

export interface ICustomer {
  customerID: number;
  customerName: string;
}

export interface IApplicationType {
  applicationTypeID: number;
  applicationTypeName: string;
}


export interface IAttachmentType {
  attachmentID: number;
  attachmentTypeName: string;
}

export interface IAttachment {
  attachmentID: number;
  attachmentTypeID: number;
  attachmentType: IAttachmentType;
  versionID: number;
  version: IVersion;
}

export interface IVersion {
  versionID: number;
  versionName: string;
  fk_ProcessID: number;
  process: IProcess;
  lastVersion: boolean;
}

export interface IBusinessDomain {
  businessDomainID: number;
  businessDomainName: string;
}

export interface IProductivityAnalyst {
  productivityAnalystID: number;
  productivityAnalystName: string;
}

export interface IRPAType {
  RPA_TypeID: number;
  RPA_TypeName: string;
}

export interface ITargetSystem {
  targetSystemID: number;
  targetSystemName: string;
}

export interface ITransactionType {
  transactionTypeID: number;
  transactionTypeName: string;
}

export interface ITransactionTypeValue {
  transactionTypeValueID: number;
  transactionTypeID: number;
  transactionType: ITransactionType;
  value: number;
}

export interface IProcess {
  processID: number;
  processName: string;
  sizingDate: string;
  monthID: number;
  month: IMonth;
  totalFP: number;
  citrix: boolean;
  fK_ApplicationTypeID: number;
  applicationType: IApplicationType;
  fK_BusinessDomainID: number;
  businessDomain: IBusinessDomain;
  fK_CustomerID: number;
  customer: ICustomer;
  fK_ProductivityAnalystID: number;
  productivityAnalyst: IProductivityAnalyst;
  fK_ProjectID: number;
  project: IProject;
  technologyID: number;
  technology: Itechnology;
  fK_RPA_TypeID: number;
  RPA_Type: IRPAType;
  targetSystemID: number;
  targetSystem: ITargetSystem;
  baseline: number;
  fiscalYearID: number;
  fiscalYear: IFiscalYear;
}

export interface IUserStory {
  userStoryID: number;
  userStoryName: string;
  fK_ProcessID: number;
  process: IProcess;
  FP: number;
  fK_VersionID: number;
  version: IVersion;
}

export interface IProject {
  projectID: number;
  projectName: string;
}


