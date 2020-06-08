const express = require('express')
const router = express.Router()
const db = require('../../database/models')

router.get("/user", (req, res) => {
    db.User.findAll({
        include:[db.Comment,db.Post]
    }).then((item) => {
       res.send(item)
    })
})


module.exports = router