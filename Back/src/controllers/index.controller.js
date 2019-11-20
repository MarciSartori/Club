const {
    Pool
} = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'sagueros2',
    database: 'club',
    port: '5432'
});

// COMERCIOS //
const createComercio = async (req, res) => {
    const {
        nombre,
        descuento
    } = req.body;

    const response = await pool.query('INSERT INTO comercio (nombre, descuento) VALUES ($1, $2)', [nombre, descuento]);
    console.log(response);
    res.json({
        Message: 'COMERCIO ADD CORRECTAMENTE',
        body: {
            comercio: {
                nombre,
                descuento
            }
        }
    })
};


const getComercio = async (req, res) => {
    const response = await pool.query('SELECT * FROM comercio');
    console.log(response.rows);
    res.status(200).json(response.rows);
};

// COMERCIOS //


// USUARIO //
const createUsuario = async (req, res) => {
    const {
        nombre,
        contraseña,
        mail
    } = req.body;

    const response = await pool.query('INSERT INTO usuario (nombre, contraseña, mail) VALUES ($1, $2, $3)', [nombre, contraseña, mail]);
    console.log(response);
    res.json({
        Message: 'USUARIO ADD CORRECTAMENTE',
        body: {
            comercio: {
                nombre,
                contraseña,
                mail
            }
        }
    })
};


const getUsuario = async (req, res) => {
    const response = await pool.query('SELECT * FROM usuario');
    console.log(response.rows);
    res.status(200).json(response.rows);
};
// USUARIO //


// TURNO //
const createTurno = async (req, res) => {
    const {
        fecha
    } = req.body;

    const response = await pool.query('INSERT INTO turno (fecha) VALUES ($1)', [fecha]);
    console.log(response);
    res.json({
        Message: 'TURNO ADD CORRECTAMENTE',
        body: {
            comercio: {
                fecha
            }
        }
    })
};


const getTurno = async (req, res) => {
    const response = await pool.query('SELECT * FROM turno');
    console.log(response.rows);
    res.status(200).json(response.rows);
};
// TURNO //


// PLAN //
const createPlan = async (req, res) => {
    const {
        nombre,
        descripcion,
        costo
    } = req.body;

    const response = await pool.query('INSERT INTO plan (nombre, descripcion, costo) VALUES ($1, $2, $3)', [nombre, descripcion, costo]);
    console.log(response);
    res.json({
        Message: 'PLAN ADD CORRECTAMENTE',
        body: {
            comercio: {
                nombre,
                descripcion,
                costo
            }
        }
    })
};


const getPlan = async (req, res) => {
    const response = await pool.query('SELECT * FROM plan');
    console.log(response.rows);
    res.status(200).json(response.rows);
};
// PLAN //



// PERSONA //
const createPersona = async (req, res) => {
    const {
        nombre,
        apellido,
        dni
    } = req.body;

    const response = await pool.query('INSERT INTO persona (nombre, apellido, dni) VALUES ($1, $2, $3)', [nombre, apellido, dni]);
    console.log(response);
    res.json({
        Message: 'PERSONA ADD CORRECTAMENTE',
        body: {
            comercio: {
                nombre,
                apellido,
                dni
            }
        }
    })
};


const getPersona = async (req, res) => {
    const response = await pool.query('SELECT * FROM persona');
    console.log(response.rows);
    res.status(200).json(response.rows);
};
// PERSONA //


// PASEO //
const createPaseo = async (req, res) => {
    const {
        cantidad,
        precio
    } = req.body;

    const response = await pool.query('INSERT INTO paseo (cantidad, precio) VALUES ($1, $2)', [cantidad, precio]);
    console.log(response);
    res.json({
        Message: 'USUARIO ADD CORRECTAMENTE',
        body: {
            comercio: {
                cantidad,
                precio
            }
        }
    })
};


const getPaseo = async (req, res) => {
    const response = await pool.query('SELECT * FROM paseo');
    console.log(response.rows);
    res.status(200).json(response.rows);
};
// PASEO //


