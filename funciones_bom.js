function vibrar() {
	navigator.vibrate('200000000000000000');
}

function sos(){
	//VIBRACIÓN, SILENCIO,...
	navigator.vibrate(['300','100','300','100','300','100',
					   '700','100','700','100','700','100',
					   '300','100','300','100','300','100',]);
}

function detener(){
	navigator.vibrate('0');
}

function ubicar(){
	navigator.geolocation.getCurrentPosition(localizar);
}

function localizar(posicion){
	alert(posicion.coords.latitude);
	alert(posicion.coords.longitude);
}

function guardarLocal(){
	nombre = document.getElementById('nombre').value;
	// GUARDAR PERMANENTE
	//setItem(llave, valor)
	localStorage.setItem('miNombre', nombre);
}

function guardarSesion(){
	telefono = document.getElementById('telefono').value;
	//GUARDAR PERMANENTE
	sessionStorage.setItem('miTelefono', telefono);
}

function video(){
	//CAPTURAR EL ESPACIO PARA EL VIDEO
	lienzoVideo = document.getElementById('video');
	navigator.mediaDevices.getUserMedia({video:true}).
	then(function(imagen){
		lienzoVideo.srcObject=imagen;
	});
}