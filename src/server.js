const express =  require('express')
const knex = require('./database/')
const app =  express()

//select
app.get('/users', (req, res) => 
    knex('tblusers').then((results) =>
        res.json(results)))

//insert
app.post('/users', (req, res) =>
    knex('tblusers').then((results) =>
        res.json(results)))




app.listen(3333, () => {console.log('Server is running')})
