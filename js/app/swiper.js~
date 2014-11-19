define([
    'jquery',
    'idangerous'
], function($)
{
	'use strict';

	$(function() {

		var mainSwiper = new Swiper('.main-swiper',{
			speed:800
			,mode:'horizontal'
			,loop:false
			,slidesPerView:'auto'
			,mousewheelControl:true
			,resizeReInit:false
			,slideClass:'page'
			//,onlyExternal:true
			//,noSwiping:true
			//,noSwipingClass:'js-no-swiping'
			,onSlideChangeStart:function(swiper){
				$('.header')[swiper.activeIndex > 0 ? 'addClass' : 'removeClass']('header-sm');
			}
			,onFirstInit:function(swiper){
				$(document).on('click touchstart', '.js-nav-main-swiper > li > a', function(event){
					event.preventDefault();

					var $this = $(this),
						index = $this.parent().index();

					$this.closest('.navbar-collapse').removeClass('open');

					swiper.swipeTo(index);


				var _size = $('ul.nav.nav-main.js-nav-main-swiper li').size();
				_size = _size - 1;
				if(_size == index)	// if last element - add focus, if not - not add
				{
					$(swiper.slides[index]).addClass('focus in').delay(1200).queue(function(){
						$(this).removeClass('in').one($.support.transition.end, function () {
							$(this).removeClass('focus')
						 })
						.emulateTransitionEnd(300)
							 
						$(this).dequeue();
					});
				}
				});

				$(document).on('click touchstart', '.navbar-collapse-toggle .logo-brand-sm', function(event){
					event.preventDefault();
					event.stopPropagation();

					swiper.swipeTo(0);
				});

				$(swiper.container).on('click', '.js-main-swiper-next', function(event){
					event.preventDefault()
					swiper.swipeNext()
				});
			}
		});

		var gallerySwiper = new Swiper('.gallery-swiper',{
			speed:600
			,autoplay:5000
			,mode:'horizontal'
			,loop:true
			,slidesPerView:1
			,onlyExternal:true
			,pagination: '.gallery-swiper-pagination'
			,paginationClickable: true
			,onSwiperCreated:function(swiper){
				$('.js-gallery-swiper-caption').html( $(swiper.slides[swiper.activeIndex]).html() );
			}
			,onSlideChangeStart:function(swiper){
				$.support.transition ?
					$('.js-gallery-swiper-caption').removeClass('in')
						.one($.support.transition.end, function () {
							$(this).addClass('in')
							$('.js-gallery-swiper-caption').html( $(swiper.slides[swiper.activeIndex]).html() );
						 })
						.emulateTransitionEnd(300) :
					$('.js-gallery-swiper-caption').html( $(swiper.slides[swiper.activeIndex]).html() );

			}
		});

		var activitiesSwiper = new Swiper('.activities-swiper',{
			speed:600
			,mode:'vertical'
			,loop:false
			,slidesPerView:'auto'
			//,onlyExternal:true
			//,slideClass:'item'
			,onSlideChangeStart:function(swiper){
				$('.js-activities-swiper-prev', swiper.container)[swiper.activeIndex == 0 ? 'addClass' : 'removeClass']('disabled');
			}
			,onFirstInit:function(swiper){
				$('.js-activities-swiper-prev', swiper.container).on('click', function(event){
					event.preventDefault()
					swiper.swipePrev()
				});
				$('.js-activities-swiper-next', swiper.container).on('click', function(event){
					event.preventDefault()
					swiper.swipeNext()
				});
			}
		});

		window.mainSwiper = mainSwiper;
		window.gallerySwiper = gallerySwiper;
		window.activitiesSwiper = activitiesSwiper;

	});
});
