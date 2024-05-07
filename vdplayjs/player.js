/*
    Copyright (c) 2024 Pierleeb
    SPDX-License-Identifier: MIT
    JBF-TV Player - R.Santana/BA
*/

function setLink() {
	var jb_player = document.getElementById("jb_player");
	var input = document.form.input;
	var inputText = input.value;
	var m = inputText.slice(-31,-27);
	var z = inputText.slice(-18,-13);
	var n = inputText.slice(-4);

if (input.value == ""){
		window.alert("Url do vídeo ou áudio é obrigatório!");
		input.focus();
		return false;
	}else {
		window.alert('Canal ' + inputText + ' inserido com sucesso!');
	var videoPlayer = videojs('jb_player');

if (n == ".mp4","webm",".mkv",".mp3",".ogg",".wav",".m4v",".ogv","aac"){
	var source = {
		src: input.value,
		type: 'video/mp4'
		};
	videoPlayer.src(source);
	videoPlayer.play();
	}

if (n == "m3u8"){
	var source = {
		src: input.value,
		type: 'application/x-mpegURL'
 		};
	videoPlayer.src(source);
	videoPlayer.play();
	}

if (n == ".mpd"){
	var source = {
		src: input.value,
		type: 'application/dash+xml'
		};
	videoPlayer.src(source);
	videoPlayer.play();
	}

if (m == "yout"){
	var source = {
		src: input.value,
		type: 'video/youtube',
		provider: 'youtube'
		};
	videoPlayer.src(source);
	videoPlayer.play();
	}

if (z == "vimeo"){
	var source = {
		src: input.value,
		type: 'video/vimeo',
		provider: 'vimeo'
		};
	videoPlayer.src(source);
	videoPlayer.play();
	}
}
input.value = ''
}
