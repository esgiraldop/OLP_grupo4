const {getAll, getById, addRoute, updateRoute, deleteRoute} = require('../models/routesModel')

exports.getAll = async (req, res) => {
  try{
    const routes = await getAll();
    res.status(200).json(routes)
  } catch (err){
    console.error("Error en getAllroutes: ", err)
    res.status(500).json({message: "Error en el servidor"})
  }
}

exports.getById = async (req, res) => {
  try{
    const { id } = req.params
    const route = await getById(id)
    if(!route){
      return res.status(400).json({ message: `The route with id ${id} does not exist`})
    }
    res.status(200).json(route)
  } catch (err){
    console.log("Error en getById")
    res.status(500).json({message: "Error en el servidor", err})
  }
}

exports.addRoute = async (req, res) => {
  try{
    const { name, description, content } = req.body;
    route = await addRoute(name, description, content)
    if(!route){
      return res.status(404).json({message: "Error when creating the route"})
    }
    res.status(201).json({message: "Route created successfully", route})
  }catch(err){
    console.log("Error when registering route: ", err)
    res.status(500).json({message: "Error in the server"})
  }
}

exports.updateRoute = async (req, res) =>{

}

exports.deleteRoute = async (req, res) => {

}