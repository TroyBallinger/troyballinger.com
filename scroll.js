window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
		document.getElementById("header_link_holder").style.paddingTop = "0";
		document.getElementById("header_link_holder").style.paddingBottom = "0";
	} else {
		document.getElementById("header_link_holder").style.paddingTop = "1vh";
		document.getElementById("header_link_holder").style.paddingBottom = "1vh";
	}
}