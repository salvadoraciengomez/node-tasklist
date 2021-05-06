const inquirer = require('inquirer');
const { validate } = require('uuid');
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
                name: '2. Listar tareas'
            },
            {
                vaule: '3',
                name: '3. Listar tareas completadas'
            },
            {
                vaule: '4',
                name: '4. Listar tareas pendientes'
            },
            {
                vaule: '5',
                name: '5. Completar tareas'
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
    console.clear();
    console.log('====================='.green);
    console.log('SELECCIONE UNA OPCIóN'.green);
    console.log('=====================\n'.green);

    const {opcion}=await inquirer.prompt(preguntas);

    return opcion;
}

const pausa=async()=>{

    const question=[
        {
            type: 'input',
            name: 'enter',
            message:`Presione ${'enter'.green} para continuar`
        }
    ]
    await inquirer.prompt(question);
}

const leerInput= async(message)=>{
    const question=[
        {
            type:'input',
            name: 'desc',
            message,
                validate(value){
                    if (value.length===0) return 'Ingresa un valor';
                    return true;
                }
        }
    ];
    const {desc}= await inquirer.prompt(question);
    return desc;
};

module.exports={
    inquirerMenu,
    pausa,
    leerInput
}