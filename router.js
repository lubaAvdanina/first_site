var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendfile('Menu.html',{root:'./www'})
  })
  
router.get('/about', (req, res) => {
    res.sendfile('About.html',{root:'./www'})
  })
  
router.get('/form', (req, res) => {
    res.sendfile('Form.html',{root:'./www'})
})

module.exports = router;