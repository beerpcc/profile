$(function(){
	var n = 1;
	var s=null;
	function imrandom(){
		$('.i'+n).fadeOut(300, function(){
			n++;
			$('.i'+n).fadeIn(300);
			if(n==6){
				clearInterval(s);
			}
		});
	}
	setTimeout(function(){imrandom();s = setInterval(function(){imrandom();}, 1600);}, 1000);
	$('.iam').on('mouseenter', function(){
		$(this).find('p').fadeIn(200);
		$('.iambg').fadeIn(200);
	});

	$('.iam').on('mouseleave', function(){
		$(this).find('p').fadeOut(200);
		$('.iambg').fadeOut(200);
	});

	$('.timeline').on('mouseenter', function(){
		$(this).find('p').fadeIn(200);
		$('.timelinebg').fadeIn(200);
	});

	$('.timeline').on('mouseleave', function(){
		$(this).find('p').fadeOut(200);
		$('.timelinebg').fadeOut(200);
	});
});