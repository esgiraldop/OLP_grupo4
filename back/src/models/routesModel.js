const {pool} = require('../config/database')

exports.getAll = async () => {
    const query = `SELECT * FROM routes`
    const {rows} = await pool.query(query)
    return rows
}

exports.getById = async (id) => {
    // For searching routes
    const query = `SELECT * FROM routes WHERE id = $1`
    const {rows} = await pool.query(query, [id])
    return rows[0]
}

exports.addRoute = async (name, description, content) => {
    const query = `INSERT INTO routes (name, description, content)
    VALUES ($1, $2, $3)
    RETURNING id, name, description, content
    `
    const values = [name, description, content]
    const {rows} = await pool.query(query, values)
    return rows[0]
}

exports.updateRoute = async (id, name, description) => {
    const query = `UPDATE routes
    SET name = $1, description = $2
    WHERE id = $4
    RETURNING id, name, description
    `
    const values = [name, description, id]
    const {rows} = await pool.query(query, values)
    return rows[0]
}

exports.deleteRoute = async (id) => {
    const query = `DELETE FROM routes WHERE id = $1`
    await pool.query(query, [id])
}