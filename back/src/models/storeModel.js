const {pool} = require('../config/database')

exports.getAllAccessoriesInfo = async () => {
    // For searching store info for an specific user
    const query = `SELECT * FROM avatar_accesories`;
    const {rows} = await pool.query(query)
    console.log("rows: ", rows)
    return rows
}

exports.getUserInfoById = async (id) => {
    // For searching store info for an specific user
    const query = `
                SELECT users.id,
                       users.username,
                       users.email,
                       users.points,
                       user_avatar_accesory.id_user,
                       user_avatar_accesory.id_accesory,
                       user_avatar_accesory.id_avatar,
                       avatars.img AS avatar_img,
                       avatar_accesories.name AS accesory_name,
                       avatar_accesories.description AS accesory_description,
                       avatar_accesories.url AS accesory_url
                FROM users
                LEFT JOIN user_avatar_accesory ON users.id = user_avatar_accesory.id_user
                LEFT JOIN avatars ON user_avatar_accesory.id_avatar = avatars.id
                LEFT JOIN avatar_accesories ON user_avatar_accesory.id_accesory = avatar_accesories.id
                WHERE users.id = $1
    `;
    const {rows} = await pool.query(query, [id])
    console.log("rows: ", rows)
    return rows
}

exports.addAccessory2Avatar = async (name, description) => {

}

exports.updateAccessory2Avatar = async (id, name, description) => {

}

exports.deleteAccessory2Avatar = async (id) => {

}