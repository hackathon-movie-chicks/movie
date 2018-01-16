$(document).ready(function(){
  $('#buscar').on('click', function(){
    
    var texto = '';
    var tag = $('#b').val();
    $.getJSON('http://www.omdbapi.com/?apikey=3a181f1c&t=' + tag + '&plot=full&type=movie', function(datos){
      debugger;
      $.each(datos.r, function(i, r){
        texto = "<div class='cuadro'>";
        texto += "<img src='" + r.Title + "'/>";
        texto += "</div>";

      });
      $("#imagenes").html(texto);
    });
  })
});