const productos = [
{ nombre: "Laptop", precio: 1200000,
stock: 5 },
{ nombre: "Mouse", precio: 35000,
stock: 0 },
{ nombre: "Teclado", precio: 85000,
stock: 12 }
];
// Implementa estas funciones:
// 1. obtenerDisponibles(productos)
// 3 Productos con stock > 0
function obtenerDisponibles(productos) {
return productos.filter(producto => producto.stock > 0);
}
console.log(obtenerDisponibles(productos))


// 2. calcularInventario(productos)
// 3 Valor total del inventario
function calcularInventario(productos) {
return productos.reduce((total, producto) => total + (producto.precio * producto.stock), 0);
}
console.log(calcularInventario(productos))


// 3. aplicarDescuento(productos, porcentaje)
// 3 Reduce precios X%
function aplicarDescuento(productos, porcentaje) {
return productos.map(producto => ({
...producto,
precio: producto.precio * (1 - porcentaje / 100)
}));
}
console.log(aplicarDescuento(productos, 10))

// 4. ordenarPorPrecio(productos)
// 3 Array ordenado menor a mayor
function ordenarPorPrecio(productos) {
return productos.slice().sort((a, b) => a.precio - b.precio);
}
console.log(ordenarPorPrecio(productos))

