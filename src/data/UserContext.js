import axios from 'axios';
import React, { createContext, useState } from 'react'
import { decodeToken } from 'react-jwt'

const UserContext = createContext();

const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [userToken, setUserToken] = useState(null);

    const login = (form) => {
        axios.post('/Login', form)
            .then(res => {
                console.log(decodeToken(res.data.data));

                setUserToken(decodeToken(res.data.data.token));
                setToken(res.data.data.token);
            });

        getUser(userToken?.id);
    }

    const logout = () => {
        setUser(null);
        setUserToken(null);
    }

    const getUser = (id) => {
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
    }


    const data = { token, userToken, user, getUser, login, logout };

    // useEffect(() => {
    //     localStorage.setItem('UserData', token)
    // }, [token])

    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}

export { UserProvider };
export default UserContext;