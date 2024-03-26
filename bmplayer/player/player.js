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
var newurl = window.location.href;
newurl = newurl.split('?src=');
newurl = newurl[1];
alert(newurl);
source = {url:newurl};
alert(url);
source.load();
source.play();

//source = {url:newurl};
//window.bradmax.player.create(element, config).loadVideoByUrl(source);
//window.bradmax.player.create(element, config).onPlay(true);


