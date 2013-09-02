var cms = {}

cms.title = 'MDR CMS';
cms.metatags = [ {property: 'og:locale', content: 'en_us'}];
cms.scripts = [	'//code.jquery.com/jquery.js', 
				'//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js',
				'/javascripts/indexscripts.js'];
cms.stylesheets = [	'//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css',
					'//fonts.googleapis.com/css?family=Montserrat:400,700',
					'http://fonts.googleapis.com/css?family=Walter+Turncoat|PT+Serif',
					'/stylesheets/style.css'];

module.exports = cms;