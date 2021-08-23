// JavaScript Document

$(document).ready(function(){ 
    //Desaparece menu ordenador
     $('.show_search').on('click',function(){
        $('.form_search').toggle();
        $('.show_search').css("display", "none");     
     })
  
  
     // //Aparece menu ordenador
     $('.button_search').on('click',function(){
        $('.form_search').css("display", "none"); 
     });
  
     $('.button_search').on('click',function(){
        $('.show_search').css("display", "flex"); 
     });
  
  
  
    //Aparece barra busquedas
     $('.phone_search').on('click',function(){
        //Desplegamos form_search_movil
        $('.form_search_movil').toggle();
        //Desaparece phone_search
        $('.phone_search').css("display", "none");
        //Desaparece logo
        $('.logo-centrar').css("display", "none");
        //Se cambia boton menu por flecha
        $(".bt-menu").addClass("fa-arrow-left");
        $(".bt-menu").removeClass("fa-bars");                      
     })
  
  
  
    //Desaparece barra busquedas
     $('.button_search_movil').on('click',function(){
        //Cerramos form_search_movil
        $('.form_search_movil').toggle();
        //Aparece phone_search
        $('.phone_search').css("display", "flex");
        //Aparece logo
        $('.logo-centrar').css("display", "flex");
        //Cambiar icono flecha a menu dandole a buscar
        $('.bt-menu').css("display", "flex");
     })
  
  
  
  
    //Desaparece barra busqueda al darle a flecha
    //Ocultamos el Primer Menu
      $('.phone_search').on('click',function(){
      $("#un .bt-menu").addClass("fa-bars");
              $(".fa-bars").hide();
      });
      //Desaparece barra busqueda al darle a flecha
       $('#do .fa-arrow-left').on('click',function(){
          $('.form_search_movil').toggle();
          $('.phone_search').css("display", "flex");
          $('.logo-centrar').css("display", "flex");
          $("#do .fa-arrow-left").show();
       });
       //Mostramoms el Menu despues de Regresar
       $('.fa-arrow-left').on('click',function(){
          $(".bt-menu").show();
       });
  
  
  
    //No hacer funcionar el enlace del boton menu
      $(".no_link").click(function(event){
      event.preventDefault();
      });
  });
  
  //Desplegar menu
  $(document).ready(function(){
     
      var contador = 1;
     
      $('.fa-bars').click(function(){
          if (contador == 1){
              $('nav').animate({
                  left: '0'
              });
              contador = 0;
          }   
          else{
              contador = 1;
              $('nav').animate({
                  left: '-100%'
              });
          }
      });
  
    //Cerrar solo el menu
    $('.uno_solo nav ul li, .cerrar').click(function(){
      if (contador == 0) {
        $('nav').animate({
          left: '-100%'
        });
        contador = 1;
      } 
    });
     
  });