/* Options:
Date: 2023-03-05 09:08:49
Version: 6.61
Tip: To override a DTO option, remove "//" prefix before updating
BaseUrl: https://localhost:5001

//GlobalNamespace: 
//MakePropertiesOptional: False
//AddServiceStackTypes: True
//AddResponseStatus: False
//AddImplicitVersion: 
//AddDescriptionAsComments: True
//IncludeTypes: 
//ExcludeTypes: 
//DefaultImports: 
*/


export interface IReturn<T>
{
    createResponse(): T;
}

export interface IReturnVoid
{
    createResponse(): void;
}

export interface IHasSessionId
{
    sessionId: string;
}

export interface IHasBearerToken
{
    bearerToken: string;
}

export interface ICreateDb<Table>
{
}

export interface IPatchDb<Table>
{
}

export interface IGet
{
}

export interface IPost
{
}

export interface IPut
{
}

export interface IPatch
{
}

export interface IDelete
{
}

export interface IUpdateDb<Table>
{
}

export interface IDeleteDb<Table>
{
}

export enum JobApplicationStatus
{
    Applied = 'Applied',
    PhoneScreening = 'PhoneScreening',
    PhoneScreeningCompleted = 'PhoneScreeningCompleted',
    Interview = 'Interview',
    InterviewCompleted = 'InterviewCompleted',
    Offer = 'Offer',
    Disqualified = 'Disqualified',
}

// @DataContract
export class AuditBase
{
    // @DataMember(Order=1)
    public createdDate: string;

    // @DataMember(Order=2)
    // @Required()
    public createdBy: string;

    // @DataMember(Order=3)
    public modifiedDate: string;

    // @DataMember(Order=4)
    // @Required()
    public modifiedBy: string;

    // @DataMember(Order=5)
    public deletedDate?: string;

    // @DataMember(Order=6)
    public deletedBy: string;

    public constructor(init?: Partial<AuditBase>) { (Object as any).assign(this, init); }
}

export enum Department
{
    None = 'None',
    Marketing = 'Marketing',
    Accounts = 'Accounts',
    Legal = 'Legal',
    HumanResources = 'HumanResources',
}

export class AppUser
{
    public id: number;
    public displayName: string;
    public email: string;
    public profileUrl: string;
    public department: Department;
    public title: string;
    public jobArea: string;
    public location: string;
    public salary: number;
    public about: string;
    public isArchived: boolean;
    public archivedDate?: string;
    public lastLoginDate?: string;
    public lastLoginIp: string;
    public userName: string;
    public primaryEmail: string;
    public firstName: string;
    public lastName: string;
    public company: string;
    public country: string;
    public phoneNumber: string;
    public birthDate?: string;
    public birthDateRaw: string;
    public address: string;
    public address2: string;
    public city: string;
    public state: string;
    public culture: string;
    public fullName: string;
    public gender: string;
    public language: string;
    public mailAddress: string;
    public nickname: string;
    public postalCode: string;
    public timeZone: string;
    public salt: string;
    public passwordHash: string;
    public digestHa1Hash: string;
    public roles: string[];
    public permissions: string[];
    public createdDate: string;
    public modifiedDate: string;
    public invalidLoginAttempts: number;
    public lastLoginAttempt?: string;
    public lockedDate?: string;
    public recoveryToken: string;
    public refId?: number;
    public refIdStr: string;
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<AppUser>) { (Object as any).assign(this, init); }
}

export class PhoneScreen extends AuditBase
{
    public id: number;
    // @References("typeof(TalentBlazor.ServiceModel.AppUser)")
    public appUserId: number;

    public appUser: AppUser;
    // @References("typeof(TalentBlazor.ServiceModel.JobApplication)")
    public jobApplicationId: number;

    public applicationStatus?: JobApplicationStatus;
    public notes: string;

    public constructor(init?: Partial<PhoneScreen>) { super(init); (Object as any).assign(this, init); }
}

export class Interview extends AuditBase
{
    public id: number;
    public bookingTime: string;
    // @References("typeof(TalentBlazor.ServiceModel.JobApplication)")
    public jobApplicationId: number;

    // @References("typeof(TalentBlazor.ServiceModel.AppUser)")
    public appUserId: number;

    public appUser: AppUser;
    public applicationStatus?: JobApplicationStatus;
    public notes: string;

    public constructor(init?: Partial<Interview>) { super(init); (Object as any).assign(this, init); }
}

export class JobOffer extends AuditBase
{
    public id: number;
    public salaryOffer: number;
    // @References("typeof(TalentBlazor.ServiceModel.JobApplication)")
    public jobApplicationId: number;

    // @References("typeof(TalentBlazor.ServiceModel.AppUser)")
    public appUserId: number;

    public appUser: AppUser;
    public notes: string;

    public constructor(init?: Partial<JobOffer>) { super(init); (Object as any).assign(this, init); }
}

export enum Colors
{
    Transparent = 'Transparent',
    Red = 'Red',
    Green = 'Green',
    Blue = 'Blue',
}

export class Attachment
{
    public fileName: string;
    public filePath: string;
    public contentType: string;
    public contentLength: number;

    public constructor(init?: Partial<Attachment>) { (Object as any).assign(this, init); }
}

export class KeyValuePair<TKey, TValue>
{
    public key: TKey;
    public value: TValue;

    public constructor(init?: Partial<KeyValuePair<TKey, TValue>>) { (Object as any).assign(this, init); }
}

export class SubType
{
    public id: number;
    public name: string;

    public constructor(init?: Partial<SubType>) { (Object as any).assign(this, init); }
}

export class Poco
{
    public name: string;

    public constructor(init?: Partial<Poco>) { (Object as any).assign(this, init); }
}

// @DataContract
export class QueryBase
{
    // @DataMember(Order=1)
    public skip?: number;

    // @DataMember(Order=2)
    public take?: number;

    // @DataMember(Order=3)
    public orderBy: string;

    // @DataMember(Order=4)
    public orderByDesc: string;

    // @DataMember(Order=5)
    public include: string;

    // @DataMember(Order=6)
    public fields: string;

    // @DataMember(Order=7)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<QueryBase>) { (Object as any).assign(this, init); }
}

export class QueryData<T> extends QueryBase
{

    public constructor(init?: Partial<QueryData<T>>) { super(init); (Object as any).assign(this, init); }
}

export class Tracks
{
    public trackId: number;
    // @Required()
    public name: string;

    public albumId?: number;
    public mediaTypeId: number;
    public genreId?: number;
    public composer: string;
    public milliseconds: number;
    public bytes?: number;
    public unitPrice: number;

    public constructor(init?: Partial<Tracks>) { (Object as any).assign(this, init); }
}

export enum EmploymentType
{
    FullTime = 'FullTime',
    PartTime = 'PartTime',
    Casual = 'Casual',
    Contract = 'Contract',
}

export class Job extends AuditBase
{
    public id: number;
    public title: string;
    public employmentType: EmploymentType;
    public company: string;
    public location: string;
    public salaryRangeLower: number;
    public salaryRangeUpper: number;
    public description: string;
    public applications: JobApplication[];
    public closing: string;

    public constructor(init?: Partial<Job>) { super(init); (Object as any).assign(this, init); }
}

export class Contact extends AuditBase
{
    public id: number;
    // @Computed()
    public displayName: string;

    public profileUrl: string;
    public firstName: string;
    public lastName: string;
    public salaryExpectation?: number;
    public jobType: string;
    public availabilityWeeks: number;
    public preferredWorkType: EmploymentType;
    public preferredLocation: string;
    public email: string;
    public phone: string;
    public about: string;
    public applications: JobApplication[];

    public constructor(init?: Partial<Contact>) { super(init); (Object as any).assign(this, init); }
}

export class JobApplicationComment extends AuditBase
{
    public id: number;
    // @References("typeof(TalentBlazor.ServiceModel.AppUser)")
    public appUserId: number;

    public appUser: AppUser;
    // @References("typeof(TalentBlazor.ServiceModel.JobApplication)")
    public jobApplicationId: number;

    public comment: string;

    public constructor(init?: Partial<JobApplicationComment>) { super(init); (Object as any).assign(this, init); }
}

export class JobApplicationAttachment
{
    public id: number;
    // @References("typeof(TalentBlazor.ServiceModel.JobApplication)")
    public jobApplicationId: number;

    public fileName: string;
    public filePath: string;
    public contentType: string;
    public contentLength: number;

    public constructor(init?: Partial<JobApplicationAttachment>) { (Object as any).assign(this, init); }
}

export class JobApplicationEvent extends AuditBase
{
    public id: number;
    // @References("typeof(TalentBlazor.ServiceModel.JobApplication)")
    public jobApplicationId: number;

    // @References("typeof(TalentBlazor.ServiceModel.AppUser)")
    public appUserId: number;

    public appUser: AppUser;
    public description: string;
    public status?: JobApplicationStatus;
    public eventDate: string;

    public constructor(init?: Partial<JobApplicationEvent>) { super(init); (Object as any).assign(this, init); }
}

export class JobApplication extends AuditBase
{
    public id: number;
    // @References("typeof(TalentBlazor.ServiceModel.Job)")
    public jobId: number;

    // @References("typeof(TalentBlazor.ServiceModel.Contact)")
    public contactId: number;

    public position: Job;
    public applicant: Contact;
    public comments: JobApplicationComment[];
    public appliedDate: string;
    public applicationStatus: JobApplicationStatus;
    public attachments: JobApplicationAttachment[];
    public events: JobApplicationEvent[];
    public phoneScreen: PhoneScreen;
    public interview: Interview;
    public jobOffer: JobOffer;

    public constructor(init?: Partial<JobApplication>) { super(init); (Object as any).assign(this, init); }
}

export enum RoomType
{
    Single = 'Single',
    Double = 'Double',
    Queen = 'Queen',
    Twin = 'Twin',
    Suite = 'Suite',
}

/** @description Discount Coupons */
export class Coupon
{
    public id: string;
    public description: string;
    public discount: number;
    public expiryDate: string;

    public constructor(init?: Partial<Coupon>) { (Object as any).assign(this, init); }
}

/** @description Booking Details */
export class Booking extends AuditBase
{
    public id: number;
    public name: string;
    public roomType: RoomType;
    public roomNumber: number;
    public bookingStartDate: string;
    public bookingEndDate?: string;
    public cost: number;
    // @References("typeof(MyApp.ServiceModel.Coupon)")
    public couponId?: string;

    public discount: Coupon;
    public notes?: string;
    public cancelled?: boolean;

    public constructor(init?: Partial<Booking>) { super(init); (Object as any).assign(this, init); }
}

export enum FileAccessType
{
    Public = 'Public',
    Team = 'Team',
    Private = 'Private',
}

export class FileSystemFile implements IFile
{
    public id: number;
    public fileName: string;
    public filePath: string;
    public contentType: string;
    public contentLength: number;
    // @References("typeof(MyApp.ServiceModel.FileSystemItem)")
    public fileSystemItemId: number;

    public constructor(init?: Partial<FileSystemFile>) { (Object as any).assign(this, init); }
}

export class FileSystemItem implements IFileItem
{
    public id: number;
    public fileAccessType?: FileAccessType;
    public file: FileSystemFile;
    public appUserId: number;

    public constructor(init?: Partial<FileSystemItem>) { (Object as any).assign(this, init); }
}

export interface IFileItem
{
    fileAccessType?: FileAccessType;
}

export enum PhoneKind
{
    Home = 'Home',
    Mobile = 'Mobile',
    Work = 'Work',
}

export class Phone
{
    public kind: PhoneKind;
    public number: string;
    public ext: string;

    public constructor(init?: Partial<Phone>) { (Object as any).assign(this, init); }
}

export class PlayerGameItem
{
    public id: number;
    // @References("typeof(MyApp.ServiceModel.Player)")
    public playerId: number;

    // @References("typeof(MyApp.ServiceModel.GameItem)")
    public gameItemName: string;

    public constructor(init?: Partial<PlayerGameItem>) { (Object as any).assign(this, init); }
}

export enum PlayerRole
{
    Leader = 'Leader',
    Player = 'Player',
    NonPlayer = 'NonPlayer',
}

export enum PlayerRegion
{
    Africa = 1,
    Americas = 2,
    Asia = 3,
    Australasia = 4,
    Europe = 5,
}

export class Profile extends AuditBase
{
    public id: number;
    public role: PlayerRole;
    public region: PlayerRegion;
    public username?: string;
    public highScore: number;
    public gamesPlayed: number;
    public energy: number;
    public profileUrl?: string;
    public coverUrl?: string;
    public meta?: { [index: string]: string; };

    public constructor(init?: Partial<Profile>) { super(init); (Object as any).assign(this, init); }
}

export class Player extends AuditBase
{
    public id: number;
    // @Required()
    public firstName: string;

    public lastName: string;
    public email: string;
    public phoneNumbers: Phone[];
    public gameItems: PlayerGameItem[];
    public profile: Profile;
    public profileId: number;
    public savedLevelId: string;
    public rowVersion: number;
    public capital: string;

    public constructor(init?: Partial<Player>) { super(init); (Object as any).assign(this, init); }
}

export class GameItem extends AuditBase
{
    // @StringLength(50)
    public name: string;

    public imageUrl: string;
    // @StringLength(2147483647)
    public description?: string;

    public dateAdded: string;

    public constructor(init?: Partial<GameItem>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class OrderDetail
{
    // @DataMember(Order=1)
    public id: string;

    // @DataMember(Order=2)
    public orderId: number;

    // @DataMember(Order=3)
    public productId: number;

    // @DataMember(Order=4)
    public unitPrice: number;

    // @DataMember(Order=5)
    public quantity: number;

    // @DataMember(Order=6)
    public discount: number;

    public constructor(init?: Partial<OrderDetail>) { (Object as any).assign(this, init); }
}

// @DataContract
export class Product
{
    // @DataMember(Order=1)
    public id: number;

    // @DataMember(Order=2)
    public productName: string;

    // @DataMember(Order=3)
    public supplierId: number;

    // @DataMember(Order=4)
    public categoryId: number;

    // @DataMember(Order=5)
    public quantityPerUnit: string;

    // @DataMember(Order=6)
    public unitPrice: number;

    // @DataMember(Order=7)
    public unitsInStock: number;

    // @DataMember(Order=8)
    public unitsOnOrder: number;

    // @DataMember(Order=9)
    public reorderLevel: number;

    // @DataMember(Order=10)
    public discontinued: number;

    public constructor(init?: Partial<Product>) { (Object as any).assign(this, init); }
}

// @DataContract
export class Region
{
    // @DataMember(Order=1)
    public id: number;

    // @DataMember(Order=2)
    public regionDescription: string;

    public constructor(init?: Partial<Region>) { (Object as any).assign(this, init); }
}

// @DataContract
export class Shipper
{
    // @DataMember(Order=1)
    public id: number;

    // @DataMember(Order=2)
    public companyName: string;

    // @DataMember(Order=3)
    public phone: string;

    public constructor(init?: Partial<Shipper>) { (Object as any).assign(this, init); }
}

// @DataContract
export class Supplier
{
    // @DataMember(Order=1)
    public id: number;

    // @DataMember(Order=2)
    public companyName: string;

    // @DataMember(Order=3)
    public contactName: string;

    // @DataMember(Order=4)
    public contactTitle: string;

    // @DataMember(Order=5)
    public address: string;

    // @DataMember(Order=6)
    public city: string;

    // @DataMember(Order=7)
    public region: string;

    // @DataMember(Order=8)
    public postalCode: string;

    // @DataMember(Order=9)
    public country: string;

    // @DataMember(Order=10)
    public phone: string;

    // @DataMember(Order=11)
    public fax: string;

    // @DataMember(Order=12)
    public homePage: string;

    public constructor(init?: Partial<Supplier>) { (Object as any).assign(this, init); }
}

// @DataContract
export class Territory
{
    // @DataMember(Order=1)
    public id: string;

    // @DataMember(Order=2)
    public territoryDescription: string;

    // @DataMember(Order=3)
    public regionId: number;

    public constructor(init?: Partial<Territory>) { (Object as any).assign(this, init); }
}

export class UserAuthRole
{
    public id: number;
    public userAuthId: number;
    public role: string;
    public permission: string;
    public createdDate: string;
    public modifiedDate: string;
    public refId?: number;
    public refIdStr: string;
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<UserAuthRole>) { (Object as any).assign(this, init); }
}

export class ValidateRule
{
    public validator: string;
    public condition: string;
    public errorCode: string;
    public message: string;

