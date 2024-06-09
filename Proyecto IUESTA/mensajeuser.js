document.getElementById("men").addEventListener("submit", function(event){
	event.preventDefault()

var nom = document.getElementById("n").value;
var ema = document.getElementById("e").value;
var men = document.getElementById("m").value;

console.log("el usuario "+nom+" con la direccion de correo electrónico "+ema+" ha enviado el sigiente mensaje :"
+men );

});