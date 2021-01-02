import axios from 'axios';
export const signup=(user)=>{
return axios.post('/api/1.0/users',user)
}
export const login=(creds)=>{
return axios.post('/api/1.0/auth',{},{auth:creds})
}
export const changeLanguage=language=>{
axios.defaults.headers['accept-language']=language;
}