const { exec } = require('child_process');
var querystring = require('querystring');
var http = require('http');
var Promise = require("bluebird");
function execCommand(publicIp,envId){
		//console.log("in execCommand"+publicIp);
       
    	
		             console.log("dir")
		             var str = "";
					 var child = exec('cd "C:\\project\\MovieFinder" & npm run e2e', {maxBuffer: 1024 * 1024});
					  child.stdout.on('data', function(data) {
					//console.log('stdout: ' + data);
					str = str + data;
					});
						
                    child.on('close', function(code) {
                  console.log('closing code: ' + code);
				
				  processStr(str);
                
					});	

child.stderr.on('data', function(data) {
    //console.log('erro: ' + data);
	
	//processStr("-99");
				
   });	
				
	}
	function execCommand2(publicIp,envId){
		console.log("in execCommand"+publicIp);
		var child = exec('cd "C:\\project\\MovieFinder" & npm run e2e',{maxBuffer: 1024 * 1024});
       child.stdout.on('data', function(data) {
    console.log('stdout: ' + data);
	
});
child.stderr.on('data', function(data) {
    console.log('stdout: ' + data);
});
child.on('close', function(code) {
    console.log('closing code: ' + code);
});
	}
	
	//execCommand2("1","2");
	if(process.argv.length>2)
		console.log(process.argv[2]);
    else
		console.log("no arguments");
	
	data = {"inviteId":"","score":""}
	data.inviteId = process.argv[2];
	data.score = "54545";
	   	
	//performRequest("/api/candidates/updatescorev2","GET",data,restDone);
	execCommand("github-user-search App\r\n    √  TestCase 1|should display movie finder screen|5\r\n4235235325325255\r\n666","12");
		

function processStr(data){		//console.log("in process str"+data);
		 var passedTestcasess = data.match(/(\s*√.*)/g);
		 var failedTestCases = data.match(/(\s*×.*)/g);
		 console.log("passedTestcasess:"+passedTestcasess);
		 console.log("failedTestCases:"+failedTestCases);
		
		if(passedTestcasess){
		passedTestcasess =  passedTestcasess.toString().replace(/√/g,"PASSED|");
		}
if(failedTestCases){		
		failedTestCases = failedTestCases.toString().replace(/×/g,"FAILED|");
		}
		
		 reqData = {"inviteId":"","score":""}
	reqData.inviteId = process.argv[2];
	reqData.score = passedTestcasess+"," +failedTestCases;
	   	
		 performRequest("/api/candidates/updatescorev2","GET",reqData,restDone);
}
	 

	 function performRequest(endpoint, method, data, success) {
  var dataString = JSON.stringify(data);
  var headers = {};
  
  if (method == 'GET') {
    endpoint += '?' + querystring.stringify(data);
  }
  else {
    headers = {
      'Content-Type': 'application/json',
      'Content-Length': dataString.length
    };
  }
  var options = {
    host: "www.krazykoder.com",
    path: endpoint,
    method: method,
    headers: headers
  };

  var req = http.request(options, function(res) {
    res.setEncoding('utf-8');

    var responseString = '';

    res.on('data', function(data) {
      responseString += data;
    });

    res.on('end', function() {
      console.log(responseString);
      var responseObject = JSON.parse(responseString);
      success(responseObject);
    });
  });

  req.write(dataString);
  req.end();
}

function restDone(data){
	console.log("REST API DONE DATA"+data);
}	 

	