const {pool} = require('../config/database')

exports.getAll = async () => {
    const query = `SELECT * FROM languages`
    const {rows} = await pool.query(query)
    return rows
}

exports.getByRouteId = async (id) => {
    // For searching lenaguages with an associated route id
    const query = `SELECT * FROM languages WHERE id_route = $1`
    const {rows} = await pool.query(query, [id])
    return rows
}

exports.addLanguage = async (name, description, id_route) => {
    const query = `INSERT INTO languages (name, description, id_route)
    VALUES ($1, $2, $3)
    RETURNING id, name, description, id_route
    `
    const values = [name, description, id_route]
    const {rows} = await pool.query(query, values)
    return rows[0]
}

exports.updateLanguage = async (id, name, description, id_route) => {
    const query = `UPDATE languages
    SET name = $1, description = $2, id_route = $3
    WHERE id = $4
    RETURNING id, name, description, id_route
    `
    const values = [name, description, id_route, id]
    const {rows} = await pool.query(query, values)
    return rows[0]
}

exports.deleteLanguage = async (id) => {
    const query = `DELETE FROM languages WHERE id = $1`
    await pool.query(query, [id])
}