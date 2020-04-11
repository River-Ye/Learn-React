import axios from 'axios';

const instance = axios.create({});

const axiosRequest = (config) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`%c${config.url}`, 'background: #fff; color: #2ecc71; font-size:14px;');
  }
  return config;
};


const successResponseHandler = (response) => {
  if (process.env.NODE_ENV === 'development') {
    const { config } = response;
    console.log(`%cresponse ${config.url}`, 'background: #2ecc71; color: #fff; font-size:14px;');
  }
  return response;
};
const errorResponseHandler = (error) => {
  if (error.response) {
    const { data } = error.response;
    console.log('error response data');
    console.log(data);
  } if (error.request) {
    console.log(error.request);
  } else {
    console.log('Error', error.message);
  }
  return Promise.reject(error);
};

instance.interceptors.request.use(axiosRequest);
instance.interceptors.response.use(successResponseHandler, errorResponseHandler);

export default instance;
