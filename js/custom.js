$(function(){
	var n = 1;
	var s=null;
	function imrandom(){
		$('.i'+n).fadeOut(300, function(){
			n++;
			if(n==6){
				clearInterval(s);
				$('.i'+n).fadeIn(300);
				return;
			}
			$('.i'+n).fadeIn(300, function(){

				setTimeout(function(){imrandom();}, 500);
			});
		});
	}
	setTimeout(function(){imrandom();}, 1000);
	$('.iam').on('mouseenter', function(){
		$('.iambg').fadeIn(200);
	});

	$('.iam').on('mouseleave', function(){
		$('.iambg').fadeOut(200);
	});

	$('.timeline').on('mouseenter', function(){
		$('.timelinebg').fadeIn(200);
	});

	$('.timeline').on('mouseleave', function(){
		$('.timelinebg').fadeOut(200);
	});

	$('.btn-circle').on('mouseenter', function(){
		$(this).find('p').fadeIn(200);
	});

	$('.btn-circle').on('mouseleave', function(){
		$(this).find('p').fadeOut(200);
	});

	$('[data-box]').on('click', function(){
		$('#'+$(this).data('box')).fadeIn(200);
	});

	$('.box .close').on('click', function(){
		$('.box').fadeOut(200);
	});
});