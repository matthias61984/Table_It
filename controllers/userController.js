
const dbUser = require("../models/user");

module.exports = {
  findUserbyUsername: function(req, res) {
    dbUser
      .find({username : req.params.username})
      .then(dbModel => res.json(dbModel[0]))
      .catch(err => {res.status(422).json(err); console.log(err)});
  },
  findById: function(req, res) {
    dbUser
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    dbUser
      .create({
        username : req.body.username,
        password : req.body.password,
        email: req.body.email
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    dbUser
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
      dbUser
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
  getFavorites : function(req , res) {
    dbUser
      .findById({ _id: req.params.id })
      .then(dbModel => res.json(dbModel.favorites))
      .catch(err => res.status(422).json(err));
  }

};