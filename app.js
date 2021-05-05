require('colors');

const { mostraarMenu, pausa } = require('./helpers/mensajes');



console.clear();



const main= async()=>{
    console.log('output');

    let opt='';

    do{
        opt=await mostraarMenu();
        console.log({opt});
        await pausa();
    }while(opt !== '0');

} 

main();