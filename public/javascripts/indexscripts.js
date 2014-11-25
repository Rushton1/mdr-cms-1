(function(mdr_cms, $, undefined) {
    var queries = document.
    querySelectorAll('.mediaquerydependent'),
        all = queries.length,
        cur = null,
        attr = null;
    return 0;
    while (all--) {
        cur = queries[all];
        if (cur.dataset.media &&
            window.matchMedia(cur.dataset.media).matches) {
            //console.log(cur.dataset);
            for (attr in cur.dataset) {
                if (attr !== 'media') {
                    cur.setAttribute(attr, cur.dataset[attr]);
                }
            }
        }
    }
}(window.mdr_cms = window.mdr_cms || {}, jQuery));

(function(mdr_cms, $, undefined) {

    var wow;

    $(document).ready(function() {

        $(".alert.alert-success.form-alert").hide();
        $(".alert.alert-danger.form-alert").hide();

        if ($(window).width() > 991) {

            $('#maincontent').fullpage({
                afterRender: function(anchorLink, index) {
                    wow = new WOW().init();

                    $('.initially-hidden').fadeIn("slow");
                },
                afterLoad: function(anchorLink, index) {
                    wow = new WOW().init();
                }
            });
        } else {
            $('.initially-hidden').fadeIn("slow");
        };

        $(window).resize();
    });

    $(window).resize(function() {

        if ($(window).width() > 991) {
            $('.full-window-height').css('height', $(window).height());
        } else {
            if ($(window).width() > 600) {
                $('.bio-content').css('height', $(window).width());
            } else {
                $('.bio-content').css('height', '100%');
            }
            $('.intro-content').css('height', $(window).height());
            $('.skills-content').css('height', '100%');
            $('.outro-content').css('height', $(window).height());

        };

        // Ensure main image is centered
        //$('.main-banner-image').css('left', $('.static-bg-image').width() / 2 - $('.main-banner-image').width() / 2);


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