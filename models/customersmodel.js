var hbase = require('hbase-rpc-client');
var shortid = require('shortid');
var config = require('../custom_config/config');
var zookeeper_url = config.zookeeper_url;
var client = hbase({
	zookeeperHosts: [zookeeper_url]		
});

client.on('error',function(err){console.log(err);});

module.exports = {
	saveData : function(req){
		var Put = new hbase.Put(shortid.generate());
	    Put.add("personal data", "name", req.body.nama);
	    Put.add("personal data", "email", req.body.email);
	    Put.add("personal data", "phone", req.body.phone);
	    Put.add("personal data", "promotag", req.body.promotag);
	
	    client.put('promo', Put, function(err, res) {
	       if(err) {
	          console.log(err);
	       }
	    });
	}
};
