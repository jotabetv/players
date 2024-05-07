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
		input.focus();
		return false;
	}else {
		window.alert('Canal ' + inputText + ' inserido com sucesso!');
		localStorage.setItem("input",document.getElementById("input").value);
		window.location.reload();
		}
	}

window.addEventListener('load', function() {
let jb_player = document.getElementById("jb_player");
let Input = document.getElementById("Input");
let inputText = input.value;
let n = input.value;	
	if (input.value == ""){
		input.focus();
		return false;
	}else {
var bradmaxPlayerConfig = {dataProvider:{source:[{url:n}]},autoplay:true};
var element = document.getElementById("jb_player");
var player = window.bradmax.player.create(element, bradmaxPlayerConfig);
		
	localStorage.removeItem("input",document.getElementById("input").value);
	//localStorage.removeItem("n");
	input.value = ''
	}
});
