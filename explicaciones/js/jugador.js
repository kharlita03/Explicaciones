var altura = parseFloat(prompt(" ingresa tu altura "))
var velocidad = parseFloat(prompt(" ingresa velocidad "))
var edad = parseFloat(prompt(" ingresa tu edad "))

if (altura >= 175){
    if (velocidad >= 100) {
        if (edad <18)
        console.log(" si cumple altura tiene oportunidad de pasar ")
        console.log(" ingresa a la liga de menores ")
    }
}else{ 
    if(altura <175){
        console.log(" No ingresa al equipo ")
    }
}