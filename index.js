var soap = require('soap');

var url = 'http://172.30.13.36:8011/GetHybridWallets/V1?wsdl';
var args = {
    'msisdn': '33434393'
};
let options = {};

soap.createClient(url, options, function (err, client) {

    client.setEndpoint(url);
    client.GetHybridWallets(args, function (err, result) {
        console.log(result);
    });

});

/**<soapenv: Envelope xmlns: soapenv="http://schemas.xmlsoap.org/soap/envelope/">
    <soap: Header  	xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
	</soap: Header >
    <soapenv: Body>
    <v1: GetHybridWalletsRequest  	xmlns:v1="http://xmlns.tigo.com/GetHybridWallets/V1">
	    <v1: msisdn>33434393</v1: msisdn >
	</v1: GetHybridWalletsRequest >
	</soapenv: Body >
</soapenv: Envelope >**/