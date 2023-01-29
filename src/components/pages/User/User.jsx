import { useState } from 'react';
import { useEffect } from "react"
import { api } from '../../Api/api';
import { useNavigate } from "react-router-dom";

export function User() {
    const navigate = useNavigate();
    const [ user, setUser ] = useState(Object());

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token')
            if (token) {
                const res = await api.me(token);
                const responce = await res.json()
                setUser(responce)
            } else {
                navigate(-1)
            }
        }
        fetchData()
    }, [])


    return (
        <div>
            <h1>{user.name}</h1>
            <h2>{user.email}</h2>
            <img src={user.avatar} className="avatar"/>
            <h3>{user.group}</h3>
        </div>
    );
}