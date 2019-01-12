$(function (){
    
    var funcionesPerro= {};
    
    (function (app){ //funcion anonima interna, lo que hace es toma la variable tallerAvanzada, como parametro en app 
        
        app.init = function (){
            
           compartirFunciones(app); //se compartes tolas las funciones generales
          // console.log("sali de compartir funciones");
           app.cargarDataTable("Perro");
           
           app.oyentes("Perro");
            
        };
        
      app.init();  
        
    })(funcionesPerro);
    
    
});

    
    
 


