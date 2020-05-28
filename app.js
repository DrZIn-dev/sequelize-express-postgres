import express from 'express'
import dotenv from 'dotenv'

import db from './database/models'

const app = express()
const port = process.env.PORT || 3000

dotenv.config()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server listen on port ${port}`)
  })
})
