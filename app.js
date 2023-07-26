//Declaramos la lista de mis productos a seleccionar
const productos = [ 
    {nombre: "mouse", precio:800},
    {nombre: "teclado", precio:1000},
    {nombre: "auriculares", precio:1500},
    {nombre: "monitor", precio:3000},
];

//Declaro el array al cual se le van a sumar esos productos, es decir mi carito
let carrito = []

//Inicio el programa donde el usuario debe seleccionar entre comprar o no
let respuesta = prompt("Bienvenido al carrito de compras, ¿quieres comprar alguno de nuestros productos?")

//Ciclo while para que el el mensaje aparezca nuevamente si reponde otra cosa que no sea SI O NO
while(respuesta != "si" && respuesta != "no"){
    alert("Debes elegir entre si o no")
    respuesta = prompt ("Dime si deseas comprar algo, con una respuesta de si o no")
}

//Se declara un if para ambas respuestas, si es si, se recorre el array con un 
//.map para mostrar los productos y los precios del array Productos
if(respuesta == "si"){
    alert("¡Estos son nuestros productos al momento!")
    let nuestrosProductos = productos.map(
        (producto) => producto.nombre + " " + producto.precio + "$" );
        alert(nuestrosProductos.join("\n"))
}else if(respuesta == "no"){
    alert("¡Gracias, nos vemos pronto!")
}

while(respuesta != "no"){
    let producto = prompt("Agrega el producto que mas te guste")
    let precio = 0

    if(producto == "mouse" || producto == "teclado" || producto == "auriculares" || producto == "monitor"){
        switch (producto) {
            case "mouse":
            precio = 800;
            break;

            case "teclado":
            precio = 1000;
            break;

            case "auriculares":
            precio = 1500;
            break;

            case "monitor":
            precio = 3000;
            break;
            default:
            break;
        }//Aqui hacemos un push todo a nuestro array de carrito y lo mostramos por consola
        let cantidad = parseInt(prompt("¿Cuantas cantidades quieres?"))
        carrito.push({producto, cantidad, precio})
        console.log(carrito); //Declaramos un else if para que si el usuario ingresa un string distinto a los productos le salte el siguiente mensaje
    } else if(respuesta != "mouse" || respuesta != "teclado" || respuesta != "auriculares" || respuesta != "monitor"){
    alert("Lo siento, no encontramos ese producto dentro de nuestra lista de productos")
}

//Le volvemos a preguntar al usuario si quiere seguir comprndo para que pueda volver a elegir el producto y la cantidad
respuesta = prompt("¿Deseas seguir comprando? (responde 'si' o 'no')");
if (respuesta === "no") {
  if (carrito.length > 0) {
    alert("Contenido actual del carrito:");
    carrito.forEach((item, index) => {
      alert(`${index + 1}. ${item.producto} - Cantidad: ${item.cantidad} - Precio unitario: ${item.precio}$`);
    });

    let quitarProducto = prompt("¿Deseas quitar algún producto del carrito? (responde 'si' o 'no')");

    while (quitarProducto === "si") {
      let indiceQuitar = parseInt(prompt("Ingresa el número del producto que deseas quitar (1, 2, 3, etc.):"));
      if (!isNaN(indiceQuitar) && indiceQuitar >= 1 && indiceQuitar <= carrito.length) {
        carrito.splice(indiceQuitar - 1, 1);
        alert("Producto eliminado del carrito.");
      } else {
        alert("Opción inválida. No se ha eliminado ningún producto.");
      }
      quitarProducto = prompt("¿Deseas quitar algún producto más? (responde 'si' o 'no')");
    }
  }

  alert("¡Gracias, nos vemos pronto!");
}
}

//Aqui multiplicamos la cantidad por el precio para poder tener un precio total a pagar y mostramos ese total por consola

const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)
console.log(`El total a pagar por su compra es: ${total}`);