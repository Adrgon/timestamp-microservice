const express = require('express')
const cors = require('cors')

const app = module.exports = express()
app.use(express.json())
app.use(cors())

app.get('/api/timestamp', function(req, res) {
  let date = new Date();

  res.json({
    "unix": date.getTime(),
    "utc": date.toUTCString()
  });
});

app.get('/api/timestamp/:date_string', function(req, res) {
  let dateString = req.params.date_string;

  let date = (/\D/.test(dateString)) ? new Date(dateString) : new Date(parseInt(dateString));

  if(date.toString() === "Invalid Date") {
    res.json({
      "error": date.toString()
    })
  }
  else {
    res.json({
      "unix": date.getTime(),
      "utc": date.toUTCString()
    });
  }
});


app.listen(3000, function(){
    console.log("Working...")
})