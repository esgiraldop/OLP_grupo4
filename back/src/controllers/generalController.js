const {getAllTables} = require('../models/generalModel')

exports.getAllT = async (req, res) => {
    try{
        const tables = await getAllTables()
        res.status(200).json(tables)
    }catch (err) {
        console.log("Error returning the database tables")
        res.status(500)
    }
}