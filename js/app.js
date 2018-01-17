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
  //  console.log(newText);
}
function begin() {
  $('#search').on('click', function() {
    $('#information').empty();
    var imgMovie = '';
    var tag = $('#input-search').val();
    changingBlanks(tag);
    var tittleOne = '';
    $.getJSON('http://www.omdbapi.com/?apikey=3a181f1c&s=' + tag + '&type=movie', function(data) {
      tittleOne = data.Search[0].imdbID;
      console.log(tittleOne);

      /*  var keys = Object.keys(data);
      for (var i = 0; i < keys.length; i++) {
        if (i === 2 || i === 13 || i === 14 || i === 15 || i === 16 || i === 17 || i === 18 || i === 19 || i === 20 || i === 21 || i === 24) {
          i++;
        }
        $('#information').append(
          '<p>' + Object.keys(data)[i] + ':' + data[keys[i]] + '</p>'
        );
      }*/
      $.each(data, function(i, Poster) {
        if (i === 'Poster') {
          imgMovie += '<div class="cuadro">';
          imgMovie += '<img src="' + data.Poster + '"/>';
          imgMovie += '</div>';
        }
      });
      $('#container-images').html(imgMovie);
      //  console.log(data.length);

      //  var keys = Object.keys(data);
      //  console.log(data[keys[13]]);
      //  console.log(keys[13]);
      //  console.log(Object.keys(data)[0]);
      console.table(data);
    });
    $.getJSON('http://www.omdbapi.com/?apikey=3a181f1c&i=' + tittleOne + '&type=movie', function(dataDos) {
      var keys = Object.keys(dataDos);
      console.log(dataDos);
      console.log(Object.keys(dataDos)[2]);
      console.log(dataDos[keys[2]]);
    });
    $('#input-search').val('');
  });
}
