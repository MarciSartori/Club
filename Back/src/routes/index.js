const { Router } = require ('express');
const router = Router();
const { getComercio, createComercio } = require('../controllers/index.controller');

router.get('/comercios', getComercio);
router.post('/comercios', createComercio);
// router.get('/users', getUser);

// router.get('/users/:id', getUserById);

// router.post('/users', createUser);

// router.delete('/users/:id', deleteUser);

// router.put('/users/:id', updateUser);

module.exports = router;