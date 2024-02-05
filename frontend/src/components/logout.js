import { useEffect, useState } from "react"
import axios from "axios";
import Cookies from 'js-cookie';

export const Logout = () => {
    useEffect(() => {
        (async () => {
            try {
                const { data } = await
                    axios.post('http://127.0.0.1:8000/auth/logout/', {
                        refresh_token: Cookies.get('refresh_token')
                    }, { headers: { 'Content-Type': 'application/json' } },
                        { withCredentials: true });
                axios.defaults.headers.common['Authorization'] = null;
                window.location.href = '/login'
            } catch (e) {
                console.log('logout not working', e)
            }
        })();
    }, []);
    return (
        <div></div>
    )
}