const { pool } = require('../config/database');

exports.getAll = async () => {
    const query = `SELECT * FROM challenges`;
    const { rows } = await pool.query(query);
    return rows;
  }
  
  exports.getByModuleId = async (id) => {
    const query = `SELECT * FROM challenges WHERE id_module = $1`
    const {rows} = await pool.query(query, [id])
    return rows
}

exports.addChallenge = async (title, content, description, score_points, minimum_lvl, id_module) => {
    const query = `INSERT INTO challenges (title, content, description, score_points, minimum_lvl, id_module)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING title, content, description, score_points, minimum_lvl, id_module
    `
    const values = [title, content, description, score_points, minimum_lvl, id_module]
    const {rows} = await pool.query(query, values)
    return rows[0]
}

exports.updateChallenge = async (title, content, description, score_points, minimum_lvl, id_module) =>{
    const query = `UPDATE modules
    SET title = $1, content = $2, description = $3, score_points = $4, minimum_lvl = $5, id_module = $6
    WHERE id = $4
    RETURNING title, content, description, score_points, minimum_lvl, id_module
    `
    const values = [title, content, description, score_points, minimum_lvl, id_module]
    const {rows} = await pool.query(query, values)
    return rows[0]
}

exports.deleteChallenge = async (id) => {
    const query = `DELETE FROM challenges WHERE id = $1`
    await pool.query(query, [id])
}