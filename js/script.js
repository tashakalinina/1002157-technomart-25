var booking = document.querySelectorAll(".button-booking");
var popupBooking = document.querySelector(".popup-product-in-basket");
var close = document.querySelectorAll(".close-popup");
var map = document.querySelector(".map");
var popupMap = document.querySelector(".map-popup");
var message = document.querySelector(".contact .button");
var popupMessage = document.querySelector(".popup-message");
var messageName = popupMessage.querySelector("#message-name");
var messageMail = popupMessage.querySelector("#message-mail");
var messageText = popupMessage.querySelector("#message-text");
var form = popupMessage.querySelector("form");

booking.forEach(function (entry) { 
  entry.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupBooking.classList.add("popup-show");
  });
});

map.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupMap.classList.add("popup-show");
});

message.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupMessage.classList.add("popup-show");
  messageName.focus(); 
});

form.addEventListener("submit", function (evt) {
  if (!messageName.value || !messageMail.value || !messageText.value) {
    evt.preventDefault();
    popupMessage.classList.remove("popup-error");
    popupMessage.offsetWidth = popupMessage.offsetWidth;
    popupMessage.classList.add("popup-error");
  }
});

close.forEach(function (entry) { 
  entry.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupBooking.classList.remove("popup-show");
    popupMap.classList.remove("popup-show");
    popupMessage.classList.remove("popup-show");
    popupMessage.classList.remove("popup-error");
  });
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupMap.classList.contains("popup-show")) {
      evt.preventDefault();
      popupMap.classList.remove("popup-show");
    }
    if (popupBooking.classList.contains("popup-show")) {
      evt.preventDefault();
      popupBooking.classList.remove("popup-show");
    }
    if (popupMessage.classList.contains("popup-show")) {
      evt.preventDefault();
      popupMessage.classList.remove("popup-show");
      popupMessage.classList.remove("popup-error");
    }
  }
});