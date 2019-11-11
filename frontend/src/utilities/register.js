//dependencies
import axios from 'axios';

//function

export const Register = newUser => {
    axios
        .post('http://localhost:3000/api/register', newUser)
        .then(res => console.log(res))
        .catch(err => console.log(err))
}; 