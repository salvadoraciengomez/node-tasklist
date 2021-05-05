const inquirer = require('inquirer');
require('colors');

const preguntas=[
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué deseas hacer?',
        choices: [
            {
                vaule: '1',
                name: '1. Crear tarea'
            },
            {
                vaule: '2',
                name: '1. Crear tarea'
            },
            {
                vaule: '3',
                name: '3. Listar tareas pendientes'
            },
            {
                vaule: '4',
                name: '4. Completar tarea(s)'
            },
            {
                vaule: '5',
                name: '5. Limpiar tareas completadas'
            },
            {
                vaule: '6',
                name: '6. Borrar tarea'
            },
            {
                vaule: '0',
                name: '0. Salir'
            },
        ]
    }
];

const inquirerMenu=async()=>{
    //console.clear();
    console.log('====================='.green);
    console.log('SELECCIONE UNA OPCIóN'.green);
    console.log('=====================\n'.green);

    const {opcion}=await inquirer.prompt(preguntas);

    return opcion[0];
}


module.exports={
    inquirerMenu
}