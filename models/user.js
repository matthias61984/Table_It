var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {type : String , unique : true, trim : true , required: "Username is Required"},
    password: {type : String , required : "Password is Required" , validate: [
        function(input){
            return input.length >= 6;
        },"Password needs to be at least 6 Characters"
    ]},
    email: {type : String , unique: true, match: [/.+@.+\..+/, "Please enter a valid e-mail address"]},

    favorites : {type : Array}
});

var User = mongoose.model("User" , UserSchema);

module.exports = User;