const $ = id => document.getElementById(id)

let regExLetter = /^[A-Z]+$/i;
let regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/; //mayuscula, numero y 6 a 12 caracteres

window.addEventListener('load', () =>{
    console.log('register.js success')

    $('name').addEventListener('focus', () => {
        if($('name').value.trim() === ""){
            $('name-error').innerHTML = "<span><i class='fas fa-info-circle'></i> Solo caracteres alfabéticos</span>"
        }
    })
    $('name').addEventListener('blur', () =>{
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
        
     $('name').addEventListener('keypress', () => {
        $('name-error').classList.remove('alert-danger')
        $('name').classList.remove('is-invalid')  
        $('name-error').innerText = null
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

})