$(document).ready(begin());
function begin() {
  $('#search').on('click', function() {
    var text = '';
    var tag = $('#input-search').val();
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
