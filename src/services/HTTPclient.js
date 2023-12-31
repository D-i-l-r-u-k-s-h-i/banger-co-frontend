import axios from 'axios'

// const id_token="JWTSuperSecretKey";

// axios.defaults.headers.post["Content-Type"] = 'application/json'
axios.defaults.headers.get["Content-Type"] = 'application/json'

var instance = null;

export const setAuth = () => {
    if(localStorage.jwt===undefined){
        // debugger
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
                // window.location = '/'
                console.log(error.response.data.message)
                let obj={data:error.response.data.message}
                return obj
            }
            else {
                return Promise.reject(error);
            }
        });
    }
    else{
        // debugger
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
                // window.location = '/'
                console.log(error.response.data.message)
                let obj={data:error.response.data.message}
                return obj
            }
            else {
                return Promise.reject(error);
            }
        });
    }
    
}

export const post=(route,data)=>{
    instance || setAuth()
    return instance.post(route,data == null ? { data: {} } :  data= JSON.stringify(data))
    // return instance.post(route,JSON.stringify(data))
}
export const postVehicle=(route,imgdata,responseType='blob')=>{
    instance || setAuth()
    return instance.post(route,imgdata,responseType)
    // dtodata == null ? { dtodata: {} } : dtodata= JSON.stringify(dtodata),
}
export const get = (route, data) => {
    console.log(data)
    instance || setAuth()
    return instance.get(route, data == null ? { data: {} } : { data: JSON.stringify(data) })
    // return instance.get(route, data === undefined ? null : JSON.stringify(data));
    // return instance.get(route, data);
}