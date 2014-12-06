
/*$.fn.isOnScreen = function(){
     
    var win = $(window);
     
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
     
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
     
    var isOnScreen = (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    return isOnScreen;
     
};*/

$(function init(){
	(function show(){
		$('body > div.container > *').each(
			function foreach(index){
				//if($(this).isOnScreen()){
				$(this).delay(300 + 300 * index).fadeIn();
				//}
			}
		);
	})();
	//$('body').on('scroll', show);
	//show();
})