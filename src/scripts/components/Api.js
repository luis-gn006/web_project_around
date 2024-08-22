export default class Api {
  constructor(url,authorization){
    this._url = url;
    this._authorization = authorization
  }
  getUserInfo(){
    return fetch(`${this._url}/users/me`, {
      headers: {
        authorization: this._authorization,
      }
    })
      .then((res) => {
        return res.json();
      })
  }
  getInitialCards(){
    return fetch(`${this._url}/cards`, {
      headers: {
        authorization: this._authorization,
      }
    })
      .then((res) => {
        return res.json();
      });
  }
  patchUserInfo(name, about){
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._authorization,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        about: about
      })
    });
  }
  postNewCard(cardName, cardlink){
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: {
        authorization: this._authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: cardName,
        link: cardlink
      }),
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
  }
  likes(){
    return fetch(`${this._url}/cards`, {
      headers: {
        authorization: this._authorization,
      }
    })
      .then((res) => {
        return res.json();
      });
  }
}



