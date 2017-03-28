$(document).ready(function() {

  $(".top-header__nav-link").click(function() {
  	$(".top-header__nav-link").removeClass("top-header__nav-link_active");
  	$(this).addClass("top-header__nav-link_active");
  });

  $(".top-header__mobile-menu").click(function() {
  	$(this).toggleClass("change");
  	$(".top-header__nav").animate({ width: "toggle"}, 350);
  	$(".overley-page").fadeToggle();
  });
});


