import React from 'react';
import { useState } from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

// import { UserList } from './components/UserList';
import { Navbar } from './views/Navbar';
import { Home } from './views/Home'
import { Login } from './views/Login'
import { Signin } from './views/Signin'
import { LoguedHome } from './views/LoguedHome';
import { Topics } from './views/Topics';
import { UserProvider } from './data/UserContext';
import { Profile } from './views/Profile';
import { Thermostat } from '@mui/icons-material';

export default function App() {
    //render

   /* window.onload=function() {
        const topicUrl=window.location.href.indexOf('/topics');
        if (topicUrl) {
            document.body.style.backgroundColor='black'
        }
        else{
            document.body.style.backgroundColor='#e5d3ec!important' 
        }
    }; */

    

    return (
        <UserProvider>
            <Router setIsCommonBody>
                <Navbar />

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/loguedhome">
                        <LoguedHome />
                    </Route>
                    <Route path="/signin">
                        <Signin />
                    </Route>
                    <Route path="/profile">
                        <Profile/>
                    </Route>
                    <Route path="/topics">
                        <Topics/>
                    </Route>
                </Switch>
            </Router>
        </UserProvider>
        // <div>
        //     <UserList />
        // </div>
    );
}