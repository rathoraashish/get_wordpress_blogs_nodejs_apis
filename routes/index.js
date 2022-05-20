const express = require('express');
var bodyParser = require('body-parser')
const app = express();
const router = express.Router();
const responseMessage = require('../utils/responseMessage');

// support parsing of application/json type post data
router.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

router.get('/search', (req, res) => {
  res.render('search_posts');
})
// -------------Post request for insert user--------------------

router.post('/getBlogs',async (req,res)=>{
    try {
        console.log("Data from postman",req.body);
        res.send({
          status:200,
          message:"Success",
          data:req.body
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