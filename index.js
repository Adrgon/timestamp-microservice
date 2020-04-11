const express = require('express')
const cors = require('cors')

const app = module.exports = express()
app.use(express.json())
app.use(cors())

app.get('/api/:dataVal', function(req, res){
    let dataVal = req.params.dataVal
    console.log(dataVal)

    const dataFormattingOptions = {
        year: 'numeric',
        month: 'long', 
        day: 'numeric'
    }

    if(isNaN(dataVal)){
        var naturalDate = new Date(dataVal)
        naturalDate = naturalDate.toLocaleDateString("en-us", dataFormattingOptions)    
        var unixDate = new Date(dataVal).getTime()/1000
    } else {
        var unixDate = dataVal
        var naturalDate = new Date(dataVal*1000)
        naturalDate = naturalDate.toLocaleDateString("en.us", dataFormattingOptions)
    }
    res.json({unix: unixDate, natural: naturalDate})
})

app.listen(3000, function(){
    console.log("Working...")
})