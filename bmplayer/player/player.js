function setLink() {	
var m3u8Player = document.getElementById("player");
var n = window.location.href;
n = n.split('?source=');
//n = n[1];
alert(n);
	
	var bradmaxPlayerConfig = {dataProvider:{source:[{url:n}]},autoplay:true};
	var element = document.getElementById("player");
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
}
