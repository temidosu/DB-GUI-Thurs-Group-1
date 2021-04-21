import axios from 'axios'

export class Repository {
    url = 'http://localhost:8000';

    signup(account) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/api/signup`, account)
                .then(x => resolve(x.data))
                .catch(error => {
                    alert(error);
                    reject(error);
                });
        });
    }
    
}