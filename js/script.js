$(document).ready(function(){
	$('.buz-slider').slick({
		arrows:true,
		dots:false,
		slidesToShow:5,
		autoplay:true,
		speed:1000,
		autoplaySpeed:1600,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:4
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:3
				}
			},
			{
				breakpoint: 380,
				settings: {
					slidesToShow:2
				}
			}
		]
	});
});

