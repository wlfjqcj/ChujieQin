//Navbar Resizing

var nb = document.getElementsByTagName("ul");
 var scroll = function() {
     //console.log("0");
    if (document.body.scrollTop > 1) {
        console.log("100");
      nb[0].classList.remove("n");
     nb[0].classList.add("resize");
    }
    if (document.body.scrollTop < 1) {
         console.log("200");
      nb[0].classList.remove("resize");
     nb[0].classList.add("n");
    }
 }; //don't forget to make the changes that I noted above!
window.addEventListener("scroll", scroll);


//window.onscroll = scroll();

// smooth scrolling reference from stackoverflow
//https://stackoverflow.com/questions/17722497/scroll-smoothly-to-specific-element-on-page

function smoothScroll(id) {
    var startY = window.pageYOffset;
  var stopY = document.getElementById(id).offsetTop;
    var distance = stopY > startY ? stopY - startY : startY - stopY;
  if (!distance) {
      return;
  }
    var speed = distance / 100;
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    if (stopY > startY) {
        for ( var i=startY; i<stopY; i+=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY += step; if (leapY > stopY) leapY = stopY; timer++;
        } return;
    }
    for ( var i=startY; i>stopY; i-=step ) {
        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
        leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
    }
    return false;
}


document.getElementById("ab").addEventListener("click", function(){
          console.log("1");
          smoothScroll('About');
});

document.getElementById("pr").addEventListener("click", function(){

          console.log("2");
          smoothScroll('Projects');
});

document.getElementById("sk").addEventListener("click", function(){

          console.log("3");
          smoothScroll('Skills');
})

document.getElementById("co").addEventListener("click", function(){

          console.log("4");
          smoothScroll('Contact');
});



//Position Indicator

window.onscroll = function() {indicator()};

function indicator() {

  var els = document.getElementsByTagName("a");

  var p1 = document.getElementById("Projects").offsetTop;
  var p2 = document.getElementById("Skills").offsetTop;
  var p3 = document.getElementById("Contact").offsetTop;

    if (document.body.scrollTop < p1 * 0.7 ) {
       els[0].className = "active";
       els[1].className = "";
       els[2].className = "";
       els[3].className = "";
    } else if(document.body.scrollTop >= p1*0.7 && document.body.scrollTop < p1 + (p2 - p1) *0.7) {
      els[0].className = "";
      els[1].className = "active";
      els[2].className = "";
      els[3].className = "";
    } else if(document.body.scrollTop >= p1 + (p2 - p1) *0.7 && document.body.scrollTop < p2 + (p3 - p2) *0.7) {
      els[0].className = "";
      els[1].className = "";
      els[2].className = "active";
      els[3].className = "";
    } else {
      els[0].className = "";
      els[1].className = "";
      els[2].className = "";
      els[3].className = "active";
    }
}

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
/*var slideIndex = 1;
showSlides(slideIndex);
//console.log("2");
function plusSlides(n) {
    console.log("1");
    slideIndex += n;
  showSlides(slideIndex);
} */





//Modal reference from w3schools:
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal
// Get the modal
var modal1 = document.getElementById('myModal1');

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn1.onclick = function() {
    modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    modal1.style.display = "none";
}



// Get the modal
var modal2 = document.getElementById('myModal2');

// Get the button that opens the modal
var btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close")[1];

// When the user clicks the button, open the modal
btn2.onclick = function() {
    modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
    modal2.style.display = "none";
}


// Get the modal
var modal3 = document.getElementById('myModal3');

// Get the button that opens the modal
var btn3 = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close")[2];

// When the user clicks the button, open the modal
btn3.onclick = function() {
    modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
    modal3.style.display = "none";
}
