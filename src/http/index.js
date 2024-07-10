import axios from 'axios';
import { toast } from 'react-toastify';


const api = axios.create({
    baseURL:`http://localhost:5500/api`,
    withCredentials:true
})

//Auth
export const doLogin = data => api.post('/auth.login',data);