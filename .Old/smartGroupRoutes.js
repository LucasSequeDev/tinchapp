import { Router } from 'express';
import { check } from 'express-validator';
import {obtenerSmartGroups,obtenerSmartGroup,crearSmartGroup,modificarSmartGroup,borrarSmartGroup
    } from '../controller/smartGroupsController'
const router = Router();

// Ruta para obtener todas las bases tecnicas
router.get('/', obtenerSmartGroups)

// Ruta para obtener datos de una base tecnica
router.get('/:id', obtenerSmartGroup)

// Ruta para crear una base tecnica
router.post('/',[
    check("Group","El Grupo es obligatorio").notEmpty(),
],crearSmartGroup)


// Ruta para modificar una base tecnica
router.put('/:id',[
    check("Group","El Grupo es obligatorio").notEmpty(),
], modificarSmartGroup)

// Ruta para borrar una base tecnica
router.delete('/:id', borrarSmartGroup)

module.exports = router;