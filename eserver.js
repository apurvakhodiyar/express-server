const express = require('express')
const app = express ()
const port = 3000

app.get('/',(req,res) =>  {
    res.send ('hello word!')
})
app.get ('/about',(req, res) => {
    res.send ('about')
})
app.get ('/contact', (req, res) => {
    res.send ('123456789')
})
app.listen(port, () => {
    console.log(' example app listening at http://localhost:${port}') 
})

