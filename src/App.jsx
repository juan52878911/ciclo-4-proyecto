import React, { useState, useEffect} from 'react';
import { UserList } from './components/UserList';


//base de datos
import axios from 'axios';

axios.defaults.baseURL = 'https://murmuring-plateau-00381.herokuapp.com/api';

export default function App(props) {
    //variables
    const [users, setUser] = useState([]); 

    useEffect(() =>{
        axios.get(`/Usuarios`)
        .then(res => {
            const persons = res.data;
            setUser(persons);
        })
    }, [users]);

    //render
    return (
        <div>
            <h1>Lista de usuarios (mongo)</h1>
            <UserList users={users}/>
        </div>
    );
}