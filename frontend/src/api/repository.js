import axios from 'axios'

export class Repository {
    url = 'http://13.58.99.80:8000/api';

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

    getUserInfo(id) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/userInfo/${id}`)
                .then(x => resolve(x.data))
                .catch(error => {
                    alert(error);
                    reject(error);
                });
        });
    }

    getWorkers(){
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/workers`)
                .then(x => resolve(x.data))
                .catch(error => {
                    alert(error);
                    reject(error);
                });
        });
    }

    getProjects() {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/projects`)
                .then(x => resolve(x.data))
                .catch(error => {
                    alert(error);
                    reject(error);
                });
        });
    }

    getContractors() {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/contractors`)
                .then(x => resolve(x.data))
                .catch(error => {
                    alert(error);
                    reject(error);
                });
        });
    }

    getProjectsByClient(id) { 
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/projects/${id}`)
                .then(x => resolve(x.data))
                .catch(error => {
                    alert(error);
                    reject(error);
                });
        });
    }

}