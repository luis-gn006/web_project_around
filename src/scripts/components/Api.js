export default class Api {
  constructor(url){
    this._url = url;
  }
  getUserInfo(){
    return fetch(`${this._url}/users/me`, {
      headers: {
        authorization: "541d0e53-114b-4fb1-9af0-b09c04c191b9",
      }
    })
      .then((res) => {
        return res.json();
      })
  }
  getInitialCards(){
    return fetch(`${this._url}/cards`, {
      headers: {
        authorization: "541d0e53-114b-4fb1-9af0-b09c04c191b9",
      }
    })
      .then((res) => {
        return res.json();
      });
  }
  patchUserInfo(name, about){
    return fetch("https://around.nomoreparties.co/v1/web_es_10/users/me", {
      method: "PATCH",
      headers: {
        authorization: "541d0e53-114b-4fb1-9af0-b09c04c191b9",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        about: about
      })
    });
  }

}



