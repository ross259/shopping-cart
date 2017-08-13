var express = require('express');
var router = express.Router();
var csrf = require('csurf');

var csrfProtect = csrf();

router.use(csrfProtect);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/signup', (req,res,next)=>{
  res.render('user/signup', {csrfToken:req.csrfToken()})
})

router.post('/signup',(req,res,next)=>{
  res.redirect('/')
})

module.exports = router;
