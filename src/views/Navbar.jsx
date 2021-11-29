import React, { useContext, useEffect } from 'react';
import UserContext from '../data/UserContext';
import { useHistory } from 'react-router-dom'


//Material UI
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider'
import ListItemIcon from '@mui/material/ListItemIcon'
import Logout from '@mui/icons-material/Logout'
import Settings from '@mui/icons-material/Settings'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton';

//colors
// import { deepPurple } from '@mui/material/colors';

export function Navbar() {

    const { user, userToken, logout, getUser } = useContext(UserContext);
    // const history = useHistory();

    
    useEffect(() => {
        getUser(userToken?.id);
    });

    const history = useHistory();

    const localLogout = () => {
        logout();
        history.push('/');
    }

    const [anchorEl, setAnchorEl] = React.useState(null);


    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography component="div" sx={{ flexGrow: 1 }}>
                    <Button onClick={() => history.push('/')} color="inherit" sx={{ fontSize: 20 }}>
                        Trueque mental 🧠
                    </Button>
                </Typography>
                {userToken
                    ?
                    <div>
                        <IconButton
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <Avatar sx={{ bgcolor: user?.color }}>
                                {user?.nombres.substr(0, 1)}
                            </Avatar>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 2,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&:before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                }
                            }}>
                            <MenuItem onClick={() => { history.push('/profile'); setAnchorEl(null) }}>
                                <Avatar sx={{ bgcolor: user?.color }}>{userToken?.name.substr(0, 1)}</Avatar> {userToken?.name}
                            </MenuItem>
                            <Divider />
                            <MenuItem>
                                <ListItemIcon>
                                    <Settings fontSize="small" />
                                </ListItemIcon>
                                Configuracion
                            </MenuItem>
                            <MenuItem onClick={() => { localLogout(); setAnchorEl(null) }}>
                                <ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon>
                                Cerrar sesion
                            </MenuItem>
                        </Menu>
                    </div>
                    :
                    <Stack direction="row" spacing={2}>
                        <Button onClick={() => history.push('/login')} color="inherit">Ingresar</Button>
                        <Button onClick={() => history.push('/signin')} variant="contained" color="warning">Registrarse</Button>
                        <Button onClick={() => history.push('/loguedHome')} variant="contained" color="secondary">Foro</Button>
                        <Button onClick={() => history.push('/Topics')} variant= "contained" color="success">búsqueda de temas</Button>
                    </Stack>
                }
            </Toolbar>
        </AppBar >
        // <ul>
        //     <li><Link to="/">Home</Link></li>
        //     {
        //         userToken
        //             ? <div>
        //                 <hr />
        //                 <li><Link to="/profile">Profile</Link></li>
        //                 <li><Link to="/" onClick={()=>{localLogout()}}>cerrar sesion</Link></li>
        //             </div>
        //             :
        //             <div>
        //                 <li><Link to="/login">Login</Link></li>
        //                 <li><Link to="/signin">Signin</Link></li>
        //             </div>
        //     }
        // </ul>
    );
}
