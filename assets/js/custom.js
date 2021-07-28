particlesJS('particles-js', {
	"particles": {
		"number": {
			"value": 160,
			"density": {
				"enable": true,
				"value_area": 900
			}
		},
		"color": {
			"value": ["#f5865d", "#ffffff", "#f5865d"]
		},
		"shape": {
			"type": "circle",
			"stroke": {
				"width": 0,
				"color": "#000000"
			},
			"polygon": {
				"nb_sides": 5
			},
			"image": {
				"src": "img/github.svg",
				"width": 100,
				"height": 100
			}
		},
		"opacity": {
			"value": .7,
			"random": false,
			"anim": {
				"enable": false,
				"speed": 3,
				"opacity_min": 0.1,
				"sync": false
			}
		},
		"size": {
			"value": 4,
			"random": true,
			"anim": {
				"enable": false,
				"speed": 40,
				"size_min": 0.1,
				"sync": false
			}
		},
		"line_linked": {
			"enable": false,
			"distance": 150,
			"color": "#ffffff",
			"opacity": 0,
			"width": 0
		},
		"move": {
			"enable": true,
			"speed": 2,
			"direction": "none",
			"random": false,
			"straight": false,
			"out_mode": "out",
			"bounce": false,
			"attract": {
				"enable": false,
				"rotateX": 600,
				"rotateY": 1200
			}
		}
	},
	"interactivity": {
		"detect_on": "canvas",
		"events": {
			"onhover": {
				"enable": true,
				"mode": "grap"
			},
			"resize": true
		},
		"modes": {
			"grab": {
				"distance": 150,
				"line_linked": {
					"opacity": 0
				}
			},
			"bubble": {
				"distance": 400,
				"size": 40,
				"duration": 2,
				"opacity": 8,
				"speed": 3
			},
			"repulse": {
				"distance": 200
			},
			"push": {
				"particles_nb": 4
			},
			"remove": {
				"particles_nb": 2
			}
		}
	},
	"retina_detect": true
});



$(function () {
	"use strict";
	var win = $(window),
		htmlBody = $("html, body"),
		scrollToTop = $(".scroll-top"),
		navBar = $(".navbar"),
		progressCheck = false,
		factsCheck = false;

	$(".progress-container").each(function () {
		var timer = $(this).find(".percent");
		timer.css("left", "calc(" + timer.data("to") + "% - 15px)");
	});

	function skillsPogress() {
		$(".progress-container").each(function () {
			var timer = $(this).find(".percent"),
				progressBar = $(this).find(".progress-bar");
			timer.countTo();
			progressBar.css("width", progressBar.attr("aria-valuenow") + "%");
		});
	}

	if (!progressCheck && $(this).scrollTop() >= $(".skills").offset().top - 300) {
		skillsPogress();
		progressCheck = true;
	}

	win.on("scroll", function () {

		if (!progressCheck && $(this).scrollTop() >= $(".skills").offset().top - 300) {
			skillsPogress();
			progressCheck = true;
		}

	});

	new WOW().init();
});



//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
	scrollFunction()
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}