import axios from "axios";
import Cookies from 'js-cookie';
import { useState } from "react";

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const submit = async (e) => {
        e.preventDefault();
        const user = {
            username: username,
            password: password
        };
        console.log('user', user)
        try {
            const { data } = await axios.post(
                'http://127.0.0.1:8000/token/',
                user,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                }
            );
            Cookies.set('access_token', data.access);
            Cookies.set('refresh_token', data.refresh);
            axios.defaults.headers.common['Authorization'] = `Bearer ${data['access']}`;
            window.location.href = '/';
        } catch (error) {
            console.error('Login failed:', error);
        }
    };
    return (
        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={submit}>
            <div className="Auth-form-content">
                <h3 className="Auth-form-title">Sign In</h3>
                <div className="form-group mt-3">
                    <label>Username</label>
                    <input className="form-control mt-1"
                        placeholder="Enter Username"
                        name='username'
                        type='text' value={username}
                        required
                        onChange={e => setUsername(e.target.value)} />
                </div>
                <div className="form-group mt-3">
                    <label>Password</label>
                    <input name='password'
                        type="password"
                        className="form-control mt-1"
                        placeholder="Enter password"
                        value={password}
                        required
                        onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="d-grid gap-2 mt-3">
                    <button type="submit"
                        className="btn btn-primary">Submit</button>
                </div>
            </div>
            </form>
        </div>
    );
};