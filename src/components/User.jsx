import React from 'react';

export function User({user}) {
    return (
        <div>
            <li>
                Nombres: {user.nombres} 
                <br/>
                Apellidos: {user.apellidos}
                <br/>
                Tipo de documento: {user.tipodocumento}
                <br/>
                Numero de documento: {user.numero_documento}
                <br/>
                Correo: {user.correo}
                <br/>
                Telefono: {user.numero_telefonico}
            </li>
            <br/>
        </div>
    );
}