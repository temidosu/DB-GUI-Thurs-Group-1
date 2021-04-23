import axios from 'axios'

export class Repository {
    url = 'http://localhost:8000/api';

    signup(account) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/signup`, account)
                .then(x => resolve(x.data))
                .catch(error => {
                    alert(error);
                    reject(error);
                });
        });
    }

    login(account) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/login`, account)
                .then(x => resolve(x.data))
                .catch(error => {
                    alert(error);
                    reject(error);
                });
        });
    }
    getjobs() {

    }
    
}