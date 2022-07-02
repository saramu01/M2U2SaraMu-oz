let input1 = document.getElementById('CantidadMaterias');
let total= document.getElementById('resultado')
let total2= document.getElementById('resultado2')
let nombre1=document.getElementById('NombreEstudiante')

const boton=document.getElementById('boton');

var boxes = "";

document.getElementById("CantidadMaterias").onchange = function() {
  boxes = "";
  var howmany = input1.value;
  for(i=0;i<howmany;i++) {
    boxes += '<b>valor de Materia ' + i + '</b> <input type="text" class= box id="box' + i + ' name="box' + i + ' /><br/>';
  }
  document.getElementById("cantidadValores").innerHTML = boxes;
};

boton.addEventListener('click',function(){
    var arr = document.getElementsByClassName('box');
    var descuento=0.2
    var fijo=28000
    var tot=0;
    let CantidadMaterias= parseInt(input1.value)
    for(var i=0;i<arr.length;i++){
        if(parseInt(arr[i].value))
            tot += parseInt(arr[i].value);
    }
    if (CantidadMaterias >0 && tot>0){
      let valorTotal=(tot-tot*descuento)+fijo
      total.innerHTML = 'El valor total de la matricula es:'+ valorTotal.toFixed(2);
      total2.innerHTML = 'la cantidad de materias a matricular es: '+ document.getElementById("CantidadMaterias").value;
    }
    else{
      total.innerHTML = 'Introduzca de manera correcta los valores';
    }
    //document.getElementById('resultado').value = tot;

});
