
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();
export function register(user) {
    return function action(dispatch) {

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            };
        
            return fetch(`http://localhost:4001/users/register`, requestOptions)
            .then(
                user => { 
                  history.push('/login');
                  console.log("reg success");
                },
                error => {
                   console.log("error",error);
                }
            );
    };

    }

