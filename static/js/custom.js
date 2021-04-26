var sideMenuToggleVal = "0";

$(document).ready(function () {
    $(".top-title").click(function () {
        if (sideMenuToggleVal == "0") {
            $(".left-nav-menu-wrap > ul").animate({
                "width": "250px"
            });
            $(".main-nav-menu li a span").css("display", "inline");
            $(".main-nav-menu li a .fa-chevron-left").css("display", "inline");
            $(".main-nav-menu li a .fa-list-ul").css("display", "none");
            sideMenuToggleVal = "1";
        } else if (sideMenuToggleVal == "1") {
            $(".left-nav-menu-wrap > ul").animate({
                "width": "65px"
            });
            $(".main-nav-menu li a span").css("display", "none");
            $(".main-nav-menu li a .fa-chevron-left").css("display", "none");
            $(".main-nav-menu li a .fa-list-ul").css("display", "inline");
            sideMenuToggleVal = "0";
        }
    });
});

var header = document.getElementById("sidebar");
var btns = header.getElementsByClassName("sidebar-menu");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
$(document).ready(function () {
    $('#new-cases-table').DataTable({
        "paging": false,
        "searching": false,
        "info": false,
        "ordering": true
    });
})