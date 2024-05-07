/*
    Copyright (c) 2024 Pierleeb
    SPDX-License-Identifier: MIT
    JBF-TV Player - R.Santana/BA
*/

var jw = document.getElementById('jb_player');
var playerInstance = jwplayer("jb_player");
playerInstance.setup({
playlist: [{
	file: "https://0146-vos.dtvott.com/DASH/manifest.mpd",
		drm: {
		clearkey: {keyId: "aaa", key: "eee"}
		},
	image: "https://imagem.natelinha.uol.com.br/original/5-emissoras-logo_eda9a984911a03a687f473e5711706ca959183e5.jpeg",
	title: "JBF-TV",
	description: "Todos os Canais em um só Lugar!"    
	}],
	autostart: false,
	mute: false,
	controls: true,
	aspectratio: "16:9",
	stretching: "exactfit",      //uniform|fill|exactfit|bestfit|none
	type: "dash",
	primary: "flash",
	repeat: true,
	height: '480',
	width: '840',
	listbar: {
		position: "right",
		size: 280
		}
	});

function setLink() {
	var input = document.form.input;
	var inputText = input.value; 
		if (input.value == ""){
			window.alert("Url do vídeo ou áudio é obrigatório!");
			input.focus();
			return false;
		}
		if (input2.value == ""){
			window.alert("ID key do vídeo ou áudio é obrigatório!");
			input2.focus();
			return false;
		}
		if (input3.value == ""){
			window.alert("Key do vídeo ou áudio é obrigatório!");
			input3.focus();
			return false;
		}else {
	let jb_player = document.getElementById("jb_player");
	let Input = document.getElementById("Input");
	let inputText = input.value;
	let Input1 = document.getElementById("Input1");
	let input1Text = input1.value;
	let Input2 = document.getElementById("Input2");
	let input2Text = input2.value;
	let Input3 = document.getElementById("Input3");
	let input3Text = input3.value;
	let Input4 = document.getElementById("Input4");
	let input4Text = input4.value;

playlist = { file: input.value,
	    drm: {
		clearkey: {keyId: input2.value, key: input3.value}
		},
	image: input1.value,
	title: input4.value
	};
			
	jwplayer().load(playlist);
	//jwplayer().play();

	window.alert('Canal ' + input4.value + ' inserido com sucesso!');

	//input.value = '',
	//input1.value = '',
	//input2.value = '',
	//input3.value = '',
	//input4.value = ''
	}
}

function next() {
	let jb_player = document.getElementById("jb_player")
		jwplayer().playlistNext();
		jwplayer().play(true);
		}
