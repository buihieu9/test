import axios from 'axios'
import queryString from 'query-string'

const axiosClient = axios.create(
    {
        baseURL:process.env.REACT_APP_API_URL,
        headers:{
            'content-type': 'application/json',
            "authorization": `bearer ${localStorage.getItem('jwt')}`
        },
        paramsSerializer: params => {
          return queryString.stringify(params)
        },
    }
)
axiosClient.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    throw error
  });

export default axiosClient