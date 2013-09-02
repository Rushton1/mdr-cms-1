(function(mdr_cms, $, undefined) {
	$(document).ready(function() {
		$(".alert.alert-success.form-alert").hide();
		$(".alert.alert-danger.form-alert").hide();

		$("#bio-link").click(function() {
			var contentOffset = jQuery("#bio-content").offset();
			jQuery("html,body").animate({
				scrollTop: contentOffset.top - 50
			}, 1000);
			return false;
		});

		$("#contact-link").click(function() {
			var contentOffset = jQuery("#contact-content").offset();
			jQuery("html,body").animate({
				scrollTop: contentOffset.top
			}, 1000);
			return false;
		});

		$("#follow-link").click(function() {
			var contentOffset = jQuery("#follow-content").offset();
			jQuery("html,body").animate({
				scrollTop: contentOffset.top
			}, 1000);
			return false;
		});

		$(window).resize();
	});
	$(window).resize(function() {
		$("#maincontent").css("padding-top", $(".bigbg").outerHeight() + 10);

		$("#play-bio").css("height", $("#work-bio").outerHeight());
	});

	$(window).scroll(function() {
		if ($(document).scrollTop() > 10) {
			$(".conditional-top-nav").fadeIn(700);
		} else {
			$(".conditional-top-nav").fadeOut(700);
		} // jQuery("#bottomnavigation").html( jQuery("div.bigbg").outerHeight() - jQuery(document).scrollTop());

	});
	$('#mdr-contact-form').submit(function(event) {

		// cancels the form submission
		event.preventDefault();
		$('#contact-submit-button').attr("disabled", "disabled");

		// do whatever you want here
		$.post("contact-form", $("#mdr-contact-form").serialize())
			.done(function(data) {
				if (data.success) {
					$(".alert.alert-success.form-alert").fadeIn('slow', function() {
						$(this).delay(4000).fadeOut('slow');
					})
				} else {
					$(".alert.alert-danger.form-alert").html(data.message);
					$(".alert.alert-danger.form-alert").fadeIn('slow', function() {
						$(this).delay(4000).fadeOut('slow');
					});
				}
			})
			.fail(function(data) {
				$(".alert.alert-danger.form-alert").html("Oh noes! There was an error sending your message :(");
				if (data.success) $(".alert.alert-danger.form-alert").fadeIn('slow', function() {
					$(this).delay(4000).fadeOut('slow');
				});
			})
			.always(function(data) {
				$('#contact-submit-button').removeAttr("disabled");
			});


	});
}(window.mdr_cms = window.mdr_cms || {}, jQuery));