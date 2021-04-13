var sha512 = require('js-sha512');
module.exports = function (app) {
    app.post('/createHash', function (req, res) {
        var salt = 'eCwWELxi';
        var hash = sha512(req.body.preHashString + salt);
        console.log(hash);
        res.send({success : true, hash: hash});
    });

    app.post('/PaymentStatus', function (req, res) {
        console.log(req.body);
        res.send(req.body.status);
    })
};
