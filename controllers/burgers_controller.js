var burger = require('../models/burger.js')

module.exports = function (app) {


    app.get('/', function (req, res) {
        burger.select(function (data) {
            res.render('index', { burgers: data })
        });

    })
    app.get('/api/burgers', function (req, res) {
        burger.select(function (data) {
            res.json(data)
        })
    })

    app.post('/api/burgers', function (req, res) {

        burger.insert(req.body.burger_name)

        burger.select(function (data) {
            res.json(data)
        })

    })
    app.put('/api/burgers/:id', function (req, res) {
        console.log('test')
        burger.update(req.params.id, function(result) {
            if (result.changedRows == 0) {
              // If no rows were changed, then the ID must not exist, so 404
              return res.status(404).end();
            } else {
              res.status(200).end();
            }
          });

    })
}