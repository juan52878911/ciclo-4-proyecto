/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useContext } from 'react';


import axios from 'axios';

//datos
import { User } from './User';
import UserContext from '../data/UserContext';

export function UserList() {

    const [users, setUser] = useState([]);

    const { token, userToken } = useContext(UserContext);

    const isAutent = userToken ? true : false;

    // useEffect(() => {
        // const header = `auth-token: ${token}`;
        const url = "/Usuarios";

        if(isAutent){
            axios.get(
                url,
                {
                    headers: {
                        "auth-token": token
                    }
                }
            )
                .then(res => {
                    const Usuarios = res.data;
                    Usuarios ? setUser(Usuarios) : setUser(null) 
                })
        }

    // }, [users, token]);

    return (
        <div>
            <h1>{userToken?.name ? `Bienvenido ${userToken.name}` : "Usuario no logueado"}</h1>
            <ul>
                {users.map((user) => (
                    <div key={user._id}>
                        <User user={user} />
                    </div>
                ))}
            </ul>
        </div>
    );
}