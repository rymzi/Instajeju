$(document).ready(function() {
  var $heart = $(".heart");
  $heart.click(function() {
    var hasHeartClass = $(this).hasClass("heart-clicked");
    if ($(this).hasClass("heart-clicked")) {
      $(this).removeClass("heart-clicked");
    } else {
      $(this).addClass("heart-clicked");
    }
  });
});
