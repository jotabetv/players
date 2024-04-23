/*
    Copyright (c) 2024 Pierleeb
    SPDX-License-Identifier: MIT
    JBF-TV Player - R.Santana/BA
*/

function setLink(){
var input = document.form.input;
var inputText = input.value;
    if (input.value == ""){
window.alert("Url do vídeo ou áudio é obrigatório!");	
var jbf_tv = '';document.getElementById('jb_player').src=jbf_tv;

}else {
alert('Canal ' + inputText + ' inserido com sucesso!');
var jb_player = document.getElementById("jb_player");
var input = document.getElementById("input");
var inputText = input.value;
var jbf_tv = inputText;document.getElementById('jb_player').src=jbf_tv;
   }
}

function play(){
document.getElementsByTagName("iframe")[0].className = "fullScreen";
}
