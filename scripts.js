/*1. Formulario de contacto - Local Storage
Crear un formulario de contacto con los siguientes campos:
Nombre
Correo
Mensaje
URL imagen
Guardar en Local Storage los datos de contacto rellenados del usuario (solo guarda un usuario)
Muestra el usuario que has guardado en el DOM
Pista: usa JSON.parse() y JSON.stringify() para guardar muchos datos usando la misma clave

2. Extra
Guardar en Local Storage los datos de contacto enviados de cada usuario (ir guardandolos todos)
Mostrar los datos de los contactos guardados en el DOM
Crea un botón para borrar todos los contactos guardados en Local Storage*/ 

let datos;
let datosFormJSONparsed=[];
document.getElementById('miFormulario').addEventListener('submit', function(e) {
   e.preventDefault();

   datos=Array.from(document.querySelectorAll('.datos')).map(element => ({
      value: element.value,
      label: (document.querySelector(`label[for="${element.id}"]`) || 
            element.closest('label'))?.textContent?.trim() || ''
   }))
   datosFormJSONparsed=JSON.parse(localStorage.getItem('datosFormulario'))
   
   localStorage.setItem('datosFormulario', JSON.stringify([
         ...(datosFormJSONparsed ?? []), datos]
   ));

   console.log('Datos recolectados: ', datos)

   document.getElementById('miFormulario').reset()

});

document.getElementById('borrarContactos').addEventListener('click', function(e) {
   e.preventDefault();
   localStorage.removeItem('datosFormulario');
   alert('Contactos eliminados correctamente');
});
