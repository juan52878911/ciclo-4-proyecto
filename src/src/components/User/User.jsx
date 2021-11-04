import React, { useState, useContext, useEffect } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import UserContext from '../../data/UserContext';

//Ui
import Avatar from '@mui/material/Avatar';

//icons
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import MessageIcon from '@mui/icons-material/Message';

export function User({ listUser }) {

    // let tipo_documento;
    // if (listUser.tipodocumento === "a") {
    //     tipo_documento = "Tarjeta de identidad";
    // } if (listUser.tipodocumento === "b") {
    //     tipo_documento = "Cedula ciudadana";
    // } if (listUser.tipodocumento === "c") {
    //     tipo_documento = "Pasaporte";
    // }

    const { user } = useContext(UserContext);

    const primerNombre = listUser?.nombres.split(" ")[0];
    const primerApellido = listUser?.apellidos.split(" ")[0];

    const favoriteUser = user.usuarios_favoritos.find(e => e === listUser.id);

    useEffect(() => {
        setFavorite(favoriteUser ? true : false);
    }, [user, favoriteUser])

    const [favorite, setFavorite] = useState();


    return (
        <div>
            <ListItem
                secondaryAction={<div>
                    <IconButton onClick={() => setFavorite(!favorite)}>
                        {
                            favorite 
                            ? <StarIcon />
                            : <StarBorderIcon />
                        }
                    </IconButton>
                    <IconButton>
                        <MessageIcon />
                    </IconButton>
                </div>}
            >
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: listUser?.color }}>{listUser?.nombres.substr(0, 1) + listUser?.apellidos.substr(0, 1)}</Avatar>
                </ListItemAvatar>
                <ListItemText >{primerNombre + " " + primerApellido}</ListItemText>
            </ListItem>
        </div>
    );
}