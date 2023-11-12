//agrega a la pantalla el valor del botón

function agregar (valor){
    document.getElementById("pantalla").value += valor
}

//borra los valores de pantalla
function borrar(){
    document.getElementById("pantalla").value = ""
}


function calcular(){
    const valorPantalla = document.getElementById("pantalla").value
    const resultado = eval(valorPantalla)
    document.getElementById("pantalla").value= resultado
}