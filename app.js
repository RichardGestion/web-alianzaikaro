//base de datos local de preguntas
const bd_juego = [
    {
        id:0,
        pregunta:"¿Enfoque sistemático para la gestión de la seguridad operacional?",
        op0:"SMS.",
        op1:"Seguridad Operacional.",
        op2:"Gestion de Seguridad.",
        correcta:"0"
    },
    {
        id:1,
        pregunta:"¿Estado en el que los riesgos, se reducen y controlan a un nivel aceptable?",
        op0:"Seguridad.",
        op1:"Seguridad Operacional.",
        op2:"SMS.",
        correcta:"1"
    },
    {
        id:2,
        pregunta:"¿Cualquier condición potencial que pueda ocasionar lesiones o muertes?",
        op0:"Peligro.",
        op1:"Riesgo.",
        op2:"Accidente.",
        correcta:"0"
    },
    {
        id:3,
        pregunta:"¿La probabilidad y severidad previstas para las consecuencias de un peligro?",
        op0:"Riesgo.",
        op1:"Peligro.",
        op2:"Incidente.",
        correcta:"0"
    },
    {
        id:4,
        pregunta:"¿Cualquier ocurrencia, que no llegue a ser un accidente?",
        op0:"Riesgo.",
        op1:"Peligro.",
        op2:"Incidente.",
        correcta:"2"
    },
    {
        id:5,
        pregunta:"¿Conjunto de acontecimientos negativos que pueden permanecer en estado latente?",
        op0:"Peligro.",
        op1:"Condicion latente.",
        op2:"Riesgo.",
        correcta:"1"
    },
    {
        id:6,
        pregunta:"¿Para que utilizamos el Reporte Voluntario de Peligro Confidencial y no punitivo?",
        op0:"Para reportar los Incidentes y/o Accidentes.",
        op1:"Para Reportar todo suceso y/o evento ocurrido.",
        op2:"Para identificar peligros que aún no han ocurrido.",
        correcta:"2"
    },
    {
        id:7,
        pregunta:"¿Para que utilizamos el Reporte Obligatorio de Suceso y/o Incidente?",
        op0:"Para Reportar todo suceso y/o evento ocurrido.",
        op1:"Para identificar peligros que aún no han ocurrido.",
        op2:"Para reportar de manera confidencial los eventos.",
        correcta:"0"
    },
    {
        id:8,
        pregunta:"¿Cuantas habilitaciones tiene Alianza Ikaro?",
        op0:"3.",
        op1:"2.",
        op2:"1.",
        correcta:"0"
    },
    {
        id:9,
        pregunta:"¿Bajo que RAV se rige Alianza Ikaro?",
        op0:"RAV-108.",
        op1:"RAV-112.",
        op2:"RAV-111.",
        correcta:"2"
    },
    {
        id:10,
        pregunta:"¿Bajo que RAV se rige el SMS?",
        op0:"RAV-6.",
        op1:"RAV-5.",
        op2:"RAV-4.",
        correcta:"1"
    },
    {
        id:11,
        pregunta:"¿Cuantos elementos tiene el SMS?",
        op0:"11.",
        op1:"12.",
        op2:"4.",
        correcta:"1"
    },
    {
        id:12,
        pregunta:"¿Cuantos componentes tiene el SMS?",
        op0:"11.",
        op1:"5.",
        op2:"4.",
        correcta:"2"
    }
]

//para guardar las respuestas elegidas
let respuestas = [];
//cantidad correctas
let cantiCorrectas = 0;
//pregunta acutal que debe ser cargada
let numPregunta = 0;

//Cargo una pregunta del JSON
function cargarPreguntas(){
    //tomo la pregunta actual de la bd
    const pregunta = bd_juego[numPregunta];

    const contenedor = document.createElement("div");
    contenedor.className = "contenedor-pregunta";
    contenedor.id = pregunta.id;
    const h2 = document.createElement("h2");
    h2.textContent = pregunta.id + 1 + " - " + pregunta.pregunta;
    contenedor.appendChild(h2);
    const opciones = document.createElement("div");

    //vamos a crear los tres labels
    //Lo vamos a hacer mediante una funciòn.
    // A dicha función le envio el numero de label y la opcion
    // el texto, de dicho label
    const label1 = crearLabel("0",pregunta.op0);
    const label2 = crearLabel("1",pregunta.op1);
    const label3 = crearLabel("2",pregunta.op2);

    //agrego los labels al contendor de las opciones
    opciones.appendChild(label1);
    opciones.appendChild(label2);
    opciones.appendChild(label3);

    //agrego las opciones al contenedor principal
    contenedor.appendChild(opciones);
    document.getElementById("juego").appendChild(contenedor);
}

//creo la funciòn que que retornará el label con todo su contenido
function crearLabel(num, txtOpcion){
    const label = document.createElement("label");
    label.id = "l" + numPregunta + num;
    const input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.name = "p" + numPregunta;
    input.setAttribute("onclick", "seleccionar(" + numPregunta+","+num+")");
    const span = document.createElement("span");
    const correccion = document.createElement("span");
    correccion.id = "p" + numPregunta + num;
    span.textContent = txtOpcion;
    label.appendChild(input);
    label.appendChild(span);
    label.appendChild(correccion);

    return label;
}

//Mediante un for cargo todas las preguntas del JSON
for(i=0;i < bd_juego.length;i++){
    cargarPreguntas();
    //actualizo el numero de pregunta actual
    numPregunta++;
}

//Función que carga la opción elegida en el arreglo respuestas.
function seleccionar(pos, opElegida){
    respuestas[pos] = opElegida;
}

//botón corregir
let corregir = document.getElementById("corregir");
corregir.onclick = function(){
    //recorro el arreglo que tiene las respuestas y comparo
    for(i=0;i<bd_juego.length;i++){
        //cargo la pregunta
        const pregunta = bd_juego[i];
        if(pregunta.correcta == respuestas[i]){ //respuesta correcta
            cantiCorrectas++;
            let idCorreccion = "p" + i + pregunta.correcta;
            document.getElementById(i).className = "contenedor-pregunta correcta";
            document.getElementById(idCorreccion).innerHTML = "&check;";
            document.getElementById(idCorreccion).className = "acierto";
        }else{//no acerto
            let id = "p" + i + respuestas[i];
            let idCorreccion = "p" + i + pregunta.correcta;
            document.getElementById(i).className = "contenedor-pregunta incorrecta";
            document.getElementById(id).innerHTML = "&#x2715;";
            document.getElementById(id).className = "no-acierto";
            document.getElementById(idCorreccion).innerHTML = "&check;";
            document.getElementById(idCorreccion).className = "acierto";
        }
    }

    //desabilitamos todos los inputs
    let inputs = document.getElementsByTagName("input");
    for(i=0;i<inputs.length;i++){
        inputs[i].disabled = true;
    }

    //hacemos un scroll hacia arriba
    window.scrollTo(0,0);
    //colocamos la cantidad que acertoy las que no acertó
    h2 = document.createElement("h2");
    h2.className = "resultado";
    h2.textContent = cantiCorrectas + " CORRECTAS - " + (13-cantiCorrectas) + " INCORRECTAS";
    document.getElementById("juego").appendChild(h2);
}
