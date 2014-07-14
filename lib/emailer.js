var nodemailer = require('nodemailer');

// Create a SMTP transport object
var transport = nodemailer.createTransport("SMTP", {
	//service: 'Gmail', // use well known service.
	// If you are using @gmail.com address, then you don't
	// even have to define the service name
	host: 'swine.arvixe.com', // hostname
	secureConnection: true, // use SSL
	port: 465, // port for secure SMTP
	auth: {
		user: 'homepagecontactform@rushtonmd.com',
		pass: '9_5?uJlV*+p?'
	}
});

console.log('SMTP Configured');


module.exports = {
	sendEmailFromContactForm: function(emailInformation, res) {

		var message = {

			// sender info
			from: 'MDR Contact Form <homepagecontactform@rushtonmd.com>',

			// Comma separated list of recipients
			to: '"MDR" <mark@rushtonmd.com>, "MDR" <rushtonmd@gmail.com>',

			// Subject of the message
			subject: 'Message from: ' + emailInformation.name + '(' + emailInformation.email + ')',

			headers: {
				'X-Laziness-level': 1000
			},

			// HTML body
			html: emailInformation.message,

		};
		console.log('Trying to send email...');
		transport.sendMail(message, function(error) {
			if (error) {
				console.log('Error occured');
				console.log(error.message);
				res.json({
					message: "Unable to send message at this time."
				});
				return;
			}
			console.log('Message sent successfully!');

			res.json({
				success: "Yes",
				message: "Message sent!"
			});
			// if you don't want to use this transport object anymore, uncomment following line
			//transport.close(); // close the connection pool
		});
	}

};