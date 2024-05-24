const ListarTareas = function(){
        /**
     * Generar un archivo app.js que "consuma" el archivo de tareas.json. Para esto,seguramente nos convenga usar el módulo nativo de NodeJs. File System - FS */
    const archivo = require('node:fs');

    /**
     * Mostrar el listado de tareas existente por la terminal. Para esto, seguramente tengamos que guardar el contenido del archivo tareas.json en una variable y convertir la misma a un dato tipo array. ¿Se te ocurre cómo? Aquí te dejamos un enlace donde podrás profundizar sobre el recurso a utilizar:
     */
    //traigo el JSON y lo convierto en ObjetoLiteral
    let listaDeTareas = JSON.parse(archivo.readFileSync('./app-tareas/tareas.json','utf-8'));

    //console.table(listaDeTareas);

    return listaDeTareas;
}

module.exports = ListarTareas;