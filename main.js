function validarStock(cantidadDeStock, cantidadOrdenada){
    if(cantidadOrdenada > cantidadDeStock){
        alert("Disculpa no tenemos en stock");

    }else{
        alert("Felicidades compraste en El reino de la ternura");
    }

}

const ordenesDelUsuario = Number(prompt(`¿Cuantas remeras queres?`));
const stock = 25;

validarStock(stock,ordenesDelUsuario);