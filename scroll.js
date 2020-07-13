window.onscroll = () => { shrinkHeaderOnScroll() };

function shrinkHeaderOnScroll() {
	if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
		document.getElementById("header_link_holder").style.paddingTop = "0";
		document.getElementById("header_link_holder").style.paddingBottom = "0";
	} else {
		document.getElementById("header_link_holder").style.paddingTop = ".5vw";
		document.getElementById("header_link_holder").style.paddingBottom = ".5vw";
	}
}