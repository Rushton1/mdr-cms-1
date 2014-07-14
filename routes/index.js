/*
 * GET home page.
 */

exports.index = function(req, res, cms) {
	res.render('index', cms, function(err, html) {
		// TODO: Save the HTML to Redis
		res.send(html);
	});
};

exports.contactform = function(req, res, sanitize, emailer) {
	// Check to see if any of the fake input fields are not emtpy
	if (req.body.name || req.body.username || req.body.email || req.body.address || req.body.message) {
		res.json({
			message: "I saw what you did there... now stop it."
		});
	} else {
		emailInformation = {
			name: sanitize(req.body.mdrname),
			email: sanitize(req.body.mdremail),
			message: sanitize(req.body.mdrmessage)
		};
		
		emailer.sendEmailFromContactForm(emailInformation, res);
	};
};