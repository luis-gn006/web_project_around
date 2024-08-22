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
  setUserInfo(name,job) {
    this.getUserInfo();
    this.formName.value = name;
    this.formJob.value = job;
  }
}
