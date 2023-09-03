import axios from 'axios';

const BASE_URL = 'http://192.168.143.152:3001';

export const getApi = (url, params) => {
  return axios
    .get(`${BASE_URL}${url}`, {params})
    .then(response => response.data)
    .catch(error => {
      console.log('Get request error', error);
      throw error;
    });
};

export const postApi = (url, data) => {
  return axios
    .post(`${BASE_URL}${url}`, data)
    .then(response => {
      return {
        data: response.data,
        status: response.status,
      };
    })
    .catch(error => {
      if (error.response) {
        return {
          data: error.response.data,
          status: error.response.status,
        };
      } else {
        console.log(`Post request error:`, error);
        throw error;
      }
    });
};
