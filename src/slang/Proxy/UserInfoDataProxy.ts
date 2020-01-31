interface IUserInfoDataProxyDataSource {
  automaticLanguage: Boolean;
  companyId: Number;
  email: String;
  fax: String;
  firstName: String;
  language1: String;
  language2: String;
  lastLoginDate: Date;
  loginName: String;
  numberOfLogins: Number;
  passsettime: Date;
  perms: Number;
  phone: String;
  questionID: Number;
  remaindCounter: Number;
  state: Number;
  surName: String;
  tempsettime: Date;
  userId: Number;
}

export class UserInfoDataProxy {
  dataSource: IUserInfoDataProxyDataSource;
  constructor(userInfoSource: IUserInfoDataProxyDataSource) {
    this.dataSource = userInfoSource;
  }

  public getAutomaticLanguage(): Boolean {
    return this.dataSource.automaticLanguage;
  }

  public getCompanyId(): Number {
    return this.dataSource.companyId;
  }

  public getEmail(): String {
    return this.dataSource.email;
  }

  public getFax(): String {
    return this.dataSource.fax;
  }

  public getFirstName(): String {
    return this.dataSource.firstName;
  }

  public getLanguage1(): String {
    return this.dataSource.language1;
  }

  public getLanguage2(): String {
    return this.dataSource.language2;
  }

  public getLastLoginDate(): Date {
    return this.dataSource.lastLoginDate;
  }

  public getLoginName(): String {
    return this.dataSource.loginName;
  }

  public getNumberOfLogins(): Number {
    return this.dataSource.numberOfLogins;
  }

  public getPasssettime(): Date {
    return this.dataSource.passsettime;
  }

  public getPerms(): Number {
    return this.dataSource.perms;
  }

  public getPhone(): String {
    return this.dataSource.phone;
  }

  public getQuestionID(): Number {
    return this.dataSource.questionID;
  }

  public getRemaindCounter(): Number {
    return this.dataSource.remaindCounter;
  }

  public getState(): Number {
    return this.dataSource.state;
  }

  public getSurName(): String {
    return this.dataSource.surName;
  }

  public getTempsettime(): Date {
    return this.dataSource.tempsettime;
  }

  public getUserId(): Number {
    return this.dataSource.userId;
  }
}
