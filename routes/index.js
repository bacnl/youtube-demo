var express = require('express');
var youtube = require('youtube-finder')
var client = youtube.createClient({ key: 'AIzaSyA7Tw0_fNOkYTyJX02wOewbstjGDAJ86U0'})
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var params = {
    part: 'snippet',
    q: '',
    maxResults: 50,
    type : 'video'
  }
  var urls = [];
  client.search(params, function (err, data) {
    data.items.forEach(function(element) {      
        urls.push(element.id.videoId);
    }, this);    
    res.render('index', { urls:urls });
  })
  
});
router.post('/', function(req, res, next) {
  var params = {
    part: 'snippet',
    q: req.body.keyword,
    maxResults: 5,
    type : 'video'
  }
  var urls = [];
  client.search(params, function (err, data) {
    data.items.forEach(function(element) {     
        urls.push(element.id.videoId);
    }, this);    
    res.render('index', { urls:urls });
  })
  
});

module.exports = router;
