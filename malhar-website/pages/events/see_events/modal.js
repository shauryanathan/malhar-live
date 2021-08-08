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