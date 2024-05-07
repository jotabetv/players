/*
    Copyright (c) 2024 Pierleeb
    SPDX-License-Identifier: MIT
    JBF-TV Player - R.Santana/BA
*/

function Carregar(){
	document.getElementById("input").value = localStorage.getItem("input");
	}

function setLink(){
var input = document.form.input;
var inputText = input.value;
    if (input.value == ""){
	window.alert("Url do vídeo ou áudio é obrigatório!");
        return false;
}else {
window.alert('Canal ' + inputText + ' inserido com sucesso!');
localStorage.setItem("input",document.getElementById("input").value);
window.location.reload();
	}
}

window.addEventListener('load', function() {
var jb_player = document.getElementById("jb_player");
var input = document.getElementById("input");
var inputText = input.value;
var vime = inputText.split("com/");
var vime = vime[1];
var tube = inputText.split("?v=");
var tube = tube[1];
var m = inputText.slice(-31,-27);
var z = inputText.slice(-18,-13);
var n = inputText.slice(-4);

if (n == ".mpd"){
var video = document.querySelector('#jb_player');
    /* Switch to DASH-Stream, if supported */
    if ( typeof ( window.MediaSource || window.WebKitMediaSource ) === "function" ) {
      (function () {
        /* DASH-Playlist location */
        var mpd = inputText,
        dash = dashjs.MediaPlayer().create();
        dash.initialize(video, mpd, false);
      })();
    };
    /* Initialize Plyr Player */
    var jb_player = new Plyr('#jb_player', {
      /* Options */
      "fullscreen": { enabled: true, fallback: true, iosNative: true },
      "previewThumbnails": { enabled: true, src: 'thumbnails/thumbnails.vtt' }
    });
}

if (z == "vimeo"){
var jb_player = new Plyr('#jb_player');
  jb_player.source = {
    type: 'video',
    sources: [{
      src: vime, // From the Vimeo video link
      provider: 'vimeo',
    }, ],
  };
  /*
    Vimeo video link
    https://vimeo.com/87662113
  */
}

if (m == "yout"){
var jb_player = new Plyr('#jb_player');
  jb_player.source = {
    type: 'video',
    sources: [{
      src: tube, // Do link do vídeo do YouTube
      provider: 'youtube',
    }, ],
  };
  /*
    YouTube video link
    https://www.youtube.com/watch?v=aqz-KE-bpKQ
  */
}

if (n == "m3u8"){
var video = document.querySelector('video');
  if (Hls.isSupported()) {
    var hls = new Hls();
   hls.loadSource(inputText);
    hls.attachMedia(video);
  }
}
  var jb_player = new Plyr(video, {
    resetOnEnd: true
  });

if (n == ".mp4","webm",".mkv",".mp3",".ogg",".wav",".m4v",".ogv","aac"){
 var jb_player = new Plyr('#jb_player');
  jb_player.source = {
    type: 'video',
    title: 'Elephant Dream',
    sources: [{
      src: inputText,
      type: 'video/mp4',
    }]
  };
}
localStorage.removeItem("input",document.getElementById("input").value);
	//localStorage.removeItem("n");
	input.value = ''
});

function play(){
player.play(); // Start playback
}
