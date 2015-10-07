$(function(){
	var n = 1;
	var s=null;
	function imrandom(){
		$('.i'+n).fadeOut(500, function(){
			n++;
			$('.i'+n).fadeIn(500);
			if(n==4){
				clearInterval(s);
			}
		});
	}
	s = setInterval(function(){imrandom();}, 1500);
});