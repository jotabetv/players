/*
    Copyright (c) 2024 Pierleeb
    SPDX-License-Identifier: MIT
    JBF-TV Player - R.Santana/BA
$(window).on('load', function () {
    $('#input')[0].value = localStorage.getItem('m3u8-link') || '';
    $('#play-btn').on('click', function () {
        localStorage.setItem('m3u8-link', $('#input')[0].value);
        window.location.href = './player' + '?source=' + $('#input')[0].value;
    });
});
    
function setLink() {	
var input = document.form.input;
var inputText = input.value;
    if (input.value == ""){
        input.focus();
        return false;
}else {
let JbPlayer = document.getElementById("JbPlayer");
let Input = document.getElementById("Input");
let inputText = input.value;
let n = input.value;
     
localStorage.setItem('m3u8-link', $('#input')[0].value);
window.location.href = './player' + '?source=' + $('#input')[0].value;
*/
function setLink(){
var input = document.form.input;
var inputText = input.value;
    if (input.value == ""){
	window.alert("Url do vídeo ou áudio é obrigatório!");
	input.focus();
        return false;
}else {
let jb_player = document.getElementById("jb_player");
let input = document.getElementById("input");
let inputText = input.value;
alert('Canal ' + inputText + ' inserido com sucesso!');
window.location.href = './player' + '?source=' + inputText;	   
	}
}
