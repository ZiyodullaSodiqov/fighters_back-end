const Events = require('../models/events')

    // malumot yaratish POST
    exports.createEvent = async (req, res, next) => {
        const result = new Events({
            location: req.body.location,
            date: req.body.date,
            fighters: req.body.fighters
        })
        await result.save()
        .then(()=>{
            res.status(201).json({
                message: 'Succesful to create',
                data: result
            })
        })
        .catch((error) =>{
            res.status(400).json({
                message: 'Failed to create',
                data: error
            })
        })
    }

    // get id

    exports.getEvents = async (req, res, next) => {
        await Events.findById(req.params.id).exec((error, value) => {
            if (error) throw error
            else {
                res.json(value)
            }
        })
    
    }

       //get all

       exports.getAllEvents = async (req, res, next) => {
        await Events.find().sort({createdAt: -1}).exec((error, value) => {
            if (error) throw error
            else {
                res.json(value)
            }
        })
    
    }

      // put id   
      exports.updateEvents = async (req, res, next) => {
        await Events.findByIdAndUpdate(req.params.id).exec(async (error, value) => {
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

        exports.deleteEvents = async (req, res, next) => {
            await Events.findByIdAndDelete(req.params.id).exec(async (error, value) => {
                if (error) throw error
                else {
                    res.json({
                        message: "Deleted successfully",
                        data: []
                    })
                }
            })
        }