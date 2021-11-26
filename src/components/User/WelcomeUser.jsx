import React from 'react';

//Model UI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box';
//colors
// import { deepPurple } from '@mui/material/colors';

export function WelcomeUser({ user }) {
    return (
        user
            ? <div>
                < Box mt={5} >
                    <Card>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                <Grid
                                    container
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Grid item xs={2} sx={{ margin: 1 }} >
                                        <Avatar sx={{ width: 70, height: 70, bgcolor: user?.color }} >{user?.nombres.substr(0, 1) + user?.apellidos.substr(0, 1)}</Avatar>
                                    </Grid>
                                    <Grid item xs={2} sx={{ margin: 1 }} >
                                        Bienvenido {user?.nombres + " " + user?.apellidos}
                                    </Grid>
                                </Grid>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <Grid
                                    container
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Grid item xs={2} sx={{ margin: 1 }} >
                                        Sea usted bienvenido a su perfil de <b>Trueque mental</b> donde podra aprender con personas como usted!
                                    </Grid>
                                </Grid>
                            </Typography>
                        </CardContent>
                    </Card>
                </Box >
            </div >
            : 
            <b>Cargando...</b>
    );
}