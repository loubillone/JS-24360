class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }
}

const producto1 = new Producto ("remera", 150, 100);
const producto2 = new Producto ("pantalon", 200, 15);

const producto3 = { nombre: "camisa", precio: 200, stock: 30 };
const array   = [producto3, { nombre: "zapatilla", precio: 350, stock: 40 }];
array.push({ nombre: "calza", precio: 250, stock: 20});

console.log(array);

let cantidadProductos = prompt("Cuantos productos desea comprar?");
let precioFinal = 0;

for(let i = 1; i <= cantidadProductos; i++){

    let compra = prompt("Ingrese el nombre de su producto");
    let cantidad = prompt("Cuantos quiere comprar?")

    if(compra == producto1){
        if(cantidad <=stock){
            stock -= cantidad;
            let precioTotal = precio*cantidad
            if(precioTotal >200){
            precioTotal = precioTotal *0.9
            }

        precioFinal += precioTotal

    }else{

        alert("No tenemos esa cantidad")
    }

}else if(compra == producto2){

    stock -= cantidad;
    let precioTotal2 = precio*cantidad
    if(precioTotal2 >1000){
        precioTotal2 = precioTotal2 *0.9
    }
    else if(precioTotal2 > 2000){

        precioTotal2 = precioTotal2 *0.8

    }

    precioFinal += precioTotal2

  
}else {

    alert("No contamos con ese producto")
}


}

alert("El precio final es de: " + precioFinal)

let pago = prompt ("Ingrese con cuanto dinero va a pagar");
let vuelto = pago - precioFinal;

alert("Este es su vuelto " + vuelto);