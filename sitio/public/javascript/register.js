const $ = id => document.getElementById(id)
 
let regExLetter = /^[A-Z]+$/i;
let regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/; //mayuscula, numero y 6 a 12 caracteres
let regExPass2 = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/; //mayuscula, numero, especial y 8 a 16 caracteres

window.addEventListener('load', () =>{
    console.log('register.js success')

    $('name').addEventListener('focus', () => {
        if($('name').value.trim() === ""){
            $('name-error').innerHTML = "<span><i class='fas fa-info-circle'></i> Solo caracteres alfabéticos</span>"
        }
    })
    $('name').addEventListener('bluer', () =>{
        $('name-msg').innerText = null 
        switch (true) {
            case !$('name').value.trim():
            $('name-error').innerText ="<span><i class='fas fa-exclamation-triangle'></i> El nombre es obligatorio</span>"
            $('name-error').classList.add('allert')
            $('name-error').classList.add('alert-danger')
            $('name').classList.add('is-invalid')  
    
            break;
            case $('name').value.trim().length < 2 || $('name').value.trim().length > 15:
                 $('name-error').innerText = "Entre 2 y 15 caracteres"
                 $('name-error').classList.toggle('alert-danger')
                 $('name').classList.add('is-invalid')
    
            break;
             case !regExLetter.test($('name').value.trim()):
             $('name-error').innerText = "Solo caracteres alfabeticos"
             $('name-error').classList.toggle('alert-danger')
             $('name').classList.add('is-invalid') 
    
            break;
            default:
             $('name-error').classList.remove('alert-danger')
             $('name').classList.remove('is-invalid')  
             $('name').classList.add('is-valid') 
             $('name-error').innerText = null
              break;
            }
        }) 
        
     $('name').addEventListener('keydown', () => {
        $('name-error').classList.remove('alert-danger')
        $('name').classList.remove('is-invalid')  
        $('name-error').innerText = null
       })
       $('lastName').addEventListener('focus', () => {
        if($('lastName').value.trim() === ""){
            $('lastName-error').innerHTML ="<span><i class='fas fa-info-circle'></i> Solo caracteres alfabéticos</span>"
            $('lastName-error').classList.toggle('alert-danger')
        }
    })
    $('lastName').addEventListener('bluer', () => {
        $('lastName-msg').innerText = null 
        switch (true) {
            case !$('lastName').value.trim():
            $('lastName-error').innerText ="<span><i class='fas fa-exclamation-triangle'></i> El Apellido es obligatorio</span>"
            $('lastName-error').classList.add('allert')
            $('lastName-error').classList.add('alert-danger')
            $('lastName').classList.add('is-invalid')  
            break;
            case $('lastName').value.trim().length < 2 || $('name').value.trim().length > 15:
                 $('lastName-error').innerText = "Entre 4 y 15 caracteres"
                 $('lastName-error').classList.toggle('alert-danger')
                 $('lastName').classList.add('is-invalid')
    
            break;
             case !regExLetter.test($('lastName').value.trim()):
             $('lastName-error').innerText = "Solo caracteres alfabeticos"
             $('lastName-error').classList.toggle('alert-danger')
             $('lastName').classList.add('is-invalid') 
    
            break;
            default:
             $('lastName-error').classList.remove('alert-danger')
             $('lastName').classList.remove('is-invalid')  
             $('lastName').classList.add('is-valid') 
             $('lastName-error').innerText = null
              break;
        }  
    })

    $('lastName').addEventListener('keydown', () => {
        $('lastName-error').classList.remove('alert-danger')
        $('lastName').classList.remove('is-invalid')  
        $('lastName-error').innerText = null
       })
   
       $('email').addEventListener('blur', async () => {

        switch (true) {
            case !regExEmail.test($('email').value):
                $('email-error').innerText = "Tiene que ser un email válido"
                $('email').classList.add('is-invalid')
                break;
            case await emailVerify($('email').value) :
                $('email-error').innerText = "El email está registrado"
                $('email').classList.add('is-invalid')
                break;
            default:
                $('email-error').innerText = null
                $('email').classList.remove('is-invalid')
                $('email').classList.add('is-valid')
                break;
             }
    })
    $('password').addEventListener('blur',() => {
        if(!regExPass2.test($('password').value)){
            $('password-error').innerText = "La contraseña debe tener una mayúscula, un número y entre 6 y 12 caracteres"
            $('password').classList.add('is-invalid')
        }else{
            $('password-error').innerText = null
            $('password').classList.remove('is-invalid')
            $('password').classList.add('is-valid')
        }
    })
    $('password').addEventListener('focus',()=> {
        $('password').classList.remove('is-invalid')
    })
    $('recordame').addEventListener('click', () => {
        $('recordame').classList.toggle('is-valid');
        $('recordame').classList.remove('is-invalid');
        $('recordame-error').innerHTML = null

    })

    $('form-register').addEventListener('submit', event => {
        event.preventDefault();

        let elementsForm = $('form-register').elements;
        //console.log(elementsForm);
        let error = false;

        for (let i = 0; i < elementsForm.length - 2; i++) {
            
            if(!elementsForm[i].value){
                elementsForm[i].classList.add('is-invalid')
                $('error-empty').innerHTML = "Los campos señalados son obligatorios";
                error = true
            }
        }
        if(!$('recordame').checked) {
            
            $('recordame').classList.add('is-invalid')
            $('recordame-error').innerText = "Debes aceptar los términos y condiciones";
            error = true
        }

        for (let i = 0; i < elementsForm.length - 2; i++) {
            
            if(elementsForm[i].classList.contains('is-invalid')){
                error = true
            }
        }

        if(!error){
            $('form-register').submit()
        }
         
        })

}) 