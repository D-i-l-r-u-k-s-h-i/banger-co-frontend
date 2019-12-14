import axios from 'axios'

const id_token="JWTSuperSecretKey";

axios.defaults.headers.post["Content-Type"] = 'application/json'


var instance = null;

export const setAuth = () => {
    if(localStorage.jwt==null){
        instance = axios.create({
            baseURL: '',
            timeout: 30000,
    
            headers: {
                'Content-Type': 'application/json'
            }
        }
        )
        instance.interceptors.response.use(function (response) {
            return response;
        }, function (error) {
            if (error.response.status === 401) {
                localStorage.removeItem('jwt');
                localStorage.removeItem('user');
                window.location = '/'
            }
            else {
                return Promise.reject(error);
            }
        });
    }
    else{
        instance = axios.create({
            baseURL: '',
            timeout: 30000,
    
            headers: {
                'Authorization': 'Bearer ' + localStorage.jwt,
                'Content-Type': 'application/json'
            }
        }
        )
        instance.interceptors.response.use(function (response) {
            return response;
        }, function (error) {
            if (error.response.status === 401) {
                localStorage.removeItem('jwt');
                localStorage.removeItem('user');
                window.location = '/'
            }
            else {
                return Promise.reject(error);
            }
        });
    }
    
}

export const post=(route,data)=>{
    instance || setAuth()
    return instance.post(route,JSON.stringify(data))
}

