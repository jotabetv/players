var jw = document.getElementById('player');

var playerInstance = jwplayer("player");
playerInstance.setup({
 sources: [{
        file: "https://jbftv.m3u8",
        image: "http://assets-jp.jwpsrv.com/thumbs/3XnJSIm4-640.jpg",
        title: "Sintel Trailer",
        description: "Sintel is a fantasy CGI movie from the Blender Open Movie Project."
}],
    autostart: true,
    mute: false,
    color: "00BFFF",
    controls: true,
    aspectratio: "16:9",
    stretching: "exactfit",      //uniform|fill|exactfit|bestfit|none
    primary:"flash",
    repeat: true,
    height: '480',
    width: '840',
      listbar: {
        position: "right",
        size: 280
      }
          });

var url = window.location.href;
url = url.split('?source=');
url = url[1]
//alert(url);
sources = { file: url };
jwplayer().load(sources);
jwplayer().play(true);

