document.getElementById('Form_pesoideal').addEventListener('submit' , function(event){
    event.preventDefault();

    const sexo = document.getElementById('sexo').value;
    const edad = parseInt(document.getElementById('edad').value);
    const pesoActual = parseFloat(document.getElementById('pesoActual').value);
    let estatura = parseFloat(document.getElementById('estatura').value);

    let pesoIdeal , imc , calificacion;

    if (sexo === 'Masculino'){
        pesoIdeal = estatura - 100 - ((estatura - 150) / 4);
    } else if (sexo === 'Femenino'){
        pesoIdeal = estatura - 100 - ((estatura - 150) / 2);
    } else {
        document.getElementById('resultado').innerHTML = '<div class="alert alert-danger">Seleccione su sexo</div>';
        return;
    }

    estatura = estatura / 100;
    imc = pesoActual / (estatura * estatura);

    switch (true) {
        case (imc < 18.5):
            calificacion = '<span class="badge text-bg-danger">Bajo peso</span>';
            break;
        case (imc >= 18.5 && imc < 24.9):
            calificacion = '<span class="badge text-bg-secondary">Peso normal</span>';
            break;
        case (imc >= 25 && imc < 29.9):
            calificacion = '<span class="badge text-bg-dark">Sobrepeso</span>';
            break;
        case (imc >= 30 && imc < 34.9):
            calificacion = '<span class="badge text-bg-danger">Obesidad grado 1</span>';
            break;
        case (imc >= 35.0 && imc < 39.9):
            calificacion = '<span class="badge text-bg-danger">Obesidad grado 2</span>';
            break;
        case (imc >= 40.0):
            calificacion = '<span class="badge text-bg-danger">Obesidad grado 3</span>';
            break;
        default:
            calificacion = ' valores no disponibles'       
    }

    document.getElementById('resultado').innerHTML =
        `<div class="alert alert-secondary" role="alert">
            <strong>Resultado:</strong><br>
            Edad: ${edad} años<br>
            Peso Actual: ${pesoActual} kg<br>
            Estatura: ${estatura * 100} cm<br>
            IMC: ${imc.toFixed(1)} tiene ${calificacion}<br>
            Peso Ideal: <span class="badge text-bg-info">${pesoIdeal.toFixed(1)} kg</span>
        </div>`;
})