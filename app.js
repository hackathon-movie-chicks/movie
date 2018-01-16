$(document).ready(function(){
  $('#buscar').on('click', function(){

    var texto = '';
    var tag = $('#b').val();
    $.getJSON('http://www.omdbapi.com/?apikey=3a181f1c&t=' + tag, function(datos){
      $.each(datos, function(i, Poster){
        if ( i === 'Poster') {
          texto += "<div class='cuadro'>";
          texto += "<img src='" + datos.Poster + "'/>";
          texto += "</div>";
        }
      });
      $("#imagenes").html(texto);
    });
  })
});
