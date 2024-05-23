const {getAll, getByLanguageId, addModule,
    updateModule, deleteModule } = require('../models/modulesModel')

exports.getAll = async(req, res) => {
    try{
        const modules = await getAll()
        res.status(200).json(modules)
    }catch (err){
        console.error("Error in getAll modules: ", err)
        res.status(500).json({message: "Error in the server"})
    }
}

exports.getByLanguageId = async (req, res) => {
  try{
    const { id } = req.params
    const module = await getByLanguageId(id)
    if(!module){
      return res.status(400).json({ message: `The module with id ${id} does not exist`})
    }
    res.status(200).json(module)
  } catch (err){
    console.log("Error en getById")
    res.status(500).json({message: "Error en el servidor"})
  }
}

exports.addModule = async (req, res) => {
  try{
    const { name, description, id_route } = req.body;
    module = await addModule(name, description, id_route)
    if(!module){
      return res.status(404).json({message: "Error when creating the module"})
    }
    res.status(201).json({message: "module created successfully", module})
  }catch{
    console.log("Error when registering module: ", err)
    res.status(500).json({message: "Error in the server"})
  }
}

exports.updateModule = async (req, res) =>{

}

exports.deleteModule = async (req, res) => {

}