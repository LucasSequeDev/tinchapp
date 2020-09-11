import { Router } from 'express';
import { check } from 'express-validator';
import {obtenerOrganizaciones,obtenerOrganizacion,crearOrganizacion,modificarOrganizacion,borrarOrganizacion
    } from '../controller/organizacionesController'
const router = Router();

// Ruta para obtener todas las bases tecnicas
router.get('/', obtenerOrganizaciones)

// Ruta para obtener datos de una base tecnica
router.get('/:id', obtenerOrganizacion)

// Ruta para crear una base tecnica
router.post('/',[
    check("OGName","La Organizacion es obligatorio").notEmpty(),
],crearOrganizacion)


// Ruta para modificar una base tecnica
router.put('/:id',[
    check("OGName","La Organizacion es obligatorio").notEmpty(),
], modificarOrganizacion)

// Ruta para borrar una base tecnica
router.delete('/:id', borrarOrganizacion)

module.exports = router;