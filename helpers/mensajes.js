require('colors');

const mostraarMenu= async()=>{

    console.clear();
    console.log('====================='.green);
    console.log('SELECCIONE UNA OPCIóN'.green);
    console.log('=====================\n'.green);

    console.log(`${'1'.green} Crear tarea`);
    console.log(`${'2'.green} Listar tareas`);
    console.log(`${'3'.green} Listar tareas completadas`);
    console.log(`${'4'.green} Listar tareas pendientes`);
    console.log(`${'5'.green} Completar tareas pendientes`);
    console.log(`${'6'.green} Borrar tarea\n`);
    console.log(`${'0'.green} Salir\n`);

    const readline= require('readline').createInterface({
        input:process.stdin,
        output: process.stdout
    });

    readline.question('Seleccione una opción: ', (opt)=>{
        console.log({opt});
        readline.close();
    })

};

module.exports={
    mostraarMenu
}