var express = require('express');
var router = express.Router();
var Su=require('../models/su').Su;
var checkAuth = require("../middlewares/checkAuth.js");
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с sus');
});
router.get("/:nick",checkAuth, async function(req, res, next) {
    var sus = await Su.find({nick: req.params.nick});
    console.log(sus)
    if(!sus.length) return next(new Error("Нет такого самолёта"))
    var su = sus[0];
    res.render('su', {
    title: su.title,
    picture: su.avatar,
    desc: su.desc
    })
    });
module.exports = router;