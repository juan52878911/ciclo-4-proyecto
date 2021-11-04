import express from 'express';
import bcrypt from 'bcrypt';

const saltRounds = 10;

const router = express.Router();

//importar el modelo registro

import Usuarios from '../models/Usuarios';

//Busqueda por ID de usuario

router.get('/Usuarios/:id', async (req, res) => {

    const _id = req.params.id;

    try {

        const usuarioDb = await Usuarios.findOne({ _id });
        res.json(usuarioDb);

    } catch (error) {

        return res.status(500).json({

            mensaje: 'Ocurrio un error',
            error
        })

    }
});

//Busqueda con todos los documentos de usuarios

router.get('/Usuarios', async (req, res) => {

    try {

        const usuarioDb = await Usuarios.find();
        res.json(usuarioDb);

    } catch (error) {

        return res.status(500).json({

            mensaje: 'Ocurrio un error',
            error
        })

    }
});

// eliminar un registro de un usuario

router.delete('/Usuarios/:id', async (req, res) => {


    const _id = req.params.id;

    try {

        const usuarioDb = await Usuarios.findByIdAndDelete({ _id });
        if (!usuarioDb) {
            return res.status(400).json({
                mensaje: 'No se encontró el id indicado', error
            })
        }
        res.json(usuarioDb);

    } catch (error) {

        return res.status(500).json({

            mensaje: 'Ocurrio un error',
            error
        })

    }
});

//Actualizar un registro de un usuario

router.put('/Usuarios/:id', async (req, res) => {

    const _id = req.params.id;
    const body = req.body;

    try {
        if (body.password) {
            //bcrypt
            const salt = await bcrypt.genSalt(saltRounds);
            body.password = await bcrypt.hash(body.password, salt);
        }

        const usuarioDb = await Usuarios.findByIdAndUpdate(_id, body, { new: true });
        res.json(usuarioDb);

    } catch (error) {

        return res.status(500).json({

            mensaje: 'Ocurrio un error',
            error
        })

    }


});

//favoritos del usuario
router.get('/Favoritos/:id', async (req, res) => {

    const _id = req.params.id;

    try {

        const usuarioDb = await Usuarios.findOne({ _id });
        return res.json(usuarioDb.usuarios_favoritos);

    } catch (error) {

        return res.status(500).json({

            mensaje: 'Ocurrio un error',
            error
        })

    }
});

//Exportacion de router
module.exports = router;