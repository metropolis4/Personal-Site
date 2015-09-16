var mailgun = require('mailgun-js')({apiKey: process.env.mailgunKey, domain: process.env.mailgunDomain});

var indexController = {
	index: function(req, res) {
		res.render('index');
	},
    contact: function(req, res){
        res.render('contact');
    },
    contactSubmit: function(req, res){
        var data = {
            from: 'New Contact <metropolis_4@hotmail.com>',
            to: 'mattgbrich@gmail.com',
            subject: 'Hi Matt, from your website',
            text: 'From: ' + req.body.name + ', about: ' + req.body.topic + ', contact: '+ req.body.contact
        };
        mailgun.messages().send(data, function(err, body){
            if(err) throw err;
        });
        res.redirect('contact');
    },
    dev: function(req, res){
        res.render('dev');
    },
    about: function(req, res){
        res.render('about');
    },
    music: function(req, res){
        res.render('music');
    },
    photo: function(req, res){
        res.render('photo')
    }
};

module.exports = indexController;
