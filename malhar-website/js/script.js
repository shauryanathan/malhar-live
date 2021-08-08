$(document).ready(function(){
	function change() {
		$('.header h2').addClass('is-showing');
	}

	 setTimeout(change, 1000)
})

$(document).ready(function(){
	function changeTwo() {
		$('.header h3').addClass('is-showing');
	}

	 setTimeout(changeTwo, 1200)
})

$(document).ready(function(){
	$('.click').click(function(){
		$('.collapse').toggleClass('is-clicked')
	})

})
$(document).ready(function(){
	$('.click').click(function(){
		$('.collapse ul').toggleClass('is-clicked')
	})
})