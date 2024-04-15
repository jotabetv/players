//function setLink() {	
	//document.onload(funcaoPaginaCarregada(m3u8Player))
//function funcaoPaginaCarregada() {
//var m3u8Player = document.getElementById("m3u8Player");
//var url = window.location.href;
//url = url.split('?source=');
//url = n;
//alert(n);
//var source = [{ url: n }];          

    Copyright (c) 2024 Pierleeb
    SPDX-License-Identifier: MIT
*/
	 //  function setLinko() {
//alert('Seu tempo acabou!! Tente novamente!!');
//}
//setTimeout(setLink, 3000)
//function refresh(){
//var input = document.form.input;
//var inputText = input.value;
  //  if (input.value == ""){
	//window.alert("Url do vídeo ou áudio é obrigatório!");
       // return false;
//}else {
//alert('Canal ' + inputText + ' inserido com sucesso!');
//window.location.reload();
	//}
//}
//$(window).on("load", function(){
   // página totalmente carregada (DOM, imagens etc.)

//function setLink() {	
//var input = document.form.input;
//var inputText = input.value;
   // if (input.value == ""){
       // input.focus();
       // return false;
//}else {
	    document.onload(funcaoPaginaCarregada())
function funcaoPaginaCarregada() {
// coloca o que a função vai fazer após a página ser carregada

var m3u8Player = document.getElementById("m3u8Player");
//let Input = document.getElementById("Input");
var url = window.location.href;
url = url.split('?source=');
url = n;
alert(n);
	var bradmaxPlayerConfig = {dataProvider:{source:[{url:"https://stmv1.srvstm.com/sistema7933/sistema7933/playlist.m3u8"}]},autoplay:true};
	//var bradmaxPlayerConfig = {dataProvider:{source:[{url:n}]},autoplay:true};
	var element = document.getElementById("m3u8Player");
	var player = window.bradmax.player.create(element, bradmaxPlayerConfig);
}//
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
		alert('Seu tempo acabou!! Tente novamente!!');
}

