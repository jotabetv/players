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
        return false;
}else {
window.alert('Canal ' + inputText + ' inserido com sucesso!');
window.location.reload();
	}
}

window.addEventListener('load', function() {
var jb_player = document.getElementById("jb_player");
	 var input = document.querySelector("#input").value;
	 localStorage.setItem("arquivo1", input);
//var input = document.getElementById("input");
var localStorage.setItem("arquivo1") = input.value;
var n = input.value;

	//window.alert('Canal ' + localStorage.getItem("arquivo1") + ' inserido com sucesso!');
	var bradmaxPlayerConfig = {dataProvider:{source:[{url:n}]},autoplay:true};
	var element = document.getElementById("JbPlayer");
	var player = window.bradmax.player.create(element, bradmaxPlayerConfig);
//}
// Back compability.
	if(!window.player) {
	window.player = player;
		}
	}
	if(window.bradmax && window.bradmax.player) {
		setLink();
		//input.value = "";
	} else {
//window.addEventListener('load', setLink);
}
});
