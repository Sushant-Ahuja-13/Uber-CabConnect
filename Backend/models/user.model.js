const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'Firstname must be at least 3 characters']
        },
        lastname: {
            type: String,
            minlength: [3, 'Lastname must be at least 3 characters']
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [5, 'Email must be at least 3 characters']
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    //Used for live location where the captain is
    socketId: {
        type: String,
    }
});
userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
    return token;
}
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}
//statics vs methods
//statics are used to define methods on the model itself
//methods are used to define methods on the instance of the model
userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}
const userModel = mongoose.model('user',userSchema);
module.exports = userModel;