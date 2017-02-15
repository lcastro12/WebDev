

function toggle_visibility(id) {
    var e = document.getElementById(id);
    if ($(e).hasClass("hover")) {
        $(e).removeClass("hover");
    } else {
        $($(e)).addClass("hover");
        $($(e)).attr({
            width: "100%",
            height: "100%"
        });
    }
};