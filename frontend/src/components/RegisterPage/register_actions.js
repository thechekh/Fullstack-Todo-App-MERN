import { history } from '../../history'
export function register(user) {
    return function action(dispatch) {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        };

        return fetch(`http://localhost:4008/users/register`, requestOptions)
            .then(response => response.json().then(data => {
                console.log("User created")
                history.push('/login')
            }))
    };

}

