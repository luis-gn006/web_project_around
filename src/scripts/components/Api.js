export default class Api {
  constructor(url, token) {
    this._url = url;
    this._token = token;
  }
  _makeRequest(uri, method = "GET", body = null) {
    const options = {
      headers: {
        "Content-Type": "application/json",
        authorization: this._token,
      },
      method,
    };
    if (body) {
      options.body = JSON.stringify(body);
    }
    const request = fetch(`${this._url}/${uri}`, options);
    return request
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(`Error: ${response.status}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  getUserInfo() {
    return this._makeRequest("users/me");
  }
  getInitialCards() {
    return this._makeRequest("cards");
  }
  patchUserInfo(name, about) {
    return this._makeRequest("users/me", "PATCH", { name, about });
  }
  postNewCard(name, link) {
    return this._makeRequest("cards", "POST", { name, link });
  }
  deleteCard(cardId) {
    return this._makeRequest(`cards/${cardId}`, "DELETE", { cardId });
  }
  putLike(cardId) {
    return this._makeRequest(`cards/likes/${cardId}`, "PUT", { cardId });
  }
  deleteLike(cardId) {
    return this._makeRequest(`cards/likes/${cardId}`, "DELETE", { cardId });
  }
  patchUserAvatar(avatar) {
    return this._makeRequest("users/me/avatar", "PATCH", { avatar });
  }
}
