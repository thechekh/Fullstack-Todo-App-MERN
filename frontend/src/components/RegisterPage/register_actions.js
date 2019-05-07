import { history } from '../../history'
export function register(user) {
    return function action(dispatch) {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        };

        return fetch(`http://localhost:4002/users/register`, requestOptions)
            .then(response => response.json().then(data => 
                {
                    console.log(data)
                    history.push('/login')
                }))
    };

}

