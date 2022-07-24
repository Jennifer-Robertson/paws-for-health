// const Pet = require('../model/petInfoModel');
// const petInfo = require('../model/petInfoModel');

const User = require('../model/User')

exports.addPet = async(req, res, next) => {
    const petName = req.body.name;
    const petAge = req.body.age;
    const petSpecies = req.body.species;
    const currentUsername = req.body.username;
    console.log(currentUsername)
    console.log(req.body, petName, petAge, petSpecies)


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
    
//     , function (err, record) {
//         if(err) res.status(401).json({message: "Pet creation not successful", error: err.message})
//         console.log("this is the record", record)
        
//         record.pets.push({
//             petName,
//             petAge,
//             petSpecies
//         })
//         record.save()
//         res.status(201).json({message: "pet created"})
//     })
// }