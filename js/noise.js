var backToTopButton = $('.back-to-top');
// console.log(backToTopButton)
// function backToTop() {
//     alert("top")
// }
// backToTopButton.onclick(function () {
//     alert("top")
// })
function backToTop() {
    $('html,body').animate({
        scrollTop: 0
    }, 800);
}
backToTopButton.on('click', backToTop);
$(window).on('scroll', function () {
    if ($(window).scrollTop() > $(window).height()) {
        backToTopButton.fadeIn();
    } else {
        backToTopButton.fadeOut();
    }
});
$(window).trigger('scroll');/*触发滚动事件，避免刷新的时候显示回到顶部按钮*/