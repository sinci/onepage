// OFFCANVAS ON CLICK CLOSE
UIkit.util.ready(function() {
    UIkit.util.$$("#offcanvas-nav .uk-nav li a").forEach(function(el) {
        if (
            location.hostname == el.hostname &&
            location.pathname == el.pathname &&
            el.href != "#"
        ) {
            UIkit.scroll(el, { offset: 20 });
            UIkit.util.on(el, "beforescroll", function() {
                UIkit.offcanvas("#offcanvas-nav").hide();
            });
        }
    });
});

// FOOTER COPYRIGHT YEAR
const d = new Date();
document.getElementById("year").innerHTML = d.getFullYear();