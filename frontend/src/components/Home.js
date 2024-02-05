import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import axios from "axios";

export const Home = () => {
  const [message, setMessage] = useState([]);
  useEffect(() => {
    if (Cookies.get('access_token') === null) {
      window.location.href = '/login'
    }
    else {
      (async () => {
        try {
          const { data } = await axios.get(
            'http://127.0.0.1:8000/project', {
            headers: {
              'Content-Type': 'application/json',
            }
          }
          );
          console.log('data', data)
          setMessage(data);
        } catch (e) {
          console.log('not auth')
        }
      })()
    };
  }, []);
  return(
    <div>
      <h1>List of Elements</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Comments</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {message.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.start_date}</td>
              <td>{item.end_date}</td>
              <td>{item.comments}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );
}