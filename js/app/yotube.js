define([
	'jquery'
	//,'http://www.youtube.com/player_api'
], function()
{
	//'use strict';

	// this function gets called when API is ready to use
	function onYouTubePlayerAPIReady() {
		var players = {};

		$(document).on('click', '.js-youtube-play', function(event) {
			event.preventDefault();

			var $this = $(this),
				link = $(this).attr('href'),
				videoId = $(this).data('id');

			var playVideo = function() {
				if(!$('html').hasClass('touch')) {
				  players[videoId].playVideo();
				}
			};

			 var pauseVideo = function() {
				players[videoId].pauseVideo();
			 };

			var createPlayer = function() {
				$this.addClass('is-play');
				$('body').addClass('video-open');

				playVideo();

				//if (window.mainSwiper) {
				//	window.mainSwiper.disableMousewheelControl()
				//}

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

			}

			if (!$this.hasClass('is-loaded')) {

				$this.addClass('is-loading');
				$this.after('<iframe id="' + videoId + '" width="320px" height="320px" class="video-player" src="' + link + '?enablejsapi=1&html5=1&version=3" frameborder="0" allowfullscreen></iframe>');

				players[videoId] = new YT.Player(videoId, {
					videoId: link,
					playerVars: {
						autoPlay: 1,
						autohide: 2,
						controls: 1,
						modestbranding: 1,
						rel: 0,
						showinfo: 0
					},
					events: {
						'onReady': function() {
							$this.removeClass('is-loading').addClass('is-loaded');
							createPlayer();
						}
					}
				});

			} else {
				createPlayer();
			}


			$(document).on('click', '.video-open > .header', function() {
				$('.video-backdrop').trigger('click');
			});

		});
	}

	window.onYouTubePlayerAPIReady = onYouTubePlayerAPIReady

	var a = document.createElement('script');a.src = 'http://www.youtube.com/player_api';a.async = true;
	$('body').append(a);
});