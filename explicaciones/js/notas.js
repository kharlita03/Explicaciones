var matematicas = parseFloat(prompt(" nota de matematicas "))
var español = parseFloat(prompt(" notas de español "))
var sociales = parseFloat(prompt(" nota de sociales "))
var promedio = (matematicas+español+sociales)/3

if (promedio == 10){
    console.log("el promedio es: "+promedio+" excelente ")
}
else{
    if (promedio >= 7){
        if(promedio < 10){
            console.log("el promedio es: "+promedio+" Bueno ")
        }
    }else{
        if (promedio < 7){
            console.log("el promedio es: "+promedio+" insuficiente ")
        }
    }
}
    

   
