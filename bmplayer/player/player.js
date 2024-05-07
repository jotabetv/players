/*
    Copyright (c) 2024 Pierleeb
    SPDX-License-Identifier: MIT
    JBF-TV Player - R.Santana/BA
*/

function setLink() {	
var jb_player = document.getElementById("jb_player");
var n = window.location.href;
n = n.split('?source=');
n = n[1];
//alert(n);
	
	var bradmaxPlayerConfig = {dataProvider:{source:[{url:n}]},autoplay:true};
	var element = document.getElementById("jb_player");
	var player = window.bradmax.player.create(element, bradmaxPlayerConfig);
// Back compability.
	if(!window.player) {
	window.player = player;
		}
	}
	
