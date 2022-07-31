// Модальное окно


$('.js-button-campaign').click(function() { 
	$('.js-overlay-campaign').fadeIn();
	$('.js-overlay-campaign').addClass('disabled');
});


$('.js-close-campaign').click(function() { 
	$('.js-overlay-campaign').fadeOut();
	
});

$(document).mouseup(function (e) { 
	var popup = $('.js-popup-campaign');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign').fadeOut();
		
	}
});


// acc reg

$('.js-button-reg').click(function() { 
	$('.js-overlay-reg').fadeIn();
	$('.js-overlay-reg').addClass('disabled');
});


$('.js-close-campaign-reg').click(function() { 
	$('.js-overlay-reg').fadeOut();
	
});

$(document).mouseup(function (e) { 
	let popup = $('.js-popup-campaign-reg');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-reg').fadeOut();
		
	}
});