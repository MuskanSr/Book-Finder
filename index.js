const express = require('express')
const app = express()

app.set('view engine','hbs')
app.use(express.static(__dirname + '/public'))

app.get('/',(req,res)=>{
    res.render('main')
    
})



app.listen(3000,()=> {
    console.log('running on 3000')
})