class Api {
    constructor(groupId) {

        this.url = "https://api.react-learning.ru";
        this.groupId = groupId
    }

    reg(values) {
        return fetch(`${this.url}/signup`, {    //регистрация
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
    }

    auth(values) {
        return fetch(`${this.url}/signin`, {      //авторизация
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        })
    }

    allUsers(token) {
        return fetch(`${this.url}/v2/${this.groupId}/users`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + token,
            },
        })
    }

    me(token) {
        return fetch(`${this.url}/v2/${this.groupId}/users/me`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            },
        })
    }

    getProducts(token) {
        return fetch(`${this.url}/products`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            },
        })
    }

    getSearch(token) {
        return fetch(`${this.url}/products/search?query`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token,
            },
        })
    }

}

const api = new Api('9-gr');

export { api }