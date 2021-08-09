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
    $('.three button').click(function(){
        $('.third').addClass('is-clicked')
    })
})

$(document).ready(function(){
    $('.three-img').click(function(){
        $('.third').removeClass('is-clicked')
    })
})

$(document).ready(function(){
    $('.four button').click(function(){
        $('.fourth').addClass('is-clicked')
    })
})

$(document).ready(function(){
    $('.four-img').click(function(){
        $('.fourth').removeClass('is-clicked')
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