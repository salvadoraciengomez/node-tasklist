require('colors');
const {pausa, inquirerMenu} = require('./helpers/inquirer');

//const { mostraarMenu, pausa } = require('./helpers/mensajes');



console.clear();



const main= async()=>{
    console.log('output');

    let opt='';

    do{
        opt=await inquirerMenu();
        console.log({opt});
        await pausa();
    }while(opt !== '0');

} 

main();