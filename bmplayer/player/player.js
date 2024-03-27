var video = document.getElementById('player');

var config = {
        "autoplay": true,
        dataProvider: {
            source: [
                { url: "https://5cf4a2c2512a2.streamlock.net/8016/8016/playlist.m3u8" }
            ]
        }
    };

    /** find player container in html DOM tree. */
    var element = document.getElementById("player");

    /** create player */
    var player = window.bradmax.player.create(element, config);
    var jsapi = player.api;


jsapi.add(newurl, onPlay);
jsapi.play(true);


   function alerta() { alert('ok'); }
var button = "<button type='button' onclick='alerta();'>start</button>";

var body = document.body;
body.insertAdjacentHTML('beforeend', button);         

  function myFunc(){
    var newurl = window.location.href;
newurl = newurl.split('?src=');
newurl = newurl[1];
//alert(newurl);
var config = {
        dataProvider: {
                source: [
                        { url: newurl }
                          ]
        }
    };
alert(newurl);
}
window.onload = myFunc; 

//source = {url:newurl};
//window.bradmax.player.create(element, config).loadVideoByUrl(source);
//window.bradmax.player.create(element, config).onPlay(true);


