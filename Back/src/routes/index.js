const {
    Router
} = require('express');

const router = Router();
const {
    createComercio,
    getComercio,
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
    createPlan,
    getPlan,
    createTurno,
    getTurno,
    createUsuario,
    getUsuario
} = require('../controllers/index.controller');

router.get('/comercios', getComercio);
router.post('/comercios', createComercio);
// router.get('/users', getUser);

// router.get('/users/:id', getUserById);

// router.post('/users', createUser);

// router.delete('/users/:id', deleteUser);

// router.put('/users/:id', updateUser);

module.exports = router;