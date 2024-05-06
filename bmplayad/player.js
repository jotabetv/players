/*
    Copyright (c) 2024 Pierleeb
    SPDX-License-Identifier: MIT
    JBF-TV Player - R.Santana/BA
*/

function refresh(){
var input = document.form.input;
var inputText = input.value;
    if (input.value == ""){
	window.alert("Url do vídeo ou áudio é obrigatório!");
        return false;
}else {
	   // const input = document.querySelector("#input").value;
	   // localStorage.setItem("arquivo1", input);
  //console.log(input);
alert('Canal ' + inputText + ' inserido com sucesso!');
window.location.reload();
	}
}

function setLink() {	
	//let JbPlayer = document.getElementById("JbPlayer");
	    // let input = document.querySelector("#input").value;
	  // localStorage.setItem("inputText", input);
  //console.log(input);
var input = document.form.input;
var inputText = input.value;
    if (input.value == ""){
	    window.alert("Url do vídeo ou áudio é obrigatório!");
        input.focus();
        return false;
}else {
	    
//alert('Canal ' + inputText + ' inserido com sucesso!');
//window.location.reload();

//let Input = document.getElementById("Input");
let inputText = input.value;
let n = input.value;
	
	var bradmaxPlayerConfig = {dataProvider:{source:[{url:n}]},autoplay:true};
	var element = document.getElementById("JbPlayer");
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
