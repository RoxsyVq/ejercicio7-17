function calcular(){
    var va=document.getElementById("a").value;
    var vb=document.getElementById("b").value;
    var salida=document.getElementById("salida");
    var vnegativo=document.getElementById("negativo").value;
    
    
    if(vnegativo=="2"){
        if(va<0 && vb>0){
            salida.innerHTML="1";
        }
        else{
         salida.innerHTML="0";
     }
    }
    if(vnegativo=="1"){
        if(va<0 && vb<0){
            salida.innerHTML="1";
        }
        else{
         salida.innerHTML="0";
     }
    }
     
}