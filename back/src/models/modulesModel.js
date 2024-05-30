const {pool} = require('../config/database')

exports.getAll = async () => {
    const query = `SELECT * FROM modules`
    const {rows} = await pool.query(query)
    return rows
}

exports.getByLanguageId = async (id) => {
    const query = `SELECT * FROM modules WHERE id_language = $1`
    const {rows} = await pool.query(query, [id])
    return rows
}

exports.addModule = async (name, description, id_language, content) => {
    const query = `INSERT INTO modules (name, description, id_language, content)
    VALUES ($1, $2, $3, $4)
    RETURNING id, name, description, id_language, content
    `
    const values = [name, description, id_language, content]
    const {rows} = await pool.query(query, values)
    return rows[0]
}

exports.updateModule = async (id, name, description, id_language) =>{
    const query = `UPDATE modules
    SET name = $1, description = $2, id_language = $3
    WHERE id = $4
    RETURNING id, name, description, id_language
    `
    const values = [name, description, id_language, id]
    const {rows} = await pool.query(query, values)
    return rows[0]
}

exports.deleteModule = async (id) => {
    const query = `DELETE FROM modules WHERE id = $1`
    await pool.query(query, [id])
}