    public constructor(init?: Partial<ValidateRule>) { (Object as any).assign(this, init); }
}

export class ValidationRule extends ValidateRule
{
    public id: number;
    // @Required()
    public type: string;

    public field: string;
    public createdBy: string;
    public createdDate?: string;
    public modifiedBy: string;
    public modifiedDate?: string;
    public suspendedBy: string;
    public suspendedDate?: string;
    public notes: string;

    public constructor(init?: Partial<ValidationRule>) { super(init); (Object as any).assign(this, init); }
}

// @DataContract
export class Category
{
    // @DataMember(Order=1)
    public id: number;

    // @DataMember(Order=2)
    public categoryName: string;

    // @DataMember(Order=3)
    public description: string;

    public constructor(init?: Partial<Category>) { (Object as any).assign(this, init); }
}

// @DataContract
export class Customer
{
    // @DataMember(Order=1)
    public id: string;

    // @DataMember(Order=2)
    public companyName: string;

    // @DataMember(Order=3)
    public contactName: string;

    // @DataMember(Order=4)
    public contactTitle: string;

    // @DataMember(Order=5)
    public address: string;

    // @DataMember(Order=6)
    public city: string;

    // @DataMember(Order=7)
    public region: string;

    // @DataMember(Order=8)
    public postalCode: string;

    // @DataMember(Order=9)
    public country: string;

    // @DataMember(Order=10)
    public phone: string;

    // @DataMember(Order=11)
    public fax: string;

    public constructor(init?: Partial<Customer>) { (Object as any).assign(this, init); }
}

// @DataContract
export class Employee
{
    // @DataMember(Order=1)
    public id: number;

    // @DataMember(Order=2)
    public lastName: string;

    // @DataMember(Order=3)
    public firstName: string;

    // @DataMember(Order=4)
    public photoPath: string;

    // @DataMember(Order=5)
    public title: string;

    // @DataMember(Order=6)
    public reportsTo?: number;

    // @DataMember(Order=7)
    public titleOfCourtesy: string;

    // @DataMember(Order=8)
    public birthDate: string;

    // @DataMember(Order=9)
    public hireDate: string;

    // @DataMember(Order=10)
    public address: string;

    // @DataMember(Order=11)
    public city: string;

    // @DataMember(Order=12)
    public region: string;

    // @DataMember(Order=13)
    public postalCode: string;

    // @DataMember(Order=14)
    public country: string;

    // @DataMember(Order=15)
    public homePhone: string;

    // @DataMember(Order=16)
    public extension: string;

    // @DataMember(Order=17)
    public photo: string;

    // @DataMember(Order=18)
    public notes: string;

    public constructor(init?: Partial<Employee>) { (Object as any).assign(this, init); }
}

// @DataContract
export class EmployeeTerritory
{
    // @DataMember(Order=1)
    public id: string;

    // @DataMember(Order=2)
    public employeeId: number;

    // @DataMember(Order=3)
    public territoryId: string;

    public constructor(init?: Partial<EmployeeTerritory>) { (Object as any).assign(this, init); }
}

// @DataContract
export class Migration
{
    // @DataMember(Order=1)
    public id: number;

    // @DataMember(Order=2)
    public name: string;

    // @DataMember(Order=3)
    public description: string;

    // @DataMember(Order=4)
    // @Required()
    public createdDate: string;

    // @DataMember(Order=5)
    public completedDate: string;

    // @DataMember(Order=6)
    public connectionString: string;

    // @DataMember(Order=7)
    public namedConnection: string;

    // @DataMember(Order=8)
    public log: string;

    // @DataMember(Order=9)
    public errorCode: string;

    // @DataMember(Order=10)
    public errorMessage: string;

    // @DataMember(Order=11)
    public errorStackTrace: string;

    // @DataMember(Order=12)
    public meta: string;

    public constructor(init?: Partial<Migration>) { (Object as any).assign(this, init); }
}

// @DataContract
export class Order
{
    // @DataMember(Order=1)
    public id: number;

    // @DataMember(Order=2)
    public customerId: string;

    // @DataMember(Order=3)
    public employeeId: number;

    // @DataMember(Order=4)
    public orderDate: string;

    // @DataMember(Order=5)
    public requiredDate: string;

    // @DataMember(Order=6)
    public shippedDate: string;

    // @DataMember(Order=7)
    public shipVia?: number;

    // @DataMember(Order=8)
    public freight: number;

    // @DataMember(Order=9)
    public shipName: string;

    // @DataMember(Order=10)
    public shipAddress: string;

    // @DataMember(Order=11)
    public shipCity: string;

    // @DataMember(Order=12)
    public shipRegion: string;

    // @DataMember(Order=13)
    public shipPostalCode: string;

    // @DataMember(Order=14)
    public shipCountry: string;

    public constructor(init?: Partial<Order>) { (Object as any).assign(this, init); }
}

export class Albums
{
    public albumId: number;
    // @Required()
    public title: string;

    public artistId: number;

    public constructor(init?: Partial<Albums>) { (Object as any).assign(this, init); }
}

export class Artists
{
    public artistId: number;
    public name: string;

    public constructor(init?: Partial<Artists>) { (Object as any).assign(this, init); }
}

export class Customers
{
    public customerId: number;
    // @Required()
    public firstName: string;

    // @Required()
    public lastName: string;

    public company: string;
    public address: string;
    public city: string;
    public state: string;
    public country: string;
    public postalCode: string;
    public phone: string;
    public fax: string;
    // @Required()
    public email: string;

    public supportRepId?: number;

    public constructor(init?: Partial<Customers>) { (Object as any).assign(this, init); }
}

export class Employees
{
    public employeeId: number;
    // @Required()
    public lastName: string;

    // @Required()
    public firstName: string;

    public title: string;
    public reportsTo?: number;
    public birthDate?: string;
    public hireDate?: string;
    public address: string;
    public city: string;
    public state: string;
    public country: string;
    public postalCode: string;
    public phone: string;
    public fax: string;
    public email: string;

    public constructor(init?: Partial<Employees>) { (Object as any).assign(this, init); }
}

export class Genres
{
    public genreId: number;
    public name: string;

    public constructor(init?: Partial<Genres>) { (Object as any).assign(this, init); }
}

export class InvoiceItems
{
    public invoiceLineId: number;
    public invoiceId: number;
    public trackId: number;
    public unitPrice: number;
    public quantity: number;

    public constructor(init?: Partial<InvoiceItems>) { (Object as any).assign(this, init); }
}

export class Invoices
{
    public invoiceId: number;
    public customerId: number;
    public invoiceDate: string;
    public billingAddress: string;
    public billingCity: string;
    public billingState: string;
    public billingCountry: string;
    public billingPostalCode: string;
    public total: number;

    public constructor(init?: Partial<Invoices>) { (Object as any).assign(this, init); }
}

export class MediaTypes
{
    public mediaTypeId: number;
    public name: string;

    public constructor(init?: Partial<MediaTypes>) { (Object as any).assign(this, init); }
}

export class Playlists
{
    public playlistId: number;
    public name: string;

    public constructor(init?: Partial<Playlists>) { (Object as any).assign(this, init); }
}

export class QueryDb<T> extends QueryBase
{

    public constructor(init?: Partial<QueryDb<T>>) { super(init); (Object as any).assign(this, init); }
}

export class Level
{
    public id: string;
    public data: string;

    public constructor(init?: Partial<Level>) { (Object as any).assign(this, init); }
}

// @DataContract
export class ResponseError
{
    // @DataMember(Order=1)
    public errorCode: string;

    // @DataMember(Order=2)
    public fieldName: string;

    // @DataMember(Order=3)
    public message: string;

    // @DataMember(Order=4)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<ResponseError>) { (Object as any).assign(this, init); }
}

// @DataContract
export class ResponseStatus
{
    // @DataMember(Order=1)
    public errorCode: string;

    // @DataMember(Order=2)
    public message: string;

    // @DataMember(Order=3)
    public stackTrace: string;

    // @DataMember(Order=4)
    public errors: ResponseError[];

    // @DataMember(Order=5)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<ResponseStatus>) { (Object as any).assign(this, init); }
}

// @DataContract
export class UserApiKey
{
    // @DataMember(Order=1)
    public key: string;

    // @DataMember(Order=2)
    public keyType: string;

    // @DataMember(Order=3)
    public expiryDate?: string;

    // @DataMember(Order=4)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<UserApiKey>) { (Object as any).assign(this, init); }
}

export interface IFile
{
    id: number;
    fileName: string;
    filePath: string;
    contentType: string;
    contentLength: number;
}

export class TalentStatsResponse
{
    public totalJobs: number;
    public totalContacts: number;
    public avgSalaryExpectation: number;
    public avgSalaryLower: number;
    public avgSalaryUpper: number;
    public preferredRemotePercentage: number;

    public constructor(init?: Partial<TalentStatsResponse>) { (Object as any).assign(this, init); }
}

export class FormDataTest implements IReturn<FormDataTest>
{
    public hidden: boolean;
    public string?: string;
    public int: number;
    public dateTime: string;
    public dateOnly: string;
    public timeSpan: string;
    public timeOnly: string;
    public password?: string;
    public checkboxString?: string[];
    public radioString?: string;
    public radioColors: Colors;
    public checkboxColors?: Colors[];
    public selectColors: Colors;
    public multiSelectColors?: Colors[];
    public profileUrl?: string;
    public attachments: Attachment[];

    public constructor(init?: Partial<FormDataTest>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'FormDataTest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new FormDataTest(); }
}

export class Movie
{
    public movieID: string;
    public movieNo: number;
    public name?: string;
    public description?: string;
    public movieRef?: string;

    public constructor(init?: Partial<Movie>) { (Object as any).assign(this, init); }
}

export class HelloResponse
{
    public result: string;
    public responseStatus?: ResponseStatus;

    public constructor(init?: Partial<HelloResponse>) { (Object as any).assign(this, init); }
}

export class AllTypes implements IReturn<AllTypes>
{
    public id: number;
    public nullableId?: number;
    public boolean: boolean;
    public byte: number;
    public short: number;
    public int: number;
    public long: number;
    public uShort: number;
    public uInt: number;
    public uLong: number;
    public float: number;
    public double: number;
    public decimal: number;
    public string: string;
    public dateTime: string;
    public timeSpan: string;
    public dateTimeOffset: string;
    public guid: string;
    public char: string;
    public keyValuePair: KeyValuePair<string, string>;
    public nullableDateTime?: string;
    public nullableTimeSpan?: string;
    public stringList: string[];
    public stringArray: string[];
    public stringMap: { [index: string]: string; };
    public intStringMap: { [index: number]: string; };
    public subType: SubType;

    public constructor(init?: Partial<AllTypes>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AllTypes'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new AllTypes(); }
}

export class AllCollectionTypes implements IReturn<AllCollectionTypes>
{
    public intArray: number[];
    public intList: number[];
    public stringArray: string[];
    public stringList: string[];
    public floatArray: number[];
    public doubleList: number[];
    public byteArray: string;
    public charArray: string[];
    public decimalList: number[];
    public pocoArray: Poco[];
    public pocoList: Poco[];
    public pocoLookup: { [index: string]: Poco[]; };
    public pocoLookupMap: { [index: string]: { [index:string]: Poco; }[]; };

    public constructor(init?: Partial<AllCollectionTypes>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AllCollectionTypes'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new AllCollectionTypes(); }
}

export class ProfileGenResponse
{

    public constructor(init?: Partial<ProfileGenResponse>) { (Object as any).assign(this, init); }
}

export class Todo
{
    public id: number;
    public text: string;
    public isFinished: boolean;

    public constructor(init?: Partial<Todo>) { (Object as any).assign(this, init); }
}

// @DataContract
export class QueryResponse<Todo>
{
    // @DataMember(Order=1)
    public offset: number;

    // @DataMember(Order=2)
    public total: number;

    // @DataMember(Order=3)
    public results: Todo[];

    // @DataMember(Order=4)
    public meta: { [index: string]: string; };

    // @DataMember(Order=5)
    public responseStatus: ResponseStatus;

    public constructor(init?: Partial<QueryResponse<Todo>>) { (Object as any).assign(this, init); }
}

// @DataContract
export class AuthenticateResponse implements IHasSessionId, IHasBearerToken
{
    // @DataMember(Order=1)
    public userId: string;

    // @DataMember(Order=2)
    public sessionId: string;

    // @DataMember(Order=3)
    public userName: string;

    // @DataMember(Order=4)
    public displayName: string;

    // @DataMember(Order=5)
    public referrerUrl: string;

    // @DataMember(Order=6)
    public bearerToken: string;

    // @DataMember(Order=7)
    public refreshToken: string;

    // @DataMember(Order=8)
    public profileUrl: string;

    // @DataMember(Order=9)
    public roles: string[];

    // @DataMember(Order=10)
    public permissions: string[];

    // @DataMember(Order=11)
    public responseStatus: ResponseStatus;

    // @DataMember(Order=12)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<AuthenticateResponse>) { (Object as any).assign(this, init); }
}

// @DataContract
export class AssignRolesResponse
{
    // @DataMember(Order=1)
    public allRoles: string[];

    // @DataMember(Order=2)
    public allPermissions: string[];

    // @DataMember(Order=3)
    public meta: { [index: string]: string; };

    // @DataMember(Order=4)
    public responseStatus: ResponseStatus;

    public constructor(init?: Partial<AssignRolesResponse>) { (Object as any).assign(this, init); }
}

// @DataContract
export class UnAssignRolesResponse
{
    // @DataMember(Order=1)
    public allRoles: string[];

    // @DataMember(Order=2)
    public allPermissions: string[];

    // @DataMember(Order=3)
    public meta: { [index: string]: string; };

    // @DataMember(Order=4)
    public responseStatus: ResponseStatus;

    public constructor(init?: Partial<UnAssignRolesResponse>) { (Object as any).assign(this, init); }
}

// @DataContract
export class GetAccessTokenResponse
{
    // @DataMember(Order=1)
    public accessToken: string;

    // @DataMember(Order=2)
    public meta: { [index: string]: string; };

    // @DataMember(Order=3)
    public responseStatus: ResponseStatus;

    public constructor(init?: Partial<GetAccessTokenResponse>) { (Object as any).assign(this, init); }
}

// @DataContract
export class GetApiKeysResponse
{
    // @DataMember(Order=1)
    public results: UserApiKey[];

    // @DataMember(Order=2)
    public meta: { [index: string]: string; };

    // @DataMember(Order=3)
    public responseStatus: ResponseStatus;

    public constructor(init?: Partial<GetApiKeysResponse>) { (Object as any).assign(this, init); }
}

// @DataContract
export class RegenerateApiKeysResponse
{
    // @DataMember(Order=1)
    public results: UserApiKey[];

    // @DataMember(Order=2)
    public meta: { [index: string]: string; };

    // @DataMember(Order=3)
    public responseStatus: ResponseStatus;

    public constructor(init?: Partial<RegenerateApiKeysResponse>) { (Object as any).assign(this, init); }
}

// @DataContract
export class RegisterResponse implements IHasSessionId, IHasBearerToken
{
    // @DataMember(Order=1)
    public userId: string;

    // @DataMember(Order=2)
    public sessionId: string;

    // @DataMember(Order=3)
    public userName: string;

    // @DataMember(Order=4)
    public referrerUrl: string;

    // @DataMember(Order=5)
    public bearerToken: string;

    // @DataMember(Order=6)
    public refreshToken: string;

    // @DataMember(Order=7)
    public roles: string[];

    // @DataMember(Order=8)
    public permissions: string[];

    // @DataMember(Order=9)
    public responseStatus: ResponseStatus;

    // @DataMember(Order=10)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<RegisterResponse>) { (Object as any).assign(this, init); }
}

// @DataContract
export class IdResponse
{
    // @DataMember(Order=1)
    public id: string;

    // @DataMember(Order=2)
    public responseStatus: ResponseStatus;

    public constructor(init?: Partial<IdResponse>) { (Object as any).assign(this, init); }
}

export class CreatePhoneScreen implements IReturn<PhoneScreen>, ICreateDb<PhoneScreen>
{
    // @Validate(Validator="GreaterThan(0)")
    public jobApplicationId: number;

    // @Validate(Validator="GreaterThan(0)", Message="An employee to perform the phone screening must be selected.")
    public appUserId: number;

    public applicationStatus: JobApplicationStatus;

    public constructor(init?: Partial<CreatePhoneScreen>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreatePhoneScreen'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new PhoneScreen(); }
}

export class UpdatePhoneScreen implements IReturn<PhoneScreen>, IPatchDb<PhoneScreen>
{
    public id: number;
    public jobApplicationId?: number;
    public notes?: string;
    public applicationStatus?: JobApplicationStatus;