// G FAMILIAR //
const createGFamiliar = async (req, res) => {
    const {
        descripcion
    } = req.body;

    const response = await pool.query('INSERT INTO gfamiliar (descripcion) VALUES ($1)', [descripcion]);
    console.log(response);
    res.json({
        Message: 'G FAMILIAR ADD CORRECTAMENTE',
        body: {
            comercio: {
                descripcion

            }
        }
    })
};


const getGFamiliar = async (req, res) => {
    const response = await pool.query('SELECT * FROM gfamiliar');
    console.log(response.rows);
    res.status(200).json(response.rows);
};
// G FAMILIAR//


// CUOTA//
const createCuota = async (req, res) => {
    const {
        numeroCuota,
        fecha,
        vencimiento
    } = req.body;

    const response = await pool.query('INSERT INTO cuota (numeroCuota, fecha, vencimiento) VALUES ($1, $2, $3)', [numeroCuota, fecha, vencimiento]);
    console.log(response);
    res.json({
        Message: 'CUOTA ADD CORRECTAMENTE',
        body: {
            comercio: {
                numeroCuota, 
                fecha,
                vencimiento
            }
        }
    })
};


const getCuota = async (req, res) => {
    const response = await pool.query('SELECT * FROM cuota');
    console.log(response.rows);
    res.status(200).json(response.rows);
};
// CUOTA //


// CANCHA //
const createCancha = async (req, res) => {
    const {
        nombre
    } = req.body;

    const response = await pool.query('INSERT INTO cancha (nombre) VALUES ($1)', [nombre]);
    console.log(response);
    res.json({
        Message: 'CANCHA ADD CORRECTAMENTE',
        body: {
            comercio: {
nombre
            }
        }
    })
};


const getCancha = async (req, res) => {
    const response = await pool.query('SELECT * FROM cancha');
    console.log(response.rows);
    res.status(200).json(response.rows);
};
// CANCHA //


// ALQUILER//
const createAlquiler = async (req, res) => {
    const {
        precio
    } = req.body;

    const response = await pool.query('INSERT INTO alquiler (precio) VALUES ($1)', [precio]);
    console.log(response);
    res.json({
        Message: 'ALQUILER ADD CORRECTAMENTE',
        body: {
            comercio: {
                precio
            }
        }
    })
};


const getAlquiler = async (req, res) => {
    const response = await pool.query('SELECT * FROM alquiler');
    console.log(response.rows);
    res.status(200).json(response.rows);
};
// ALQUILER //






// const updateUser = async (req, res) =>{
//     const id = req.params.id;
//     const { nombre } = req.body;
//     const response = await pool.query('UPDATE socio SET nombre = $1 WHERE id = $2', [nombre, id]);
//     console.log(response);
//     res.json('Socio actualizado');
// };

// const getUser = async (req, res) => {
//     const response = await pool.query('SELECT * FROM socio');
//     console.log(response.rows);
//     res.status(200).json(response.rows);
// };

// const getUserById = async (req, res) => {
//     const id = req.params.id;
//     const response = await pool.query('SELECT * FROM socio WHERE id = $1', [id]);
//     res.json(response.rows);
// };

// const createUser = async (req, res) => {
//     const { nombre } = req.body;

//     const response = await pool.query('INSERT INTO socio (nombre) VALUES ($1)', [nombre]);
//     console.log(response);
//     res.json({
//         Message: 'USUARIO AGREGADO CORRECTAMENTE',
//         body: {
//             usuario: {nombre}
//         }
//     })
// };

// const deleteUser = async (req, res) => {
//     const id = req.params.id;
//     const response = await pool.query('DELETE FROM socio WHERE id = $1', [id]);
//     console.log(response);
//     res.json(`socio ${id} eliminado correctamanete`);
// };


module.exports = {
    // getUser,
    // createUser,
    // getUserById,
    // deleteUser, 
    // updateUser
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
}