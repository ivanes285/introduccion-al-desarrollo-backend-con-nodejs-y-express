/* Un modulo(funcionalidades simples o complejas de uno o varios archivos js 
que pueden ser utilizados en cualquier parte de la app js ) */

//-------CORE MODULE--------//

var http = require("http"); // importar un modulo
//var log = require("./modules/my-log");  importar modulo de forma global
var url = require("url");
var { informacion, error } = require("./modules/my-log");
var { countries } = require("countries-list");
var querystring= require("querystring");

var server = http.createServer(function(request, response) {
  var parsed = url.parse(request.url);
  console.log('parsed:',parsed);
  var pathname= parsed.pathname;
 var query = querystring.parse(parsed.query);
 console.log('query:',query);


  if (pathname === "/") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<html><body><p>HOME PAGE</p></body></hmtl>"); // envio respuesta al cliente
    response.end();
  } else if (pathname === "/exit") {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<html><body><p>HASTA LA VISTA BABY </p></body></hmtl>"); // envio respuesta al cliente
    response.end();
  } else if (pathname === "/info") {
    var result = informacion(pathname);
    //var result = log.informacion(pathname); importacion global
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(result); // envio respuesta al cliente
    response.end();
  } else if (pathname === "/error") {
    var result = error(pathname);
    //var result = log.error(pathname); importacion global
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(result); // envio respuesta al cliente
    response.end();
  } else if (pathname === "/country") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(countries[query.code])); // transforma a string el json con
    response.end();
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.write("<html><body><p>NOT FOUND</p></body></hmtl>"); // envio respuesta al cliente
    response.end();
  }
});

server.listen(4000);
console.log("running 4000 port...");
