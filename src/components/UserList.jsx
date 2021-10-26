/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { User } from './User';

export function UserList() {

    const [users, setUser] = useState([]);

    useEffect(() =>{
        axios.get(`/Usuarios`)
        .then(res => {
            const Usuarios = res.data;
            setUser(Usuarios);
        })
    }, [users]);

    return (
        <div>
            <h1>Lista de usuarios (mongo)</h1>
            <ul>
              {users.map((user) =>(  
                  <User user={user}/>
              ))}  
            </ul>
        </div>
    );
}