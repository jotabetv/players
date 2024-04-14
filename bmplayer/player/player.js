function play() {	 
let m3u8Player = document.getElementById("m3u8Player");
let Input = document.getElementById("m3u8-placeholder");
let inputText = input.value;
let url = input.value;
let n = input.value;
let source = [{ url: n }];          
alert(n);

	//var bradmaxPlayerConfig = {dataProvider:{source:[{url:"https://stmv1.srvstm.com/sistema7933/sistema7933/playlist.m3u8"}]},autoplay:true};
	var bradmaxPlayerConfig = {dataProvider:{source:[{url:n}]},autoplay:true};
	var element = document.getElementById("m3u8Player");
	var player = window.bradmax.player.create(element, bradmaxPlayerConfig);

}
