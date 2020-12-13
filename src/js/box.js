import $ from 'jquery'

$('.box li.box__list-item').on('click', function() {
    $('.box__list-item').removeClass('active')
    $(this).toggleClass('active')
})