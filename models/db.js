var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/thithucp10')
    .then(()=>console.log('connected successfully !!!'))
    .catch((err)=>console.log('connected failure !!!'))

module.exports = {
    mongoose
};
