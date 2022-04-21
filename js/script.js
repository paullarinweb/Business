function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

// loader
window.onload = function () {
  $(".loader").addClass("remove");
};

// popups
$(".mearch__cards").magnificPopup({
  delegate: "a",
  type: "image",
});

$(document).ready(() => {
  // DOM готов к взаимодейтсвию
  const onScrollHeader = () => {
    // объявляем основную функцию onScrollHeader
    const header = $(".header"); // находим header и записываем в константу
    let prevScroll = $(window).scrollTop(); // узнаем на сколько была прокручена страница ранее
    let currentScroll; // на сколько прокручена страница сейчас (пока нет значения)
    $(window).scroll(() => {
      // при прокрутке страницы

      currentScroll = $(window).scrollTop(); // узнаем на сколько прокрутили страницу

      const headerHidden = () => header.hasClass("white"); // узнаем скрыт header или нет

      if (currentScroll > prevScroll && !headerHidden()) {
        // если прокручиваем страницу вниз и header не скрыт
        header.addClass("white"); // то скрываем header
      }
      if (currentScroll <= 0) {
        // если прокручиваем страницу вверх и header скрыт
        header.removeClass("white"); // то отображаем header
      }

      prevScroll = currentScroll; // записываем на сколько прокручена страница на данный момент
    });
  };

  onScrollHeader(); // вызываем основную функцию onScrollHeader
});

// popups

// Sing in
let popup1 = $().popup({
  title: "Sing in",
  content:
    '<div class="popup"><form class="popup-form" method="post"><div class="popup-form-div"><label for="text">Full name:</label><input type="text" name="text" id="text" placeholder="Enter your name here..."></div><div class="popup-form-div"><label for="email">Email:</label><input type="email" name="email" id="email" placeholder="Enter your email here..."></div><div class="popup-form-div"><label for="password">Password:</label><input type="password" name="password" id="password" placeholder="Enter your password here..."></div><input class="popup-submit" type="submit" value="Sing in"></form></div>',
});
// Sing up
let popup2 = $().popup({
  title: "Sing up",
  content:
    '<div class="popup"><form class="popup-form" method="post"><div class="popup-form-div"><label for="email">Email:</label><input type="email" name="email" id="email" placeholder="Enter your email here..."></div><div class="popup-form-div"><label for="password">Password:</label><input type="password" name="password" id="password" placeholder="Enter your password here..."></div><input class="popup-submit" type="submit" value="Sing up"></form></div>',
});

// burger
$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger, .header__menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
