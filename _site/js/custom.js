$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	  var target = $(this.hash);
	  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	  if (target.length) {
		$('html,body').animate({
		  scrollTop: target.offset().top - 69
		}, 1000);
		return false;
	  }
	}
  });
});

$('.mb-nav-btn').click(function () {
	$('html, body, .main-content-wrap').toggleClass('active')
});
	
$('.main-content-wrap, .mobile-main-nav a').click(function () {
	$('html, body, .main-content-wrap').removeClass('active')
});
	
$('#btn_submit').click(function () {
    // console.log('ok');
    
    $.post("https://notify.appliednonprofitresearch.com/notify",
    JSON.stringify({
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    }),
      function(data, status){
          document.getElementById("contact_form").reset();

          $('#form_submitted').delay(500).fadeIn('normal', function() {
              $(this).delay(2500).fadeOut();
          });

      });
    // https://github.com/anr990/anr_website/blob/5cfe2e2f5d39c83d5b1b8ca5eedbc8e638f9772e/js/custom5010.js
    // $('html, body, .main-content-wrap').toggleClass('active')
});

jQuery(function ($)
{
	function removeHash ()
	{ 
		var scrollV, scrollH, loc = window.location;
		if ("pushState" in history)
			history.pushState("", document.title, loc.pathname + loc.search);
		else {
			scrollV = document.body.scrollTop;
			scrollH = document.body.scrollLeft;

			loc.hash = "";

			document.body.scrollTop = scrollV;
			document.body.scrollLeft = scrollH;
		}
	}
	if (!!window.location.hash.length)
	{
		if (window.location.hash == "#services"
		|| window.location.hash == "#thedata"
		|| window.location.hash == "#about"
		|| window.location.hash == "#media"
		|| window.location.hash == "#contact")
		{
			$(window).load(function ()
			{
				var body = $("html, body");
				body.stop().animate({scrollTop: "-=69"}, 0, removeHash);
			});
		}
	}
});
