const express = require('express')
const cors = require('cors')

const app = module.exports = express()
app.use(express.json())
app.use(cors())


app.get("/api/timestamp/", (req, res) => {
  res.json({ unix: Date.now(), utc: Date() });
});


app.get("/api/timestamp/:date_string", (req, res) => {
  let dateString = req.params.date_string;

  if (/\d{5,}/.test(dateString)) {
    var dateInt = parseInt(dateString);
    res.json({ unix: dateString, utc: new Date(dateInt).toUTCString() });
  }

  let dateObject = new Date(dateString);

  if (dateObject.toString() === "Invalid Date") {
    res.json({ error: "Invaid Date" });
  } else {
    res.json({ unix: dateObject.valueOf(), utc: dateObject.toUTCString() });
  }
});


/*
app.get('/api/timestamp/:dataVal', function(req, res){
    let dataVal = req.params.dataVal

    const dataFormattingOptions = {
        year: 'numeric',
        month: 'long', 
        day: 'numeric'
    }
  
    if(isNaN(dataVal)){
        var naturalDate = new Date(dataVal)
        if (naturalDate.toString() === "Invalid Date") {
          res.json({ error: "Invaid Date" });
        } 
        naturalDate = naturalDate.toLocaleDateString("en-us", dataFormattingOptions)    
        var unixDate = new Date(dataVal).getTime()/1000
    } else {
        var unixDate = dataVal
        var naturalDate = new Date(dataVal*1000)
        naturalDate = naturalDate.toLocaleDateString("en.us", dataFormattingOptions)
    }
      
    res.json({unix: unixDate, natural: naturalDate})
})

*/

app.listen(3000, function(){
    console.log("Working...")
})