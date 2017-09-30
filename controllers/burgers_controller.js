var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
  burger.all(function(data) {
    var burgerObject = {
        burgers: data
    };
    res.render("index", burgerObject);
  });
});

router.post("/", function(req, res) {
  burger.create(req.body.name,  function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var selected = req.params.id;

  burger.update(selected, function() {
    res.redirect("/");
  });
});

module.exports = router;