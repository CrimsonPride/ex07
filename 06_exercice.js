var fs = require("fs"); // importation du module de gestion de fichiers
var http = require("http"); // importation du module de serveur http

var objet;
fs.readFile('06_fichier.json', 'utf8', function (err, data){
	if(err) return console.error(err);
	objet = JSON.parse(data);
	console.log(objet.toString());
});

function genTableauProvince(){

	var tab = "";

	tab += "<h1>Tableau de provinces</h1>";
	tab += "<table>";
	for (province in objet){

		tab += "<tr><td>" + province + "</td><td>" + objet[province].toString() + "</td></tr>";
	}
	tab += "</table>";

	return tab;
}

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html; charset=utf8"});
  

  response.write(ecritureTableauProvince());	

  response.end(); 
}).listen(8888);



console.log("Program Ended");