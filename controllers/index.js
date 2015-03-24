var mailgunInfo = require('../mailgun/mailgun.js');
var mailgun = require('mailgun-js')({apiKey: mailgunInfo.key, domain: mailgunInfo.domain});

var indexController = {
	index: function(req, res) {
		res.render('index');
	},
    contact: function(req, res){
        res.render('contact');
    },
    contactSubmit: function(req, res){
        console.log("FROM SERVER:: ", req.body);
        var data = {
            from: 'New Contact <metropolis_4@hotmail.com>',
            to: 'mattgbrich@gmail.com',
            subject: 'Hi Matt, from your website',
            text: 'From: ' + req.body.name + ', about: ' + req.body.topic + ', contact: '+ req.body.contact
        };
        mailgun.messages().send(data, function(err, body){
            if(err) throw err;
            console.log('email body: ', body);
        });
        res.redirect('contact');
    }
};

module.exports = indexController;