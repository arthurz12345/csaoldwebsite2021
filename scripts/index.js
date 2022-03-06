$(document).ready(function(){
  $(this).scrollTop(0);
  // if (document.documentElement.clientWidth < 900){
  //   showMenu();
  // }
  // else{
  //   hideMenu();
  // }
})

// $(document).scroll(function() {
//   if ($(this).scrollTop() > 10 && document.documentElement.clientWidth < 990) {
//     showMenu();
//   } else {
//    hideMenu();
//   }
// });

// $(document).load(function(){
//   if (document.documentElement.clientWidth < 990){
//     showMenu();
//   }
//   else{
//     hideMenu();
//   }

// })

function showMenu(){
  if($("#navbar-checkbox").is(":checked")) {
    return;
  }
  $('#navbar').addClass('shrink');
}

function hideMenu(){
  if($("#navbar-checkbox").is(":checked")) {
    setTimeout(function() {
      $("#navbar").removeClass("shrink");     
      document.getElementById("navbar-checkbox").checked = false;
    }, 500)
  }
  else {
    $('#navbar').removeClass('shrink');
  }
  $('#navbar').removeClass('crossed');
  $("#navbar").removeClass("checked");
}


// $(window).resize(function() {
//   //resize just happened, pixels changed
//   if ($(this).scrollTop() < 10){
//   if (document.documentElement.clientWidth < 900)
//     showMenu();
//   else
//     hideMenu();
// }
      
// });


$('a[href*=#]:not([href=#])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
      || location.hostname == this.hostname) {
    
    var target = $(this.hash);
    target = target.length ? target : $('[id=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 300);
      return false;
    }
  }
});

$('#navbar-checkbox').change(function(){
  if($(this).is(":checked")) {
      $("#navbar").addClass("checked");
      setTimeout(function() {
        $("#navbar").addClass("crossed");
      }, 300)
  } else {
    $("#navbar").removeClass("crossed");
    setTimeout(function() {
      $("#navbar").removeClass("checked");
    }, 300)
  }
});
