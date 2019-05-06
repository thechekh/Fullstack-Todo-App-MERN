import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();
export function login(login, password) {
    return function action(dispatch) {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ login, password })
        };

        return fetch(`http://localhost:4001/users/login`, requestOptions)
            .then(handleResponse)
            .then(user => {
                localStorage.setItem('user', JSON.stringify(user));
               window.location.href="/"
            },err=>console.log(err))
            //history push меняет url но не перерисоывает страницу

    }
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}