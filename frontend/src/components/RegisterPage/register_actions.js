import { history } from '../../history'
import {ROOT_URL} from '../../constants'
export function register(user) {
    return function action(dispatch) {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        };

        return fetch(`${ROOT_URL}/users/register`, requestOptions)
            .then(response => response.json().then(data => {
                console.log("User created")
                history.push('/login')
            }))
    };

}

