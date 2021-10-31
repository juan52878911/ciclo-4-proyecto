import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../data/UserContext';

export function Login() {

    const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login, userToken } = useContext(UserContext);

    // const [localToken, setLocalToken] = useState();

    const form = {
        correo: email,
        password: password
    };

    const localLogin = (event) => {
        event.preventDefault();
        login(form);
        // history.push("/profile");
        // setLocalToken(token);
    }


    return (
        <div>
            {userToken
                ? <div>
                    { history.push('/')}
                </div>
                : <div>
                    <h1>Login</h1>
                    <form onSubmit={localLogin}>
                        <label for="name">Correo</label><br />
                        <input name="name" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="User" /> <br />
                        <label for="name">Contraseña</label><br />
                        <input name="name" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="contraseña123" /> <br />

                        <br />
                        <button type="submit" value="Submit">Submit</button>
                    </form>
                    {/* <h2>User</h2>
                        <ul>
                            <li>Email: {email}</li>
                            <li>Password: {password}</li>
                            <li>Token: {localToken}</li> 
                        </ul> */}
                </div>
            }

        </div>
    );
}