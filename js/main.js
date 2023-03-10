$('button').on('click', function (e) {
    $('.main').hide(1000)
    var pId = $(e.target).attr('for');
    $(`#${pId}`).slideDown(1000)
    $('button').removeClass('active');
    $(e.target).addClass('active');
    $('button').removeClass('text-white');
    $(e.target).addClass('text-white');
})