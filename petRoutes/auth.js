const Pet = require('../model/petInfoModel');
// const petInfo = require('../model/petInfoModel');

const User = require('../model/User')

exports.addPet = async(req, res, next) => {
    const {petName, petAge, petSpecies} = req.body;
    const currentUsername = req.body.username;
    console.log(currentUsername)


    User.findOne({"username": currentUsername})
    .then(doc => {

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