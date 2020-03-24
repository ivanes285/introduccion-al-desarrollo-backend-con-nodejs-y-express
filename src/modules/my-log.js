module.exports.informacion= function info(text){ //exportacion parcial 
    console.log('INFO',text);
    return text;

};
function error(text){
    console.log('ERROR',text);
    return text;

};

module.exports.error= error; //otra forma de exportacion parcial 
//Para exportar estos modulos necesito utilizar la sigiente linea 
//module.exports = {info,error};  //exportacion global