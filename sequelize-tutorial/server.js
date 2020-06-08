const express = require('express')
const app = express()
const db= require('./database/models')
const routes = require('./routes')

app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.use("/api",routes.userRoute)

db.sequelize.sync().then(()=>{
    app.listen(3000)
})