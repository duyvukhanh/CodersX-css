let x = $(window).width() - ($('#content-section').offset().left + $('#content-section').width());
document.getElementById("info-section").style.right = x + "px";


window.onresize = function() {
    let x = $(window).width() - ($('#content-section').offset().left + $('#content-section').width());
    document.getElementById("info-section").style.right = x + "px";
};