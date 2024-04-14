/*
    Copyright (c) 2024 Pierleeb
    SPDX-License-Identifier: MIT
*/
function setLink() {
var input = document.form.input;
    var inputText = input.value;
    if (input.value == ""){
	window.alert("Url do vídeo ou áudio é obrigatório!");
        input.focus();
        return false;
}else {
	
let m3u8Player = document.getElementById("m3u8Player");
let Input = document.getElementById("Input");
let inputText = input.value;
let url = input.value;
let n = input.value;
let source = [{ url: n }];          
alert(n);

	//var bradmaxPlayerConfig = {dataProvider:{source:[{url:"https://stmv1.srvstm.com/sistema7933/sistema7933/playlist.m3u8"}]},autoplay:true};
	var bradmaxPlayerConfig = {dataProvider:{source:[{url:n}]},autoplay:true};
	var element = document.getElementById("m3u8Player");
	var player = window.bradmax.player.create(element, bradmaxPlayerConfig);
//window.onload = function() {
  // Seu código JavaScript aqui
//};
}

}
function play() {
	if(!window.player) {
	window.player = player;
		}
}
	if(window.bradmax && window.bradmax.player) {
		setLink();

	} else {
window.addEventListener('load', setLink);
}
