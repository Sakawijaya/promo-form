var express = require('express');
var router = express.Router();
var customersmodel = require('../models/customersmodel');

router.get('/:promotag',function(req,res){
	req.assert('promotag','Promotag error').isAlphanumeric();
	var errors = req.validationErrors(); 
	if( !errors){
        var promotag = req.params.promotag;
		res.render('form',{promotag:promotag});
    }
    else {
        res.send(errors);
    }
});

router.get('/',function(req,res){
	res.render('form_error');
});

router.post('/submit',function(req,res){
	req.assert('email','Email error').notEmpty().isEmail();
	req.assert('nama','Nama error').notEmpty().isName();
	req.assert('phone','No Telp error').notEmpty().isPhone();
	
	var errors = req.validationErrors();  
    if( !errors){
        customersmodel.saveData(req);
		res.render('form_submit');
    }
    else {
        res.send(errors);
    }
	
	
});
module.exports = router;

