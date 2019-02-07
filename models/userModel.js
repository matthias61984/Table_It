const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    //Username must be unique , A string , and is required
    username: {type: String, trim : true, unique : true,  required: "Username is Required"},
    //Password must be a string , is required , and must be longer than 6 characters
    password: {type: String , trim : true , required: "Password is Required",
validate: [
    function(input) {
        return input.length >= 6;
    }, "Password should be longer"
]},
    //email must be validated , is required , and must be unique
    email: {type : String, unique: true , match : [/.+@.+\..+/, "Please enter a valid e-mail address"]},
    //Favoirtes will be an array of ids that is their favorite restaurants
    Favorites : {type : Array}
});

var User = mongoose.model("User" , UserSchema);

//Exporting the user model
module.exports = User;