var cantidad = parseFloat(prompt(" cantidad de unidades "))
var TotalaPagar = 100000



 if(cantidad <5){
    console.log(" Descuento del 10% ")
    TotalaPagar = TotalaPagar-(TotalaPagar*0.1)
    console.log( " Total a pagar con descuento "+TotalaPagar)
 }

 else{
    if(cantidad >=5){
        if( cantidad <10){
            console.log(" Descuento del 20% ")
            TotalaPagar = TotalaPagar*20%-TotalaPagar
    console.log( " Total a pagar con descuento "+TotalaPagar)
        }else{
            if( cantidad >=10)
            console.log(" si es mayor o igual 40%")
            TotalaPagar = TotalaPagar*40%-TotalaPagar
    console.log( " Total a pagar con descuento "+TotalaPagar)
        }
    
    }
 }

 
 