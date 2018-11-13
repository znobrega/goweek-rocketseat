const express = require('express');

const router = express.Router();

const TweetController = require('./controllers/TweetController');
const LikesController = require('./controllers/LikesController');


router.get('/', TweetController.landing);
router.get('/tweets', TweetController.index);
router.post('/tweets', TweetController.store);

router.post('/likes/:id', LikesController.store);

module.exports = router;    
