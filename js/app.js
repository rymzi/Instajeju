$(document).ready(function() {
  var $heart = $(".heart");
  $heart.click(function() {
    var hasHeartClass = $(this).hasClass("heart-clicked");
    if (hasHeartClass) {
      $(this).removeClass("fa-heart");
      $(this).removeClass("heart-clicked");
      $(this).addClass("fa-heart-0");
    } else {
      $(this).removeClass("fa-heart-0");
      $(this).addClass("fa-heart");
      $(this).addClass("heart-clicked");
    }
  });
});
