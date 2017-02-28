var fs = require("fs"); // importation du module de gestion de fichiers
var http = require("http"); // importation du module de serveur http

var objet;
fs.readFile('06_fichier.json', 'utf8', function (err, data){
	if(err) return console.error(err);
	objet = JSON.parse(data);
	console.log(objet.toString());
});





console.log("Program Ended");