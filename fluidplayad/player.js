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
//var vime = inputText.split("com/");
//var vime = vime[1];
//var tube = inputText.split("?v=");
//var tube = tube[1];
//var m = inputText.slice(-31,-27);
//var z = inputText.slice(-18,-13);
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
    var jb_player = myFP('#jb_player', {
      /* Options */
      "fullscreen": { enabled: true, fallback: true, iosNative: true },
      "previewThumbnails": { enabled: true, src: 'thumbnails/thumbnails.vtt' }
    });
}

if (n == "m3u8"){
var videoSrcInHls = inputText;
var video = document.getElementById("jb_player");
if(Hls.isSupported()) {
      var hls = new Hls();
      hls.loadSource(videoSrcInHls);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED,function() {
       //video.play();
      });
    }

    function addSourceToVideo(element, src, type) {
      var source = document.createElement('source');
      source.src = src;
      source.type = type;
      element.appendChild(source);
    }
}

if (n == ".mp4","webm",".mkv",".mp3",".ogg",".wav",".m4v",".ogv","aac"){
var videoSrcInMp4 = inputText;
var video = document.getElementById("jb_player");

      addSourceToVideo(video, inputText, 'video/mp4');
      //video.play();
    
function addSourceToVideo(element, src, type) {
      var source = document.createElement('source');
      source.src = src;
      source.type = type;
      element.appendChild(source);
    }
}
localStorage.removeItem("input",document.getElementById("input").value);
	//localStorage.removeItem("n");
	input.value = ''
});

// document.querySelector('#version').innerText = `hls.js version: ${Hls.version}  cdnbye version: ${Hls.engineVersion}`;   
 var myFP = fluidPlayer(
        'jb_player',
        {
            layoutControls: {
                fillToContainer: true
            },
            modules: {
                configureHls: (options) => {
                    options.p2pConfig = {
                        live: true,        // set to false in VOD mode
                        getStats: function (totalP2PDownloaded, totalP2PUploaded, totalHTTPDownloaded) {
                            var total = totalHTTPDownloaded + totalP2PDownloaded;
                         //   document.querySelector('#info').innerText = `p2p ratio: ${Math.round(totalP2PDownloaded/total*100)}%, saved traffic: ${totalP2PDownloaded}KB, uploaded: ${totalP2PUploaded}KB`;
                        },
                        // token: YOUR_TOKEN
                        // Other p2pConfig options provided by CDNBye
                        // http://www.cdnbye.com/en/views/web/API.html
                    };
                    return options;
                },
            }
        }
    );

function play(){
video.play(); // Start playback
}
