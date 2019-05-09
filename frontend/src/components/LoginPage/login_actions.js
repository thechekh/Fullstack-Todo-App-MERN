import { history } from '../../history'
import { userConstants } from '../../constants'
export function login(login, password) {
    return function action(dispatch) {
        dispatch(request(login));
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ login, password })
        };
        return fetch(`http://localhost:4008/users/login`, requestOptions)
            .then(handleResponse)
            .then(user => {
                localStorage.setItem('user', JSON.stringify(user));
                dispatch(success(user));
                history.push("/");
            },
                err => {
                    console.log(err)
                    dispatch(failure(err))
                })
        function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
        function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
        function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
    }
}

export function logout() {
    return { type: userConstants.LOGOUT };
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