$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});

window.onscroll = function () { scrollFunction() };
var menutop = document.getElementById("header-lower");
var banner = document.getElementsByClassName("banner")[0]; 

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbartops").style.top = "0";
    menutop.classList.add("menufixcustom");
    banner.style.marginTop = menutop.offsetHeight + "px";

  } else {
    document.getElementById("navbartops").style.top = "-70px";
    menutop.classList.remove("menufixcustom");
    banner.style.marginTop = "0";

  }
}
