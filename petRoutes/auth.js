// const Pet = require('../model/petInfoModel');
// const petInfo = require('../model/petInfoModel');

const User = require('../model/User')

exports.addPet = async(req, res, next) => {
    const petName = req.body.name;
    const petAge = req.body.age;
    const petSpecies = req.body.species;
    const currentUsername = req.user;
  
    User.findOne({"username": currentUsername})
    .then(doc => {
        let original = true;
        for(let i = 0; i < doc.pets.length; i++){
            if(doc.pets[i].petName === petName){
                original = false;
                res.status(401).json({message: "Pet already exists in database"})

            }
        }
        if(original) {
            doc.pets.push({
                petName,
                petAge,
                petSpecies
            }); 
            doc.save(); 
            res.status(201).json({message: "pet created"}); 

        }

        })
            .catch((err) => {
                res.status(401).json({
                    message: "Pet creation not successful",
                    error: err.message
            })
        })
    }
    
    exports.getPets = async(req, res, next) => {
        const currentUsername = req.user;

        User.findOne({"username": currentUsername})
        .then(doc => {
            const pets = doc.pets.map(pet => pet['petName'])
            res.status(200).json({petNames: pets})
        })
        .catch((err) => {
            res.status(401).json({
                message: "no pets in DB",
                error: err.message
        })

    })
}

exports.petMetrics = async (req, res, next) => {
    const {name, date, weight, appetite, mood, water, urine, stool, stoolConsistency, vomit} = req.body;
    console.log(date, weight, appetite)
    const currentUsername = req.user
    console.log(currentUsername)
    User.findOne({"username": currentUsername})
        .then(doc => {
            console.log(doc.pets.filter(pet => pet.petName === name ))
        })
}
