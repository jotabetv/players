/*
    Copyright (c) 2024 Pierleeb
    SPDX-License-Identifier: MIT
*/
function refresh(){
var input = document.form.input;
var inputText = input.value;
    if (input.value == ""){
	window.alert("Url do vídeo ou áudio é obrigatório!");
        return false;
}else {
alert('Canal ' + inputText + ' inserido com sucesso!');
window.location.reload();
	}
}

function setLink() {	
var input = document.form.input;
var inputText = input.value;
    if (input.value == ""){
        input.focus();
        return false;
}else {
let m3u8Player = document.getElementById("m3u8Player");
let Input = document.getElementById("Input");
let inputText = input.value;
let n = input.value;
	
	var bradmaxPlayerConfig = {dataProvider:{source:[{url:n}]},autoplay:true};
	var element = document.getElementById("m3u8Player");
	var player = window.bradmax.player.create(element, bradmaxPlayerConfig);
}
// Back compability.
	if(!window.player) {
	window.player = player;
		}
	}
	if(window.bradmax && window.bradmax.player) {
		setLink();
		//input.value = "";
	} else {
window.addEventListener('load', setLink);
}
