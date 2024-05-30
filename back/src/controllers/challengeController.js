const { getAll, getByModuleId, addChallenge,
    updateChallenge, deleteChallenge } = require("../models/challengeModel");

exports.getAll = async (req, res) => {
    try {
        const challenges = await getAll();
        res.status(200).json(challenges);
    } catch (err) {
        console.error('Error en getAll Challenges:', err);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}


exports.getByModuleId = async (req, res) => {
  try{
    const { id } = req.params
    const module = await getByModuleId(id)
    if(!module){
      return res.status(400).json({ message: `The challenge with id ${id} does not exist`})
    }
    res.status(200).json(module)
  } catch (err){
    console.log("Error en getByModuleId")
    res.status(500).json({message: "Error en el servidor"})
  }
}

exports.addChallenge = async (req, res) => {
  try{
    const { title, content, description, score_points, minimum_lvl, id_module } = req.body;
    module = await addChallenge(title, content, description, score_points, minimum_lvl, id_module)
    console.log(module);
    if(!module){
      return res.status(404).json({message: "Error when creating the challenge"})
    }
    res.status(201).json({message: "challenge created successfully", module})
  }catch{
    console.log("Error when registering challenge: ", err)
    res.status(500).json({message: "Error in the server"})
  }
}

exports.updateChallenge = async (req, res) =>{

}

exports.deleteChallenge = async (req, res) => {

}