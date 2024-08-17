$(document).ready(function () {
  // можно просто $(function(){});
  // $('#id'); // обращение по id
  // $('.pagecrm_crm-partners__link').css('border', 'solid 3px green'); добавляет к классу css свойство
  // $('.pagecrm_crm-partners__link-img').mouseenter(function () {
  //   $('.pagecrm_crm-partners__link-img').attr(src, '/images/arrow_shadowed.svg');
  // });
  // $('.pagecrm_application__select').styler();

  // подсветка кнопок svg при наведении

  $('.pagecrm_crm-partners__link-img').mouseenter(function () {
    $(this).attr('src', '/images/arrow_shadowed.webp');
  });
  $('.pagecrm_crm-partners__link-img').mouseleave(function () {
    $(this).attr('src', '/images/arrow_right.svg');
  });

  // Управление попапами

  $('.pagecrm_prices__btn').on('click', function () {
    $('.pagecrm_popup').addClass('pagecrm_popup_opened');
  });

  // Скрываем popup при клике вне popup
  $(document).on('click', function (event) {
    let $target = $(event.target);

    if (!$target.closest('.pagecrm_popup__form').length && !$target.is('.pagecrm_prices__btn')) {
      $('.pagecrm_popup').removeClass('pagecrm_popup_opened');
    }
  });
});
