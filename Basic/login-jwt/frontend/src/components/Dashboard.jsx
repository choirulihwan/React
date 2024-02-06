import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

export const Dashboard = () => {
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        refreshToken();
        // getUsers();
    }, []); 

    const refreshToken = async () => {        
        try {
            const response = await axios.get('http://localhost:5001/token');
            setToken(response.data.accessToken);            
            const decoded = jwt_decode.jwtDecode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        } catch (error) {
            // console.log(error);   
            if(error.response) {
                navigate("/");
            }
        }
    }

    //dieksekusi setiap sebelum request
    const axiosJwt = axios.create();
    axiosJwt.interceptors.request.use(async(config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get("http://localhost:5001/token");
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwt_decode.jwtDecode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

    const getUsers = async () => {
        const response = await axiosJwt.get("http://localhost:5001/users", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        // console.log(response.data);  
        setUsers(response.data);    
    }

    return (
        <div className='container mt-5'>
            <h1>Welcome: {name}</h1>
            <button onClick={getUsers} className='button is-info'>Get Users</button>
            <table className='table is-fullwidth is-striped'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Email</th>                        
                    </tr>
                </thead>
                <tbody>
                    { users.map ((user, index) => (
                        <tr key={user.id}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                    <tr>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Dashboard