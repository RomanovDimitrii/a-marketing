$(document).ready(function () {
  function mask(e) {
    let matrix = $(this).attr('placeholder'), // Получаем плейсхолдер
      i = 0,
      def = matrix.replace(/\D/g, ''),
      val = $(this).val().replace(/\D/g, '');
    def.length >= val.length && (val = def);
    matrix = matrix.replace(/[_\d]/g, function (a) {
      return val.charAt(i++) || '_';
    });
    $(this).val(matrix);
    i = matrix.lastIndexOf(val.substr(-1));
    i < matrix.length && matrix !== $(this).attr('placeholder') ? i++ : (i = matrix.indexOf('_'));
    setCursorPosition(i, this);
  }

  function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
    else if (elem.createTextRange) {
      let range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  }

  $('#online_phone, #online_phone1').on('input', mask);
});
