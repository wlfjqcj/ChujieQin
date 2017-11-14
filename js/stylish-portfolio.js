




(function($) {
  "use strict"; // Start of use strict

  // Closes the sidebar menu
  $("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });

  // Opens the sidebar menu
  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $("#sidebar-wrapper").removeClass("active");
  });

  //#to-top button appears after scrolling
  var fixed = false;
  $(document).scroll(function() {
    if ($(this).scrollTop() > 250) {
      if (!fixed) {
        fixed = true;
        $('#to-top').show("slow", function() {
          $('#to-top').css({
            position: 'fixed',
            display: 'block'
          });
        });
      }
    } else {
      if (fixed) {
        fixed = false;
        $('#to-top').hide("slow", function() {
          $('#to-top').css({
            display: 'none'
          });
        });
      }
    }
  });

})(jQuery); // End of use strict

//slides reference from w3schools: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal
var slideIndex = 1;
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}
showSlides(slideIndex);
document.getElementById("pre").addEventListener("click", function(){
    slideIndex = slideIndex - 1;
    showSlides(slideIndex);
});

document.getElementById("nex").addEventListener("click", function(){
    slideIndex = slideIndex + 1;
    showSlides(slideIndex);
});

//skills

(function() {

	var Progress = function( element ) {

		this.context = element.getContext( "2d" );
		this.refElement = element.parentNode;
		this.loaded = 0;
		this.start = 4.72;
		this.width = this.context.canvas.width;
		this.height = this.context.canvas.height;
		this.total = parseInt( this.refElement.dataset.percent, 10 );
		this.timer = null;

		this.diff = 0;

		this.init();
	};

	Progress.prototype = {
		init: function() {
			var self = this;
			self.timer = setInterval(function() {
				self.run();
			}, 25);
		},
		run: function() {
			var self = this;

			self.diff = ( ( self.loaded / 100 ) * Math.PI * 2 * 10 ).toFixed( 2 );
			self.context.clearRect( 0, 0, self.width, self.height );
			self.context.lineWidth = 10;
			self.context.fillStyle = "#000";
			self.context.strokeStyle = "#d30000";
			self.context.textAlign = "center";

			self.context.fillText( self.loaded + "%", self.width * .5, self.height * .5 + 2, self.width );
			self.context.beginPath();
			self.context.arc( 35, 35, 30, self.start, self.diff / 10 + self.start, false );
			self.context.stroke();

			if( self.loaded >= self.total ) {
				clearInterval( self.timer );
			}

			self.loaded++;
		}
	};

	var CircularSkillBar = function( elements ) {
		this.bars = document.querySelectorAll( elements );
		if( this.bars.length > 0 ) {
			this.init();
		}
	};

	CircularSkillBar.prototype = {
		init: function() {
			this.tick = 25;
			this.progress();

		},
		progress: function() {
			var self = this;
			var index = 0;
			var firstCanvas = self.bars[0].querySelector( "canvas" );
			var firstProg = new Progress( firstCanvas );



			var timer = setInterval(function() {
				index++;

				var canvas = self.bars[index].querySelector( "canvas" );
				var prog = new Progress( canvas );

				if( index == self.bars.length ) {
						clearInterval( timer );
				}

			}, self.tick * 100);

		}
	};

	document.addEventListener( "DOMContentLoaded", function() {
		var circularBars = new CircularSkillBar( "#bars .bar" );
	});

})();
