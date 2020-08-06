const uuid = require('uuid')
const faker = require('Faker')
const moustache = require('moustache')

// probando exportar funciones
let aviso={
	id : uuid.v4(),
	producto: faker.commerce.productName(),
	precio : faker.commerce.price(),	
	vender : function(){		
		console.log('vendo '+ aviso.producto +' a $'+aviso.precio);
	}, 
}

aviso.vender()
module.exports = aviso;