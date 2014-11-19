define([
	'jquery'
	,'video'
], function()
{
	//'use strict';


		var players = {},
					iplayers = {};
		$(document).on('click', '.js-insta-play', function(event) {
			event.preventDefault();
			// alert('what');

			var $this = $(this);
			// ,
			// 	link = $(this).attr('href'),
			// 	videoId = $(this).data('id');
			var video = $(this),
						video_link = $(this).attr('href'),
						video_id = $(this).data('id');

			// instagram

				if (!video.hasClass('is-loaded')) {
					video.addClass('is-loading');
					// alert('lets load');
					$(this).after('<video loop name="media" id="' + video_id + '" class="video__el" width="100%" height="100%"><source src="' + video_link + '" type="video/mp4"></video>');
					iplayers[video_id] = videojs(video_id).ready(function(){
						video.removeClass('is-loading');
						video.addClass('is-loaded');
					  var myPlayer = this;
					  myPlayer.play();
					});
				}
				else {
					var iplayer = iplayers[video_id];
					// play
					iplayer.currentTime(0);
					iplayer.play();
				}

				video.addClass('is-play');
				$('<div class="video-backdrop fade in" />').appendTo('.main > .swiper-wrapper').on('click', function(event) {
					event.preventDefault();
					$(this).remove();
					$this.removeClass('is-play');
					$('body').removeClass('video-open');
					pauseVideo();
					//if (window.mainSwiper) {
					//	window.mainSwiper.enableMousewheelControl()
					//}
				});


			$(document).on('click', '.video-open > .header', function() {
				$('.video-backdrop').trigger('click');
			});

		});

		

	

	// js-insta-play
	// $(document).on('click', '.js-insta-play', function(event) {
	// 	event.preventDefault();
	// 	alert("insta!");
	// });
	// window.onYouTubePlayerAPIReady = onYouTubePlayerAPIReady

	// var a = document.createElement('script');a.src = 'http://www.youtube.com/player_api';a.async = true;
	// $('body').append(a);
});