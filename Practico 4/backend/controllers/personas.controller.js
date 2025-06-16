const personaModel = require('../models/personas.model');

const getPersonas = (req,res) =>{
    res.json(personaModel)
}

module.exports = {getPersonas};

