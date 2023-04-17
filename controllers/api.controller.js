const model = require('../models/user.model')
const fs = require('fs')

exports.list = async (req, res, next) => {
    
    try {
        let obj = await model.user.find();
        if(obj){
            return res.status(200).json({data: obj, msg: 'get data successfully'})
        }else{
            return res.status(204).json({msg: 'not found'})
        }
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}
exports.add = async (req, res, next) => {
    try {
        let obj = new model.user()
        obj.id = req.body.id
        obj.name = req.body.name
        obj.image = req.body.image
        obj.point = req.body.point
        let data  = obj.save()
        return res.status(200).json({data: data, msg: 'post data successfully'})
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}
exports.edit = async (req, res, next) => {
    let id = req.params.id
    try {
        let obj = new model.user()
        obj.id = req.body.id
        obj.name = req.body.name
        obj.image = req.body.image
        obj.point = req.body.point
        obj._id = id;
        await model.user.findByIdAndUpdate({_id: id}, obj)
        return res.status(200).json({msg: 'update data successfully'})
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}
exports.delete = async (req, res, next) => {
    let id = req.params.id
    try {
        await model.user.findByIdAndDelete({_id: id})
        return res.status(200).json({msg: 'delete data successfully'})
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}