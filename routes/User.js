import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const saltRounds = 10;

var bodyParser = require('body-parser');

const router = express.Router();

//importar el modelo registro

import Usuarios from '../models/Usuarios';

// Crear un nuevo usuario
router.post('/SignUp', async (req, res) => {

    const body = req.body;
    try {

        const usuarioDB = await Usuarios.create(body);
        res.status(200).json(usuarioDB);

    } catch (error) {

        return res.status(500).json({

            mensaje: 'Ocurrio un error',
            error
        })

    }
});

// Busqueda por correo y password

router.post('/Login', async (req, res) => {

    //guardo el objeto que quiero comparar
    const { correo, password } = req.body;

    Usuarios.findOne({ correo }, (err, user) => {
        if (err) {
            return res.json({ error: "error de autenticacion" });
        } else if (!user) {
            return res.json({ error: "correo o contraseña incorrectos" });
        } else {
            user.isCorrect(password, (err, result) => {
                if (!result) {
                    return res.json({ error: "correo o contraseña incorrectos" });
                }
                if (err) {
                    return res.json({ error: "error de autenticacion de password" });
                } else if (result) {
                    const token = jwt.sign({
                        name: user.nombres,
                        roll: user.roll,
                        id: user._id
                    }, process.env.SECRET);

                    return res.header('auth-token', token).json({
                        error: null,
                        token
                    });

                    // res.json({
                    //     error: null,
                    //     token: token
                    // });
                }
            });
        }
    });
});

//rutas nuevas

//lista de usuarios sin datos delicados
//Busqueda con todos los documentos de usuarios

router.get('/ListaUsuarios', async (req, res) => {

    try {

        const usuarioDb = await Usuarios.find();
        const user = [];
        const token = req.header('auth-token');
        const decodeToken = jwt.decode(token);
        const id = decodeToken.id;

        // const idCompatible = usuarioDb.find(e => e._id === id);
        // return res.json(idCompatible);

        usuarioDb.forEach(function (element) {

            if (element._id != id) {
                user.push({
                    id: element._id,
                    roll: element.roll,
                    nombres: element.nombres,
                    apellidos: element.apellidos,
                    correo: element.correo,
                    numero_telefonico: element.numero_telefonico,
                    color: element.color,
                    genero: element.genero,
                    conectado: element.conectado
                });
            }

        });

        res.json(user);

    } catch (error) {

        return res.status(500).json({

            mensaje: 'Ocurrio un error',
            error
        })

    }
});

//Exportacion de router
module.exports = router;