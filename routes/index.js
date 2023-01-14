var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Heyyyy",
    user: "Donald",
    added: new Date(),
  },
  {
    text: "How ya doinnn",
    user: "Joe",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Message Board", messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("form");
});

router.post("/new", function (req, res, next) {
  messages.push({
    text: req.body.text,
    user: req.body.name,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
