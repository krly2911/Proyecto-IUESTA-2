document.getElementById("mensajes").addEventListener("submit", function(event){
	event.preventDefault()

var nom = document.getElementById("nombre").value;
var ema = document.getElementById("email").value;
var men = document.getElementById("mensaje").value;

console.log("el administrado "+nom+" con la direccion de correo electrónico "+ema+" ha enviado el sigiente mensaje :"
+men );

});