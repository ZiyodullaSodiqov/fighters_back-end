const Fighter = require('../models/fighter')

//malumot yaratish method: post
    exports.createFighter = async (req, res, next) => {
        const result = new Fighter({
            name: req.body.name,
            victory: req.body.victory,
            defeat: req.body.defeat,
            knockaut: req.body.knockaut,
            weight: req.body.weight,
            country: req.body.country,
            team: req.body.team,
            battle_history: req.body.battle_history,
            gender: req.body.gender,
            category: req.body.category,
            ball: req.body.ball
        })
        await result.save()
            .then(() => {
                res.status(201).json({
                    message: 'Successfully to create',
                    data: result
                })
            })
            .catch((error) => {
                res.status(400).json({
                    message: 'Failed to create',
                    data: error
                })
            })
    }


//get id
    exports.getFighter = async (req, res, next) => {
        await Fighter.findById(req.params.id).exec((error, value) => {
            if (error) throw error
            else {
                res.json(value)
            }
        })
    
    }

    //get all

    exports.getAllFighter = async (req, res, next) => {
        await Fighter.find().sort({createdAt: -1}).exec((error, value) => {
            if (error) throw error
            else {
                res.json(value)
            }
        })
    
    }

    // put id   
    exports.updateFighter = async (req, res, next) => {
        await Fighter.findByIdAndUpdate(req.params.id).exec(async (error, value) => {
            if (error) throw error
            else {
                value.name = req.body.name
                await value.save()
                    .then(() => {
                        res.json(value)
                    })
                    .catch((error) => {
                        res.json(error)
                    })
            }
        })
    }


    // delete

    exports.deleteFighter = async (req, res, next) => {
        await Fighter.findByIdAndDelete(req.params.id).exec(async (error, value) => {
            if (error) throw error
            else {
                res.json({
                    message: "Deleted successfully",
                    data: []
                })
            }
        })
    }