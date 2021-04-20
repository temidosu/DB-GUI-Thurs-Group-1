import axios from 'axios'

export class Repository {
    url = 'http://localhost:3001';

    signup()
    {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/register`)
                .then(x => resolve(x.data))
                .catch(e => {
                    alert(e)
                    reject()
                })
        })
    }

    
}
