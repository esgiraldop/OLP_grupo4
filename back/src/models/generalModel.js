const { pool } = require('../config/database')

exports.getAllTables = async () => {
    // const query = `SELECT * FROM information_schema.tables`
    const query = `SELECT table_name FROM information_schema.tables WHERE table_schema='public'`
    const { rows } = await pool.query(query)
    return rows
}