export default class UserInfo {
  constructor({ userName, userJob }) {
    this.userName = userName;
    this.userJob = userJob;
  }
  getUserInfo() {
    this._newUserName = this.userName.textContent;
    this._newUserJob = this.userJob.textContent;
  }
  setUserInfoForm(formName, formJob) {
    this.getUserInfo();
    formName.value = this.userName;
    formJob.value = this.userJob;
  }
  setUserInfoProfile(profileName, profileJob) {
    this.getUserInfo();
    profileName.textContent = this.userName;
    profileJob.textContent = this.userJob;
  }
}
