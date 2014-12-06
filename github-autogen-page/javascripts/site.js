$(function(){
	$('#loading_block').delay(2500).fadeOut(function(){
		$(this).remove();
	});
	$('body > *').delay(3000).slideDown(function(){
		$('body > *').css('overflow', 'visible');
	});
});