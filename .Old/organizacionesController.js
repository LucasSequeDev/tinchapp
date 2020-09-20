import organizacion from '../model/organizacion'
import { validationResult } from 'express-validator';


const obtenerOrganizaciones = async (req,res) => {
    const organizacionDB = await organizacion.find({});

    return res.json({
        'data': organizacionDB,
        'mensaje': 'Consulta realizada correctamente',
        'status': 200
    });
}

const obtenerOrganizacion = async (req,res) => {
    const organizacionDB = await organizacion.findById(req.params.id);

    return res.json({
        'data': organizacionDB,
        'mensaje': 'Consulta realizada correctamente',
        'status': 200
    });
}

const crearOrganizacion = async (req,res) => {
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
    const newOrganizacion = await organizacion({
        "OGName": req.body.OGName,
        "CustomerCode": req.body.CustomerCode,
        "LocationGroupID": req.body.LocationGroupID
    });

    // Guardamos el objeto en la BD
    newOrganizacion.save((err,db) => {
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

const modificarOrganizacion = async (req,res) => {
    // Validacion de errores en los parametros enviados
    const errores = validationResult(req)
    if (!errores.isEmpty()) {
        return res.status(400).json({
            'error': errores.array(),
            'mensaje': 'Ocurrio un error en los parametros enviados.',
            'status': 400
        })
    }

    const newOrganizacion = {
        "OGName": req.body.OGName,
        "CustomerCode": req.body.CustomerCode,
        "LocationGroupID": req.body.LocationGroupID
    }

    // Actualizo el objeto BaseTecnica
    await organizacion.findByIdAndUpdate(req.params.id,newOrganizacion,{new: true, upsert: true},(err,db) => {
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

const borrarOrganizacion = async (req,res) => {
    // Actualizo el objeto BaseTecnica
    await organizacion.findByIdAndRemove(req.params.id,(err,db) => {
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
    obtenerOrganizaciones,obtenerOrganizacion,crearOrganizacion,modificarOrganizacion,borrarOrganizacion
}