$('button').on('click', function (e) {
    $('.main').hide(1000)
    var pId = $(e.target).attr('for');
    $(`#${pId}`).slideDown(1000)
    $('button').removeClass('active');
    $(e.target).eq(0).addClass('active');

})