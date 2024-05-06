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
//alert('Canal ' + inputText + ' inserido com sucesso!');
localStorage.setItem("input",document.getElementById("input").value);
window.location.reload();
	}
}

window.addEventListener('load', function() {
let JbPlayer = document.getElementById("JbPlayer");
let Input = document.getElementById("Input");
let inputText = input.value;
let n = input.value;	

	var bradmaxPlayerConfig = {dataProvider:{source:[{url:n}]},autoplay:true};
	var element = document.getElementById("JbPlayer");
	var player = window.bradmax.player.create(element, bradmaxPlayerConfig);
localStorage.clear("input",document.getElementById("input").value);
window.alert('Canal ' + n + ' inserido com sucesso!');
});
