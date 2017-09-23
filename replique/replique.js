var fs  = require('fs');
exports.action = function(data, callback, config, SARAH){
var config = config.modules.replique;
var answers = config.answers;
var titre = "";
	fs.readdir("./plugins/replique/mp3",function(error,directoryObject)
	{
	var nombre_histoire = 0;
	for( var i in directoryObject){
	nombre_histoire = nombre_histoire + 1;
	//console.log(directoryObject[i]);
	}
	
	histoire_selectione = Math.floor((Math.random()*nombre_histoire)+1);
	
	var nombre_histoire_play = 0;
	for( var i in directoryObject){
	nombre_histoire_play = nombre_histoire_play + 1;
	if(nombre_histoire_play == histoire_selectione){
		titre = directoryObject[i];
	}

	
	}
	console.log('titre = ' + titre);
	// Callback with TTS
    var answers = config.answers.split('|');
    var answer = answers[ Math.floor(Math.random() * answers.length)];
	console.log(answer);
    callback({'tts': answer});
	
	
	setTimeout(function () {   
      SARAH.play('./plugins/replique/mp3/'+ titre);    
    }, 3000)
   
	});

	
	
}

