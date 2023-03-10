var fresas = parseInt(prompt("Precio de la fresas = 500, Digita la cantidad de fresas"))
var cantidadTotalfresas = 0
var piñas = parseInt(prompt("Precio de la piñas = 1500, Digita la cantidad de piñas"))
var cantidadTotalPiñas = 0
var papayas = parseInt(prompt(" Precio de la papayas = 1000, Digita la cantidad de papayas "))
var cantidadTotalPapayas = 0
var mangos = parseInt(prompt(" Precio de la mangos = 700, Digita la cantidad de mangos "))
var cantidadTotalMangos = 0
var patillas  = parseInt(prompt(" Precio de la patillas = 2000, Digita la cantidad de patillas "))
var cantidadTotalPatillas = 0
var melones = parseInt(prompt(" Precio de la melones = 1800, Digita la cantidad de melones "))
var cantidadTotalMelones = 0
var total = 0
var tFrutas = 0

if(fresas>=0){
    cantidadTotalfresas=fresas*500
}if(piñas>=0){
    cantidadTotalPiñas=piñas*1500
}if(papayas>=0){
    cantidadTotalPapayas=papayas*1000
}if(mangos>=0){
    cantidadTotalMangos=mangos*700
}if(patillas>=0){
    cantidadTotalPatillas=patillas*2000
}if(melones>=0){
    cantidadTotalMelones=melones*1800
}

total= cantidadTotalfresas+cantidadTotalPiñas+cantidadTotalPapayas+cantidadTotalMangos+cantidadTotalPatillas+cantidadTotalMelones+tFrutas
totalCompra = total + tFrutas

alert(" El valor total de tu compra es : " + totalCompra + " $ " )






