function play() {	 
var m3u8Player = document.getElementById("m3u8Player");
var Input = document.getElementById("m3u8-placeholder");
var url = window.location.href;
url = url.split('?source=');
url = n;
var source = [{ url: n }];          
alert(n);

	//var bradmaxPlayerConfig = {dataProvider:{source:[{url:"https://stmv1.srvstm.com/sistema7933/sistema7933/playlist.m3u8"}]},autoplay:true};
	var bradmaxPlayerConfig = {dataProvider:{source:[{url:n}]},autoplay:true};
	var element = document.getElementById("m3u8Player");
	var player = window.bradmax.player.create(element, bradmaxPlayerConfig);

}
