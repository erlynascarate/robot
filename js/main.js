//comiensa el codigo de el primer dialogo
function primerDialogo(){
    let saludo=prompt("Hola. Ingrese algo aquí, no me saludara?");
    if(saludo.includes("Hola") || saludo.includes("hola")){
        let com=prompt("Como estas?");
        if(com.includes("bien") || com.includes("Bien")){
            let nose=prompt("Preguntame quien me creo");
            if(nose.includes("creo") || nose.includes("creó")){
                alert("La s3ñal se pierde");
                alert("REINICIANDO");
                segundoDialogo();
            }
        }else{
            alert('No me parece que escribiste "bien"');
        }
    }else{
        alert("No dijiste hola");
        primerDialogo();
    }
};
//termina el codigo de el primer dialogo


//comienza el sugundo dialogo
function segundoDialogo(){
    let saludo=prompt("Hola. Ingrese algo aquí, no me saludara?");
    if(saludo.includes("Hola") || saludo.includes("hola")){
        let com=prompt("Como estas?");
        if(com.includes("bien") || com.includes("Bien")){
            let nose=prompt("Preguntame quien me creo");
            if(nose.includes("creo") || nose.includes("creó")){
                alert("La s3ñal se pierde");
                alert("REINICIANDO");
                modoCalculadora();
            }
        }else{
            alert('No me parece que escribiste "bien"');
        }
    }else{
        alert("No dijiste hola");
        primerDialogo();
    }
};
//comienza el sugundo dialogo


//comienza el codigo de el modo carculadora
function modoCalculadora(){
    alert("Activando modo calculadora");
    alert("Hola, te enseñaré a usar esta calculadora no tan eficiente");
    let numb1=prompt("Deverás ingresar el primer número. Ejemplo:1, 2, 3, 4 ...32, 33 ... 53844920932, 53844920933 (Recuerdo muy bien los números)");
    let operador=prompt("Ahora deveras ingresar el operador. Quiero saber si quieres sumar, restar, multiplicar o dividir.");
    let numb2=prompt("Muy bien, ahora necesito el número que sumaras, restaras, multiplicaras o dividiras");

    if(operador.includes("sumar")){
        alert("Este es el resultado " + (parseInt(numb1) + parseInt(numb2)));
    }else{
        if(operador.includes("restar")){
            alert("Este es el resultado " + (parseInt(numb1) - parseInt(numb2)));
        }else{
            if(operador.includes("multiplicar")){
                alert("Este es el resultado " + (parseInt(numb1) * parseInt(numb2)));
            }else{
                if(operador.includes("dividir")){
                    alert("Este es el resultado " + (parseInt(numb1) / parseInt(numb2)));
                }
            }
        }
    }
};

primerDialogo();