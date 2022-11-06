import axios from 'axios';
import * as urls from './urls';

export const getCitiesFetch = (urlParams: string) => {
    return axios.get(urls.getCities + urlParams, {
        headers: {"Access-Control-Allow-Origin": "*"}
    })
        .then((res) => res.data)
        .catch((err) => console.log('getCities error:', err))
};

export async function getCity(urlParams?: string) {
    let response = await fetch(urls.getCities + urlParams);


    return response.json();
}
