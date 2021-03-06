const {
    Router
} = require('express');

const router = Router();
const {
    createComercio,
    getComercio,
    deleteComercio,
    updateComercio,
    createAlquiler,
    getAlquiler,
    createCancha,
    getCancha,
    createCuota,
    getCuota,
    createGFamiliar,
    getGFamiliar,
    createPaseo,
    getPaseo,
    createPersona,
    getPersona,
    updatePersona,
    deletePersona,
    createPlan,
    getPlan,
    deletePlan,
    updatePlan,
    createTurno,
    getTurno,
    createUsuario,
    getUsuario
} = require('../controllers/index.controller');

router.get('/comercios', getComercio);
router.post('/comercios', createComercio);
router.delete('/comercios/:id', deleteComercio);
router.put('/comercios/:id', updateComercio);


router.get('/alquiler', getAlquiler);
router.post('/alquiler', createAlquiler);

router.get('/cancha', getCancha);
router.post('/cancha', createCancha);

router.get('/cuota', getCuota);
router.post('/cuota', createCuota);

router.get('/gfamiliar', getGFamiliar);
router.post('/gfamiliar', createGFamiliar);

router.get('/paseo', getPaseo);
router.post('/paseo', createPaseo);

router.get('/persona', getPersona);
router.post('/persona', createPersona);
router.delete('/persona/:id', deletePersona);
router.put('/persona/:id', updatePersona);
 
router.get('/plan', getPlan);
router.post('/plan', createPlan);
router.delete('/plan/:id', deletePlan);
router.put('/plan/:id', updatePlan);

router.get('/turno', getTurno);
router.post('/turno', createTurno);

router.get('/usuario', getUsuario);
router.post('/usuario', createUsuario);

// router.get('/users', getUser);

// router.get('/users/:id', getUserById);

// router.post('/users', createUser);

// router.delete('/users/:id', deleteUser);

// router.put('/users/:id', updateUser);

module.exports = router;