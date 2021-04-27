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

    companySignup(account) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/companySignup`, account)
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

    companyLogin(account) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/companyLogin`, account)
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

    getWorkersByZip(zipCode){
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/workersZip/${zipCode}`)
                .then(x => resolve(x.data))
                .catch(error => {
                    alert(error);
                    reject(error);
                });
        });
    }

    getWorkersByQuery(query){
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/workersQuery/${query}`)
                .then(x => resolve(x.data))
                .catch(error => {
                    alert(error);
                    reject(error);
                });
        });
    }

    getWorkersByZipAndQuery(zipCode, query)
    {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/workersZipAndQuery/${zipCode}/${query}`) 
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

    getContractorsByZip(zipCode){
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/contractorsZip/${zipCode}`)
                .then(x => resolve(x.data))
                .catch(error => {
                    alert(error);
                    reject(error);
                });
        });
    }

    getContractorsByQuery(query){
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/contractorsQuery/${query}`)
                .then(x => resolve(x.data))
                .catch(error => {
                    alert(error);
                    reject(error);
                });
        });
    }

    getContractorsByZipAndQuery(zipCode, query)
    {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/contractorsZipAndQuery/${zipCode}/${query}`) 
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

    getReviewsByReviewed(id) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/reviewsByReviewedID/${id}`) 
                .then(x => resolve(x.data))
                .catch(error => {
                    alert(error);
                    reject(error);
                });
        });
    }

    // getReviewsByReviewed(id) {
    //     return new Promise((resolve, reject) => {
    //         axios.get(`${this.url}/reviews/reviewedID`) 
    //             .then(x => resolve(x.data))
    //             .catch(error => {
    //                 alert(error);
    //                 reject(error);
    //             });
    //     });
    // }

}