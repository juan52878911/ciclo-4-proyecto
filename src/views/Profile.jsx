// import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router';
import { WelcomeUser } from '../components/User/WelcomeUser';
import { UserList } from '../components/User/UserList';
import UserContext from '../data/UserContext';
import { Chat } from '../components/Chat/Chat';

export function Profile() {

    const { user, getUser, userToken } = useContext(UserContext);
    const history = useHistory();

    if (!userToken) history.push('/login')

    useEffect(() => {
        getUser(userToken?.id);
    });


    return (

        <div>
            <WelcomeUser user={user} />
            <UserList/>
            {/* {console.log(user)} */}
            <Chat user={user}/>
        </div>
    );
}