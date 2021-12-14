class Producto {
    constructor(nombre, precio, stock, cantidadComprada) {

        this.nombre = nombre,
        this.precio = precio,
        this.stock = stock,
        this.cantidadComprada = cantidadComprada
    }

    controlStock(){
        if(this.cantidadComprada > this.stock){
            alert("No hay stock")
        }else{
            this.stock = this.stock - cantidadComprada;
            alert('Se vendieron ' + this.cantidadCompra + 'unidades y quedaron ' + this.stock +  'disponibles')
        }
    }

    
}


const producto1 = new Producto ("campera", 950, 30,15)


console.log(producto1);
producto1.controlStock();
console.log(producto1)