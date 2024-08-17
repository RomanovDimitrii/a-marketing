$(document).ready(function () {
  // подсветка кнопок svg при наведении

  $('.pagecrm_crm-partners__link-img').mouseenter(function () {
    $(this).attr('src', '/images/arrow_shadowed.webp');
  });
  $('.pagecrm_crm-partners__link-img').mouseleave(function () {
    $(this).attr('src', '/images/arrow_right.svg');
  });

  // Управление попапами
  // попап отправить контакт
  $('.pagecrm_prices__btn').on('click', function () {
    $('.pagecrm_popup').addClass('pagecrm_popup_opened');
  });

  // Скрываем popup при клике вне popup
  $(document).on('click', function (event) {
    let $target = $(event.target);
    // для попап заказ звонка
    if (!$target.closest('.pagecrm_popup__form').length && !$target.is('.pagecrm_prices__btn')) {
      $('.pagecrm_popup').removeClass('pagecrm_popup_opened');
    }
    // для попап меню
    if (!$target.closest('.pagecrm_nav-block__burger, #popup_menu').length) {
      $('#popup_menu').removeClass('show'); // Скрыть меню
    }
  });
  // попап бургер
  $('.pagecrm_nav-block__burger').on('click', function (e) {
    e.stopPropagation(); // Остановить распространение события клика
    $('#popup_menu').toggleClass('show'); // Показать или скрыть меню
  });

  // Остановка распространения события клика на элементы внутри меню
  $('#popup_menu').on('click', function (e) {
    e.stopPropagation(); // Остановить распространение события клика внутри меню
  });
});
