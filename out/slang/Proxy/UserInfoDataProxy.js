"use strict";
exports.__esModule = true;
var UserInfoDataProxy = /** @class */ (function () {
    function UserInfoDataProxy(userInfoSource) {
        this.dataSource = userInfoSource;
    }
    UserInfoDataProxy.prototype.getAutomaticLanguage = function () {
        return this.dataSource.automaticLanguage;
    };
    UserInfoDataProxy.prototype.getCompanyId = function () {
        return this.dataSource.companyId;
    };
    UserInfoDataProxy.prototype.getEmail = function () {
        return this.dataSource.email;
    };
    UserInfoDataProxy.prototype.getFax = function () {
        return this.dataSource.fax;
    };
    UserInfoDataProxy.prototype.getFirstName = function () {
        return this.dataSource.firstName;
    };
    UserInfoDataProxy.prototype.getLanguage1 = function () {
        return this.dataSource.language1;
    };
    UserInfoDataProxy.prototype.getLanguage2 = function () {
        return this.dataSource.language2;
    };
    UserInfoDataProxy.prototype.getLastLoginDate = function () {
        return this.dataSource.lastLoginDate;
    };
    UserInfoDataProxy.prototype.getLoginName = function () {
        return this.dataSource.loginName;
    };
    UserInfoDataProxy.prototype.getNumberOfLogins = function () {
        return this.dataSource.numberOfLogins;
    };
    UserInfoDataProxy.prototype.getPasssettime = function () {
        return this.dataSource.passsettime;
    };
    UserInfoDataProxy.prototype.getPerms = function () {
        return this.dataSource.perms;
    };
    UserInfoDataProxy.prototype.getPhone = function () {
        return this.dataSource.phone;
    };
    UserInfoDataProxy.prototype.getQuestionID = function () {
        return this.dataSource.questionID;
    };
    UserInfoDataProxy.prototype.getRemaindCounter = function () {
        return this.dataSource.remaindCounter;
    };
    UserInfoDataProxy.prototype.getState = function () {
        return this.dataSource.state;
    };
    UserInfoDataProxy.prototype.getSurName = function () {
        return this.dataSource.surName;
    };
    UserInfoDataProxy.prototype.getTempsettime = function () {
        return this.dataSource.tempsettime;
    };
    UserInfoDataProxy.prototype.getUserId = function () {
        return this.dataSource.userId;
    };
    return UserInfoDataProxy;
}());
exports.UserInfoDataProxy = UserInfoDataProxy;
//# sourceMappingURL=UserInfoDataProxy.js.map