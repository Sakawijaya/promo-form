var express = require('express');
var router = express.Router();
var backofficemodel = require('../models/backofficemodel');
var config = require('../custom_config/config');
var backofficeurl = config.customers_url;

router.get('/',function(req,res){
	res.render('form_backoffice');
});

router.post('/submit',function(req,res){
	req.assert('promotag','Promotag error').isAlphanumeric();
	var errors = req.validationErrors(); 
	if( !errors){
        var data = {
			promotag: req.body.promotag,
			url: backofficeurl+req.body.promotag
		};
		backofficemodel.saveData(data);
		res.redirect('/backoffice');
    }
    else {
        res.send(errors);
    }
});
module.exports = router;

