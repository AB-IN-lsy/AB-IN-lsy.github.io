var text_1 = 'Dear visitor, ',
text_2 = 'Sorry, this page does not exist or has been deleted. Please return to the home page or close this page';
repeat(text_1, 1);
setTimeout(function () {
  repeat(text_2, 2);
}, text_1.length * 100 + 1000);

function repeat(text, n) {
  var i = 0,
  repeatable = setInterval(function () {
    $('#text_' + n).text($('#text_' + n).text() + text[i]);
    i++;
    if (i >= text.length) {
      clearInterval(repeatable);
    }
  }, 100);
}
//# sourceURL=pen.js