import React, { useState } from 'react'

//material ui
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';

//css
import './Home.scss'
import './fondo.scss'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Home = () => {

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    return (
        <>
            <div className="container-fluid">
                <div id="fondo" className="d-none d-md-flex"></div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-7 title">
                        <div className="title_container">
                            <h1>Trueque Mental</h1>
                            <h3>
                                “ llevamos tu mente al siguiente nivel “
                            </h3>
                            <input onClick={handleClickOpen} className="blackButton" type="button" value="Leer mas" />
                        </div>
                    </div>
                    <div className="col-md-2 triangle"></div>
                    <div className="col-md-3 buttons d-none d-md-flex">
                        <input type="button" value="Login" />
                        <input type="button" value="Sign up" />
                    </div>
                </div>
            </div>

            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Use Google's location service?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleClose}>Agree</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default Home