    public constructor(init?: Partial<UpdatePhoneScreen>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdatePhoneScreen'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new PhoneScreen(); }
}

export class CreateInterview implements IReturn<Interview>, ICreateDb<Interview>
{
    // @Validate(Validator="NotNull")
    public bookingTime: string;

    // @Validate(Validator="GreaterThan(0)")
    public jobApplicationId: number;

    // @Validate(Validator="GreaterThan(0)", Message="An employee to perform interview must be selected.")
    public appUserId: number;

    public applicationStatus: JobApplicationStatus;

    public constructor(init?: Partial<CreateInterview>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateInterview'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new Interview(); }
}

export class UpdateInterview implements IReturn<Interview>, IPatchDb<Interview>
{
    // @Validate(Validator="GreaterThan(0)")
    public id: number;

    public jobApplicationId?: number;
    public notes?: string;
    public applicationStatus?: JobApplicationStatus;

    public constructor(init?: Partial<UpdateInterview>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateInterview'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new Interview(); }
}

export class CreateJobOffer implements IReturn<JobOffer>, ICreateDb<JobOffer>
{
    // @Validate(Validator="GreaterThan(0)")
    public salaryOffer: number;

    // @Validate(Validator="GreaterThan(0)")
    public jobApplicationId: number;

    public applicationStatus: JobApplicationStatus;
    // @Validate(Validator="NotEmpty")
    public notes: string;

    public constructor(init?: Partial<CreateJobOffer>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateJobOffer'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new JobOffer(); }
}

export class TalentStats implements IReturn<TalentStatsResponse>, IGet
{

    public constructor(init?: Partial<TalentStats>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'TalentStats'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new TalentStatsResponse(); }
}

// @Route("/profile-image")
// @Route("/profile-image/{Type}")
// @Route("/profile-image/{Type}/{Size}")
export class GetProfileImage implements IReturn<Blob>
{
    public type?: string;
    public size?: string;

    public constructor(init?: Partial<GetProfileImage>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetProfileImage'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new Blob(); }
}

export class MovieGETRequest implements IReturn<Movie>
{
    /** @description Unique Id of the movie */
    // @Validate(Validator="NotEmpty")
    public movieID: string;

    public constructor(init?: Partial<MovieGETRequest>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'MovieGETRequest'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new Movie(); }
}

export class MoviePOSTRequest extends Movie implements IReturn<Movie>
{
    public movieID: string;
    public movieNo: number;
    public movieRef?: string;

    public constructor(init?: Partial<MoviePOSTRequest>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'MoviePOSTRequest'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new Movie(); }
}

// @Route("/greet/{Name}")
export class Greet implements IReturn<HelloResponse>
{
    public name: string;

    public constructor(init?: Partial<Greet>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'Greet'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new HelloResponse(); }
}

// @Route("/hello/{Name}")
// @ValidateRequest(Validator="HasRole(`Employee`)")
export class Hello implements IReturn<HelloResponse>
{
    public name: string;

    public constructor(init?: Partial<Hello>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'Hello'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new HelloResponse(); }
}

// @Route("/hello-long/{Name}", "PATCH,PUT")
// @Route("/hello-very-long/{Name}", "GET,POST,PUT")
// @ValidateRequest(Validator="HasRole(`Employee`)")
// @ValidateRequest(Validator="HasPermission(`ThePermission`)")
// @ValidateRequest(Validator="IsAuthenticated")
export class HelloVeryLongOperationNameVersions implements IReturn<HelloResponse>, IGet, IPost, IPut, IPatch
{
    public name?: string;
    public names?: string[];
    public ids?: number[];

    public constructor(init?: Partial<HelloVeryLongOperationNameVersions>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'HelloVeryLongOperationNameVersions'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new HelloResponse(); }
}

// @Route("/hellosecure/{Name}", "PUT")
// @ValidateRequest(Validator="IsAuthenticated")
export class HelloSecure implements IReturn<HelloResponse>
{
    public name: string;

    public constructor(init?: Partial<HelloSecure>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'HelloSecure'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new HelloResponse(); }
}

// @DataContract
export class HelloBookingList implements IReturn<Booking[]>
{
    // @DataMember(Name="Alias", Order=1)
    public Alias: string;

    public constructor(init?: Partial<HelloBookingList>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'HelloBookingList'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new Array<Booking>(); }
}

export class ProfileGen implements IReturn<ProfileGenResponse>
{

    public constructor(init?: Partial<ProfileGen>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'ProfileGen'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new ProfileGenResponse(); }
}

// @Route("/todos", "GET")
export class QueryTodos extends QueryData<Todo> implements IReturn<QueryResponse<Todo>>
{
    public id?: number;
    public ids?: number[];
    public textContains?: string;

    public constructor(init?: Partial<QueryTodos>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryTodos'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<Todo>(); }
}

// @Route("/todos", "POST")
export class CreateTodo implements IReturn<Todo>, IPost
{
    // @Validate(Validator="NotEmpty")
    public text: string;

    public constructor(init?: Partial<CreateTodo>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateTodo'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new Todo(); }
}

// @Route("/todos/{Id}", "PUT")
export class UpdateTodo implements IReturn<Todo>, IPut
{
    public id: number;
    // @Validate(Validator="NotEmpty")
    public text: string;

    public isFinished: boolean;

    public constructor(init?: Partial<UpdateTodo>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateTodo'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new Todo(); }
}

// @Route("/todos/{Id}", "DELETE")
export class DeleteTodo implements IReturnVoid, IDelete
{
    public id: number;

    public constructor(init?: Partial<DeleteTodo>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteTodo'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() {}
}

// @Route("/todos", "DELETE")
export class DeleteTodos implements IReturnVoid, IDelete
{
    public ids: number[];

    public constructor(init?: Partial<DeleteTodos>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteTodos'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() {}
}

/** @description Sign In */
// @Route("/auth", "OPTIONS,GET,POST,DELETE")
// @Route("/auth/{provider}", "OPTIONS,GET,POST,DELETE")
// @Api(Description="Sign In")
// @DataContract
export class Authenticate implements IReturn<AuthenticateResponse>, IPost
{
    /** @description AuthProvider, e.g. credentials */
    // @DataMember(Order=1)
    public provider: string;

    // @DataMember(Order=2)
    public state: string;

    // @DataMember(Order=3)
    public oauth_token: string;

    // @DataMember(Order=4)
    public oauth_verifier: string;

    // @DataMember(Order=5)
    public userName: string;

    // @DataMember(Order=6)
    public password: string;

    // @DataMember(Order=7)
    public rememberMe?: boolean;

    // @DataMember(Order=9)
    public errorView: string;

    // @DataMember(Order=10)
    public nonce: string;

    // @DataMember(Order=11)
    public uri: string;

    // @DataMember(Order=12)
    public response: string;

    // @DataMember(Order=13)
    public qop: string;

    // @DataMember(Order=14)
    public nc: string;

    // @DataMember(Order=15)
    public cnonce: string;

    // @DataMember(Order=17)
    public accessToken: string;

    // @DataMember(Order=18)
    public accessTokenSecret: string;

    // @DataMember(Order=19)
    public scope: string;

    // @DataMember(Order=20)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<Authenticate>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'Authenticate'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new AuthenticateResponse(); }
}

// @Route("/assignroles", "POST")
// @DataContract
export class AssignRoles implements IReturn<AssignRolesResponse>, IPost
{
    // @DataMember(Order=1)
    public userName: string;

    // @DataMember(Order=2)
    public permissions: string[];

    // @DataMember(Order=3)
    public roles: string[];

    // @DataMember(Order=4)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<AssignRoles>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'AssignRoles'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new AssignRolesResponse(); }
}

// @Route("/unassignroles", "POST")
// @DataContract
export class UnAssignRoles implements IReturn<UnAssignRolesResponse>, IPost
{
    // @DataMember(Order=1)
    public userName: string;

    // @DataMember(Order=2)
    public permissions: string[];

    // @DataMember(Order=3)
    public roles: string[];

    // @DataMember(Order=4)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<UnAssignRoles>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UnAssignRoles'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new UnAssignRolesResponse(); }
}

// @Route("/access-token")
// @DataContract
export class GetAccessToken implements IReturn<GetAccessTokenResponse>, IPost
{
    // @DataMember(Order=1)
    public refreshToken: string;

    // @DataMember(Order=2)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<GetAccessToken>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetAccessToken'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new GetAccessTokenResponse(); }
}

// @Route("/apikeys")
// @Route("/apikeys/{Environment}")
// @DataContract
export class GetApiKeys implements IReturn<GetApiKeysResponse>, IGet
{
    // @DataMember(Order=1)
    public environment: string;

    // @DataMember(Order=2)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<GetApiKeys>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'GetApiKeys'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new GetApiKeysResponse(); }
}

// @Route("/apikeys/regenerate")
// @Route("/apikeys/regenerate/{Environment}")
// @DataContract
export class RegenerateApiKeys implements IReturn<RegenerateApiKeysResponse>, IPost
{
    // @DataMember(Order=1)
    public environment: string;

    // @DataMember(Order=2)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<RegenerateApiKeys>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'RegenerateApiKeys'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new RegenerateApiKeysResponse(); }
}

/** @description Sign Up */
// @Route("/register", "PUT,POST")
// @Api(Description="Sign Up")
// @DataContract
export class Register implements IReturn<RegisterResponse>, IPost
{
    // @DataMember(Order=1)
    public userName: string;

    // @DataMember(Order=2)
    public firstName: string;

    // @DataMember(Order=3)
    public lastName: string;

    // @DataMember(Order=4)
    public displayName: string;

    // @DataMember(Order=5)
    public email: string;

    // @DataMember(Order=6)
    public password: string;

    // @DataMember(Order=7)
    public confirmPassword: string;

    // @DataMember(Order=8)
    public autoLogin?: boolean;

    // @DataMember(Order=10)
    public errorView: string;

    // @DataMember(Order=11)
    public meta: { [index: string]: string; };

    public constructor(init?: Partial<Register>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'Register'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new RegisterResponse(); }
}

// @Route("/tracks/{TrackId}", "PUT")
export class UpdateTracks implements IReturn<IdResponse>, IPut, IUpdateDb<Tracks>
{
    public trackId: number;
    public name: string;
    public albumId?: number;
    public mediaTypeId: number;
    public genreId?: number;
    public composer: string;
    public milliseconds: number;
    public bytes?: number;
    public unitPrice: number;

    public constructor(init?: Partial<UpdateTracks>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateTracks'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new IdResponse(); }
}

export class CreateContact implements IReturn<Contact>, ICreateDb<Contact>
{
    // @Validate(Validator="NotEmpty")
    public firstName: string;

    // @Validate(Validator="NotEmpty")
    public lastName: string;

    public profileUrl?: string;
    public salaryExpectation?: number;
    // @Validate(Validator="NotEmpty")
    public jobType: string;

    public availabilityWeeks: number;
    public preferredWorkType: EmploymentType;
    // @Validate(Validator="NotEmpty")
    public preferredLocation: string;

    // @Validate(Validator="NotEmpty")
    public email: string;

    public phone?: string;
    public about?: string;

    public constructor(init?: Partial<CreateContact>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateContact'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new Contact(); }
}

export class UpdateContact implements IReturn<Contact>, IPatchDb<Contact>
{
    public id: number;
    // @Validate(Validator="NotEmpty")
    public firstName: string;

    // @Validate(Validator="NotEmpty")
    public lastName: string;

    public profileUrl?: string;
    public salaryExpectation?: number;
    // @Validate(Validator="NotEmpty")
    public jobType: string;

    public availabilityWeeks?: number;
    public preferredWorkType?: EmploymentType;
    public preferredLocation?: string;
    // @Validate(Validator="NotEmpty")
    public email: string;

    public phone?: string;
    public about?: string;

    public constructor(init?: Partial<UpdateContact>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateContact'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new Contact(); }
}

export class DeleteContact implements IReturnVoid, IDeleteDb<Contact>
{
    public id: number;

    public constructor(init?: Partial<DeleteContact>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteContact'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() {}
}

export class CreateJob implements IReturn<Job>, ICreateDb<Job>
{
    public title: string;
    // @Validate(Validator="GreaterThan(0)")
    public salaryRangeLower: number;

    // @Validate(Validator="GreaterThan(0)")
    public salaryRangeUpper: number;

    public description: string;
    public employmentType: EmploymentType;
    public company: string;
    public location: string;
    public closing: string;

    public constructor(init?: Partial<CreateJob>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateJob'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new Job(); }
}

export class UpdateJob implements IReturn<Job>, IPatchDb<Job>
{
    public id: number;
    public title?: string;
    public salaryRangeLower?: number;
    public salaryRangeUpper?: number;
    public description?: string;

    public constructor(init?: Partial<UpdateJob>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateJob'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new Job(); }
}

export class DeleteJob implements IReturn<Job>, IDeleteDb<Job>
{
    public id: number;

    public constructor(init?: Partial<DeleteJob>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteJob'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new Job(); }
}

export class CreateJobApplication implements IReturn<JobApplication>, ICreateDb<JobApplication>
{
    // @Validate(Validator="GreaterThan(0)")
    public jobId: number;

    // @Validate(Validator="GreaterThan(0)")
    public contactId: number;

    public appliedDate: string;
    public applicationStatus: JobApplicationStatus;
    public attachments: JobApplicationAttachment[];

    public constructor(init?: Partial<CreateJobApplication>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateJobApplication'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new JobApplication(); }
}

export class UpdateJobApplication implements IReturn<JobApplication>, IPatchDb<JobApplication>
{
    public id: number;
    public jobId?: number;
    public contactId?: number;
    public appliedDate?: string;
    public applicationStatus: JobApplicationStatus;
    public attachments?: JobApplicationAttachment[];

    public constructor(init?: Partial<UpdateJobApplication>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateJobApplication'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new JobApplication(); }
}

export class DeleteJobApplication implements IReturnVoid, IDeleteDb<JobApplication>
{
    public id: number;

    public constructor(init?: Partial<DeleteJobApplication>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteJobApplication'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() {}
}

export class CreateJobApplicationEvent implements IReturn<JobApplicationEvent>, ICreateDb<JobApplicationEvent>
{

    public constructor(init?: Partial<CreateJobApplicationEvent>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateJobApplicationEvent'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new JobApplicationEvent(); }
}

export class UpdateJobApplicationEvent implements IReturn<JobApplicationEvent>, IPatchDb<JobApplicationEvent>
{
    public id: number;
    public status?: JobApplicationStatus;
    public description?: string;
    public eventDate?: string;

    public constructor(init?: Partial<UpdateJobApplicationEvent>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateJobApplicationEvent'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new JobApplicationEvent(); }
}

export class DeleteJobApplicationEvent implements IReturnVoid, IDeleteDb<JobApplicationEvent>
{

    public constructor(init?: Partial<DeleteJobApplicationEvent>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteJobApplicationEvent'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() {}
}

export class CreateJobApplicationComment implements IReturn<JobApplicationComment>, ICreateDb<JobApplicationComment>
{
    // @Validate(Validator="GreaterThan(0)")
    public jobApplicationId: number;

    // @Validate(Validator="NotEmpty")
    public comment: string;

    public constructor(init?: Partial<CreateJobApplicationComment>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateJobApplicationComment'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new JobApplicationComment(); }
}

export class UpdateJobApplicationComment implements IReturn<JobApplicationComment>, IPatchDb<JobApplicationComment>
{
    public id: number;
    public jobApplicationId?: number;
    public comment?: string;

    public constructor(init?: Partial<UpdateJobApplicationComment>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateJobApplicationComment'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new JobApplicationComment(); }
}

export class DeleteJobApplicationComment implements IReturnVoid, IDeleteDb<JobApplicationComment>
{
    public id: number;

    public constructor(init?: Partial<DeleteJobApplicationComment>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteJobApplicationComment'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() {}
}

/** @description Create a new Booking */
// @Route("/bookings", "POST")
// @ValidateRequest(Validator="HasRole(`Employee`)")
export class CreateBooking implements IReturn<IdResponse>, ICreateDb<Booking>
{
    /** @description Name this Booking is for */
    // @Validate(Validator="NotEmpty")
    public name: string;

    public roomType: RoomType;
    // @Validate(Validator="GreaterThan(0)")
    public roomNumber: number;

    // @Validate(Validator="GreaterThan(0)")
    public cost: number;

