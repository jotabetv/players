/*
    Copyright (c) 2024 Pierleeb
    SPDX-License-Identifier: MIT
    JBF-TV Player - R.Santana/BA
*/

function setLink() {
var input = document.form.input;
var inputText = input.value;
    if (input.value == ""){
	window.alert("Url do vídeo ou áudio é obrigatório!");
	input.focus();
        return false;
   }else {
window.alert('Canal ' + inputText + ' inserido com sucesso!');
window.location.reload();
	}
}

window.addEventListener('load', function() {
//var inputText = input.value;
//var n = inputText.slice(-4);
	//var video = document.getElementById("jb_player");
var input = document.getElementById("input");
var inputText = input.value;
var vime = inputText.split("com/");
var vime = vime[1];
var tube = inputText.split("?v=");
var tube = tube[1];
var m = inputText.slice(-31,-27);
var z = inputText.slice(-18,-13);
var n = inputText.slice(-4);

if (n == ".mp4","webm",".mkv",".mp3",".ogg",".wav",".m4v",".ogv","aac"){
var videoPlayer = videojs('jb_player');
if (input.value.trim() !== '') {
        const source = {
            src: input.value,
            type: 'video/mp4'
        };
        videoPlayer.src(source);
        videoPlayer.play();
    }
}

if (n == "m3u8"){
var videoPlayer = videojs('jb_player');
if (input.value.trim() !== '') {
        const source = {
            src: input.value,
            type: 'application/x-mpegURL'
        };
        videoPlayer.src(source);
        videoPlayer.play();
    }
}

if (n == ".mpd"){
var videoPlayer = videojs('jb_player');
if (input.value.trim() !== '') {
        const source = {
            src: input.value,
            type: 'application/dash+xml'
        };
        videoPlayer.src(source);
        videoPlayer.play();
    }
}

	
});
