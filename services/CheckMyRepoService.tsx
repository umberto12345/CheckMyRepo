import { urlApi } from "../constants/Url";
import axios from 'axios';

export const postMessage = async (_user?: string, repositortName?: string,) => {
    const url = `${urlApi.pushMore}`;
    let data = `Check repo https://github.com/${_user?.toLowerCase().split(' ').join('')}/${repositortName?.toLowerCase().split(' ').join('')} 👾 by Umberto Titola`;
    const response = await axios.post(url, data);
    return response;
};
export const fetchRepo = async (_user?: string, repositoryName?: string) => {
    const url = `${urlApi.git}/${_user?.split(' ').join('')}/${repositoryName?.split(' ').join('')}`;
    const response = await axios.get(url);
    return response;
};

