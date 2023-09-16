import axios from 'axios';

const instance = axios.create({
    baseURL : 'http://localhost:3500/user',
    headers: {'content-type':'application/x-www-form-urlencoded'}
})

export default instance;