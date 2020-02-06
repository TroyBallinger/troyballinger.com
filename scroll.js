window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
		document.getElementById("header_link_holder").style.paddingTop = "0px";
		document.getElementById("header_link_holder").style.paddingBottom = "0px";
	} else {
		document.getElementById("header_link_holder").style.paddingTop = "10px";
		document.getElementById("header_link_holder").style.paddingBottom = "10px";
	}
}