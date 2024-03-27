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
    var config = {
        dataProvider: {
            source: [
                { url: "http://tv.mapfibra.com.br/live/1496/123456/19.m3u8" }
            ]
        }
    };
  function myFunc(){

     var newurl = window.location.href;
newurl = newurl.split('?src=');
newurl = newurl[1];
source = { url: newurl };
source = player;
//alert(newurl);      
var element = document.getElementById("player");
 var player = window.bradmax.player.create(element, config);
//alert(newurl);
// Aqui vai o codigo que vai rodar antes da pagina ser carregada...
}
window.onload = myFunc; 

//source = {url:newurl};
//window.bradmax.player.create(element, config).loadVideoByUrl(source);
//window.bradmax.player.create(element, config).onPlay(true);

// function alerta() { alert('ok'); }
//var button = "<button type='button' onclick='alerta();'>start</button>";

//var body = document.body;
//body.insertAdjacentHTML('beforeend', button); 
