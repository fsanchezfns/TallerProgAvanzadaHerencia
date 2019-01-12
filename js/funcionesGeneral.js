function compartirFunciones(app){
    
   app.cargarDataTable= function(tipo){
       console.log("cargarTabla");
       var url = "controlador/ruteador/Ruteador.php?accion=listar&Formulario=" + tipo; //??porque no sale con ../
             
      if(tipo=="Perro"){
          console.log("es perro")
          $("#tabla"+tipo).DataTable({
              //configuro lenguaje
              "language": {"url":"js/DataTables/Spanish.json"},
              "autoWidth": false, 
              //configuro parametros para la llamada
              "ajax":{"url": url,
                      "dataSrc": "" 
                },
              
               //configuro las columnas, con el nombre que me devueve el json de la base de dato
               "columns": [
                   {"data": "nombre_perro"},
                   {"data": "raza_perro"},
                   {"data": "edad_perro"},
                   {"data": "Acciones",
                        "orderable":false,
                        "searchable":false,
                        "render": function (data, type, row, meta){
                            var a = '<a class="pull-left editar" data-id_perro="' + row.id_perro + '"><span class="glyphicon glyphicon-pencil"></span>Editar</a>' +
                                    '<a class="pull-right eliminar" data-id_perro="' + row.id_perro + '"><span class="glyphicon glyphicon-remove"></span>Eliminar</a>';
                            return a;
                            }
                   }
                   
               ]
               
              
              
          });
        
      }
      else { alert('configurar para otros datos igual que arriba');}
       
   };
    
    
    app.oyentes= function(tipo){

             $('#agregar' + tipo).on('click', function (event) {
                app.limpiarModal();
                $('#id').val(0);
                $('#tituloModal').html("Ingresar un nuevo " + tipo);
                $('#modal' + tipo).modal({show: true});
                });
         
            $('#guardar').on('click',function(event){
                event.preventDefault(); //cancela el evento preterminado
                    
                    if($('#id').val()==0){
                        //guardar perro
                        console.log("nuevo");
                        app.guardar(tipo);
                        
                    }else{
                        console.log("modifica");
                        app.modificar(tipo);

                    }
                }); 
                
                
            
            $('#cuerpoTabla' + tipo).on('click', '.eliminar',function (event){
                console.log("eliminar");
               if (tipo=='Perro'){
                app.eliminar($(this).attr("data-id_perro"), tipo); 
               }
                                       
            });
            
            //cargo en el modal los datos
         $('#cuerpoTabla'+ tipo).on('click', '.editar', function(event){
            
                if (tipo=='Perro'){
             $('#raza').val($(this).parent().parent().children().next().html());
             $('#edad').val($(this).parent().parent().children().next().next().html());
             $('#id').val($(this).attr("data-id_perro")); //seteo en el id el id del perro para indicar que modifico y no que es uno nuevo
            }

             $('#nombre').val($(this).parent().parent().children().html());
             $('#tituloModal').html('Modificar' + tipo);
             $('#modal' + tipo).modal({show:true})
             
            
          
                             
         });
         
        // validador del formulario 
         $('#form'+ tipo).bootstrapValidator({
           excluded: [],   
         });
         
        
         
         $('#btnBuscar').on('click',function(event){
             event.preventDefault();
             app.buscar();
         });
         
         
         //ver que onda el imprimir
         $('#imprimir').on('click',function(event){
            app.imprimir(tipo);
             var aux = $('#tabla' + tipo).html();
             aux = aux.replace("<th>acciones</th>","");
             
         });
         
       
   }; 
    
 app.eliminar = function (id , tipo){
            // console.log(id)
            //  console.log(tipo)
           var url = "controlador/ruteador/Ruteador.php?accion=eliminar&Formulario=" + tipo;
           var datosEnviar ={id:id};    
                $.ajax({
                    url:url,
                    method: "POST",
                    data: datosEnviar,
                    success: function (datosRecibidos){
                         alert('se a eliminado el' + tipo + id);
                         app.actualizarDataTable(tipo);
                        
                    },
                    error: function (){
                        alert('error al eliminar');
                    }
 
                });  
     
         };   
        
    
        
        app.guardar= function(tipo){

          var url= "controlador/ruteador/Ruteador.php?accion=agregar&Formulario=" + tipo;
          var datosEnviar= $('#form'+tipo).serialize();
          //console.log(datosEnviar);
            //hacer ajax
        
            $.ajax({
                url: url,
                method: 'POST',
                dataType: 'json',
                data: datosEnviar,
                success: function (datosRecibidos) {
                    
                    $('#modal'+ tipo).modal('hide');//oculto el modal
                   // console.log(datosRecibidos);
                   // app.actualizarTabla(datosRecibidos,$('#id').val());
                    app.actualizarDataTable(tipo);
                    app.limpiarModal();
                },
                error: function () {
                    alert("Error en guardar" + tipo);
                }
            });
        };
        
       

    app.actualizarDataTable= function (tipo){
        //console.log("actulizar")
        var tabla= $("#tabla" + tipo).DataTable();
        tabla.ajax.reload();
    };   

        
        app.limpiarModal = function (){
            $('#id').val('');
            $('#nombre').val('');
            $('#raza').val('');
            $('#edad').val('');
            
        };
        
        app.modificar = function (tipo){
            var url = 'controlador/ruteador/Ruteador.php?accion=modificar&Formulario=' + tipo;
            var datosEnviar = $('#form' + tipo).serialize();

            $.ajax({
                url: url,
                method: 'POST',
                dataType: 'json',
                data: datosEnviar,
                success: function (datosRecibidos) {
                    $('#modal'+ tipo).modal('hide');
                    app.actualizarDataTable(tipo);
                    app.limpiarModal();
                },
                error: function () {
                    alert('error en actulizar el ' + tipo);
                }
            });    
        };

        app.imprimir = function(tipo){
          var aux = $("#tabla" + tipo).html();
          console.log(aux);
          aux = aux.replace('<th class="sorting_disabled" rowspan="1" colspan="1" aria-label="Acciones">Acciones</th>','') //borramos las acciones de la tabla
          var inicio = aux.indexOf("<td><a class",0);//buscamos el indice donde aparece  "<td><a class" para poder eliminar las acciones tanto el "eliminar como el editar"
          while(inicio>0){
            console.log("el inicio es: "+ inicio); //el inicio es donde aparece <td><a class
            var fin = aux.indexOf("</td>", inicio)+5;//el final es donde aparece  </td> y sumo 5 para poder eliminar tambien el </td>
            console.log("el final es: "+ fin);
            var strBorrar= aux.substring(inicio,fin); //borro el eliminar y editar
            console.log("lo que vamos a borrar es: " + strBorrar);
            aux= aux.replace(strBorrar,"");
            console.log("el nuevo aux es : "+ aux);
            inicio = aux.indexOf("<td><a class",0);
          }
/*
          $.ajax({
          url: 'controlador/ruteador/Imprimir.php',
          method: 'POST',
          //dataType: 'json',
          data:aux,
          success:function () {
            console.log("succes");
          },
          error:function (){
            console.log("error")
          }
          });
*/

          $("#html").val(aux);
         // console.log(aux)
          $("#imprimir" + tipo).submit();

            
        };

    
};


