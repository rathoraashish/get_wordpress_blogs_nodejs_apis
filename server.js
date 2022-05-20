const express = require('express');
const cors = require('cors');
const {con} = require('./db/dbconfig')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: false, parameterLimit:50000}));

app.set('view engine', 'ejs');
app.use(cors());

app.use('/',require('./routes/index'));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
