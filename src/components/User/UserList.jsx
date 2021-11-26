/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect, useContext } from 'react';

//datos
import { User } from './User';
import UserContext from '../../data/UserContext';
import List from '@mui/material/List'
import IconButton from '@mui/material/IconButton'
import Divider from '@mui/material/Divider'

//iconos
import AutorenewIcon from '@mui/icons-material/Autorenew';

export function UserList() {

    const { user, userList, getUserList } = useContext(UserContext);

    useEffect(() => {
        getUserList();
    }, [getUserList, user]);

    return (
        <div>
            {userList
                ? <div>
                    <h1>Lista de usuarios</h1>
                    <IconButton onClick={() => getUserList()}><AutorenewIcon /></IconButton>
                    <List sx={{ width: 400 }}>
                        {userList.map((userlist) => (
                            <div>
                                <User listUser={userlist} />
                                <Divider variant="inset" component="li" />
                            </div>
                        ))}
                    </List>
                </div>
                :
                <h1>Cargando...</h1>
            }

        </div>
    );
}