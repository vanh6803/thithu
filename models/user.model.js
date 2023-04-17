var db = require('./db')

const userSchema =new db.mongoose.Schema(
    {
        id: {type: String, required: true},
        name: {type: String, required: true},
        image: {type: String, required: false},
        point: {type: Number, required: true},
    },
    {
        timestamps: true,
    }
)

let user = db.mongoose.model('user', userSchema)
module.exports = {
    user
};
