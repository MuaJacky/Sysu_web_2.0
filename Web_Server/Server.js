var http = require('http');
var url = require('url');
var querystring = require('querystring');
var fs = require('fs');

var studentID_regex = /^\d+$/;
var email_regex = /^[a-zA-Z0-9_\-]+@(([a-zA-Z0-9_\-])+\.)+[a-zA-Z]{2,4}$/;
var phone_regex = /^\d{5,11}$/;
var username_regex = /^(\d|\w|\s)+$/;

http.createServer((request, response) => {
	console.log('visiting' + request.url);
	// initialize the page
	if (request.url == '/' || request.url == '/signup') {
		signup(request, response);
	} 
	// wrong information handle
	else if (request.url.toLowerCase().startsWith('/?wronginfo=')) {
		var wronginfo = querystring.parse(url.parse(request.url).query).wronginfo;	
		if (wronginfo == "repeat") {
			wronginfo = "This user's information is repeated.";
		}
		else if (wronginfo == "format") {
			wronginfo = "Your user's information doesn't fit the format."
		}
		else if (wronginfo == "notindata") {
			wronginfo = "This user has not signed in."
		}
		wrongformat(request, response, wronginfo);
	}
	// sign up handle
	else if (request.url == '/signUpPost') {
		signUpPost(request, response);
	}
	// else if (request.url == '/reset') {
	// 	reset(request, response);
	// }
	// access the user in database
	else if (request.url.toLowerCase().startsWith('/?username=')) {
		var username = querystring.parse(url.parse(request.url).query).username;
		accessUserProfile(username,request, response);
	}
}).listen(8000);

var signup = (req, res) => {
	res.writeHead(200, {
		'Content-Type': 'text/html',
	});

	// initialize the page by reading signUp.html
	fs.readFile('signUp.html', 'utf-8', (err, data) => {
		res.end(data);
	})
};

var signUpPost = (req, res) => {
	var allData = '';
	req.on('data', (chunk) => {
		allData += chunk;
	});

	// execute when all data have been accepted
	// check user's information and write or occur the error
	req.on('end', () => {
		console.log(allData);
		var datastring = allData.toString();
		var newUserData = querystring.parse(datastring);
		fs.readFile('userData.json','utf-8', (err, userData) => {
			if (!userData) { userData = '{}' };
			var data = JSON.parse(userData);
			var is_wrongFormat = validateFormat(newUserData);
			var is_repeat = validateRepetition(newUserData, data);
			if (!is_wrongFormat && !is_repeat) {
				createNewUser(newUserData, data, req, res);
			}
			else if(is_wrongFormat) {
				res.writeHead(302, {
					'Location': 'http://localhost:8000/?wronginfo=format'
				});
				res.end();
			}
			else {
				res.writeHead(302, {
					'Location': 'http://localhost:8000/?wronginfo=repeat'
				});
				res.end();
			}
		})
	});
};

var wrongformat = (req, res, wronginfo) => {
	res.writeHead(200, {
		'Content-Type': 'text/html',
	});

	// get html and replact the proper info into it
	var wronghtml = fs.readFileSync('wrong.html','utf-8');
	var newhtml = wronghtml.replace(/wronginfo/, wronginfo);

	// end with writing html into page
	res.end(newhtml);
}

var validateFormat = (newUserData) => {
	if (newUserData.username.match(username_regex)
	 && newUserData.studentID.match(studentID_regex)
	 && newUserData.phone.match(phone_regex)
	 && newUserData.email.match(email_regex)) {
		return false;
		// is right format
	}
	else return true; // is wrong format
};

var validateRepetition = (newUserData, data) => {
	for(var i in data)
	{
		if (i == newUserData.username 
		 || data[i].studentID == newUserData.studentID
		 || data[i].phone == newUserData.phone
		 || data[i].email == newUserData.email) {
			return true;
		}
	}
	return false;
}

var createNewUser = (newUserData, data, req, res) => {
	data[newUserData.username] = {
		'studentID': newUserData.studentID,
		'phone': newUserData.phone,
		'email': newUserData.email
	};

	// write new data into userData.json
	fs.writeFile('userData.json', JSON.stringify(data), (err) => {});
	
	// redirect to user's page
	res.writeHead(302, {
		'Location': 'http://localhost:8000/?username=' + newUserData.username
	});
	res.end();
}

var accessUserProfile = (username, req, res) => {
	res.writeHead(200, {
		'Content-Type': 'text/html',
	});
	var userData = fs.readFileSync('userData.json','utf-8');
	var userhtml = fs.readFileSync('user.html','utf-8');
	
	// judge by all parameters
	if (!userData) { return; };
	var data = JSON.parse(userData);
	var is_inData = validateIn(username, data);
	if (is_inData) {
		// output the user's information
		var final_html = userhtml
			.replace(/userinfo/, 'This is ' + username + "'s details page.")
			.replace(/username/, 'Username : ' + username)
			.replace(/studentID/, 'StudentID : ' + data[username].studentID)
			.replace(/phone/, 'Phone : ' + data[username].phone)
			.replace(/email/, 'Email : ' + data[username].email);
		// res.write("username:\t"+ username 
		// 	+ "\nstudentID:\t" + data[username].studentID
		// 	+ "\nphone:\t" + data[username].phone
		// 	+ "\nemail:\t" + data[username].email);
		res.end(final_html);
	}
	else {
		// redirect to wrong page
		res.writeHead(302, {
				'Location': 'http://localhost:8000/?wronginfo=notindata'
			});
		res.end();
	}
}

var validateIn = (username, userData) => {
	if (userData[username] === undefined) {
		return false;
		// user is not in data
	}
	else return true; //user is in data
}