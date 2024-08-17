$(document).ready(function () {
  $('.pagecrm_select').each(function () {
    const _this = $(this),
      selectOption = _this.find('option'),
      selectOptionLength = selectOption.length,
      selectedOption = selectOption.filter(':selected'),
      duration = 150; // длительность анимации

    _this.hide();
    if (_this.hasClass('pagecrm_select_service')) {
      _this.wrap('<div class="pagecrm_select pagecrm_select_service"></div>');
    } else {
      _this.wrap('<div class="pagecrm_select"></div>');
    }

    $('<div>', {
      class: 'pagecrm_select__new-select',
      text: _this.children('option:disabled').text()
    }).insertAfter(_this);

    const selectHead = _this.next('.pagecrm_select__new-select');
    $('<div>', {
      class: 'pagecrm_select__new-select__list'
    }).insertAfter(selectHead);

    const selectList = selectHead.next('.pagecrm_select__new-select__list');
    for (let i = 1; i < selectOptionLength; i++) {
      $('<div>', {
        class: 'pagecrm_select__new-select__item',
        html: $('<span>', {
          text: selectOption.eq(i).text()
        })
      })
        .attr('data-value', selectOption.eq(i).val())
        .appendTo(selectList);
    }

    const selectItem = selectList.find('.pagecrm_select__new-select__item');
    selectList.slideUp(0);

    selectHead.on('click', function (e) {
      e.stopPropagation(); // Останавливаем распространение клика

      if (!$(this).hasClass('on')) {
        $('.pagecrm_select__new-select').removeClass('on');
        $('.pagecrm_select__new-select__list').slideUp(duration);

        $(this).addClass('on');
        selectList.slideDown(duration);

        selectItem.on('click', function () {
          let chooseItem = $(this).data('value');

          _this.val(chooseItem).attr('selected', 'selected');
          selectHead.text($(this).find('span').text());

          selectList.slideUp(duration);
          selectHead.removeClass('on');
        });
      } else {
        $(this).removeClass('on');
        selectList.slideUp(duration);
      }
    });

    // Обработчик для закрытия списка при клике вне его области
    $(document).on('click', function (e) {
      if (
        !$(e.target).closest('.pagecrm_select__new-select, .pagecrm_select__new-select__list')
          .length
      ) {
        $('.pagecrm_select__new-select').removeClass('on');
        $('.pagecrm_select__new-select__list').slideUp(duration);
      }
    });
  });
});
