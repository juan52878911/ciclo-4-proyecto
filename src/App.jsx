import React from 'react';

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

export default function App() {
    //render
    return (
        <UserProvider>
            <Router>
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