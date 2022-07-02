let input1 = document.getElementById('Numero1');
let input2= document.getElementById('Numero2');
let input3= document.getElementById('Numero3');
let input4=document.getElementById('Numero4');
let orden= document.getElementById('resultado');
let orden2= document.getElementById('resultado2');
const boton=document.getElementById('boton');

boton.addEventListener('click',function(){
  let numero1=parseInt(input1.value)
  let numero2=parseInt(input2.value)
  let numero3=parseInt(input3.value)
  let numero4=parseInt(input4.value)

  var numArray = new Float64Array([numero1, numero2, numero3,numero4]);
  if ((numero1>0 && numero2>0 && numero3>0 && numero4>0 && numero1 !== numero2 && numero1 !== numero3 && numero1 !== numero4 && numero2 !== numero3 && numero2 !== numero4 && numero3 !== numero4)){
    numArray = numArray.sort();
    console.log(numArray);
    orden.innerHTML = 'El menor valor es: '+numArray[0];
    orden2.innerHTML = 'El mayor valor es: '+numArray[3];
  } 
  else{
    orden.innerHTML = 'verifique que los numeros sean mayores a cero y sean distintos';
  }
  
 

//  if (CantidadMaterias >0 && tot>0){
//    let valorTotal=(tot-tot*descuento)+fijo
//    total.innerHTML = 'El valor total de la matricula es:'+ valorTotal.toFixed(2);
//    total2.innerHTML = 'la cantidad de materias a matricular es: '+ document.getElementById("CantidadMaterias").value;
//  }
//  else{
//  }
    //document.getElementById('resultado').value = tot;

});
