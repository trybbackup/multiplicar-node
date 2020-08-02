const { getTabla, listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs')

console.log("Argv: ", argv);
let comando = argv._[0];
console.log("Posicion '0' Comando seleccionado: ", comando);

switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla()
            .then((data) => {
                console.log(data);
            })
            .catch(error => console.log(error))
        break;
    case 'crear':
        console.log('crear');
        getTabla(argv.tabla)
            .then(() => {
                console.log('Se ha creado el archivo');
            })
            .catch(error => console.log(error))
        break;

    default:
        console.log('Comando no reconocido');
        break;
}


/*
De esta manera se envio un arreglo desde la consola:
    Crear:node app.js crear --tabla="1,2,3,4,5,6,7,8,9,10,11,12"
    Listar: node app.js listar --tabla
    node app.js --tabla="1,2,3,4,5,6,7,8,9,10"
    node app listar --help
    node app.js listar -b limite=11 "1,2,3,4,5,6,7,8,9,10"
*/
/*Para desinstalar
    npm uninstall nodemon
*/
/*
    Por hacer
     npm init Instalar package.json
     npm i yargs
     No subir modulos de node a GIT ni a produccion
     node --help
    npm install --save-dev nodemon

*/
/*Acceso al objeto procces*/
// let argv2 = process.argv;