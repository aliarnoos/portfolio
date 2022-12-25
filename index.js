
// $(document).ready(function(){
//     $(window).scroll(function(){
//         let scroll = $(window).scrollTop();
//         if (scroll > 300) {
//           $(".nav").css("background" , "blue");
//         }
  
//         else{
//             $(".nav").css("background" , "#333");  	
//         }
//     })
//   })

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav").classList.add("scroll");
  } else {
    document.getElementById("nav").classList.remove("scroll");
  }
}