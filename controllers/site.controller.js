const model = require('../models/user.model')
const fs = require('fs')

exports.list = async (req, res, next) => {
    let obj = await model.user.find();
    res.render('index',{obj})
}

exports.add = async (req, res, next) => {

    if(req.method == 'POST'){
        let obj = new model.user()
        obj.id = req.body.id
        obj.name = req.body.name
        fs.renameSync(req.file.path, './public/images/' + req.file.originalname)
        obj.image = 'http://localhost:3000/images/' + req.file.originalname
        obj.point = req.body.point

        try {
            let data = await obj.save()
            console.log(data);
        } catch (error) {
            console.log(error.message);
        }

    }

    res.render('add')
}


exports.edit = async (req, res, next) => {

    let id = req.params.id
    let obj = await model.user.findById({_id: id});

    if(req.method == 'POST'){
        let obju = new model.user()
        obju.id = req.body.id
        obju.name = req.body.name
        fs.renameSync(req.file.path, './public/images/' + req.file.originalname)
        obju.image = 'http://localhost:3000/images/' + req.file.originalname
        obju.point = req.body.point
        obju._id = id

        try {
            await model.user.findByIdAndUpdate({_id: id}, obju)
            console.log('update successfully');
            res.redirect('/')
        } catch (error) {
            console.log(error.message);
        }

    }
    res.render('edit', {obj})
}

exports.delete = async (req, res, next) => {
    let id = req.params.id
    try {
        await model.user.findByIdAndDelete({_id: id})
        res.redirect('/')
    } catch (error) {
        console.log(error.message);
    }
    
}