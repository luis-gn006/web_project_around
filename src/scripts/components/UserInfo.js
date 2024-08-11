export default class UserInfo {
  constructor({ userName, userJob }, formName, formJob) {
    this.userName = userName;
    this.userJob = userJob;
    this.formName = formName;
    this.formJob = formJob;
  }
  getUserInfo() {
    this._newUserName = this.userName.textContent;
    this._newUserJob = this.userJob.textContent;
  }
  setUserInfo() {
    this.getUserInfo();
    this.formName.value = this._newUserName;
    this.formJob.value = this._newUserJob;
  }
}
