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
    var imgMovie = '';
    var tag = $('#input-search').val();
    changingBlanks(tag);
    $.getJSON('http://www.omdbapi.com/?apikey=3a181f1c&t=' + tag, function(data) {
      var keys = Object.keys(data);
      for (var i = 0; i < keys.length; i++) {
        if (i === 2 || i === 13 || i === 14 || i === 15 || i === 16 || i === 17 || i === 18 || i === 19 || i === 20 || i === 21 || i === 24) {
          i++;
        }
        $('#information').append(
          '<p>' + Object.keys(data)[i] + ':' + data[keys[i]] + '</p>'
        );
      }
      $.each(data, function(i, Poster) {
        if (i === 'Poster') {
          imgMovie += '<div class="cuadro">';
          imgMovie += '<img src="' + data.Poster + '"/>';
          imgMovie += '</div>';
        }
      });
      $('#container-images').html(imgMovie);
      console.log(data.length);

      var keys = Object.keys(data);
      console.log(data[keys[13]]);
      console.log(keys[13]);
      console.log(Object.keys(data)[0]);
      console.table(data);
    });
  });
}
