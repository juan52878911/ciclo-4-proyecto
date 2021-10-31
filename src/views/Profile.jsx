import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import { ProfileUser } from '../components/ProfileUser';
import UserContext from '../data/UserContext';

export function Profile() {

    const { token, getUser, userToken } = useContext(UserContext);
    const history = useHistory();

    const [user, setUser] = useState();

    useEffect(() => {
        if (!userToken) history.push('/login')

        axios.get(
            `/Usuarios/${userToken?.id}`,
            {
                headers: {
                    "auth-token": token
                }
            }
        )
            .then(res => {
                setUser(res.data);
                // const Usuarios = res.data;
                // Usuarios ? setUser(Usuarios) : setUser(null) 
            })
            .catch(error => console.log(error))
    });


    return (

        <div>
            {() => getUser(userToken.id)}
            {user
                ? <div>
                    <ProfileUser user={user} />
                </div>
                : <b>Cargando...</b>}
            {/* {console.log(user)} */}
        </div>
    );
}