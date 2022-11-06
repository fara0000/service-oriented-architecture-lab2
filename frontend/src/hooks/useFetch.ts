import axios from "axios";
import { domainUrl } from "../api/urls";

export const useFetch = <T>(method: string, url: string, urlParams?: string, data?: T ) => {
    switch (method) {
        case 'GET':
            return axios.get(url + (urlParams ? urlParams : ''))
            .then((res) => res)
            .catch((err) => console.log('Get method error:', err))

        case 'POST':
            return axios.post(url, data,{
                headers: {
                    'content-type': 'application/json'
                },
            })
            .then((res) => res)
            .catch((err) => console.log('Post method error:', err))

        case 'UPDATE':
            return axios.put(url, data,{
                headers: {
                    'content-type': 'application/json'
                },
            })
            .then((res) => res)
            .catch((err) => console.log('Put method error:', err))

        case 'DELETE':
            return axios.delete(url,{
                headers: {
                    'content-type': 'application/json'
                },
            })
            .then((res) => res)
            .catch((err) => console.log('Delete method error:', err))

        default:
            return;
    }

}