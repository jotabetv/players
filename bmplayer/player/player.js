var video = document.getElementById('player');

//var config = {
       // "autoplay": true,
       // dataProvider: {
           // source: [
             //   { url: "http://tv.mapfibra.com.br/live/1496/123456/19.m3u8" }
           // ]
       // }
  //  };

    /** find player container in html DOM tree. */
  //  var element = document.getElementById("player");

    /** create player */
  //  var player = window.bradmax.player.create(element, config);
   // var config = {
      //  dataProvider: {
          //  source: [
              //  { url: "http://tv.mapfibra.com.br/live/1496/123456/19.m3u8" }
          //  ]
      //  }
 //   };
//var element = document.getElementById("player");
//var player = window.bradmax.player.create(element, config);
  //function myFunc(){

//var newurl = window.location.href;
//newurl = newurl.split('?src=');
//newurl = newurl[1];
//sources = { url: newurl };
//jwplayer.load(sources);
//var source = sources;
//source = [{url:newurl}];
//dataProvider:{source:[{url:newurl}]};


//jwplayer().play(true);
//alert(newurl);      

//alert(newurl);
// Aqui vai o codigo que vai rodar antes da pagina ser carregada...
//}
//window.onload = myFunc; 
//window.bradmaxutil.config
//source = {url:newurl};
//window.bradmax.player.create(element, config).loadVideoByUrl(source);
//window.bradmax.player.create(element, config).onPlay(true);

// function alerta() { alert('ok'); }
//var button = "<button type='button' onclick='alerta();'>start</button>";

//var body = document.body;
//body.insertAdjacentHTML('beforeend', button); 
//window.addEventListener("click", function(event) {
   // document.getElementById("up").play();
   // alert("k");

function bradmaxPlayerInit_66047ea6e78ca() {
			var bradmaxPlayerConfig_66047ea6e78ca = {"dataProvider":{"source":[{"url":"https:\/\/stream.live.novotempo.com\/tv\/smil:tvnovotempo.smil\/playlist.m3u8"}]},"autoplay":true};
			var element = document.getElementById("player");
			var player = window.bradmax.player.create(element, bradmaxPlayerConfig_66047ea6e78ca);
			// Back compability.
			if(!window.player) {
				window.player = player;
			}
		}
		if(window.bradmax && window.bradmax.player) {
			bradmaxPlayerInit_66047ea6e78ca();
		} else {
			window.addEventListener('load', bradmaxPlayerInit_66047ea6e78ca);
		}




