/*
    Copyright (c) 2024 Pierleeb
    SPDX-License-Identifier: MIT
    JBF-TV Player - R.Santana/BA
*/
var jw = document.getElementById('player');
var playerInstance = jwplayer("player");
playerInstance.setup({
playlist: [{
        file: ".m3u8",
        image: "https://imagem.natelinha.uol.com.br/original/5-emissoras-logo_eda9a984911a03a687f473e5711706ca959183e5.jpeg",
        title: "JBF-TV",
        description: "Todos os Canais em um só Lugar!"
}],
    autostart: false,
    mute: false,
    controls: true,
    aspectratio: "16:9",
    stretching: "exactfit",      //uniform|fill|exactfit|bestfit|none
    type: "hls",
    primary: "flash",
    repeat: true,
    height: '480',
    width: '840',
      listbar: {
        position: "right",
        size: 280
      }
          });

function setLink() {
    var input = document.form.input;
    var inputText = input.value;
    if (input.value == ""){
	window.alert("Url do vídeo ou áudio é obrigatório!");
        input.focus();
        return false;
}else {
    let m3u8Player = document.getElementById("m3u8Player")
    let Input = document.getElementById("Input")
    let inputText = input.value  
    let Input1 = document.getElementById("Input1")
    let input1Text = input1.value
    let Input2 = document.getElementById("Input2")
    let input2Text = input2.value
    
   var playlist = jwplayer().getPlaylist();
   var newItem = {
        file: input.value,
        image: input1.value,
        title: input2.value
    };
    
    if(jwplayer().getState() != "PLAYING"){
        playlist.push(newItem);
        jwplayer().load(playlist);
    } else {
        playlist.push(newItem);
        var curpos = jwplayer().getPosition();
        jwplayer().onPlaylist(function(){
            jwplayer().seek(curpos);
        });
        jwplayer().load(playlist).onPlaylist(function(){
            jwplayer().seek(curpos);
        });
    }
}

window.alert('Canal ' + input2.value + ' inserido com sucesso!');

input.value = '',
input1.value = '',
input2.value = ''
}

function next() {
let player = document.getElementById("player")
jwplayer().playlistNext();
jwplayer().play(true);
}
