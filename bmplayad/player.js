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


//alert('Canal ' + inputText + ' inserido com sucesso!');
localStorage.setItem("input",document.getElementById("input").value);
window.location.reload();

	}


}

//function setLink() {


//window.location.reload();
	


//}
window.addEventListener('load', function() {
let JbPlayer = document.getElementById("JbPlayer");
let Input = document.getElementById("Input");
let inputText = input.value;
let n = input.value;	
//var input = document.form.input;
//var inputText = input.value;
   // if (input.value == ""){
//window.alert("Url do vídeo ou áudio é obrigatório!");
     //   input.focus();
      //  return false;

//}else {

//window.alert('Canal ' + n + ' inserido com sucesso!');	
	var bradmaxPlayerConfig = {dataProvider:{source:[{url:n}]},autoplay:true};
	var element = document.getElementById("JbPlayer");
	var player = window.bradmax.player.create(element, bradmaxPlayerConfig);

//}
// Back compability.
	if(!window.player) {
	window.player = player;
		}
	//}
	if(window.bradmax && window.bradmax.player) {
		//setLink();
		//input.value = "";
	} else {
//window.addEventListener('load', setLink);
}
//window.addEventListener('load', function() {
});


function Carregar(){
            document.getElementById("input").value = localStorage.getItem("input");
        }
