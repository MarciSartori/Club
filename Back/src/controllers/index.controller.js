const { Pool } = require('pg');

const pool =  new Pool({
    host : 'localhost',
    user: 'postgres',
    password: 'sagueros2',
    database: 'club',
    port : '5432'
});

// COMERCIOS //
const createComercio = async (req, res) => {
    const { nombre, descuento } = req.body;

    const response = await pool.query('INSERT INTO comercio (nombre, descuento) VALUES ($1, $2)', [nombre, descuento]);
    console.log(response);
    res.json({
        Message: 'COMERCIO CORRECTAMENTE',
        body: {
            comercio: {nombre, descuento}
        }
    })
};


const getComercio = async (req, res) => {
    const response = await pool.query('SELECT * FROM comercio');
    console.log(response.rows);
    res.status(200).json(response.rows);
};
// COMERCIOS //



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
    getComercio
}