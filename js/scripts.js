// Calumet - Software Development Group
// Website, Styles, 2015

jQuery(document).ready(function ($) {

	// Who are using these projects?
	$('.whousingthese').bxSlider({
		slideWidth: 400,
		minSlides: 2,
		maxSlides: 2,
		slideMargin: 10,
		captions: true,
		onSliderLoad: function () {
			$('.whousingthese img').removeAttr('title');
		}
	});

	// Show/Hide previous corworkers.
	$('.team-showprevious').toggle(function (e) {
		$('.team-previous').slideDown(500);
		$(this).find('span').text('Hide');
	}, function (e) {
		$('.team-previous').slideUp(500);
		$(this).find('span').text('Show');
	});

	// Responsive Menu.
	$("#menu").on('click', function () {
		$("ul.menu").toggle();
	});

	// ScrollTo.
	$('#nav, .menu').find('a').each(function () {
		var $a = $(this);
		var href = $a.attr('href');
		$a.on('click', function (e) {
			e.preventDefault();
			$(href).ScrollTo({
				duration: 1500,
				offsetTop: 70
			});
		});
	});

	// Google Analytics.
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-52137235-1', 'calumet.github.io');
	ga('send', 'pageview');

});
