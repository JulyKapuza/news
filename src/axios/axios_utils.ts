import axios from "axios";



const client = axios.create({baseURL:'https://jsonplaceholder.typicode.com'})


export const request = ({...options})=>{
    client.defaults.headers.common.Authorization = 'Bearer token'
    const onSuccess = (responce:any) =>responce
    const onError = (error: string) =>{
        return error
    }

    return client(options).then(onSuccess).catch(onError)
}