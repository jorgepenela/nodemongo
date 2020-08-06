// armando un servidor (instaler express)
const express = require('express')
const http = require('http')  // dependencia de express
const app = express(); // metodo de express

app.get('/home',(request, response) =>{
	response.writeHead(200, {
		'Contet-type': 'text/plain' // esto se puede cambiar a HTML
	});
	response.end('<h1>Habemus Server<h1>');
})

app.listen(3000, (err) =>{
	console.log(err);
	console.log('aplicacion de ejemplo escuchando el puerto 3000')
})

