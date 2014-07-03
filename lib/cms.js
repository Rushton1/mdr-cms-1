var cms = {}

cms.title = 'Mark D Rushton';
cms.metatags = [ 	{property: 'og:locale', content: 'en_Us'},
					{ name: 'description', content: 'Mark D Rushton, PMP/CSM software project manager living in San Francisco, California.'},
					{property: 'og:title', content: 'Mark D Rushton'},
					{property: 'og:url', content: 'http://rushtonmd.com'},
					{property: 'og:site_name', content: 'Mark D Rushton'},
					{property: 'og:type', content: 'website'},
					{name: 'robots', content:'index,follow'},
					{name: 'copyright', content: 'Copyright © 2014, All Rights Reserved.'}];
cms.scripts = [	//'//code.jquery.com/jquery.js', 
				'/javascripts/localcopies/jquery_2_1_1_min.js',
				'//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js',
				//'/javascripts/localcopies/bootstrap.min.js',
				'/javascripts/jquery.easings.min.js',
				'/javascripts/jquery.fullPage.js',
				'/javascripts/jquery.slimscroll.min.js',
				'/javascripts/wow.min.js',
				'/javascripts/indexscripts.js'];
cms.stylesheets = [	{href: '//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css'},
					//'/stylesheets/localcopies/bootstrap.min.css',
					{href: '//fonts.googleapis.com/css?family=Montserrat:400,700'},
					{href: 'http://fonts.googleapis.com/css?family=Walter+Turncoat|PT+Serif'},
					{href: 'http://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400|Open+Sans:400,300,600,700,800'},
					{href: '/stylesheets/style.css'},
					/*{data_href: '/stylesheets/jquery.fullPage.css', 
						data_media: 'screen and (max-width: 768px)',
						class: 'mediaquerydependent'},*/
					{href: '/stylesheets/animate.css'}];

module.exports = cms;
