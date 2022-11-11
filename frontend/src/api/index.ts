import * as urls from './urls';
import { useFetch } from "../hooks/useFetch";

export const getCityFetch = (offset: number, limit: number, sortable: number) => {
    return useFetch("GET", urls.getCities, `?page=${offset}&size=${limit}&sortable=${sortable}`)
}

