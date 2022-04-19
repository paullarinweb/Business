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
