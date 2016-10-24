var hbase = require('hbase-rpc-client');
var config = require('../custom_config/config');
var zookeeper_url = config.zookeeper_url;
var client = hbase({
	zookeeperHosts: [zookeeper_url]		
});

client.on('error',function(err){console.log(err);});

module.exports = {
	count:function(params,cb){
		var scan = client.getScanner('promoconfig');
		scan.toArray(function(err,res){
			rows = res.length;
			cb(err,rows);
		});
		
		
	},
};
