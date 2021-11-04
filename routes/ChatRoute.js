import express from 'express';
import jwt_decode from "jwt-decode";

const router = express.Router();
var bodyParser = require('body-parser');

import Chats from '../models/Chats'


//obtener la lista de todos los chats
router.get('/Chat', async (req, res) => {

    try {

        const chatDb = await Chats.find();
        const token = req.header('auth-token');
        const decodeToken = jwt_decode(token);

        if (decodeToken.roll.find(element => element === "admin")) {
            return res.json(chatDb)
        } else {
            const chatList = chatDb.find(element => element.receptor === decodeToken.id || element.emisor === decodeToken.id);

            if (chatList) {
                return res.json(chatList);
            } else {
                return res.json(null);
            }
        }

        return res.json({ chatDb, decodeToken })

    } catch (error) {

        return res.status(500).json({

            mensaje: 'Ocurrio un error',
            error
        })

    }
});

// Crear un nuevo chat
router.post('/newChat', async (req, res) => {

    const body = req.body;
    try {

        const chatDb = await Chats.create(body);
        res.status(200).json(chatDb);

    } catch (error) {

        return res.status(500).json({

            mensaje: 'Ocurrio un error',
            error
        })

    }
});

//Buscar chat por id

router.get('/Chat/:id', async (req, res) => {

    const _id = req.params.id;

    try {

        const chatDb = await Chats.findOne({ _id });
        res.json(chatDb);

    } catch (error) {

        return res.status(500).json({
            mensaje: 'Ocurrio un error',
        })

    }
});

//agregar mensaje

router.put('/Chat/addMesagge/:id', async (req, res) => {

    const _id = req.params.id;
    const body = req.body;

    const respuesta = {
        id: 0,
        usuario: '',
        mensaje: '',
        visto: false
    };

    try {
        try {

            const chat = await Chats.findOne({ _id });

            respuesta.id = chat.mensajes.length;

            const token = req.header('auth-token');
            const decodeToken = jwt_decode(token);

            // return res.json(decodeToken);

            respuesta.usuario = decodeToken?.id;

            if(body.mensaje.length === 0){
                return res.json("mensaje invalido");
            }else{
                respuesta.mensaje = body.mensaje;
            }

        } catch (error) {
            return res.status(500).json({

                mensaje: 'Ocurrio un error en proceso de procesar el mensaje',
                error
            })
        }

        const chatDb = await Chats.findByIdAndUpdate(_id, { $push: {mensajes: respuesta} }, { new: true });
        return res.json(chatDb);

    } catch (error) {

        return res.status(500).json({

            mensaje: 'Ocurrio un error mientras se añadia el mensaje',
            error
        })

    }


});

module.exports = router;