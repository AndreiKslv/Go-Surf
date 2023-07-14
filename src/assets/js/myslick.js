$(function(){
	$('.header__slider-dots').slick({
		dots: false,
		slidesToShow: 4,
 		slidesToScroll: 4,
		asNavFor: '.header__slider',
		focusOnSelect: true,
	});

	$('.header__slider').slick({
		dots: false,
		arrows: true,
		prevArrow: '<img class="slick-prev" src="assets/images/common/arrow-left.svg">',
		nextArrow: '<img class="slick-next" src="assets/images/common/arrow-right.svg">',
		infinite: true,
		speed: 300,
		fade: true,
		asNavFor: '.header__slider-dots',
	  });

	$('.surf__map-points-slider').slick({
		arrows: false,
		slidesToShow: 8,
 		slidesToScroll: 1,
		asNavFor: '.surf__slider',
		focusOnSelect: true,
	});

	$('.surf__slider').slick({
		arrows: true,
		prevArrow: '<img class="slick-prev surf__slick-prev" src="assets/images/common/gray-arrow-left.svg">',
		nextArrow: '<img class="slick-next surf__slick-next" src="assets/images/common/gray-arrow-right.svg">',
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.surf__map-points-slider',
	});

	$('.section__slider').slick({
		fade: true,
		arrows: true,
		prevArrow: '<img class="slick-prev surf__slick-prev" src="assets/images/common/gray-arrow-left.svg">',
		nextArrow: '<img class="slick-next surf__slick-next" src="assets/images/common/gray-arrow-right.svg">',
		infinite: true,
		slidesToShow: 1,
 		slidesToScroll: 1,
	});

	$('.shop__slider').slick({
		fade: true,
		arrows: true,
		prevArrow: '<img class="slick-prev surf__slick-prev" src="assets/images/common/gray-arrow-left.svg">',
		nextArrow: '<img class="slick-next surf__slick-next" src="assets/images/common/gray-arrow-right.svg">',
		infinite: true,
		slidesToShow: 1,
 		slidesToScroll: 1,
	});
})

