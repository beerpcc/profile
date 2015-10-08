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
	imrandom();
	s = setInterval(function(){imrandom();}, 1000);

	$('.iam').on('mouseenter', function(){
		$(this).find('p').fadeIn(300);
		$('.iambg').fadeIn(300);
	});

	$('.iam').on('mouseleave', function(){
		$(this).find('p').fadeOut(300);
		$('.iambg').fadeOut(300);
	});

	$('.timeline').on('mouseenter', function(){
		$(this).find('p').fadeIn(300);
		$('.timelinebg').fadeIn(300);
	});

	$('.timeline').on('mouseleave', function(){
		$(this).find('p').fadeOut(300);
		$('.timelinebg').fadeOut(300);
	});
});