import pool from '../config/db.js'

const argumento = process.argv.slice(2)
const opcion = argumento[0]
const genero = argumento[1]
const FDN = argumento[2]
const telefono = argumento[3]
const email = argumento[4]
const pais = argumento[5]
const nombre = argumento[6]

const addStudent = async (genero, FDN, telefono, email, pais, nombre) => {
    try {
    const consulta = {
        text: 'INSERT INTO users (genero, FDN, telefono, email, pais, nombre) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        values: [genero, FDN, telefono, email, pais, nombre]
    }
        const respuesta = await pool.query(consulta)
        console.log('Estudiante agregado correctamente', respuesta.rows[0])
    }    catch (error) {
        console.log(error.code, error.message)
    }
}



addStudent(genero, FDN, telefono, email, pais, nombre)
