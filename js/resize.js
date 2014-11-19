+function(){
	'use strict';

	var $main = document.getElementsByClassName("main")[0],
		$body = document.getElementsByTagName("body")[0],
		$tile = document.getElementsByClassName("tile-grid")[0],
		swiperTimeout = '';

	function resize() {
		var winH = $body.offsetHeight,
			winW = $body.offsetWidth,
			w = $main.offsetWidth,
			h = $tile.offsetHeight,
			cell = 260;

		if ( winH > 519 && winW > 767) {

			if (winH > 768) {
				cell = h / 3;

				Array.prototype.forEach.call(document.getElementsByClassName("page-lg-w-4"), function(el){
					el.style.width = parseInt(4*cell,10) + 'px'
				});
				Array.prototype.forEach.call(document.getElementsByClassName("page-lg-w-3"), function(el){
					el.style.width = parseInt(3*cell,10) + 'px'
				});
				Array.prototype.forEach.call(document.getElementsByClassName("page-lg-w-2"), function(el){
					el.style.width = parseInt(2*cell,10) + 'px'
				});
			} else {
				cell = h / 2;

				Array.prototype.forEach.call(document.getElementsByClassName("page-md-w-4"), function(el){
					el.style.width = parseInt(4*cell,10) + 'px'
				});
				Array.prototype.forEach.call(document.getElementsByClassName("page-md-w-3"), function(el){
					el.style.width = parseInt(3*cell,10) + 'px'
				});
				Array.prototype.forEach.call(document.getElementsByClassName("page-md-w-2"), function(el){
					el.style.width = parseInt(2*cell,10) + 'px'
				});
			}
		}
		else {
			Array.prototype.forEach.call(document.getElementsByClassName("page"), function(el){
				el.style.width = w + 'px'
			});
		}

		clearTimeout(swiperTimeout);
		swiperTimeout = setTimeout(function() {
			if (window.mainSwiper) {
				window.mainSwiper.reInit();
			}
		}, 200);

	}
	resize();

	window.addEventListener('load', function(){
		clearTimeout(swiperTimeout);
		swiperTimeout = setTimeout(resize, 200);
		
	});

	window.addEventListener('resize', function(){
		clearTimeout(swiperTimeout);
		swiperTimeout = setTimeout(resize, 200);
		
	});
	window.addEventListener('orientationchange', function(){
		clearTimeout(swiperTimeout);
		swiperTimeout = setTimeout(resize, 200);
	})

}();