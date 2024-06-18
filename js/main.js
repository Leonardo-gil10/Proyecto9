function promocion(){
     //Obtener los valores seleccionados y los numeros ingresados 
      const n_zapatos = parseInt(document.getElementById("n_zapatos").value);
      const pzapatos = parseInt(document.getElementById("pzapatos").value);
    let resultado;
      if (n_zapatos < 10) {
        resultado= "Esta cantidad NO tiene descuento";
      } else {
        let descuento;
        if (n_zapatos >= 10 && n_zapatos < 20) {
            descuento = pzapatos * 0.1;
            resultado = "Obtuvo un descuento del 10%, es de " + descuento + " de descuento";
        } else if (n_zapatos >= 20 && n_zapatos < 30) {
            descuento = pzapatos * 0.2;
            resultado = "Obtuvo un descuento del 20%, es de " + descuento + " de descuento";
        } else if (n_zapatos >= 30) {
            descuento = pzapatos * 0.4;
            resultado = "Obtuvo un descuento del 40%, es de " + descuento + " de descuento";
        } else {
            resultado = "Por favor ingrese una cantidad de zapatos";

        }
    }

    document.getElementById('resultadoApp1').innerHTML=resultado;


}
    

function calcular_imc(){
    const peso = parseInt(document.getElementById("peso").value)
    const estatura = parseFloat(document.getElementById("estatura").value)
    let resultado;
    let imc= peso / (estatura*estatura); 
  if (imc < 18.5){
    resultado = "Bajo peso"
    document.getElementById('resultadoApp2').innerHTML= `<div class="alert  alert-warning  " role="alert">Su imc es de: ${resultado}<i class="bi bi-emoji-frown"></i> </div>`;
    } 
    else if (imc>=18.5 && imc < 25){
    resultado = "Peso normal"
    document.getElementById('resultadoApp2').innerHTML= `<div class="alert  alert-success  " role="alert">Su imc es de: ${resultado}<i class="bi bi-emoji-smile"></i></div>`;
    }
    else if (imc>=25 && imc < 30){
      resultado= "Sobrepeso"
      document.getElementById('resultadoApp2').innerHTML= `<div class="alert  alert-warning  " role="alert">Su imc es de:${resultado}<i class="bi bi-emoji-frown"></i></div>`;
      }
      else if (imc>= 30 && imc < 35){
      resultado = "Obesidad tipo I"
      document.getElementById('resultadoApp2').innerHTML= `<div class="alert  alert-danger  " role="alert">Su imc es de: ${resultado}<i class="bi bi-emoji-frown"></i></div>`;
      }
      else if (imc>=35 && imc < 40){
        resultado = "Obesidad tipo II"
        document.getElementById('resultadoApp2').innerHTML= `<div class="alert  alert-danger  " role="alert">Su imc es de: ${resultado}<i class="bi bi-emoji-frown"></i></div>`;
      }
      else if (imc>=40) { 
      resultado = "Obesidad tipo III"
      document.getElementById('resultadoApp2').innerHTML= `<div class="alert  alert-danger  " role="alert">Su imc es de: ${resultado}<i class="bi bi-r-circle-fill"></i> </div>`;
      }
      else {
      
        resultado = "Por favor ingrese los datos esperados";
      }
    
}



function presion_arterial(){
  const presion = parseInt(document.getElementById("presion").value)
    let resultado;

  if (presion < 90){
    resultado = "Baja"
    document.getElementById('resultadoApp3').innerHTML= `<div class="alert  alert-info " role="alert"><i class="bi bi-emoji-frown"></i> ${resultado} </div>`;
      } else if (presion>=90 && presion < 120){
        resultado = "normal"
        document.getElementById('resultadoApp3').innerHTML= `<div class="alert  alert-success " role="alert"><i class="bi bi-emoji-smile"></i> ${resultado} </div>`;
      }
      else if (presion>=120 && presion < 139){
        resultado= "Prehipertencion"
        document.getElementById('resultadoApp3').innerHTML= `<div class="alert  alert-warning  " role="alert"><i class="bi bi-emoji-frown"></i> ${resultado} </div>`;
      }else if (presion>= 139 && presion <159){
        resultado = "Hipertencion fase 1"
        document.getElementById('resultadoApp3').innerHTML= `<div class="alert  alert-danger  " role="alert"><i class="bi bi-emoji-frown"></i> ${resultado} </div>`;
      }else if (presion>=160) {
    resultado = "Hipertencion fase 2"
    document.getElementById('resultadoApp3').innerHTML= `<div class="alert  alert-danger  " role="alert"><i class="bi bi-emoji-frown"></i> ${resultado} </div>`;
  }else {
    resultado = "Por favor ingrese los datos esperados";

  }
  
}


function edad_(){
  const edad = parseInt(document.getElementById("edad").value)
    let resultado;

  if (edad <= 12){ 
    resultado = "Eres un niño";
    document.getElementById('resultadoApp4').innerHTML= `<div class="alert  alert-warning" role="alert"> ${resultado} </div>`;
      } else if (edad>12 && edad <= 40){
        resultado = "Eres un joven"
      }
        else if (edad>40 && edad <= 60){
        resultado= "Eres un adulto"
        alerta= 'alert-warning' ;
      }else if (edad>60) {
    resultado = "Eres un adulto mayor";
    alerta= 'alert-danger' ;
  }else {
    resultado = "Por favor ingrese su edad ";

  }
  document.getElementById('resultadoApp4').innerHTML= `<div class="alert  alert-warning" role="alert"> ${resultado} </div>`;
}



