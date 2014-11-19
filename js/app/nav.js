define([
    'jquery',
    'idangerous'
], function($)
{
	'use strict';

	$(function() {

		$(document).on('click', '.js-tile-nav', function(event) {
			event.preventDefault();

			var $this = $(this),
				$target = $this.closest('.js-tile-grid-target').length ? $this.closest('.js-tile-grid-target') : $this.parent().parent().find('.js-tile-grid-target'),
				$targetNav = $target.siblings('.js-tile-nav-target'),
				url = $this.attr('href'),
				animation = $.Deferred();

			$('.tile',$target).each(function(index){
				$(this).delay(index*40 + 220*Math.random()).queue(function(){ //Math.random()
					$(this).addClass('loading-fade').dequeue();
				});
			});

			$target.delay(500).queue(function(){
				animation.resolve();
				$target.animate({scrollTop:0},10);
				$(this).addClass('loading transition-disabled').dequeue();
			});

			$.when($.get(url), animation).done(function(data) {
				//console.log(data)
				$target.html(data[0]);

				$target.delay(100).queue(function(){
					$('.tile',this).addClass('loading-fade');

					var $nav = $target.find('.js-tile-nav-mirror').html() || ''; 
					$targetNav.html($nav)

					$(this).removeClass('loading').dequeue();

				}).delay(100).queue(function(){
					$(this).removeClass('transition-disabled').dequeue();
				});

				$('.tile',$target).delay(200).each(function(index){
					$(this).delay(index*40 + 200*Math.random()).queue(function(){
						$(this).removeClass('loading-fade').dequeue();
					});
				});
			});

		});
	});
});