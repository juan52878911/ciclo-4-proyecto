import React from 'react';

export function User({user}) {

    let tipo_documento;
    if(user.tipodocumento === "a"){
        tipo_documento = "Tarjeta de identidad";
    }if(user.tipodocumento === "b"){
        tipo_documento = "Cedula ciudadana";
    }if(user.tipodocumento === "c"){
        tipo_documento = "Pasaporte";
    }

    return (
        <div>
            <li>
                {/* <br/>   
                <b>error:</b> {user.error} */}
                <br/>   
                <b>Roll:</b> {user.roll}
                <br/>
                <b>Nombres:</b> {user.nombres} 
                <br/>
                <b>Apellidos:</b> {user.apellidos}
                <br/>
                <b>Tipo de documento:</b> {tipo_documento}
                <br/>
                <b>Numero de documento:</b> {user.numero_documento}
                <br/>
                <b>Correo:</b> {user.correo}
                <br/>
                <b>Telefono: </b>{user.numero_telefonico}
                <br/>
                <b>Password: </b>{user.password}
            </li>
            <br/>
        </div>
    );
}