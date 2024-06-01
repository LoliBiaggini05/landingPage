//1: CREO Y DECLARO VARIABLES
var input_nombre = document.getElementById("nombre");
var input_email = document.getElementById("email");
var input_ProgramSelect = document.getElementById("ProgramSelect");
var input_submit = document.getElementById("boton");
var input_cta= document.getElementById("cta");
var logofeed = document.querySelector(".headfeed img"); // Selecciona el logotipo de feedback

console.log (input_nombre);
console.log (input_email);
console.log (input_ProgramSelect);
console.log (input_submit);
console.log("hola lola");

//cambia la ubic del window
input_cta.addEventListener("click", function() {
    window.location.href = "#section-formulario";
});


//2:CREO FUNCION QUE SE EJECUTA CUANDO ENVIO EL FORM
//input_submit.addEventListener("submit", enviarForm);
document.querySelector("form").addEventListener("submit", enviarForm);

function enviarForm(event){
    event.preventDefault();

    console.log("Hemos hecho Click!");

    //3: OBTENGO VALOR DE LOS INPUTS
    var valor_nombre = input_nombre.value;
    var valor_email = input_email.value;
    var valor_programa = input_ProgramSelect.value;

    console.log(valor_nombre);
    console.log(valor_email);
    console.log(valor_programa);

    //4:OBTENGO LOS PLACEHOLDERS PARA EL FEEDBACK
    var placeholder_nombre =document.getElementById("nombre-placeholder");
    var placeholder_email =document.getElementById("email-placeholder");

    //5:CAMBIA EL CONTENIDO DE LOS PLACEHOLDERS
    placeholder_nombre.innerHTML=valor_nombre;
    placeholder_email.innerHTML=valor_email;

    //6:MOSTRAR EL FEEDBACK
    var elemento_feedback=document.getElementById("feedback");
    elemento_feedback.classList.remove("oculto");

    // Almacenar un indicador en localStorage para mostrar el feedback
    localStorage.setItem("showFeedback", "true");
    
    //7:OCULTA TODO
    var elemento_formulario=document.getElementById("section-formulario");
    elemento_formulario.classList.add("oculto");
    var elemento_bullets=document.getElementById("section-bullets");
    elemento_bullets.classList.add("oculto");
    var elemento_carruselmb=document.getElementById("section-carrusel-mobile");
    elemento_carruselmb.classList.add("oculto");
    var elemento_carruseldk=document.getElementById("section-carrusel-desktop");
    elemento_carruseldk.classList.add("oculto");
    var elemento_amarillo=document.getElementById("section-amarillo");
    elemento_amarillo.classList.add("oculto");
    var elemento_portada=document.getElementById("section-portada");
    elemento_portada.classList.add("oculto");
    var elemento_header=document.getElementById("section-header");
    elemento_header.classList.add("oculto");
    var elemento_footer=document.getElementById("section-footer");
    elemento_footer.classList.add("oculto");
}
// Evento de clic para el logotipo de feedback
logofeed.addEventListener("click", function() {
    
    // Mostrar todos los elementos ocultos
    var elementos_ocultos = document.querySelectorAll(".oculto");
    elementos_ocultos.forEach(function(elemento) {
        elemento.classList.remove("oculto");
    });

    // Limpiar los datos del formulario
    input_nombre.value = "";
    input_email.value = "";
    input_ProgramSelect.value = "Selecciona tu programa favorito";

    // Ocultar el feedback
    var elemento_feedback = document.getElementById("feedback");
    elemento_feedback.classList.add("oculto");

});



