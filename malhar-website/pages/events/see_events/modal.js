$(document).ready(function(){
    $('.one button').click(function(){
        $('.first').addClass('is-clicked')
    })
})

$(document).ready(function(){
    $('.one-img').click(function(){
        $('.first').removeClass('is-clicked')
    })
})

$(document).ready(function(){
    $('.two button').click(function(){
        $('.second').addClass('is-clicked')
    })
})

$(document).ready(function(){
    $('.two-img').click(function(){
        $('.second').removeClass('is-clicked')
    })
})

$(document).ready(function(){
    $('button').click(function(){
        $('body').css('overflow-y' , 'hidden')
    })
})
$(document).ready(function(){
    $('.modal img').click(function(){
        $('body').css('overflow-y' , 'scroll')
    })
})