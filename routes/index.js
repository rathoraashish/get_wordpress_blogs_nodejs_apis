const express = require('express');
const axios = require('axios')
var bodyParser = require('body-parser')
const app = express();
const router = express.Router();
const User = require('../controllers/user');
const responseMessage = require('../utils/responseMessage');

// support parsing of application/json type post data
router.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, res) => {
    var user = "Ashish";
    res.render('home', {user:user});
})

router.get('/about', (req, res) => {
    var user = "Ashish";
    res.render('about', {user:user});
})

router.get('/search', (req, res) => {
  res.render('search_posts');
})
// -------------Post request for insert user--------------------

router.post('/getBlogs',async (req,res)=>{
    console.log("Get blog try se phle")
    try {
        console.log("Data from postman",req.body);
        res.send({
          "status":200,
          "message":"Success"
        })
        // return responseMessage(null, data)
      } catch (err) {
        console.log("Error::index.js))", err);
        res.send({
          "status":400,
          "message":"failed to get blogs",
          "data":err
        })
        return responseMessage(err, null)
      }
})

module.exports = router;