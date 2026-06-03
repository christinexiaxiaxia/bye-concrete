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

$('.imgactivator.you').hover(
	function(){
		$('.bg-img.you').css({'display':'block'})
		$('.bye-concrete').css({'display':'none'})
	},
	function(){
		$('.bg-img.you').css({'display':'none'})
		$('.bye-concrete').css({'display':'block'})
	}
)

$('.imgactivator.senior').hover(
	function(){
		$('.bg-img.senior').css({'display':'block'})
		$('.bye-concrete').css({'display':'none'})
	},
	function(){
		$('.bg-img.senior').css({'display':'none'})
		$('.bye-concrete').css({'display':'block'})
	}
)

$('.imgactivator.concrete').hover(
	function(){
		$('.bg-img.concrete').css({'display':'block'})
		$('.bye-concrete').css({'display':'none'})
	},
	function(){
		$('.bg-img.concrete').css({'display':'none'})
		$('.bye-concrete').css({'display':'block'})
	}
)

$('.imgactivator.date').hover(
	function(){
		$('.bg-img.date').css({'display':'block'})
		$('.bye-concrete').css({'display':'none'})
	},
	function(){
		$('.bg-img.date').css({'display':'none'})
		$('.bye-concrete').css({'display':'block'})
	}
)

$('.imgactivator.ty').hover(
	function(){
		$('.bg-img.ty').css({'display':'block'})
		$('.bye-concrete').css({'display':'none'})
	},
	function(){
		$('.bg-img.ty').css({'display':'none'})
		$('.bye-concrete').css({'display':'block'})
	}
)

$('.imgactivator.me').hover(
	function(){
		$('.bg-img.me').css({'display':'block'})
		$('.bye-concrete').css({'display':'none'})
	},
	function(){
		$('.bg-img.me').css({'display':'none'})
		$('.bye-concrete').css({'display':'block'})
	}
)