    // @Required()
    public bookingStartDate: string;

    public bookingEndDate?: string;
    public notes?: string;
    public couponId?: string;

    public constructor(init?: Partial<CreateBooking>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateBooking'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Update an existing Booking */
// @Route("/booking/{Id}", "PATCH")
// @ValidateRequest(Validator="HasRole(`Employee`)")
export class UpdateBooking implements IReturn<IdResponse>, IPatchDb<Booking>
{
    public id: number;
    public name?: string;
    public roomType?: RoomType;
    // @Validate(Validator="GreaterThan(0)")
    public roomNumber?: number;

    // @Validate(Validator="GreaterThan(0)")
    public cost?: number;

    public bookingStartDate?: string;
    public bookingEndDate?: string;
    public notes?: string;
    public couponId?: string;
    public cancelled?: boolean;

    public constructor(init?: Partial<UpdateBooking>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateBooking'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Delete a Booking */
// @Route("/booking/{Id}", "DELETE")
// @ValidateRequest(Validator="HasRole(`Manager`)")
export class DeleteBooking implements IReturnVoid, IDeleteDb<Booking>
{
    public id: number;

    public constructor(init?: Partial<DeleteBooking>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteBooking'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() {}
}

// @Route("/coupons", "POST")
// @ValidateRequest(Validator="HasRole(`Employee`)")
export class CreateCoupon implements IReturn<IdResponse>, ICreateDb<Coupon>
{
    // @Validate(Validator="NotEmpty")
    public description: string;

    // @Validate(Validator="GreaterThan(0)")
    public discount: number;

    // @Validate(Validator="NotNull")
    public expiryDate: string;

    public constructor(init?: Partial<CreateCoupon>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateCoupon'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/coupons/{Id}", "PATCH")
// @ValidateRequest(Validator="HasRole(`Employee`)")
export class UpdateCoupon implements IReturn<IdResponse>, IPatchDb<Coupon>
{
    public id: string;
    // @Validate(Validator="NotEmpty")
    public description: string;

    // @Validate(Validator="NotNull")
    // @Validate(Validator="GreaterThan(0)")
    public discount: number;

    // @Validate(Validator="NotNull")
    public expiryDate: string;

    public constructor(init?: Partial<UpdateCoupon>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateCoupon'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new IdResponse(); }
}

/** @description Delete a Coupon */
// @Route("/coupons/{Id}", "DELETE")
// @ValidateRequest(Validator="HasRole(`Manager`)")
export class DeleteCoupon implements IReturnVoid, IDeleteDb<Coupon>
{
    public id: string;

    public constructor(init?: Partial<DeleteCoupon>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteCoupon'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() {}
}

export class CreateFileSystemItem implements IReturn<FileSystemItem>, ICreateDb<FileSystemItem>, IFileItem
{
    public fileAccessType?: FileAccessType;
    public file: FileSystemFile;

    public constructor(init?: Partial<CreateFileSystemItem>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateFileSystemItem'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new FileSystemItem(); }
}

export class CreatePlayer implements IReturn<IdResponse>, ICreateDb<Player>
{
    // @Validate(Validator="NotEmpty")
    public firstName: string;

    public lastName?: string;
    public email?: string;
    public phoneNumbers?: Phone[];
    // @Validate(Validator="NotNull")
    public profileId: number;

    public savedLevelId?: string;

    public constructor(init?: Partial<CreatePlayer>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreatePlayer'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

export class UpdatePlayer implements IReturn<IdResponse>, IPatchDb<Player>
{
    public id: number;
    // @Validate(Validator="NotEmpty")
    public firstName: string;

    public lastName?: string;
    public email?: string;
    public phoneNumbers?: Phone[];
    public profileId?: number;
    public savedLevelId?: string;
    public capital: string;

    public constructor(init?: Partial<UpdatePlayer>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdatePlayer'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new IdResponse(); }
}

export class DeletePlayer implements IReturnVoid, IDeleteDb<Player>
{
    public id: number;

    public constructor(init?: Partial<DeletePlayer>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeletePlayer'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() {}
}

export class CreateProfile implements IReturn<IdResponse>, ICreateDb<Profile>
{
    public role: PlayerRole;
    public region: PlayerRegion;
    // @Validate(Validator="NotEmpty")
    public username: string;

    public highScore: number;
    public gamesPlayed: number;
    // @Validate(Validator="InclusiveBetween(0,100)")
    public energy: number;

    public profileUrl?: string;
    public coverUrl?: string;

    public constructor(init?: Partial<CreateProfile>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateProfile'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

export class UpdateProfile implements IReturn<IdResponse>, IPatchDb<Profile>
{
    public id: number;
    public role?: PlayerRole;
    public region?: PlayerRegion;
    public username?: string;
    public highScore?: number;
    public gamesPlayed?: number;
    // @Validate(Validator="InclusiveBetween(0,100)")
    public energy?: number;

    public profileUrl?: string;
    public coverUrl?: string;

    public constructor(init?: Partial<UpdateProfile>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateProfile'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new IdResponse(); }
}

export class DeleteProfile implements IReturnVoid, IDeleteDb<Profile>
{
    public id: number;

    public constructor(init?: Partial<DeleteProfile>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteProfile'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() {}
}

export class CreateGameItem implements IReturn<IdResponse>, ICreateDb<GameItem>
{
    // @Validate(Validator="NotEmpty")
    public name: string;

    // @Validate(Validator="NotEmpty")
    public description: string;

    // @Validate(Validator="NotEmpty")
    public imageUrl: string;

    public constructor(init?: Partial<CreateGameItem>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateGameItem'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

export class UpdateGameItem implements IReturn<IdResponse>, IPatchDb<GameItem>
{
    // @Validate(Validator="NotEmpty")
    public name: string;

    // @Validate(Validator="NotEmpty")
    public description: string;

    public imageUrl?: string;

    public constructor(init?: Partial<UpdateGameItem>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateGameItem'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new IdResponse(); }
}

export class DeleteGameItem implements IReturnVoid, IDeleteDb<GameItem>
{
    // @Validate(Validator="NotEmpty")
    public name: string;

    public constructor(init?: Partial<DeleteGameItem>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteGameItem'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() {}
}

export class CreateMqBooking extends AuditBase implements IReturn<IdResponse>, ICreateDb<Booking>
{
    /** @description Name this Booking is for */
    // @Validate(Validator="NotEmpty")
    public name: string;

    public roomType: RoomType;
    // @Validate(Validator="GreaterThan(0)")
    public roomNumber: number;

    // @Validate(Validator="GreaterThan(0)")
    public cost: number;

    public bookingStartDate: string;
    public bookingEndDate?: string;
    public notes?: string;

    public constructor(init?: Partial<CreateMqBooking>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateMqBooking'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/orderdetails/{Id}", "PATCH")
// @DataContract
export class PatchOrderDetail implements IReturn<IdResponse>, IPatch, IPatchDb<OrderDetail>
{
    // @DataMember(Order=1)
    public id: string;

    // @DataMember(Order=2)
    public orderId: number;

    // @DataMember(Order=3)
    public productId: number;

    // @DataMember(Order=4)
    public unitPrice: number;

    // @DataMember(Order=5)
    public quantity: number;

    // @DataMember(Order=6)
    public discount: number;

    public constructor(init?: Partial<PatchOrderDetail>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'PatchOrderDetail'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/products/{Id}", "PATCH")
// @DataContract
export class PatchProduct implements IReturn<IdResponse>, IPatch, IPatchDb<Product>
{
    // @DataMember(Order=1)
    public id: number;

    // @DataMember(Order=2)
    public productName: string;

    // @DataMember(Order=3)
    public supplierId: number;

    // @DataMember(Order=4)
    public categoryId: number;

    // @DataMember(Order=5)
    public quantityPerUnit: string;

    // @DataMember(Order=6)
    public unitPrice: number;

    // @DataMember(Order=7)
    public unitsInStock: number;

    // @DataMember(Order=8)
    public unitsOnOrder: number;

    // @DataMember(Order=9)
    public reorderLevel: number;

    // @DataMember(Order=10)
    public discontinued: number;

    public constructor(init?: Partial<PatchProduct>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'PatchProduct'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/regions/{Id}", "PATCH")
// @DataContract
export class PatchRegion implements IReturn<IdResponse>, IPatch, IPatchDb<Region>
{
    // @DataMember(Order=1)
    public id: number;

    // @DataMember(Order=2)
    public regionDescription: string;

    public constructor(init?: Partial<PatchRegion>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'PatchRegion'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/shippers/{Id}", "PATCH")
// @DataContract
export class PatchShipper implements IReturn<IdResponse>, IPatch, IPatchDb<Shipper>
{
    // @DataMember(Order=1)
    public id: number;

    // @DataMember(Order=2)
    public companyName: string;

    // @DataMember(Order=3)
    public phone: string;

    public constructor(init?: Partial<PatchShipper>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'PatchShipper'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/suppliers/{Id}", "PATCH")
// @DataContract
export class PatchSupplier implements IReturn<IdResponse>, IPatch, IPatchDb<Supplier>
{
    // @DataMember(Order=1)
    public id: number;

    // @DataMember(Order=2)
    public companyName: string;

    // @DataMember(Order=3)
    public contactName: string;

    // @DataMember(Order=4)
    public contactTitle: string;

    // @DataMember(Order=5)
    public address: string;

    // @DataMember(Order=6)
    public city: string;

    // @DataMember(Order=7)
    public region: string;

    // @DataMember(Order=8)
    public postalCode: string;

    // @DataMember(Order=9)
    public country: string;

    // @DataMember(Order=10)
    public phone: string;

    // @DataMember(Order=11)
    public fax: string;

    // @DataMember(Order=12)
    public homePage: string;

    public constructor(init?: Partial<PatchSupplier>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'PatchSupplier'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/territories/{Id}", "PATCH")
// @DataContract
export class PatchTerritory implements IReturn<IdResponse>, IPatch, IPatchDb<Territory>
{
    // @DataMember(Order=1)
    public id: string;

    // @DataMember(Order=2)
    public territoryDescription: string;

    // @DataMember(Order=3)
    public regionId: number;

    public constructor(init?: Partial<PatchTerritory>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'PatchTerritory'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/userauthroles/{Id}", "PATCH")
// @ValidateRequest(Validator="IsAdmin")
// @DataContract
export class PatchUserAuthRole implements IReturn<IdResponse>, IPatch, IPatchDb<UserAuthRole>
{
    // @DataMember(Order=1)
    public id: number;

    // @DataMember(Order=2)
    public userAuthId: number;

    // @DataMember(Order=3)
    public role: string;

    // @DataMember(Order=4)
    public permission: string;

    // @DataMember(Order=5)
    public createdDate: string;

    // @DataMember(Order=6)
    public modifiedDate: string;

    // @DataMember(Order=7)
    public refId?: number;

    // @DataMember(Order=8)
    public refIdStr: string;

    // @DataMember(Order=9)
    public meta: string;

    public constructor(init?: Partial<PatchUserAuthRole>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'PatchUserAuthRole'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/validationrules/{Id}", "PATCH")
// @DataContract
export class PatchValidationRule implements IReturn<IdResponse>, IPatch, IPatchDb<ValidationRule>
{
    // @DataMember(Order=1)
    public id: number;

    // @DataMember(Order=2)
    public type: string;

    // @DataMember(Order=3)
    public field: string;

    // @DataMember(Order=4)
    public createdBy: string;

    // @DataMember(Order=5)
    public createdDate: string;

    // @DataMember(Order=6)
    public modifiedBy: string;

    // @DataMember(Order=7)
    public modifiedDate: string;

    // @DataMember(Order=8)
    public suspendedBy: string;

    // @DataMember(Order=9)
    public suspendedDate: string;

    // @DataMember(Order=10)
    public notes: string;

    // @DataMember(Order=11)
    public validator: string;

    // @DataMember(Order=12)
    public condition: string;

    // @DataMember(Order=13)
    public errorCode: string;

    // @DataMember(Order=14)
    public message: string;

    public constructor(init?: Partial<PatchValidationRule>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'PatchValidationRule'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/appusers/{Id}", "PUT")
// @ValidateRequest(Validator="IsAdmin")
// @DataContract
export class UpdateAppUser implements IReturn<IdResponse>, IPut, IUpdateDb<AppUser>
{
    // @DataMember(Order=1)
    public id: number;

    // @DataMember(Order=2)
    public displayName: string;

    // @DataMember(Order=3)
    public email: string;

    // @DataMember(Order=4)
    public profileUrl: string;

    // @DataMember(Order=5)
    public department: string;

    // @DataMember(Order=6)
    public title: string;

    // @DataMember(Order=7)
    public jobArea: string;

    // @DataMember(Order=8)
    public location: string;

    // @DataMember(Order=9)
    public salary: number;

    // @DataMember(Order=10)
    public about: string;

    // @DataMember(Order=11)
    public isArchived: number;

    // @DataMember(Order=12)
    public archivedDate: string;

    // @DataMember(Order=13)
    public lastLoginDate: string;

    // @DataMember(Order=14)
    public lastLoginIp: string;

    // @DataMember(Order=15)
    public userName: string;

    // @DataMember(Order=16)
    public primaryEmail: string;

    // @DataMember(Order=17)
    public firstName: string;

    // @DataMember(Order=18)
    public lastName: string;

    // @DataMember(Order=19)
    public company: string;

    // @DataMember(Order=20)
    public country: string;

    // @DataMember(Order=21)
    public phoneNumber: string;

    // @DataMember(Order=22)
    public birthDate: string;

    // @DataMember(Order=23)
    public birthDateRaw: string;

    // @DataMember(Order=24)
    public address: string;

    // @DataMember(Order=25)
    public address2: string;

    // @DataMember(Order=26)
    public city: string;

    // @DataMember(Order=27)
    public state: string;

    // @DataMember(Order=28)
    public culture: string;

    // @DataMember(Order=29)
    public fullName: string;

    // @DataMember(Order=30)
    public gender: string;

    // @DataMember(Order=31)
    public language: string;

    // @DataMember(Order=32)
    public mailAddress: string;

    // @DataMember(Order=33)
    public nickname: string;

    // @DataMember(Order=34)
    public postalCode: string;

    // @DataMember(Order=35)
    public timeZone: string;

    // @DataMember(Order=36)
    public salt: string;

    // @DataMember(Order=37)
    public passwordHash: string;

    // @DataMember(Order=38)
    public digestHa1Hash: string;

    // @DataMember(Order=39)
    public roles: string;

    // @DataMember(Order=40)
    public permissions: string;

    // @DataMember(Order=41)
    public createdDate: string;

    // @DataMember(Order=42)
    public modifiedDate: string;

    // @DataMember(Order=43)
    public invalidLoginAttempts: number;

    // @DataMember(Order=44)
    public lastLoginAttempt: string;

    // @DataMember(Order=45)
    public lockedDate: string;

    // @DataMember(Order=46)
    public recoveryToken: string;

    // @DataMember(Order=47)
    public refId?: number;

    // @DataMember(Order=48)
    public refIdStr: string;

    // @DataMember(Order=49)
    public meta: string;

    public constructor(init?: Partial<UpdateAppUser>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateAppUser'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/categories/{Id}", "PUT")
// @DataContract
export class UpdateCategory implements IReturn<IdResponse>, IPut, IUpdateDb<Category>
{
    // @DataMember(Order=1)
    public id: number;

    // @DataMember(Order=2)
    public categoryName: string;

    // @DataMember(Order=3)
    public description: string;

    public constructor(init?: Partial<UpdateCategory>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateCategory'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/customers/{Id}", "PUT")
// @DataContract
export class UpdateCustomer implements IReturn<IdResponse>, IPut, IUpdateDb<Customer>
{
    // @DataMember(Order=1)
    public id: string;

    // @DataMember(Order=2)
    public companyName: string;

    // @DataMember(Order=3)
    public contactName: string;

    // @DataMember(Order=4)
    public contactTitle: string;

    // @DataMember(Order=5)
    public address: string;

    // @DataMember(Order=6)
    public city: string;

    // @DataMember(Order=7)
    public region: string;

    // @DataMember(Order=8)
    public postalCode: string;

    // @DataMember(Order=9)
    public country: string;

    // @DataMember(Order=10)
    public phone: string;

    // @DataMember(Order=11)
    public fax: string;

    public constructor(init?: Partial<UpdateCustomer>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateCustomer'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/employees/{Id}", "PUT")
// @DataContract
export class UpdateEmployee implements IReturn<IdResponse>, IPut, IUpdateDb<Employee>
{
    // @DataMember(Order=1)
    public id: number;

    // @DataMember(Order=2)
    public lastName: string;

    // @DataMember(Order=3)
    public firstName: string;

    // @DataMember(Order=4)
    public title: string;

    // @DataMember(Order=5)
    public titleOfCourtesy: string;

    // @DataMember(Order=6)
    public birthDate: string;

    // @DataMember(Order=7)
    public hireDate: string;

    // @DataMember(Order=8)
    public address: string;

    // @DataMember(Order=9)
    public city: string;

    // @DataMember(Order=10)
    public region: string;

    // @DataMember(Order=11)
    public postalCode: string;

    // @DataMember(Order=12)
    public country: string;

    // @DataMember(Order=13)
    public homePhone: string;

    // @DataMember(Order=14)
    public extension: string;

    // @DataMember(Order=15)
    public photo: string;

    // @DataMember(Order=16)
    public notes: string;

    // @DataMember(Order=17)
    public reportsTo?: number;

    // @DataMember(Order=18)
    public photoPath: string;

    public constructor(init?: Partial<UpdateEmployee>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateEmployee'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/employeeterritories/{Id}", "PUT")
// @DataContract
export class UpdateEmployeeTerritory implements IReturn<IdResponse>, IPut, IUpdateDb<EmployeeTerritory>
{
    // @DataMember(Order=1)
    public id: string;

    // @DataMember(Order=2)
    public employeeId: number;

    // @DataMember(Order=3)
    public territoryId: string;

    public constructor(init?: Partial<UpdateEmployeeTerritory>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateEmployeeTerritory'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/filesystemfiles/{Id}", "PUT")
// @DataContract
export class UpdateFileSystemFile implements IReturn<IdResponse>, IPut, IUpdateDb<FileSystemFile>
{
    // @DataMember(Order=1)
    public id: number;

    // @DataMember(Order=2)
    public fileName: string;

    // @DataMember(Order=3)
    public filePath: string;

    // @DataMember(Order=4)
    public contentType: string;

    // @DataMember(Order=5)
    public contentLength: number;

    // @DataMember(Order=6)
    public fileSystemItemId: number;

    public constructor(init?: Partial<UpdateFileSystemFile>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateFileSystemFile'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/filesystemitems/{Id}", "PUT")
// @DataContract
export class UpdateFileSystemItem implements IReturn<IdResponse>, IPut, IUpdateDb<FileSystemItem>
{
    // @DataMember(Order=1)
    public id: number;

    // @DataMember(Order=2)
    public fileAccessType: string;

    // @DataMember(Order=3)
    public appUserId: number;

    public constructor(init?: Partial<UpdateFileSystemItem>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateFileSystemItem'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/migrations/{Id}", "PUT")
// @DataContract
export class UpdateMigration implements IReturn<IdResponse>, IPut, IUpdateDb<Migration>
{
    // @DataMember(Order=1)
    public id: number;

    // @DataMember(Order=2)
    public name: string;

    // @DataMember(Order=3)
    public description: string;

    // @DataMember(Order=4)
    public createdDate: string;

    // @DataMember(Order=5)
    public completedDate: string;

    // @DataMember(Order=6)
    public connectionString: string;

    // @DataMember(Order=7)
    public namedConnection: string;

    // @DataMember(Order=8)
    public log: string;

    // @DataMember(Order=9)
    public errorCode: string;

    // @DataMember(Order=10)
    public errorMessage: string;

    // @DataMember(Order=11)
    public errorStackTrace: string;

    // @DataMember(Order=12)
    public meta: string;

    public constructor(init?: Partial<UpdateMigration>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateMigration'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/orders/{Id}", "PUT")
// @DataContract
export class UpdateOrder implements IReturn<IdResponse>, IPut, IUpdateDb<Order>
{
    // @DataMember(Order=1)
    public id: number;

    // @DataMember(Order=2)
    public customerId: string;

    // @DataMember(Order=3)
    public employeeId: number;

    // @DataMember(Order=4)
    public orderDate: string;

    // @DataMember(Order=5)
    public requiredDate: string;

    // @DataMember(Order=6)
    public shippedDate: string;

    // @DataMember(Order=7)
    public shipVia?: number;

    // @DataMember(Order=8)
    public freight: number;

    // @DataMember(Order=9)
    public shipName: string;

    // @DataMember(Order=10)
    public shipAddress: string;

    // @DataMember(Order=11)
    public shipCity: string;

    // @DataMember(Order=12)
    public shipRegion: string;

    // @DataMember(Order=13)
    public shipPostalCode: string;

    // @DataMember(Order=14)
    public shipCountry: string;

    public constructor(init?: Partial<UpdateOrder>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateOrder'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/orderdetails/{Id}", "PUT")
// @DataContract
export class UpdateOrderDetail implements IReturn<IdResponse>, IPut, IUpdateDb<OrderDetail>
{
    // @DataMember(Order=1)
    public id: string;

    // @DataMember(Order=2)
    public orderId: number;

    // @DataMember(Order=3)
    public productId: number;

    // @DataMember(Order=4)
    public unitPrice: number;

    // @DataMember(Order=5)
    public quantity: number;

    // @DataMember(Order=6)
    public discount: number;

    public constructor(init?: Partial<UpdateOrderDetail>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateOrderDetail'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/products/{Id}", "PUT")
// @DataContract
export class UpdateProduct implements IReturn<IdResponse>, IPut, IUpdateDb<Product>
{
    // @DataMember(Order=1)
    public id: number;

    // @DataMember(Order=2)
    public productName: string;

    // @DataMember(Order=3)
    public supplierId: number;

    // @DataMember(Order=4)
    public categoryId: number;

    // @DataMember(Order=5)
    public quantityPerUnit: string;

    // @DataMember(Order=6)
    public unitPrice: number;

    // @DataMember(Order=7)
    public unitsInStock: number;

    // @DataMember(Order=8)
    public unitsOnOrder: number;

    // @DataMember(Order=9)
    public reorderLevel: number;

    // @DataMember(Order=10)
    public discontinued: number;

    public constructor(init?: Partial<UpdateProduct>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateProduct'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/regions/{Id}", "PUT")
// @DataContract
export class UpdateRegion implements IReturn<IdResponse>, IPut, IUpdateDb<Region>
{
    // @DataMember(Order=1)
    public id: number;

    // @DataMember(Order=2)
    public regionDescription: string;

    public constructor(init?: Partial<UpdateRegion>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateRegion'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/shippers/{Id}", "PUT")
// @DataContract
export class UpdateShipper implements IReturn<IdResponse>, IPut, IUpdateDb<Shipper>
{
    // @DataMember(Order=1)
    public id: number;

    // @DataMember(Order=2)
    public companyName: string;

    // @DataMember(Order=3)
    public phone: string;

    public constructor(init?: Partial<UpdateShipper>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateShipper'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/suppliers/{Id}", "PUT")
// @DataContract
export class UpdateSupplier implements IReturn<IdResponse>, IPut, IUpdateDb<Supplier>
{
    // @DataMember(Order=1)
    public id: number;

    // @DataMember(Order=2)
    public companyName: string;

    // @DataMember(Order=3)
    public contactName: string;

    // @DataMember(Order=4)
    public contactTitle: string;

    // @DataMember(Order=5)
    public address: string;

    // @DataMember(Order=6)
    public city: string;

    // @DataMember(Order=7)
    public region: string;

    // @DataMember(Order=8)
    public postalCode: string;

    // @DataMember(Order=9)
    public country: string;

    // @DataMember(Order=10)
    public phone: string;

    // @DataMember(Order=11)
    public fax: string;

    // @DataMember(Order=12)
    public homePage: string;

    public constructor(init?: Partial<UpdateSupplier>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateSupplier'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/territories/{Id}", "PUT")
// @DataContract
export class UpdateTerritory implements IReturn<IdResponse>, IPut, IUpdateDb<Territory>
{
    // @DataMember(Order=1)
    public id: string;

    // @DataMember(Order=2)
    public territoryDescription: string;

    // @DataMember(Order=3)
    public regionId: number;

    public constructor(init?: Partial<UpdateTerritory>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateTerritory'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/userauthroles/{Id}", "PUT")
// @ValidateRequest(Validator="IsAdmin")
// @DataContract
export class UpdateUserAuthRole implements IReturn<IdResponse>, IPut, IUpdateDb<UserAuthRole>
{
    // @DataMember(Order=1)
    public id: number;

    // @DataMember(Order=2)
    public userAuthId: number;

    // @DataMember(Order=3)
    public role: string;

    // @DataMember(Order=4)
    public permission: string;

    // @DataMember(Order=5)
    public createdDate: string;

    // @DataMember(Order=6)
    public modifiedDate: string;

    // @DataMember(Order=7)
    public refId?: number;

    // @DataMember(Order=8)
    public refIdStr: string;

    // @DataMember(Order=9)
    public meta: string;

    public constructor(init?: Partial<UpdateUserAuthRole>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateUserAuthRole'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/validationrules/{Id}", "PUT")
// @DataContract
export class UpdateValidationRule implements IReturn<IdResponse>, IPut, IUpdateDb<ValidationRule>
{
    // @DataMember(Order=1)
    public id: number;

    // @DataMember(Order=2)
    public type: string;

    // @DataMember(Order=3)
    public field: string;

    // @DataMember(Order=4)
    public createdBy: string;

    // @DataMember(Order=5)
    public createdDate: string;

    // @DataMember(Order=6)
    public modifiedBy: string;

    // @DataMember(Order=7)
    public modifiedDate: string;

    // @DataMember(Order=8)
    public suspendedBy: string;

    // @DataMember(Order=9)
    public suspendedDate: string;

    // @DataMember(Order=10)
    public notes: string;

    // @DataMember(Order=11)
    public validator: string;

    // @DataMember(Order=12)
    public condition: string;

    // @DataMember(Order=13)
    public errorCode: string;

    // @DataMember(Order=14)
    public message: string;

    public constructor(init?: Partial<UpdateValidationRule>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateValidationRule'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/albums", "POST")
export class CreateAlbums implements IReturn<IdResponse>, IPost, ICreateDb<Albums>
{
    // @Validate(Validator="NotEmpty")
    public title: string;

    // @Validate(Validator="GreaterThan(0)")
    public artistId: number;

    public constructor(init?: Partial<CreateAlbums>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateAlbums'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/artists", "POST")
export class CreateArtists implements IReturn<IdResponse>, IPost, ICreateDb<Artists>
{
    public name: string;

    public constructor(init?: Partial<CreateArtists>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateArtists'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/customers", "POST")
export class CreateChinookCustomer implements IReturn<IdResponse>, IPost, ICreateDb<Customers>
{
    public firstName: string;
    public lastName: string;
    public company: string;
    public address: string;
    public city: string;
    public state: string;
    public country: string;
    public postalCode: string;
    public phone: string;
    public fax: string;
    public email: string;
    public supportRepId?: number;

    public constructor(init?: Partial<CreateChinookCustomer>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateChinookCustomer'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/employees", "POST")
export class CreateChinookEmployee implements IReturn<IdResponse>, IPost, ICreateDb<Employees>
{
    public lastName: string;
    public firstName: string;
    public title: string;
    public reportsTo?: number;
    public birthDate?: string;
    public hireDate?: string;
    public address: string;
    public city: string;
    public state: string;
    public country: string;
    public postalCode: string;
    public phone: string;
    public fax: string;
    public email: string;

    public constructor(init?: Partial<CreateChinookEmployee>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateChinookEmployee'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/genres", "POST")
export class CreateGenres implements IReturn<IdResponse>, IPost, ICreateDb<Genres>
{
    public name: string;

    public constructor(init?: Partial<CreateGenres>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateGenres'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/invoiceitems", "POST")
export class CreateInvoiceItems implements IReturn<IdResponse>, IPost, ICreateDb<InvoiceItems>
{
    public invoiceId: number;
    public trackId: number;
    public unitPrice: number;
    public quantity: number;

    public constructor(init?: Partial<CreateInvoiceItems>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateInvoiceItems'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/invoices", "POST")
export class CreateInvoices implements IReturn<IdResponse>, IPost, ICreateDb<Invoices>
{
    public customerId: number;
    public invoiceDate: string;
    public billingAddress: string;
    public billingCity: string;
    public billingState: string;
    public billingCountry: string;
    public billingPostalCode: string;
    public total: number;

    public constructor(init?: Partial<CreateInvoices>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateInvoices'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/mediatypes", "POST")
export class CreateMediaTypes implements IReturn<IdResponse>, IPost, ICreateDb<MediaTypes>
{
    public name: string;

    public constructor(init?: Partial<CreateMediaTypes>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateMediaTypes'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/playlists", "POST")
export class CreatePlaylists implements IReturn<IdResponse>, IPost, ICreateDb<Playlists>
{
    public name: string;

    public constructor(init?: Partial<CreatePlaylists>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreatePlaylists'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/tracks", "POST")
export class CreateTracks implements IReturn<IdResponse>, IPost, ICreateDb<Tracks>
{
    public name: string;
    public albumId?: number;
    public mediaTypeId: number;
    public genreId?: number;
    public composer: string;
    public milliseconds: number;
    public bytes?: number;
    public unitPrice: number;

    public constructor(init?: Partial<CreateTracks>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateTracks'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/albums/{AlbumId}", "DELETE")
export class DeleteAlbums implements IReturn<IdResponse>, IDelete, IDeleteDb<Albums>
{
    public albumId: number;

    public constructor(init?: Partial<DeleteAlbums>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteAlbums'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/artists/{ArtistId}", "DELETE")
export class DeleteArtists implements IReturn<IdResponse>, IDelete, IDeleteDb<Artists>
{
    public artistId: number;

    public constructor(init?: Partial<DeleteArtists>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteArtists'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/customers/{CustomerId}", "DELETE")
export class DeleteChinookCustomer implements IReturn<IdResponse>, IDelete, IDeleteDb<Customers>
{
    public customerId: number;

    public constructor(init?: Partial<DeleteChinookCustomer>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteChinookCustomer'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/employees/{EmployeeId}", "DELETE")
export class DeleteChinookEmployee implements IReturn<IdResponse>, IDelete, IDeleteDb<Employees>
{
    public employeeId: number;

    public constructor(init?: Partial<DeleteChinookEmployee>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteChinookEmployee'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/genres/{GenreId}", "DELETE")
export class DeleteGenres implements IReturn<IdResponse>, IDelete, IDeleteDb<Genres>
{
    public genreId: number;

    public constructor(init?: Partial<DeleteGenres>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteGenres'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/invoiceitems/{InvoiceLineId}", "DELETE")
export class DeleteInvoiceItems implements IReturn<IdResponse>, IDelete, IDeleteDb<InvoiceItems>
{
    public invoiceLineId: number;

    public constructor(init?: Partial<DeleteInvoiceItems>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteInvoiceItems'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/invoices/{InvoiceId}", "DELETE")
export class DeleteInvoices implements IReturn<IdResponse>, IDelete, IDeleteDb<Invoices>
{
    public invoiceId: number;

    public constructor(init?: Partial<DeleteInvoices>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteInvoices'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/mediatypes/{MediaTypeId}", "DELETE")
export class DeleteMediaTypes implements IReturn<IdResponse>, IDelete, IDeleteDb<MediaTypes>
{
    public mediaTypeId: number;

    public constructor(init?: Partial<DeleteMediaTypes>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteMediaTypes'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/playlists/{PlaylistId}", "DELETE")
export class DeletePlaylists implements IReturn<IdResponse>, IDelete, IDeleteDb<Playlists>
{
    public playlistId: number;

    public constructor(init?: Partial<DeletePlaylists>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeletePlaylists'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/tracks/{TrackId}", "DELETE")
export class DeleteTracks implements IReturn<IdResponse>, IDelete, IDeleteDb<Tracks>
{
    public trackId: number;

    public constructor(init?: Partial<DeleteTracks>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteTracks'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/albums/{AlbumId}", "PATCH")
export class PatchAlbums implements IReturn<IdResponse>, IPatch, IPatchDb<Albums>
{
    public albumId: number;
    public title: string;
    public artistId: number;

    public constructor(init?: Partial<PatchAlbums>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'PatchAlbums'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/artists/{ArtistId}", "PATCH")
export class PatchArtists implements IReturn<IdResponse>, IPatch, IPatchDb<Artists>
{
    public artistId: number;
    public name: string;

    public constructor(init?: Partial<PatchArtists>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'PatchArtists'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/customers/{CustomerId}", "PATCH")
export class PatchChinookCustomer implements IReturn<IdResponse>, IPatch, IPatchDb<Customers>
{
    public customerId: number;
    public firstName: string;
    public lastName: string;
    public company: string;
    public address: string;
    public city: string;
    public state: string;
    public country: string;
    public postalCode: string;
    public phone: string;
    public fax: string;
    public email: string;
    public supportRepId?: number;

    public constructor(init?: Partial<PatchChinookCustomer>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'PatchChinookCustomer'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/employees/{EmployeeId}", "PATCH")
export class PatchChinookEmployee implements IReturn<IdResponse>, IPatch, IPatchDb<Employees>
{
    public employeeId: number;
    public lastName: string;
    public firstName: string;
    public title: string;
    public reportsTo?: number;
    public birthDate?: string;
    public hireDate?: string;
    public address: string;
    public city: string;
    public state: string;
    public country: string;
    public postalCode: string;
    public phone: string;
    public fax: string;
    public email: string;

    public constructor(init?: Partial<PatchChinookEmployee>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'PatchChinookEmployee'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/genres/{GenreId}", "PATCH")
export class PatchGenres implements IReturn<IdResponse>, IPatch, IPatchDb<Genres>
{
    public genreId: number;
    public name: string;

    public constructor(init?: Partial<PatchGenres>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'PatchGenres'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/invoiceitems/{InvoiceLineId}", "PATCH")
export class PatchInvoiceItems implements IReturn<IdResponse>, IPatch, IPatchDb<InvoiceItems>
{
    public invoiceLineId: number;
    public invoiceId: number;
    public trackId: number;
    public unitPrice: number;
    public quantity: number;

    public constructor(init?: Partial<PatchInvoiceItems>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'PatchInvoiceItems'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/invoices/{InvoiceId}", "PATCH")
export class PatchInvoices implements IReturn<IdResponse>, IPatch, IPatchDb<Invoices>
{
    public invoiceId: number;
    public customerId: number;
    public invoiceDate: string;
    public billingAddress: string;
    public billingCity: string;
    public billingState: string;
    public billingCountry: string;
    public billingPostalCode: string;
    public total: number;

    public constructor(init?: Partial<PatchInvoices>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'PatchInvoices'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/mediatypes/{MediaTypeId}", "PATCH")
export class PatchMediaTypes implements IReturn<IdResponse>, IPatch, IPatchDb<MediaTypes>
{
    public mediaTypeId: number;
    public name: string;

    public constructor(init?: Partial<PatchMediaTypes>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'PatchMediaTypes'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/playlists/{PlaylistId}", "PATCH")
export class PatchPlaylists implements IReturn<IdResponse>, IPatch, IPatchDb<Playlists>
{
    public playlistId: number;
    public name: string;

    public constructor(init?: Partial<PatchPlaylists>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'PatchPlaylists'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/tracks/{TrackId}", "PATCH")
export class PatchTracks implements IReturn<IdResponse>, IPatch, IPatchDb<Tracks>
{
    public trackId: number;
    public name: string;
    public albumId?: number;
    public mediaTypeId: number;
    public genreId?: number;
    public composer: string;
    public milliseconds: number;
    public bytes?: number;
    public unitPrice: number;

    public constructor(init?: Partial<PatchTracks>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'PatchTracks'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/albums/{AlbumId}", "PUT")
export class UpdateAlbums implements IReturn<IdResponse>, IPut, IUpdateDb<Albums>
{
    public albumId: number;
    public title: string;
    public artistId: number;

    public constructor(init?: Partial<UpdateAlbums>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateAlbums'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/artists/{ArtistId}", "PUT")
export class UpdateArtists implements IReturn<IdResponse>, IPut, IUpdateDb<Artists>
{
    public artistId: number;
    public name: string;

    public constructor(init?: Partial<UpdateArtists>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateArtists'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/customers/{CustomerId}", "PUT")
export class UpdateChinookCustomer implements IReturn<IdResponse>, IPut, IUpdateDb<Customers>
{
    public customerId: number;
    public firstName: string;
    public lastName: string;
    public company: string;
    public address: string;
    public city: string;
    public state: string;
    public country: string;
    public postalCode: string;
    public phone: string;
    public fax: string;
    public email: string;
    public supportRepId?: number;

    public constructor(init?: Partial<UpdateChinookCustomer>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateChinookCustomer'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/employees/{EmployeeId}", "PUT")
export class UpdateChinookEmployee implements IReturn<IdResponse>, IPut, IUpdateDb<Employees>
{
    public employeeId: number;
    public lastName: string;
    public firstName: string;
    public title: string;
    public reportsTo?: number;
    public birthDate?: string;
    public hireDate?: string;
    public address: string;
    public city: string;
    public state: string;
    public country: string;
    public postalCode: string;
    public phone: string;
    public fax: string;
    public email: string;

    public constructor(init?: Partial<UpdateChinookEmployee>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateChinookEmployee'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/genres/{GenreId}", "PUT")
export class UpdateGenres implements IReturn<IdResponse>, IPut, IUpdateDb<Genres>
{
    public genreId: number;
    public name: string;

    public constructor(init?: Partial<UpdateGenres>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateGenres'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/invoiceitems/{InvoiceLineId}", "PUT")
export class UpdateInvoiceItems implements IReturn<IdResponse>, IPut, IUpdateDb<InvoiceItems>
{
    public invoiceLineId: number;
    public invoiceId: number;
    public trackId: number;
    public unitPrice: number;
    public quantity: number;

    public constructor(init?: Partial<UpdateInvoiceItems>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateInvoiceItems'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/invoices/{InvoiceId}", "PUT")
export class UpdateInvoices implements IReturn<IdResponse>, IPut, IUpdateDb<Invoices>
{
    public invoiceId: number;
    public customerId: number;
    public invoiceDate: string;
    public billingAddress: string;
    public billingCity: string;
    public billingState: string;
    public billingCountry: string;
    public billingPostalCode: string;
    public total: number;

    public constructor(init?: Partial<UpdateInvoices>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateInvoices'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/mediatypes/{MediaTypeId}", "PUT")
export class UpdateMediaTypes implements IReturn<IdResponse>, IPut, IUpdateDb<MediaTypes>
{
    public mediaTypeId: number;
    public name: string;

    public constructor(init?: Partial<UpdateMediaTypes>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdateMediaTypes'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/playlists/{PlaylistId}", "PUT")
export class UpdatePlaylists implements IReturn<IdResponse>, IPut, IUpdateDb<Playlists>
{
    public playlistId: number;
    public name: string;

    public constructor(init?: Partial<UpdatePlaylists>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'UpdatePlaylists'; }
    public getMethod() { return 'PUT'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/appusers", "GET")
// @Route("/appusers/{Id}", "GET")
// @ValidateRequest(Validator="IsAdmin")
// @DataContract
export class QueryAppUsers extends QueryDb<AppUser> implements IReturn<QueryResponse<AppUser>>, IGet
{
    // @DataMember(Order=1)
    public id?: number;

    public constructor(init?: Partial<QueryAppUsers>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryAppUsers'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<AppUser>(); }
}

// @Route("/categories", "GET")
// @Route("/categories/{Id}", "GET")
// @DataContract
export class QueryCategories extends QueryDb<Category> implements IReturn<QueryResponse<Category>>, IGet
{
    // @DataMember(Order=1)
    public id?: number;

    public constructor(init?: Partial<QueryCategories>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryCategories'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<Category>(); }
}

// @Route("/customers", "GET")
// @Route("/customers/{Id}", "GET")
// @DataContract
export class QueryCustomers extends QueryDb<Customer> implements IReturn<QueryResponse<Customer>>, IGet
{
    // @DataMember(Order=1)
    public id: string;

    public constructor(init?: Partial<QueryCustomers>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryCustomers'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<Customer>(); }
}

// @Route("/employees", "GET")
// @Route("/employees/{Id}", "GET")
// @DataContract
export class QueryEmployees extends QueryDb<Employee> implements IReturn<QueryResponse<Employee>>, IGet
{
    // @DataMember(Order=1)
    public id?: number;

    public constructor(init?: Partial<QueryEmployees>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryEmployees'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<Employee>(); }
}

// @Route("/employeeterritories", "GET")
// @Route("/employeeterritories/{Id}", "GET")
// @DataContract
export class QueryEmployeeTerritories extends QueryDb<EmployeeTerritory> implements IReturn<QueryResponse<EmployeeTerritory>>, IGet
{
    // @DataMember(Order=1)
    public id: string;

    public constructor(init?: Partial<QueryEmployeeTerritories>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryEmployeeTerritories'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<EmployeeTerritory>(); }
}

// @Route("/migrations", "GET")
// @Route("/migrations/{Id}", "GET")
// @DataContract
export class QueryMigrations extends QueryDb<Migration> implements IReturn<QueryResponse<Migration>>, IGet
{
    // @DataMember(Order=1)
    public id?: number;

    public constructor(init?: Partial<QueryMigrations>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryMigrations'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<Migration>(); }
}

// @Route("/orderdetails", "GET")
// @Route("/orderdetails/{Id}", "GET")
// @DataContract
export class QueryOrderDetails extends QueryDb<OrderDetail> implements IReturn<QueryResponse<OrderDetail>>, IGet
{
    // @DataMember(Order=1)
    public id: string;

    public constructor(init?: Partial<QueryOrderDetails>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryOrderDetails'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<OrderDetail>(); }
}

// @Route("/orders", "GET")
// @Route("/orders/{Id}", "GET")
// @DataContract
export class QueryOrders extends QueryDb<Order> implements IReturn<QueryResponse<Order>>, IGet
{
    // @DataMember(Order=1)
    public id?: number;

    public constructor(init?: Partial<QueryOrders>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryOrders'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<Order>(); }
}

// @Route("/products", "GET")
// @Route("/products/{Id}", "GET")
// @DataContract
export class QueryProducts extends QueryDb<Product> implements IReturn<QueryResponse<Product>>, IGet
{
    // @DataMember(Order=1)
    public id?: number;

    public constructor(init?: Partial<QueryProducts>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryProducts'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<Product>(); }
}

// @Route("/regions", "GET")
// @Route("/regions/{Id}", "GET")
// @DataContract
export class QueryRegions extends QueryDb<Region> implements IReturn<QueryResponse<Region>>, IGet
{
    // @DataMember(Order=1)
    public id?: number;

    public constructor(init?: Partial<QueryRegions>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryRegions'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<Region>(); }
}

// @Route("/shippers", "GET")
// @Route("/shippers/{Id}", "GET")
// @DataContract
export class QueryShippers extends QueryDb<Shipper> implements IReturn<QueryResponse<Shipper>>, IGet
{
    // @DataMember(Order=1)
    public id?: number;

    public constructor(init?: Partial<QueryShippers>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryShippers'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<Shipper>(); }
}

// @Route("/suppliers", "GET")
// @Route("/suppliers/{Id}", "GET")
// @DataContract
export class QuerySuppliers extends QueryDb<Supplier> implements IReturn<QueryResponse<Supplier>>, IGet
{
    // @DataMember(Order=1)
    public id?: number;

    public constructor(init?: Partial<QuerySuppliers>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QuerySuppliers'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<Supplier>(); }
}

// @Route("/territories", "GET")
// @Route("/territories/{Id}", "GET")
// @DataContract
export class QueryTerritories extends QueryDb<Territory> implements IReturn<QueryResponse<Territory>>, IGet
{
    // @DataMember(Order=1)
    public id: string;

    public constructor(init?: Partial<QueryTerritories>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryTerritories'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<Territory>(); }
}

// @Route("/userauthroles", "GET")
// @Route("/userauthroles/{Id}", "GET")
// @ValidateRequest(Validator="IsAdmin")
// @DataContract
export class QueryUserAuthRoles extends QueryDb<UserAuthRole> implements IReturn<QueryResponse<UserAuthRole>>, IGet
{
    // @DataMember(Order=1)
    public id?: number;

    public constructor(init?: Partial<QueryUserAuthRoles>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryUserAuthRoles'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<UserAuthRole>(); }
}

// @Route("/validationrules", "GET")
// @Route("/validationrules/{Id}", "GET")
// @DataContract
export class QueryValidationRules extends QueryDb<ValidationRule> implements IReturn<QueryResponse<ValidationRule>>, IGet
{
    // @DataMember(Order=1)
    public id?: number;

    public constructor(init?: Partial<QueryValidationRules>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryValidationRules'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<ValidationRule>(); }
}

// @Route("/albums", "GET")
// @Route("/albums/{AlbumId}", "GET")
export class QueryAlbums extends QueryDb<Albums> implements IReturn<QueryResponse<Albums>>, IGet
{
    public albumId?: number;

    public constructor(init?: Partial<QueryAlbums>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryAlbums'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<Albums>(); }
}

// @Route("/artists", "GET")
// @Route("/artists/{ArtistId}", "GET")
export class QueryArtists extends QueryDb<Artists> implements IReturn<QueryResponse<Artists>>, IGet
{
    public artistId?: number;
    public artistIdBetween: number[];
    public nameStartsWith: string;

    public constructor(init?: Partial<QueryArtists>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryArtists'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<Artists>(); }
}

// @Route("/customers", "GET")
// @Route("/customers/{CustomerId}", "GET")
export class QueryChinookCustomers extends QueryDb<Customers> implements IReturn<QueryResponse<Customers>>, IGet
{
    public customerId?: number;

    public constructor(init?: Partial<QueryChinookCustomers>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryChinookCustomers'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<Customers>(); }
}

// @Route("/employees", "GET")
// @Route("/employees/{EmployeeId}", "GET")
export class QueryChinookEmployees extends QueryDb<Employees> implements IReturn<QueryResponse<Employees>>, IGet
{
    public employeeId?: number;

    public constructor(init?: Partial<QueryChinookEmployees>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryChinookEmployees'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<Employees>(); }
}

// @Route("/genres", "GET")
// @Route("/genres/{GenreId}", "GET")
export class QueryGenres extends QueryDb<Genres> implements IReturn<QueryResponse<Genres>>, IGet
{
    public genreId?: number;

    public constructor(init?: Partial<QueryGenres>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryGenres'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<Genres>(); }
}

// @Route("/invoiceitems", "GET")
// @Route("/invoiceitems/{InvoiceLineId}", "GET")
export class QueryInvoiceItems extends QueryDb<InvoiceItems> implements IReturn<QueryResponse<InvoiceItems>>, IGet
{
    public invoiceLineId?: number;

    public constructor(init?: Partial<QueryInvoiceItems>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryInvoiceItems'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<InvoiceItems>(); }
}

// @Route("/invoices", "GET")
// @Route("/invoices/{InvoiceId}", "GET")
export class QueryInvoices extends QueryDb<Invoices> implements IReturn<QueryResponse<Invoices>>, IGet
{
    public invoiceId?: number;

    public constructor(init?: Partial<QueryInvoices>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryInvoices'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<Invoices>(); }
}

// @Route("/mediatypes", "GET")
// @Route("/mediatypes/{MediaTypeId}", "GET")
export class QueryMediaTypes extends QueryDb<MediaTypes> implements IReturn<QueryResponse<MediaTypes>>, IGet
{
    public mediaTypeId?: number;

    public constructor(init?: Partial<QueryMediaTypes>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryMediaTypes'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<MediaTypes>(); }
}

// @Route("/playlists", "GET")
// @Route("/playlists/{PlaylistId}", "GET")
export class QueryPlaylists extends QueryDb<Playlists> implements IReturn<QueryResponse<Playlists>>, IGet
{
    public playlistId?: number;

    public constructor(init?: Partial<QueryPlaylists>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryPlaylists'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<Playlists>(); }
}

// @Route("/tracks", "GET")
// @Route("/tracks/{TrackId}", "GET")
export class QueryTracks extends QueryDb<Tracks> implements IReturn<QueryResponse<Tracks>>, IGet
{
    public trackId?: number;
    public nameContains: string;

    public constructor(init?: Partial<QueryTracks>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryTracks'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<Tracks>(); }
}

export class QueryJobApplicationAttachment extends QueryDb<JobApplicationAttachment> implements IReturn<QueryResponse<JobApplicationAttachment>>
{
    public id?: number;

    public constructor(init?: Partial<QueryJobApplicationAttachment>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryJobApplicationAttachment'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<JobApplicationAttachment>(); }
}

export class QueryContacts extends QueryDb<Contact> implements IReturn<QueryResponse<Contact>>
{
    public id?: number;

    public constructor(init?: Partial<QueryContacts>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryContacts'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<Contact>(); }
}

export class QueryJob extends QueryDb<Job> implements IReturn<QueryResponse<Job>>
{
    public id?: number;
    public ids?: number[];

    public constructor(init?: Partial<QueryJob>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryJob'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<Job>(); }
}

export class QueryJobApplication extends QueryDb<JobApplication> implements IReturn<QueryResponse<JobApplication>>
{
    public id?: number;
    public ids?: number[];
    public jobId?: number;

    public constructor(init?: Partial<QueryJobApplication>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryJobApplication'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<JobApplication>(); }
}

export class QueryPhoneScreen extends QueryDb<PhoneScreen> implements IReturn<QueryResponse<PhoneScreen>>
{
    public id?: number;
    public jobApplicationId?: number;

    public constructor(init?: Partial<QueryPhoneScreen>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryPhoneScreen'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<PhoneScreen>(); }
}

export class QueryInterview extends QueryDb<Interview> implements IReturn<QueryResponse<Interview>>
{
    public id?: number;
    public jobApplicationId?: number;

    public constructor(init?: Partial<QueryInterview>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryInterview'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<Interview>(); }
}

export class QueryJobOffer extends QueryDb<JobOffer> implements IReturn<QueryResponse<JobOffer>>
{
    public id?: number;
    public jobApplicationId?: number;

    public constructor(init?: Partial<QueryJobOffer>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryJobOffer'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<JobOffer>(); }
}

export class QueryJobAppEvents extends QueryDb<JobApplicationEvent> implements IReturn<QueryResponse<JobApplicationEvent>>
{
    public jobApplicationId?: number;

    public constructor(init?: Partial<QueryJobAppEvents>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryJobAppEvents'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<JobApplicationEvent>(); }
}

// @ValidateRequest(Validator="IsAuthenticated")
export class QueryAppUser extends QueryDb<AppUser> implements IReturn<QueryResponse<AppUser>>
{
    public emailContains?: string;
    public firstNameContains?: string;
    public lastNameContains?: string;

    public constructor(init?: Partial<QueryAppUser>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryAppUser'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<AppUser>(); }
}

export class QueryJobApplicationComments extends QueryDb<JobApplicationComment> implements IReturn<QueryResponse<JobApplicationComment>>
{
    public jobApplicationId?: number;

    public constructor(init?: Partial<QueryJobApplicationComments>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryJobApplicationComments'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<JobApplicationComment>(); }
}

/** @description Find Bookings */
// @Route("/bookings", "GET")
// @Route("/bookings/{Id}", "GET")
export class QueryBookings extends QueryDb<Booking> implements IReturn<QueryResponse<Booking>>
{
    public id?: number;

    public constructor(init?: Partial<QueryBookings>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryBookings'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<Booking>(); }
}

/** @description Find Coupons */
// @Route("/coupons", "GET")
export class QueryCoupons extends QueryDb<Coupon> implements IReturn<QueryResponse<Coupon>>
{
    public id: string;

    public constructor(init?: Partial<QueryCoupons>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryCoupons'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<Coupon>(); }
}

export class QueryFileSystemItems extends QueryDb<FileSystemItem> implements IReturn<QueryResponse<FileSystemItem>>
{
    public appUserId?: number;
    public fileAccessType?: FileAccessType;

    public constructor(init?: Partial<QueryFileSystemItems>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryFileSystemItems'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<FileSystemItem>(); }
}

export class QueryFileSystemFiles extends QueryDb<FileSystemFile> implements IReturn<QueryResponse<FileSystemFile>>
{

    public constructor(init?: Partial<QueryFileSystemFiles>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryFileSystemFiles'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<FileSystemFile>(); }
}

export class QueryPlayer extends QueryDb<Player> implements IReturn<QueryResponse<Player>>
{

    public constructor(init?: Partial<QueryPlayer>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryPlayer'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<Player>(); }
}

export class QueryProfile extends QueryDb<Profile> implements IReturn<QueryResponse<Profile>>
{

    public constructor(init?: Partial<QueryProfile>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryProfile'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<Profile>(); }
}

export class QueryGameItem extends QueryDb<GameItem> implements IReturn<QueryResponse<GameItem>>
{
    public name: string;

    public constructor(init?: Partial<QueryGameItem>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryGameItem'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<GameItem>(); }
}

export class QueryPlayerGameItem extends QueryDb<PlayerGameItem> implements IReturn<QueryResponse<PlayerGameItem>>
{
    public id?: number;
    public playerId?: number;
    public gameItemName?: string;

    public constructor(init?: Partial<QueryPlayerGameItem>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryPlayerGameItem'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<PlayerGameItem>(); }
}

export class QueryLevel extends QueryDb<Level> implements IReturn<QueryResponse<Level>>
{
    public id?: string;

    public constructor(init?: Partial<QueryLevel>) { super(init); (Object as any).assign(this, init); }
    public getTypeName() { return 'QueryLevel'; }
    public getMethod() { return 'GET'; }
    public createResponse() { return new QueryResponse<Level>(); }
}

// @Route("/appusers", "POST")
// @ValidateRequest(Validator="IsAdmin")
// @DataContract
export class CreateAppUser implements IReturn<IdResponse>, IPost, ICreateDb<AppUser>
{
    // @DataMember(Order=2)
    public displayName: string;

    // @DataMember(Order=3)
    public email: string;

    // @DataMember(Order=4)
    public profileUrl: string;

    // @DataMember(Order=5)
    public department: string;

    // @DataMember(Order=6)
    public title: string;

    // @DataMember(Order=7)
    public jobArea: string;

    // @DataMember(Order=8)
    public location: string;

    // @DataMember(Order=9)
    public salary: number;

    // @DataMember(Order=10)
    public about: string;

    // @DataMember(Order=11)
    public isArchived: number;

    // @DataMember(Order=12)
    public archivedDate: string;

    // @DataMember(Order=13)
    public lastLoginDate: string;

    // @DataMember(Order=14)
    public lastLoginIp: string;

    // @DataMember(Order=15)
    public userName: string;

    // @DataMember(Order=16)
    public primaryEmail: string;

    // @DataMember(Order=17)
    public firstName: string;

    // @DataMember(Order=18)
    public lastName: string;

    // @DataMember(Order=19)
    public company: string;

    // @DataMember(Order=20)
    public country: string;

    // @DataMember(Order=21)
    public phoneNumber: string;

    // @DataMember(Order=22)
    public birthDate: string;

    // @DataMember(Order=23)
    public birthDateRaw: string;

    // @DataMember(Order=24)
    public address: string;

    // @DataMember(Order=25)
    public address2: string;

    // @DataMember(Order=26)
    public city: string;

    // @DataMember(Order=27)
    public state: string;

    // @DataMember(Order=28)
    public culture: string;

    // @DataMember(Order=29)
    public fullName: string;

    // @DataMember(Order=30)
    public gender: string;

    // @DataMember(Order=31)
    public language: string;

    // @DataMember(Order=32)
    public mailAddress: string;

    // @DataMember(Order=33)
    public nickname: string;

    // @DataMember(Order=34)
    public postalCode: string;

    // @DataMember(Order=35)
    public timeZone: string;

    // @DataMember(Order=36)
    public salt: string;

    // @DataMember(Order=37)
    public passwordHash: string;

    // @DataMember(Order=38)
    public digestHa1Hash: string;

    // @DataMember(Order=39)
    public roles: string;

    // @DataMember(Order=40)
    public permissions: string;

    // @DataMember(Order=41)
    public createdDate: string;

    // @DataMember(Order=42)
    public modifiedDate: string;

    // @DataMember(Order=43)
    public invalidLoginAttempts: number;

    // @DataMember(Order=44)
    public lastLoginAttempt: string;

    // @DataMember(Order=45)
    public lockedDate: string;

    // @DataMember(Order=46)
    public recoveryToken: string;

    // @DataMember(Order=47)
    public refId?: number;

    // @DataMember(Order=48)
    public refIdStr: string;

    // @DataMember(Order=49)
    public meta: string;

    public constructor(init?: Partial<CreateAppUser>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateAppUser'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/categories", "POST")
// @DataContract
export class CreateCategory implements IReturn<IdResponse>, IPost, ICreateDb<Category>
{
    // @DataMember(Order=1)
    public id: number;

    // @DataMember(Order=2)
    public categoryName: string;

    // @DataMember(Order=3)
    public description: string;

    public constructor(init?: Partial<CreateCategory>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateCategory'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/customers", "POST")
// @DataContract
export class CreateCustomer implements IReturn<IdResponse>, IPost, ICreateDb<Customer>
{
    // @DataMember(Order=1)
    public id: string;

    // @DataMember(Order=2)
    public companyName: string;

    // @DataMember(Order=3)
    public contactName: string;

    // @DataMember(Order=4)
    public contactTitle: string;

    // @DataMember(Order=5)
    public address: string;

    // @DataMember(Order=6)
    public city: string;

    // @DataMember(Order=7)
    public region: string;

    // @DataMember(Order=8)
    public postalCode: string;

    // @DataMember(Order=9)
    public country: string;

    // @DataMember(Order=10)
    public phone: string;

    // @DataMember(Order=11)
    public fax: string;

    public constructor(init?: Partial<CreateCustomer>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateCustomer'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/employees", "POST")
// @DataContract
export class CreateEmployee implements IReturn<IdResponse>, IPost, ICreateDb<Employee>
{
    // @DataMember(Order=1)
    public id: number;

    // @DataMember(Order=2)
    public lastName: string;

    // @DataMember(Order=3)
    public firstName: string;

    // @DataMember(Order=4)
    public title: string;

    // @DataMember(Order=5)
    public titleOfCourtesy: string;

    // @DataMember(Order=6)
    public birthDate: string;

    // @DataMember(Order=7)
    public hireDate: string;

    // @DataMember(Order=8)
    public address: string;

    // @DataMember(Order=9)
    public city: string;

    // @DataMember(Order=10)
    public region: string;

    // @DataMember(Order=11)
    public postalCode: string;

    // @DataMember(Order=12)
    public country: string;

    // @DataMember(Order=13)
    public homePhone: string;

    // @DataMember(Order=14)
    public extension: string;

    // @DataMember(Order=15)
    public photo: string;

    // @DataMember(Order=16)
    public notes: string;

    // @DataMember(Order=17)
    public reportsTo?: number;

    // @DataMember(Order=18)
    public photoPath: string;

    public constructor(init?: Partial<CreateEmployee>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateEmployee'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/employeeterritories", "POST")
// @DataContract
export class CreateEmployeeTerritory implements IReturn<IdResponse>, IPost, ICreateDb<EmployeeTerritory>
{
    // @DataMember(Order=1)
    public id: string;

    // @DataMember(Order=2)
    public employeeId: number;

    // @DataMember(Order=3)
    public territoryId: string;

    public constructor(init?: Partial<CreateEmployeeTerritory>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateEmployeeTerritory'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/filesystemfiles", "POST")
// @DataContract
export class CreateFileSystemFile implements IReturn<IdResponse>, IPost, ICreateDb<FileSystemFile>
{
    // @DataMember(Order=2)
    public fileName: string;

    // @DataMember(Order=3)
    public filePath: string;

    // @DataMember(Order=4)
    public contentType: string;

    // @DataMember(Order=5)
    public contentLength: number;

    // @DataMember(Order=6)
    public fileSystemItemId: number;

    public constructor(init?: Partial<CreateFileSystemFile>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateFileSystemFile'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/migrations", "POST")
// @DataContract
export class CreateMigration implements IReturn<IdResponse>, IPost, ICreateDb<Migration>
{
    // @DataMember(Order=2)
    public name: string;

    // @DataMember(Order=3)
    public description: string;

    // @DataMember(Order=4)
    public createdDate: string;

    // @DataMember(Order=5)
    public completedDate: string;

    // @DataMember(Order=6)
    public connectionString: string;

    // @DataMember(Order=7)
    public namedConnection: string;

    // @DataMember(Order=8)
    public log: string;

    // @DataMember(Order=9)
    public errorCode: string;

    // @DataMember(Order=10)
    public errorMessage: string;

    // @DataMember(Order=11)
    public errorStackTrace: string;

    // @DataMember(Order=12)
    public meta: string;

    public constructor(init?: Partial<CreateMigration>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateMigration'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/orders", "POST")
// @DataContract
export class CreateOrder implements IReturn<IdResponse>, IPost, ICreateDb<Order>
{
    // @DataMember(Order=1)
    public id: number;

    // @DataMember(Order=2)
    public customerId: string;

    // @DataMember(Order=3)
    public employeeId: number;

    // @DataMember(Order=4)
    public orderDate: string;

    // @DataMember(Order=5)
    public requiredDate: string;

    // @DataMember(Order=6)
    public shippedDate: string;

    // @DataMember(Order=7)
    public shipVia?: number;

    // @DataMember(Order=8)
    public freight: number;

    // @DataMember(Order=9)
    public shipName: string;

    // @DataMember(Order=10)
    public shipAddress: string;

    // @DataMember(Order=11)
    public shipCity: string;

    // @DataMember(Order=12)
    public shipRegion: string;

    // @DataMember(Order=13)
    public shipPostalCode: string;

    // @DataMember(Order=14)
    public shipCountry: string;

    public constructor(init?: Partial<CreateOrder>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateOrder'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/orderdetails", "POST")
// @DataContract
export class CreateOrderDetail implements IReturn<IdResponse>, IPost, ICreateDb<OrderDetail>
{
    // @DataMember(Order=1)
    public id: string;

    // @DataMember(Order=2)
    public orderId: number;

    // @DataMember(Order=3)
    public productId: number;

    // @DataMember(Order=4)
    public unitPrice: number;

    // @DataMember(Order=5)
    public quantity: number;

    // @DataMember(Order=6)
    public discount: number;

    public constructor(init?: Partial<CreateOrderDetail>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateOrderDetail'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/products", "POST")
// @DataContract
export class CreateProduct implements IReturn<IdResponse>, IPost, ICreateDb<Product>
{
    // @DataMember(Order=1)
    public id: number;

    // @DataMember(Order=2)
    public productName: string;

    // @DataMember(Order=3)
    public supplierId: number;

    // @DataMember(Order=4)
    public categoryId: number;

    // @DataMember(Order=5)
    public quantityPerUnit: string;

    // @DataMember(Order=6)
    public unitPrice: number;

    // @DataMember(Order=7)
    public unitsInStock: number;

    // @DataMember(Order=8)
    public unitsOnOrder: number;

    // @DataMember(Order=9)
    public reorderLevel: number;

    // @DataMember(Order=10)
    public discontinued: number;

    public constructor(init?: Partial<CreateProduct>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateProduct'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/regions", "POST")
// @DataContract
export class CreateRegion implements IReturn<IdResponse>, IPost, ICreateDb<Region>
{
    // @DataMember(Order=1)
    public id: number;

    // @DataMember(Order=2)
    public regionDescription: string;

    public constructor(init?: Partial<CreateRegion>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateRegion'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/shippers", "POST")
// @DataContract
export class CreateShipper implements IReturn<IdResponse>, IPost, ICreateDb<Shipper>
{
    // @DataMember(Order=1)
    public id: number;

    // @DataMember(Order=2)
    public companyName: string;

    // @DataMember(Order=3)
    public phone: string;

    public constructor(init?: Partial<CreateShipper>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateShipper'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/suppliers", "POST")
// @DataContract
export class CreateSupplier implements IReturn<IdResponse>, IPost, ICreateDb<Supplier>
{
    // @DataMember(Order=1)
    public id: number;

    // @DataMember(Order=2)
    public companyName: string;

    // @DataMember(Order=3)
    public contactName: string;

    // @DataMember(Order=4)
    public contactTitle: string;

    // @DataMember(Order=5)
    public address: string;

    // @DataMember(Order=6)
    public city: string;

    // @DataMember(Order=7)
    public region: string;

    // @DataMember(Order=8)
    public postalCode: string;

    // @DataMember(Order=9)
    public country: string;

    // @DataMember(Order=10)
    public phone: string;

    // @DataMember(Order=11)
    public fax: string;

    // @DataMember(Order=12)
    public homePage: string;

    public constructor(init?: Partial<CreateSupplier>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateSupplier'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/territories", "POST")
// @DataContract
export class CreateTerritory implements IReturn<IdResponse>, IPost, ICreateDb<Territory>
{
    // @DataMember(Order=1)
    public id: string;

    // @DataMember(Order=2)
    public territoryDescription: string;

    // @DataMember(Order=3)
    public regionId: number;

    public constructor(init?: Partial<CreateTerritory>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateTerritory'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/userauthroles", "POST")
// @ValidateRequest(Validator="IsAdmin")
// @DataContract
export class CreateUserAuthRole implements IReturn<IdResponse>, IPost, ICreateDb<UserAuthRole>
{
    // @DataMember(Order=2)
    public userAuthId: number;

    // @DataMember(Order=3)
    public role: string;

    // @DataMember(Order=4)
    public permission: string;

    // @DataMember(Order=5)
    public createdDate: string;

    // @DataMember(Order=6)
    public modifiedDate: string;

    // @DataMember(Order=7)
    public refId?: number;

    // @DataMember(Order=8)
    public refIdStr: string;

    // @DataMember(Order=9)
    public meta: string;

    public constructor(init?: Partial<CreateUserAuthRole>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateUserAuthRole'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/validationrules", "POST")
// @DataContract
export class CreateValidationRule implements IReturn<IdResponse>, IPost, ICreateDb<ValidationRule>
{
    // @DataMember(Order=2)
    public type: string;

    // @DataMember(Order=3)
    public field: string;

    // @DataMember(Order=4)
    public createdBy: string;

    // @DataMember(Order=5)
    public createdDate: string;

    // @DataMember(Order=6)
    public modifiedBy: string;

    // @DataMember(Order=7)
    public modifiedDate: string;

    // @DataMember(Order=8)
    public suspendedBy: string;

    // @DataMember(Order=9)
    public suspendedDate: string;

    // @DataMember(Order=10)
    public notes: string;

    // @DataMember(Order=11)
    public validator: string;

    // @DataMember(Order=12)
    public condition: string;

    // @DataMember(Order=13)
    public errorCode: string;

    // @DataMember(Order=14)
    public message: string;

    public constructor(init?: Partial<CreateValidationRule>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'CreateValidationRule'; }
    public getMethod() { return 'POST'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/appusers/{Id}", "DELETE")
// @ValidateRequest(Validator="IsAdmin")
// @DataContract
export class DeleteAppUser implements IReturn<IdResponse>, IDelete, IDeleteDb<AppUser>
{
    // @DataMember(Order=1)
    public id: number;

    public constructor(init?: Partial<DeleteAppUser>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteAppUser'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/categories/{Id}", "DELETE")
// @DataContract
export class DeleteCategory implements IReturn<IdResponse>, IDelete, IDeleteDb<Category>
{
    // @DataMember(Order=1)
    public id: number;

    public constructor(init?: Partial<DeleteCategory>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteCategory'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/customers/{Id}", "DELETE")
// @DataContract
export class DeleteCustomer implements IReturn<IdResponse>, IDelete, IDeleteDb<Customer>
{
    // @DataMember(Order=1)
    public id: string;

    public constructor(init?: Partial<DeleteCustomer>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteCustomer'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/employees/{Id}", "DELETE")
// @DataContract
export class DeleteEmployee implements IReturn<IdResponse>, IDelete, IDeleteDb<Employee>
{
    // @DataMember(Order=1)
    public id: number;

    public constructor(init?: Partial<DeleteEmployee>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteEmployee'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/employeeterritories/{Id}", "DELETE")
// @DataContract
export class DeleteEmployeeTerritory implements IReturn<IdResponse>, IDelete, IDeleteDb<EmployeeTerritory>
{
    // @DataMember(Order=1)
    public id: string;

    public constructor(init?: Partial<DeleteEmployeeTerritory>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteEmployeeTerritory'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/filesystemfiles/{Id}", "DELETE")
// @DataContract
export class DeleteFileSystemFile implements IReturn<IdResponse>, IDelete, IDeleteDb<FileSystemFile>
{
    // @DataMember(Order=1)
    public id: number;

    public constructor(init?: Partial<DeleteFileSystemFile>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteFileSystemFile'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/filesystemitems/{Id}", "DELETE")
// @DataContract
export class DeleteFileSystemItem implements IReturn<IdResponse>, IDelete, IDeleteDb<FileSystemItem>
{
    // @DataMember(Order=1)
    public id: number;

    public constructor(init?: Partial<DeleteFileSystemItem>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteFileSystemItem'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/migrations/{Id}", "DELETE")
// @DataContract
export class DeleteMigration implements IReturn<IdResponse>, IDelete, IDeleteDb<Migration>
{
    // @DataMember(Order=1)
    public id: number;

    public constructor(init?: Partial<DeleteMigration>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteMigration'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/orders/{Id}", "DELETE")
// @DataContract
export class DeleteOrder implements IReturn<IdResponse>, IDelete, IDeleteDb<Order>
{
    // @DataMember(Order=1)
    public id: number;

    public constructor(init?: Partial<DeleteOrder>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteOrder'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/orderdetails/{Id}", "DELETE")
// @DataContract
export class DeleteOrderDetail implements IReturn<IdResponse>, IDelete, IDeleteDb<OrderDetail>
{
    // @DataMember(Order=1)
    public id: string;

    public constructor(init?: Partial<DeleteOrderDetail>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteOrderDetail'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/products/{Id}", "DELETE")
// @DataContract
export class DeleteProduct implements IReturn<IdResponse>, IDelete, IDeleteDb<Product>
{
    // @DataMember(Order=1)
    public id: number;

    public constructor(init?: Partial<DeleteProduct>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteProduct'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/regions/{Id}", "DELETE")
// @DataContract
export class DeleteRegion implements IReturn<IdResponse>, IDelete, IDeleteDb<Region>
{
    // @DataMember(Order=1)
    public id: number;

    public constructor(init?: Partial<DeleteRegion>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteRegion'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/shippers/{Id}", "DELETE")
// @DataContract
export class DeleteShipper implements IReturn<IdResponse>, IDelete, IDeleteDb<Shipper>
{
    // @DataMember(Order=1)
    public id: number;

    public constructor(init?: Partial<DeleteShipper>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteShipper'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/suppliers/{Id}", "DELETE")
// @DataContract
export class DeleteSupplier implements IReturn<IdResponse>, IDelete, IDeleteDb<Supplier>
{
    // @DataMember(Order=1)
    public id: number;

    public constructor(init?: Partial<DeleteSupplier>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteSupplier'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/territories/{Id}", "DELETE")
// @DataContract
export class DeleteTerritory implements IReturn<IdResponse>, IDelete, IDeleteDb<Territory>
{
    // @DataMember(Order=1)
    public id: string;

    public constructor(init?: Partial<DeleteTerritory>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteTerritory'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/userauthroles/{Id}", "DELETE")
// @ValidateRequest(Validator="IsAdmin")
// @DataContract
export class DeleteUserAuthRole implements IReturn<IdResponse>, IDelete, IDeleteDb<UserAuthRole>
{
    // @DataMember(Order=1)
    public id: number;

    public constructor(init?: Partial<DeleteUserAuthRole>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteUserAuthRole'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/validationrules/{Id}", "DELETE")
// @DataContract
export class DeleteValidationRule implements IReturn<IdResponse>, IDelete, IDeleteDb<ValidationRule>
{
    // @DataMember(Order=1)
    public id: number;

    public constructor(init?: Partial<DeleteValidationRule>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'DeleteValidationRule'; }
    public getMethod() { return 'DELETE'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/appusers/{Id}", "PATCH")
// @ValidateRequest(Validator="IsAdmin")
// @DataContract
export class PatchAppUser implements IReturn<IdResponse>, IPatch, IPatchDb<AppUser>
{
    // @DataMember(Order=1)
    public id: number;

    // @DataMember(Order=2)
    public displayName: string;

    // @DataMember(Order=3)
    public email: string;

    // @DataMember(Order=4)
    public profileUrl: string;

    // @DataMember(Order=5)
    public department: string;

    // @DataMember(Order=6)
    public title: string;

    // @DataMember(Order=7)
    public jobArea: string;

    // @DataMember(Order=8)
    public location: string;

    // @DataMember(Order=9)
    public salary: number;

    // @DataMember(Order=10)
    public about: string;

    // @DataMember(Order=11)
    public isArchived: number;

    // @DataMember(Order=12)
    public archivedDate: string;

    // @DataMember(Order=13)
    public lastLoginDate: string;

    // @DataMember(Order=14)
    public lastLoginIp: string;

    // @DataMember(Order=15)
    public userName: string;

    // @DataMember(Order=16)
    public primaryEmail: string;

    // @DataMember(Order=17)
    public firstName: string;

    // @DataMember(Order=18)
    public lastName: string;

    // @DataMember(Order=19)
    public company: string;

    // @DataMember(Order=20)
    public country: string;

    // @DataMember(Order=21)
    public phoneNumber: string;

    // @DataMember(Order=22)
    public birthDate: string;

    // @DataMember(Order=23)
    public birthDateRaw: string;

    // @DataMember(Order=24)
    public address: string;

    // @DataMember(Order=25)
    public address2: string;

    // @DataMember(Order=26)
    public city: string;

    // @DataMember(Order=27)
    public state: string;

    // @DataMember(Order=28)
    public culture: string;

    // @DataMember(Order=29)
    public fullName: string;

    // @DataMember(Order=30)
    public gender: string;

    // @DataMember(Order=31)
    public language: string;

    // @DataMember(Order=32)
    public mailAddress: string;

    // @DataMember(Order=33)
    public nickname: string;

    // @DataMember(Order=34)
    public postalCode: string;

    // @DataMember(Order=35)
    public timeZone: string;

    // @DataMember(Order=36)
    public salt: string;

    // @DataMember(Order=37)
    public passwordHash: string;

    // @DataMember(Order=38)
    public digestHa1Hash: string;

    // @DataMember(Order=39)
    public roles: string;

    // @DataMember(Order=40)
    public permissions: string;

    // @DataMember(Order=41)
    public createdDate: string;

    // @DataMember(Order=42)
    public modifiedDate: string;

    // @DataMember(Order=43)
    public invalidLoginAttempts: number;

    // @DataMember(Order=44)
    public lastLoginAttempt: string;

    // @DataMember(Order=45)
    public lockedDate: string;

    // @DataMember(Order=46)
    public recoveryToken: string;

    // @DataMember(Order=47)
    public refId?: number;

    // @DataMember(Order=48)
    public refIdStr: string;

    // @DataMember(Order=49)
    public meta: string;

    public constructor(init?: Partial<PatchAppUser>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'PatchAppUser'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/categories/{Id}", "PATCH")
// @DataContract
export class PatchCategory implements IReturn<IdResponse>, IPatch, IPatchDb<Category>
{
    // @DataMember(Order=1)
    public id: number;

    // @DataMember(Order=2)
    public categoryName: string;

    // @DataMember(Order=3)
    public description: string;

    public constructor(init?: Partial<PatchCategory>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'PatchCategory'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/customers/{Id}", "PATCH")
// @DataContract
export class PatchCustomer implements IReturn<IdResponse>, IPatch, IPatchDb<Customer>
{
    // @DataMember(Order=1)
    public id: string;

    // @DataMember(Order=2)
    public companyName: string;

    // @DataMember(Order=3)
    public contactName: string;

    // @DataMember(Order=4)
    public contactTitle: string;

    // @DataMember(Order=5)
    public address: string;

    // @DataMember(Order=6)
    public city: string;

    // @DataMember(Order=7)
    public region: string;

    // @DataMember(Order=8)
    public postalCode: string;

    // @DataMember(Order=9)
    public country: string;

    // @DataMember(Order=10)
    public phone: string;

    // @DataMember(Order=11)
    public fax: string;

    public constructor(init?: Partial<PatchCustomer>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'PatchCustomer'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/employees/{Id}", "PATCH")
// @DataContract
export class PatchEmployee implements IReturn<IdResponse>, IPatch, IPatchDb<Employee>
{
    // @DataMember(Order=1)
    public id: number;

    // @DataMember(Order=2)
    public lastName: string;

    // @DataMember(Order=3)
    public firstName: string;

    // @DataMember(Order=4)
    public title: string;

    // @DataMember(Order=5)
    public titleOfCourtesy: string;

    // @DataMember(Order=6)
    public birthDate: string;

    // @DataMember(Order=7)
    public hireDate: string;

    // @DataMember(Order=8)
    public address: string;

    // @DataMember(Order=9)
    public city: string;

    // @DataMember(Order=10)
    public region: string;

    // @DataMember(Order=11)
    public postalCode: string;

    // @DataMember(Order=12)
    public country: string;

    // @DataMember(Order=13)
    public homePhone: string;

    // @DataMember(Order=14)
    public extension: string;

    // @DataMember(Order=15)
    public photo: string;

    // @DataMember(Order=16)
    public notes: string;

    // @DataMember(Order=17)
    public reportsTo?: number;

    // @DataMember(Order=18)
    public photoPath: string;

    public constructor(init?: Partial<PatchEmployee>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'PatchEmployee'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/employeeterritories/{Id}", "PATCH")
// @DataContract
export class PatchEmployeeTerritory implements IReturn<IdResponse>, IPatch, IPatchDb<EmployeeTerritory>
{
    // @DataMember(Order=1)
    public id: string;

    // @DataMember(Order=2)
    public employeeId: number;

    // @DataMember(Order=3)
    public territoryId: string;

    public constructor(init?: Partial<PatchEmployeeTerritory>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'PatchEmployeeTerritory'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/filesystemfiles/{Id}", "PATCH")
// @DataContract
export class PatchFileSystemFile implements IReturn<IdResponse>, IPatch, IPatchDb<FileSystemFile>
{
    // @DataMember(Order=1)
    public id: number;

    // @DataMember(Order=2)
    public fileName: string;

    // @DataMember(Order=3)
    public filePath: string;

    // @DataMember(Order=4)
    public contentType: string;

    // @DataMember(Order=5)
    public contentLength: number;

    // @DataMember(Order=6)
    public fileSystemItemId: number;

    public constructor(init?: Partial<PatchFileSystemFile>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'PatchFileSystemFile'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/filesystemitems/{Id}", "PATCH")
// @DataContract
export class PatchFileSystemItem implements IReturn<IdResponse>, IPatch, IPatchDb<FileSystemItem>
{
    // @DataMember(Order=1)
    public id: number;

    // @DataMember(Order=2)
    public fileAccessType: string;

    // @DataMember(Order=3)
    public appUserId: number;

    public constructor(init?: Partial<PatchFileSystemItem>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'PatchFileSystemItem'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/migrations/{Id}", "PATCH")
// @DataContract
export class PatchMigration implements IReturn<IdResponse>, IPatch, IPatchDb<Migration>
{
    // @DataMember(Order=1)
    public id: number;

    // @DataMember(Order=2)
    public name: string;

    // @DataMember(Order=3)
    public description: string;

    // @DataMember(Order=4)
    public createdDate: string;

    // @DataMember(Order=5)
    public completedDate: string;

    // @DataMember(Order=6)
    public connectionString: string;

    // @DataMember(Order=7)
    public namedConnection: string;

    // @DataMember(Order=8)
    public log: string;

    // @DataMember(Order=9)
    public errorCode: string;

    // @DataMember(Order=10)
    public errorMessage: string;

    // @DataMember(Order=11)
    public errorStackTrace: string;

    // @DataMember(Order=12)
    public meta: string;

    public constructor(init?: Partial<PatchMigration>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'PatchMigration'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new IdResponse(); }
}

// @Route("/orders/{Id}", "PATCH")
// @DataContract
export class PatchOrder implements IReturn<IdResponse>, IPatch, IPatchDb<Order>
{
    // @DataMember(Order=1)
    public id: number;

    // @DataMember(Order=2)
    public customerId: string;

    // @DataMember(Order=3)
    public employeeId: number;

    // @DataMember(Order=4)
    public orderDate: string;

    // @DataMember(Order=5)
    public requiredDate: string;

    // @DataMember(Order=6)
    public shippedDate: string;

    // @DataMember(Order=7)
    public shipVia?: number;

    // @DataMember(Order=8)
    public freight: number;

    // @DataMember(Order=9)
    public shipName: string;

    // @DataMember(Order=10)
    public shipAddress: string;

    // @DataMember(Order=11)
    public shipCity: string;

    // @DataMember(Order=12)
    public shipRegion: string;

    // @DataMember(Order=13)
    public shipPostalCode: string;

    // @DataMember(Order=14)
    public shipCountry: string;

    public constructor(init?: Partial<PatchOrder>) { (Object as any).assign(this, init); }
    public getTypeName() { return 'PatchOrder'; }
    public getMethod() { return 'PATCH'; }
    public createResponse() { return new IdResponse(); }
}

