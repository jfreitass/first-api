const express =  require('express')
const knex = require('./database/')
const app =  express()


app.listen(3333, () => {console.log('Server is running')}) 