import perfil from '../model/Perfil'
import { validationResult } from 'express-validator';


const obtenerPerfiles = async (req,res) => {
    const perfilDB = await perfil.find({});

    return res.json({
        'data': perfilDB,
        'mensaje': 'Consulta realizada correctamente',
        'status': 200
    });
}

const obtenerPerfil = async (req,res) => {
    const perfilDB = await perfil.findById(req.params.id);

    return res.json({
        'data': perfilDB,
        'mensaje': 'Consulta realizada correctamente',
        'status': 200
    });
}

const crearPerfil = async (req,res) => {
    // Validacion de errores en los parametros enviados
    const errores = validationResult(req)
    if (!errores.isEmpty()) {
        return res.status(400).json({
            'error': errores.array(),
            'mensaje': 'Ocurrio un error en los parametros enviados.',
            'status': 400
        })
    }

    // Creo el objeto BaseTecnica
    const newPerfil = await perfil({
        "PerfilName": req.body.PerfilName,
        "DeviceProfileID": req.body.DeviceProfileID
    });

    // Guardamos el objeto en la BD
    newPerfil.save((err,db) => {
        if (err) {
            //console.log(err)
            return res.status(400).json({
                'error': err.errors,
                'mensaje': 'Error al crear el registro en la base de datos.',
                'status': 400
            })
        }

        return res.json({
            'data': db,
            'mensaje': 'Consulta realizada correctamente',
            'status': 200
        });
    })
}

const modificarPerfil = async (req,res) => {
    // Validacion de errores en los parametros enviados
    const errores = validationResult(req)
    if (!errores.isEmpty()) {
        return res.status(400).json({
            'error': errores.array(),
            'mensaje': 'Ocurrio un error en los parametros enviados.',
            'status': 400
        })
    }

    const newPerfil = {
        "PerfilName": req.body.PerfilName,
        "DeviceProfileID": req.body.LocationGroupID
    }

    // Actualizo el objeto BaseTecnica
    await perfil.findByIdAndUpdate(req.params.id,newPerfil,{new: true, upsert: true},(err,db) => {
        if (err) {
            //console.log(err)
            return res.status(400).json({
                'error': err.errors,
                'mensaje': 'Error al modificar el registro en la base de datos.',
                'status': 400
            })
        }

        return res.json({
            'data': db,
            'mensaje': 'Consulta realizada correctamente',
            'status': 200
        });
    });
}

const borrarPerfil = async (req,res) => {
    // Actualizo el objeto BaseTecnica
    await perfil.findByIdAndRemove(req.params.id,(err,db) => {
        if (err) {
            //console.log(err)
            return res.status(400).json({
                'error': err.errors,
                'mensaje': 'Error al borrar el registro en la base de datos.',
                'status': 400
            })
        }

        return res.json({
            'data': db,
            'mensaje': 'Consulta realizada correctamente',
            'status': 200
        });
    });
}

module.exports = {
    obtenerPerfiles,obtenerPerfil,crearPerfil,modificarPerfil,borrarPerfil
}