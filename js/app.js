$(document).ready(begin());
function changingBlanks(tag) {
  var arrayTitle = [];
  var newText = [];
  for (var i = 0; i < tag.length; i++) {
    var num = tag.charCodeAt(i);
    arrayTitle.push(num);
  }
  for (var i = 0; i < arrayTitle.length; i++) {
    if (arrayTitle[i] === 32) {
      newText.push('+');
    } else {
      var letters = String.fromCharCode(arrayTitle[i]);
      newText.push(letters);
    }
  }
  newText = newText.join('');
  console.log(newText);
}
function begin() {
  $('#search').on('click', function() {
    var text = '';
    var tag = $('#input-search').val();
    changingBlanks(tag);
    $.getJSON('http://www.omdbapi.com/?apikey=3a181f1c&t=' + tag, function(data) {
      $.each(data, function(i, Poster) {
        if (i === 'Poster') {
          text += '<div class="cuadro">';
          text += '<img src="' + data.Poster + '"/>';
          text += '</div>';
        }
      });
      $('#container-images').html(text);
    });
  });
}
