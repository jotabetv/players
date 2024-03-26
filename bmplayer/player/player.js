var video = document.getElementById('player');

var config = {
        "autoplay": true,
        dataProvider: {
            source: [
                { url: "newurl" }
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
player().load(newurl);
player().play(true);



