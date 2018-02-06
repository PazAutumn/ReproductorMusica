$(document).ready(function(){
	var titulo = $('#titulo');
	var texto = $('#portada').attr('alt');
	console.log(texto);
	$(titulo).append(texto);
	$(titulo).addClass('cancion');
})