const Tweet = require('../models/Tweet');

module.exports = {
    async index(req, res) {
        const tweets = await Tweet.find({}).sort('-createdAt');

        return res.json(tweets);
    },

    async create(req, res) {
        const tweet = await Tweet.create({})
        //https://rocketseat.com.br/goweek-4#day-06
    }
}