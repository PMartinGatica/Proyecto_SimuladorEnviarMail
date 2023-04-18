document.addEventListener('DOMContentLoaded',function(){
    //Seleccionar elementos de la interface
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
   
    //Asignar eventos
    inputEmail.addEventListener('blur',validar);
    inputAsunto.addEventListener('blur',validar);
    inputMensaje.addEventListener('blur',validar);

    function validar (e){
        if(e.target.value.trim() === ''){
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`)
        }else{
            console.log('hay algo');
        }
    }

    function mostrarAlerta(mensaje){
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white' , 'p2', 'mt-10', 'text-center');
        formulario.appendChild(error)
    }
    
});