const inquirer = require('inquirer');
require('colors');

const preguntas=[
    {
        type: 'list',
        name: 'option',
        message: '¿Qué deseas hacer?',
        choices: ['opt1','opt2','opt3']
    }
];
const inquirerMenu=async()=>{
    console.clear();
    console.log('====================='.green);
    console.log('SELECCIONE UNA OPCIóN'.green);
    console.log('=====================\n'.green);

    const opt=await inquirer.prompt(preguntas);

    return opt;
}


module.exports={
    inquirerMenu
}