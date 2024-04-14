function setLink() {	 
let m3u8Player = document.getElementById("m3u8Player");
let url = window.location.href;
let url = url.split('?source=');
let url = n;
let source = [{ url: n }];          
alert(n);

	//var bradmaxPlayerConfig = {dataProvider:{source:[{url:"https://stmv1.srvstm.com/sistema7933/sistema7933/playlist.m3u8"}]},autoplay:true};
	var bradmaxPlayerConfig = {dataProvider:{source:[{url:n}]},autoplay:true};
	var element = document.getElementById("m3u8Player");
	var player = window.bradmax.player.create(element, bradmaxPlayerConfig);
if(!window.player) {
				window.player = player;
			}
		}
		if(window.bradmax && window.bradmax.player) {
			setLink();
		} else {
			window.addEventListener('load', setLink);
}
