//hay que cargarla con npm i readline-sync y permite usar input
let teclado = require('readline-sync');

    /**
     * Generar un archivo app.js que "consuma" el archivo de tareas.json. Para esto,seguramente nos convenga usar el módulo nativo de NodeJs. File System - FS */
    const archivo = require('node:fs');
/**
     * Mostrar el listado de tareas existente por la terminal. Para esto, seguramente tengamos que guardar el contenido del archivo tareas.json en una variable y convertir la misma a un dato tipo array. ¿Se te ocurre cómo? Aquí te dejamos un enlace donde podrás profundizar sobre el recurso a utilizar:
     */
    //traigo el JSON y lo convierto en ObjetoLiteral
    let Tareas = JSON.parse(archivo.readFileSync('./app-tareas/tareas.json','utf-8'));

    //creo una variable tipo enum
    const tag =["terminado","pendiente","en progreso"];

const ListarTareas = function(){
    Tareas.forEach((tarea)=>{
        console.log(tarea);
    });
}

const crearTarea =()=>{
    let accion={};
    accion.titulo = teclado.question("Ingrese un titulo para la tarea >> ");
    accion.estado = teclado.question(`Ingrese un estado(terminado, pendiente, en progreso") >>  `);
    
    //antes de insertar verifico si pusieron bien alguno de los procesos
    const existe = tag.includes(accion.estado);
    
    Tareas.push(accion)
    ListarTareas();
    //guardo el archivo 
    escribirJSON();
    
}

const escribirJSON=()=>{
    //convierto el Obj-Lit a JSON, para que quede ordenado, usar null y 2
    const tareas_json = JSON.stringify(Tareas,null,2);
    guardarTarea(tareas_json);
    
}

const guardarTarea = (tareas) =>{
    try {
        //escribo el archivo
        archivo.writeFileSync('./app-tareas/tareas.json',tareas,'utf-8');
        console.log("Archivo escrito correcto");
    } catch (error) {
        console.log("Algo paso, no se pudo escribir el archivo: "+ error);
    }
}
module.exports = {ListarTareas,crearTarea};