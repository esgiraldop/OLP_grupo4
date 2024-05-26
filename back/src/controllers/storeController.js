const {getAllUsersInfo, getUserInfoById, addAccessory2Avatar, updateAccesory2Avatar, deleteAccesory2Avatar} = require('../models/storeModel')

exports.getAllUsersInfo = async (req, res) => {
  try{
    //const routes = await getAllUsersInfo();
    res.status(200).json({message: "This function is not enabled yet"})
  } catch (err){
    console.error("Error when getting all the users info: ", err)
    res.status(500).json({message: "Error on the server"})
  }
}

exports.getUserInfoById = async (req, res) => {
  try{
    const { id } = req.params
    const accessoriesInfo = await getUserInfoById(id)
    if(!accessoriesInfo){
      return res.status(400).json({ message: `The user with id ${id} does not exist`})
    }
    res.status(200).json(accessoriesInfo)
  } catch (err){
    console.log("Error when querying the info of accessories for the user")
    res.status(500).json({message: "Error on the server"})
  }
}

exports.addAccesory2Avatar = async (req, res) => {

}

exports.updateRoute = async (req, res) =>{

}

exports.deleteAccesory2Avatar = async (req, res) => {

}