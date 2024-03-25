var jw = document.getElementById('player');

var jw = {"file":"'",
          "image":null,
          "color":"#0008ff",
          "link":"https://tv0800.zip",
          "logo":"",
          "auto":"true",
          "text":"JBF-TV",
          "lposi":"bottom-left",
          "flash":"https://tv0800.zip/wp-content/themes/dooplay/assets/jwplayer/jwplayer.flash.swf"}
const player = jwplayer('player').setup({image: jw.image,mute: false,volume: 85,autostart: jw.auto,repeat: false,abouttext: jw.text,aboutlink: jw.link,skin: {active: jw.color
},logo: {file: jw.logo,hide: true,link: jw.link,margin: '15',position: jw.lposi
},sources: [{file: jw.file,type: 'video/mp4'
}],})
var url = window.location.href;
url = url.split('?source=');
url = url[1];
//alert(url);
sources = { file: url };
jwplayer().load(sources);
jwplayer().play(true);
