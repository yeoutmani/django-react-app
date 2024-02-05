import axios from "axios";
import Cookies from 'js-cookie';

let refresh = false;

axios.interceptors.response.use(
    function (response) {
        console.log('response', response)
        if (response.status === 401) {
        }
        return response;
    },
    async function (error) {
        console.log('error', error)
        if (error.response.status === 401 && !refresh) {
            refresh = true;
            console.log(Cookies.get('refresh_token'));
            try {
                const response = await axios.post(
                    'http://127.0.0.1:8000/token/refresh/',
                    {
                        refresh: Cookies.get('refresh_token'),
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        withCredentials: true,
                    }
                );
                if (response.status === 200) {
                    axios.defaults.headers.common['Authorization'] = `Bearer ${response.data['access']}`;
                    Cookies.set('access_token', response.data.access);
                    Cookies.set('refresh_token', response.data.refresh);
                    return axios(error.config);
                }
            } catch (refreshError) {
                // Handle refresh error if needed
                console.error('Error refreshing token:', refreshError);
            } finally {
                refresh = false;
            }
        }
        return Promise.reject(error);
    }
);