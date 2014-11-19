define([
	'jquery'
	,'fotorama'
], function()
{

	$(function() {
		$('body').on('show-modal', function() {
			$('.modal').on('scroll.bs.modal', function (event) { 
				$('.js-modal-scroll-top')[event.target.scrollTop > 20 ? 'addClass' : 'removeClass']('affix')
			})
			$('<button type="button" class="btn-circle js-modal-scroll-top"><i class="icon-arrow-top-primary" /></button>').insertAfter('.modal');
			$('.modal .js-fotorama-init').each(function(){
				$(this).fotorama({thumbMargin:0, loop:true, width:'100%', maxheight:600, ratio:4/3, arrow:false, fit:'cover', nav:'thumbs', thumbborderwidth:3, thumbheight:80, thumbwidth: 80, allowfullscreen:'native'});
			});
		}).on('hide-modal', function() {
			$('.js-modal-scroll-top').remove();
		});

		if ($('body').hasClass('page-modal')) {
			$('body').trigger('show-modal')
		}
	});

});