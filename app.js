require('colors');
const {pausa, inquirerMenu, leerInput} = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

//const { mostraarMenu, pausa } = require('./helpers/mensajes');



console.clear();



const main= async()=>{

    let opt='';
    const tareas= new Tareas();

    do{
        opt=await inquirerMenu();
        //console.log({opt});

            //
            //const tarea= new Tarea('Comprar comida');
            
            //tareas.listado[tarea.id]= tarea;
            
            //console.log(tareas);
        switch(opt){
            case '1':
                const desc=await leerInput('Descripción: ');
                console.log(desc);
            break;

            case '2':
                console.log('El listado de tareas',tareas.listado);
            break;
            
        }

        await pausa();
    }while(opt !== '0');

} 

main();