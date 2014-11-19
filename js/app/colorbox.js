define([
	'jquery'
	,'colorbox'
], function()
{

	$(document).on('click', '[data-toggle="gallery"]', function(event) {
		event.preventDefault();

		var $this   = $(this),
			href    = $this.attr('href'),
			url     = $this.attr('data-target') || href,
			iframe =  $this.attr('data-type') == 'iframe',
			title =  $this.attr('title')

		$.colorbox({iframe:iframe,href:url, rel:'gallery', title:title});

	});


});