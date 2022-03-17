const carritos = [
    {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true
    },
    {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true
    },
    {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: false
    },
    {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: false
    }
   ];

   

console.log ("--------- EJERCICIO 1 - MOSTRAR CARRITOS ---------")

for (carrito of carritos){ //por cada carrito de carritos
    imprimir(carrito);      //le doy cada carrito al parámetro de la función imprimir
}

function imprimir(pedido){
    for (propiedad in pedido){ //pedido es el parámetro que despues asignamos en el for de arriba con imprimir(carrito)
        console.log(propiedad + ":" + pedido[propiedad]);
    }
    console.log("---------");
}



console.log ("--------- EJERCICIO 2 - LISTAR PRODUCTOS ---------")

for (carrito of carritos){
    
    console.log ("Producto: " + carrito.name);
}

console.log ("--------- EJERCICIO 3 - ELIMINAR PRODUCTO ---------")


var eliminarProducto = carritos.splice(2, 1);

for (carrito of carritos){
    console.log(carrito.id);
}

console.log ("--------- EJERCICIO 4 - CALCULAR TOTAL ---------")

for(carrito of carritos){
    var precioTotal = carrito.price + carrito.count;
    console.log (carrito.name + ": " +precioTotal);
}

console.log ("--------- EJERCICIO 5 - FILTRAR PRODUCTOS PRIME ---------")

for (carrito of carritos){
    if(carrito.premium) console.log(carrito.name + " es premium");
}

// METERLO TODO EN UN HTML

for (carrito of carritos){
    añadir(carrito);
}
 
function añadir(producto){
    var elemento = "<p>" + carrito.name + "</p>";
    document.getElementById("nombre").insertAdjacentHTML('beforeend', "<p>" + carrito.name + "</p>");
    document.getElementById("cantidad").insertAdjacentHTML('beforeend', "<p>" + carrito.count + "</p>");
    document.getElementById("precio").insertAdjacentHTML('beforeend', "<p>" + carrito.price + "</p>");
    if (carrito.premium) {
    document.getElementById("prime").insertAdjacentHTML('beforeend', "<p>" + "Gastos de envío gratis" + "</p>");
    } else {document.getElementById("prime").insertAdjacentHTML('beforeend', "<p>" + "Tiene gastos de envío" + "</p>");}
    var precioTotalProducto = carrito.price * carrito.count;
    if( precioTotalProducto > 50 ){
        var descuento =  precioTotalProducto - (5/100);
        document.getElementById("total").insertAdjacentHTML('beforeend', "<p>" + descuento + " (5% descontado)" + "</p>");
    } else {
        document.getElementById("total").insertAdjacentHTML('beforeend', "<p>" + precioTotalProducto + "</p>");
    }
}

    


