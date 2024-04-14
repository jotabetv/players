function setLink() {	 
var m3u8Player = document.getElementById("m3u8Player");
var url = window.location.href;
var url = url.split('?source=');
var url = n;
alert(n);
var source = [{ url: n }];          


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
