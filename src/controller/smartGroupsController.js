import smartGroup from '../model/smartGroup'
import { validationResult } from 'express-validator';


const obtenerSmartGroups = async (req,res) => {
    const smartGroupDB = await smartGroup.find({});

    return res.json({
        'data': smartGroupDB,
        'mensaje': 'Consulta realizada correctamente',
        'status': 200
    });
}

const obtenerSmartGroup = async (req,res) => {
    const smartGroupDB = await smartGroup.findById(req.params.id);

    return res.json({
        'data': smartGroupDB,
        'mensaje': 'Consulta realizada correctamente',
        'status': 200
    });
}

const crearSmartGroup = async (req,res) => {
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
    const newSmartGroup = await smartGroup({
        "Group": req.body.Group,
        "ManagedBy": req.body.ManagedBy
    });

    // Guardamos el objeto en la BD
    newSmartGroup.save((err,db) => {
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

const modificarSmartGroup = async (req,res) => {
    // Validacion de errores en los parametros enviados
    const errores = validationResult(req)
    if (!errores.isEmpty()) {
        return res.status(400).json({
            'error': errores.array(),
            'mensaje': 'Ocurrio un error en los parametros enviados.',
            'status': 400
        })
    }

    const newSmartGroup = {
        "Group": req.body.Group,
        "ManagedBy": req.body.ManagedBy
    }

    // Actualizo el objeto BaseTecnica
    await smartGroup.findByIdAndUpdate(req.params.id,newSmartGroup,{new: true, upsert: true},(err,db) => {
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

const borrarSmartGroup = async (req,res) => {
    // Actualizo el objeto BaseTecnica
    await smartGroup.findByIdAndRemove(req.params.id,(err,db) => {
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
    obtenerSmartGroups,obtenerSmartGroup,crearSmartGroup,modificarSmartGroup,borrarSmartGroup
}