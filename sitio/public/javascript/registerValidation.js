const $ = id => document.getElementById(id)
 
let regExLetter = /^[A-Z]+$/i;
let regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/; //mayuscula, numero y 6 a 12 caracteres
let regExPass2 = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/; //mayuscula, numero, especial y 8 a 16 caracteres

window.addEventListener('load', () => {
    console.log('register.js success')

    $('Name').addEventListener('focus', () => {
        $('Name-error').innerHTML = "<span><i class='fas fa-info-circle></i> solo  caracteres Alfabèticos></span>"
        $('Name').classList.add('alert-info')

        /*$('Name.msg').innerText = "minimo 10 caracteres"*/borrar
    })
    $('Name').addEventListener('blur',() => {
        $('Name-msg').innerText = null
        switch (true) {
            case !$('Name').value.trim():
                $('Name-error').innerHTML = <span><i class='fas fa-exclamation-triangle'></i>" El nombre es obligatorio!"</span> 
                $('Name').classList.add('alert-danger')
                $('Name').classList.add('is-invalid')
                break;
            case !$('Name').value.trim().length <10 || $('Name').value.trim().length >20:
                $('Name-error').innerText = " Entre 10 y 50 caracteres"
                $('Name').classList.toggle('alert-danger')
                $('Name').classList.add('is-invalid')
                break;  
            case !regExLetter.test($('Name').value.trim()):
                $('Name-error').innerText = " Solo caracteres alfabeticos"
                $('Name').classList.toggle('alert-danger')
                $('Name').classList.add('is-invalid')
                break;  
            default:
                $('Name-error').classList.remove('alert-danger')
                $('Name').classList.add('alert-info')
                $('Name').classList.remove('is-invalid')
                $('Name').classList.add('is-valid')
                $('Name-error').innerText = null
               
                break;
        }
    })
    $('Name').addEventListener('keydown', () => {
        $('Name-error').classList.remove('alert-danger')
        $('Name').classList.add('alert-info')
        $('Name').classList.remove('is-invalid')
        $('Name-error').innerText = null
        alert('keydown')
    })

    $('lastName').addEventListener('focus', () => {
        $('lastName-error').innerHTML = "<span><i class='fas fa-info-circle></i> solo  caracteres Alfabèticos></span>"
        $('lastName').classList.add('alert-info')
    })
    $('lastName').addEventListener('blur',() => {
        $('lastName-msg').innerText = null
        switch (true) {
            case !$('lastName').value.trim():
                $('lastName-error').innerHTML = <span><i class='fas fa-exclamation-triangle'></i>" El nombre es obligatorio!"</span> 
                $('lastName').classList.add('alert-danger')
                $('lastName').classList.add('is-invalid')
                break;
            case !$('lastName').value.trim().length <10 || $('Name').value.trim().length >20:
                $('lastName-error').innerText = " Entre 10 y 50 caracteres"
                $('lastName').classList.toggle('alert-danger')
                $('lastName').classList.add('is-invalid')
                break;  
            case !regExLetter.test($('lastName').value.trim()):
                $('lastName-error').innerText = " Solo caracteres alfabeticos"
                $('lastName').classList.toggle('alert-danger')
                $('lastName').classList.add('is-invalid')
                break;  
            default:
                $('lastName-error').classList.remove('alert-danger')
                $('lastName').classList.add('alert-info')
                $('lastName').classList.remove('is-invalid')
                $('lastName').classList.add('is-valid')
                $('lastName-error').innerText = null
                break;
        }
    })
    $('lastName').addEventListener('keydown', () => {
        $('lastName-error').classList.remove('alert-danger')
        $('lastName').classList.add('alert-info')
        $('lastName').classList.remove('is-invalid')
        $('lastName-error').innerText = null
        alert('keydown')
    })

    $('email').addEventListener('blur', () => {
        if(!regExEmail.test($('email').value)){
            $('email-error').innerText = "Tiene que ser un email vàlido"
            $('email').classList.add('is-invalid')
        }else{
            $('email-error').innerText = null
            $('email').classList.remove('is-invalid')
            $('email').classList.add('is-valid')
        }
    })

    $('password').addEventListener('blur', () => {
        if(!regExPass2.test($('password').value)){
            $('password-error').innerText = "La contraseña debe tener una mayuscula, un nùmero y entre 6 y 12 caracteres"
            $('password').classList.add('is-invalid')
        }else{
            $('password-error').innerText = null
            $('password').classList.remove('is-invalid')
            $('password').classList.add('is-valid')
        }
    })
    $('password').addEventListener('focus', () => {
        $('password').classList('is-invalid')
    })

    $('password2').addEventListener('blur', () => {
        if($('password').value !== $('password2').value){
           $('password2-error').innerText = "La contraseña no coinciden"   
           $('password2').classList.add('is-invalid')
        }else if($('password').value == ""){
            $('password2-error').innerText = "Deves ingresar una contraseña"   
            $('password2').classList.add('is-invalid')
        }else{ 
            $('password2-error').innerText = null
            $('password2').classList.remove('is-invalid')
            $('password2').classList.add('is-valid')
        }
    })
    $('password2').addEventListener('focus', () => {
        $('password2').classList('is-invalid')
    })

    $('form-register').addEventListener('submit', event => {
        event.preventDefault();

        let elementsForm = $('form-register').elements;
             console.log('elementsForm');
        
        for (let i = 0; i < elementsForm.length - 2; i++) {
            const element = array[i];
            if (!elementsForm[i].value) {
                elementsForm[i].classList.add('is-invalid')
                $('error-empty').innerHTML = <span class='alert-danger p-1 text-center'>Los campos señalados son obligatorios</span>


                
            }
            
        }
    })





})