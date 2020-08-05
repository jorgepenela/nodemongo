// probando exportar funciones
let saludador={
	nombre: ['jorge','ceci','dami','agustin','milagros'],
	hola : ()=>{
		console.log('hola '+saludador.nombre)
	}, 
}

module.exports = saludador;