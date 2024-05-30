const {getAll, getByRouteId, addLanguage, updateLanguage, deleteLanguage} = require('../models/languagesModel')

exports.getAll = async (req, res) => {
  try{
    const languages = await getAll();
    res.status(200).json(languages)
  } catch (err){
    console.error("Error en getAllLanguages: ", err)
    res.status(500).json({message: "Error en el servidor"})
  }
}

exports.getById = async (req, res) => {
  try{
    const { id } = req.params
    const language = await getByRouteId(id)
    if(!language){
      return res.status(400).json({ message: `The language with id ${id} does not exist`})
    }
    res.status(200).json(language)
  } catch (err){
    console.log("Error en getById")
    res.status(500).json({message: "Error en el servidor"})
  }
}

exports.addLanguage = async (req, res) => {
  try{
    const { name, description, content, id_route,language_img } = req.body;
    language = await addLanguage(name, description, content, id_route,language_img)
    if(!language){
      return res.status(404).json({message: "Error when creating the language"})
    }
    res.status(201).json({message: "Language created successfully", language})
  }catch{
    console.log("Error when registering language: ", err)
    res.status(500).json({message: "Error in the server"})
  }
}

exports.updateLanguage = async (req, res) =>{

}

exports.deleteLanguage = async (req, res) => {

}