// CURSOR TEXT

$(document).mousemove(function(e){
	$('.bye-concrete').css({'top': e.clientY + 10, 'left': e.clientX + 10})
})

$(document).mousemove(function(e){
	$('.download').css({'top': e.clientY + 10, 'left': e.clientX + 10})
})

$('.letter').hover(
	function(){
		$('.bye-concrete').css({'display':'none'})
		$('.download').css({'display':'block'})
	}, function(){
		$('.bye-concrete').css({'display':'block'})
		$('.download').css({'display':'none'})
	}
)



// ENTER THE SITE
$('.confirm').click(
	function(){
		$('.warning').css({'display':'none'})
		$('.enter').css({'display':'block'})
		$('body').css({'background-color':'red'})
		$('.bye-concrete').css({'display':'block'})
		$(document).prop('title', 'Bye Concrete')
		$("link[rel='icon']").attr('href','bye.png')
	}
)




// HOVER IMAGE following mouse

$(document).mousemove(function(e){
	$('.hoverimg').css({'top': e.clientY + 16, 'left': e.clientX - 0})
})

///////////

$('.header.more.intro.defunkt1').hover(
	function(){
		$('.hoverimg.defunkt1').css({'display':'block'})
		$('.hi-concrete').css({'display':'none'})
	},
	function(){
		$('.hoverimg.defunkt1').css({'display':'none'})
		$('.hi-concrete').css({'display':'block'})
	}
)