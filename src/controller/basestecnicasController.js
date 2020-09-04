import BaseTecnica from '../model/basetecnica'
import { validationResult } from 'express-validator';


const obtenerBases = async (req,res) => {
    return res.json({
        'data': 'gg',
        'mensaje': 'Consulta realizada correctamente',
        'status': 200
    });
}

const obtenerBase = async (req,res) => {
    /*let bt = new BaseTecnica();

    return res.json({
        'data': await bt.listarTodos(),
        'mensaje': 'Consulta realizada correctamente',
        'status': 200
    });*/
}

const crearBase = async (req,res) => {
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
    const newBaseTecnica = await BaseTecnica({
        "SmartGroupID": req.body.SmartGroupID,
        "BaseName": req.body.BaseName,
        "Region": req.body.Region || null
    });

    // Guardamos el objeto en la BD
    newBaseTecnica.save((err,bt) => {
        if (err) {
            console.log(err)
            return res.status(400).json({
                'mensaje': 'Error al crear el registro en la base de datos.',
                'status': 400
            })
        }

        return res.json({
            'data': bt,
            'mensaje': 'Consulta realizada correctamente',
            'status': 200
        });
    })
}

const modificarBase = async (req,res) => {
    /*let bt = new BaseTecnica();

    return res.json({
        'data': await bt.listarTodos(),
        'mensaje': 'Consulta realizada correctamente',
        'status': 200
    });*/
}

const borrarBase = async (req,res) => {
    /*let bt = new BaseTecnica();

    return res.json({
        'data': await bt.listarTodos(),
        'mensaje': 'Consulta realizada correctamente',
        'status': 200
    });*/
}

module.exports = {
    obtenerBases,obtenerBase,crearBase,modificarBase,borrarBase
}