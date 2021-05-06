/**
 * listado:
 * {'uuid-1212121-121221-1:{ id:12, desc:asd, completadoEn:98998}},
 * {'uuid-1212121-121221-1:{ id:12, desc:asd, completadoEn:98998}},
 * {'uuid-1212121-121221-1:{ id:12, desc:asd, completadoEn:98998}}
 */

const Tarea = require("./tarea");

class Tareas{

    listado={};

    constructor(){
        this.listado={};
    }

    crearTarea(desc=''){

        const tarea=new Tarea(desc);

        this.listado[tarea.id]= tarea;
    }
}

module.exports=Tareas;