var express = require('express');
var router = express.Router();
var datatables = require('../libraries/datatables-hbase');
var model = require('../models/defaultmodel');

router.get('/',function(req,res){
	var params = req.query;
	
	var query = datatables(model);

	query.run(params).then(function(data){
		res.json(data);
	},function(err){
		res.status(500).json(err);
	});
});
module.exports = router;
