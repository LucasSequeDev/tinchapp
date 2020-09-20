import { Router } from 'express';
import { check } from 'express-validator';
import {obtenerPerfiles,obtenerPerfil,crearPerfil,modificarPerfil,borrarPerfil
    } from '../controller/PerfilesController'
const router = Router();

// Ruta para obtener todas las bases tecnicas
router.get('/', obtenerPerfiles)

// Ruta para obtener datos de una base tecnica
router.get('/:id', obtenerPerfil)

// Ruta para crear una base tecnica
router.post('/',[
    check("PerfilName","El Perfil es obligatorio").notEmpty(),
],crearPerfil)


// Ruta para modificar una base tecnica
router.put('/:id',[
    check("PerfilName","El Perfil es obligatorio").notEmpty(),
], modificarPerfil)

// Ruta para borrar una base tecnica
router.delete('/:id', borrarPerfil)

module.exports = router;