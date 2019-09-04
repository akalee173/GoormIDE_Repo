//var request = require('request');

const rp = require('request-promise');

//ES6 version of API request with promise
rp('https://jsonplaceholder.typicode.com/users/1')
	.then((body) => {
	const parsedData = JSON.parse(body);
	console.log(`${parsedData.name} lives in ${parsedData.address.city}`);
	})
	.catch((err) => {
	console.log("ERROR!", err);	
	});


/*ES6 version of API request with callback
request('https://jsonplaceholder.typicode.com/users/1', (error, response, body) =>{
	if(!error &&response.statusCode == 200 ) {
		var parsedData = JSON.parse(body);	
		console.log(`${parsedData.name} lives in ${parsedData.address.city}`);
		}
});
*/



/* Old version of API request
request('https://jsonplaceholder.typicode.com/users/1', function(error, response, body){
	if(!error &&response.statusCode == 200 ) {
		var parsedData = JSON.parse(body);	
		console.log(parsedData.name + " lives in " + parsedData.address.city);
		}
});
*/
