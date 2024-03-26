var video = document.getElementById('player');

var config = {
        "autoplay": true,
        dataProvider: {
            source: [
                { url: "https://stream.live.novotempo.com/tv/smil:tvnovotempo.smil/playlist.m3u8" }
            ]
        }
    };

    /** find player container in html DOM tree. */
    var element = document.getElementById("player");

    /** create player */
    var player = window.bradmax.player.create(element, config);
var newurl = window.location.href;
newurl = newurl.split('?source=');
newurl = newurl[1];
alert(newurl);
source = { url: newurl };
//player().load(source);
//player().play(true);
player.playerDelegate = self;
[player load];


