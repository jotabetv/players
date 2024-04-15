    Copyright (c) 2024 Pierleeb
    SPDX-License-Identifier: MIT
*/
function setLink() {	
var m3u8Player = document.getElementById("m3u8Player");

	var bradmaxPlayerConfig = {dataProvider:{source:[{url:"https://stmv1.srvstm.com/sistema7933/sistema7933/playlist.m3u8"}]},autoplay:true};
	//var bradmaxPlayerConfig = {dataProvider:{source:[{url:n}]},autoplay:true};
	var element = document.getElementById("m3u8Player");
	var player = window.bradmax.player.create(element, bradmaxPlayerConfig);

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
		
//var newurl = window.location.href;
//n = newurl.split('?source=');
//url = n[1];
//alert(n);
}

