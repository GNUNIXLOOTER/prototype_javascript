// Vamos a crear un ejemplo...
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

// Obtener Tipo de Cliente
// Con prototypes tienes que utilizar function, function buscara en el mismo objeto mientras que un arrow function irá hacia la ventana global marcandote un undefined
Cliente.prototype.tipoCliente = function()  { 
    let tipo;
    if(this.saldo > 10000) {
        tipo = 'Gold';
    } else if(this.saldo > 5000) {
        tipo = 'Platinum';
    } else {
        tipo  = 'Normal';
    }
    return tipo;
}

// Otro Prototipo para el nombre completo
// en este caso puedo hacer un llamado a propiedades del objeto o a otros prototype
Cliente.prototype.nombreClienteSaldo = function()  {
    return `Nombre: ${this.nombre}, Saldo ${this.saldo}, Tipo Cliente:  ${this.tipoCliente()} `;
}

// prototype funcion para retirar saldo
Cliente.prototype.retiraSaldo = function(retiro)  {
    this.saldo -= retiro;
}

// Instanciarlo
const pedro = new Cliente('Pedro', 6000);


// Acceder a los prototypes
console.log ( pedro.tipoCliente() );

// Un prototype que accede a otros prototypes
console.log ( pedro.nombreClienteSaldo() );

// reescribir un valor
pedro.retiraSaldo(2000);

// comprobar saldo
console.log ( pedro.nombreClienteSaldo());
