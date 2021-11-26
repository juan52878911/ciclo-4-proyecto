import axios from 'axios';
import React, { createContext, useState, useCallback } from 'react'
import { decodeToken } from 'react-jwt'

const UserContext = createContext();

const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [userToken, setUserToken] = useState(null);
    const [loginError, setLoginError] = useState(null);
    const [userList, setUserList] = useState([]);
    const [favoriteList, setFavoriteList] = useState();

    const [listChat, setListChat] = useState();


    //funciones

    //login de usuario
    const login = (form) => {

        // setLoginError({error: "Base de datos sin conexion"});

        axios.post('/Login', form)
            .then(res => {
                console.log(res.data);

                const error = res.data.error;

                setLoginError(error);
                setUserToken(decodeToken(res.data.token));
                setToken(res.data.token);

                // console.log(loginError);
            });
    }

    //borramos todo rastro del usuario de la aplicacion
    const logout = () => {
        setUser(null);
        setUserToken(null);
        setUserList(null);
    }

    //traemos la informacion completa del usuario logueado
    const getUser = async (id) => {
        if (!user) {
            await axios.get(
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
    }

    //traemos la lista de usuarios sin datos delicados

    const getUserList = useCallback(async () => {
        await axios.get("/ListaUsuarios", {
            headers: {
                "auth-token": token
            }
        }).then(res => {
            const Lista = res.data;
            Lista ? setUserList(Lista) : setUserList(null);
        }).catch(error => console.log(error));

    }, [user, token]);


    const getChatList = async () => {
        await axios.get("/ListaUsuarios", {
            headers: {
                "auth-token": token
            }
        }).then(res => {
            const ListaChat = res.data;
            ListaChat ? setListChat(ListaChat) : setListChat(null);
        }).catch(error => console.log(error));
    }

    //traemos la lista de favoritos del usuario

    // const getUserFavoriteList = useCallback(async () => {
    //     await axios.get(`/Favoritos/${userToken?.id}`).then(res => {
    //         const Lista = res.data;

    //         Lista ? setFavoriteList(Lista) : setFavoriteList(null);
    //     }).catch(error => console.log(error));

    // }, [user]);


    const data = {
        token,
        userToken,
        userList,
        favoriteList,
        user,
        loginError,
        listChat,
        getUser,
        getUserList,
        login,
        logout,
        getChatList
    };

    return (
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}

export { UserProvider };
export default UserContext;