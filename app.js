const express = require('express')

const app = express()

const port = 80;

//static files
app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'))
app.use('/assets',express.static(__dirname + 'public/assets'))

//Template Engine
app.set('views','./src/views')
app.set('view engine','ejs')

//Router
const newsrouter = require('./src/routes/news')

app.use('/', newsrouter)

//lisiting on port 80
app.listen(port, ()=>{
    console.log(`Lisiting on port ${port}`)
})