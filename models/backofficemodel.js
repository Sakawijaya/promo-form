var hbase = require('hbase-rpc-client');
var shortid = require('shortid');
var config = require('../custom_config/config');
var zookeeper_url = config.zookeeper_url;
var client = hbase({
	zookeeperHosts: [zookeeper_url]		
});

client.on('error',function(err){console.log(err);});

module.exports = {
	saveData : function(data){
		var Put = new hbase.Put(shortid.generate());
	    Put.add("promotion data", "promotag", data.promotag);
	    Put.add("promotion data", "url", data.url);
	
	    client.put('promoconfig', Put, function(err, res) {
	       if(err) {
	          console.log(err);
	       }
	    });
	}
};