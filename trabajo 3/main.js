const saludarUsuario = (nombre, apellido) => {
    alert("¡Bienvenido/a a la tienda, " + nombre + " " + apellido + "!");
};
function mostrarMenu() {
    return prompt("Seleccioná un producto para agregar al carrito:\n1. Zapatillas ($50000)\n2. Remera ($20000)\n3. Buzo ($35000)\n4. Finalizar compra");
}
function sumarAlCarrito(subtotalActual, precioProducto) {
    return subtotalActual + precioProducto;
}
function mostrarResumenCompra(montoTotal) {
    if (montoTotal > 0) {
        alert("¡Gracias por tu compra! El total a pagar es: $" + montoTotal);
        console.log("Total final abonado: $" + montoTotal);
    } else {
        alert("No agregaste ningún producto al carrito.");
    }
}
const nombre = prompt("Ingresá tu nombre:");
const apellido = prompt("Ingresá tu apellido:");
saludarUsuario(nombre, apellido);
let total = 0;
let seguirComprando = true;
while (seguirComprando) {
    const opcion = mostrarMenu();
    switch (opcion) {
        case "1":
            total = sumarAlCarrito(total, 50000);
            alert("Agregaste Zapatillas. Subtotal: $" + total);
            break;
        case "2":
            total = sumarAlCarrito(total, 20000);
            alert("Agregaste una Remera. Subtotal: $" + total);
            break;
        case "3":
            total = sumarAlCarrito(total, 35000);
            alert("Agregaste un Buzo. Subtotal: $" + total);
            break;
        case "4":
            seguirComprando = false;
            break;
        default:
            alert("Opción no válida. Por favor, elegí un número del 1 al 4.");
            break;
    }
}
mostrarResumenCompra(total);