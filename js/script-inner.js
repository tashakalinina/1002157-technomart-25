var booking = document.querySelectorAll(".button-booking");
var popupBooking = document.querySelector(".popup-product-in-basket");
var close = document.querySelectorAll(".close-popup");

booking.forEach(function (entry) { 
  entry.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupBooking.classList.add("popup-show");
  });
});
  
close.forEach(function (entry) { 
  entry.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupBooking.classList.remove("popup-show");
  });
});
  
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupBooking.classList.contains("popup-show")) {
      evt.preventDefault();
      popupBooking.classList.remove("popup-show");
    }
  }
});
