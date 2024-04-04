/*
    Copyright (c) 2024 Pierleeb
    SPDX-License-Identifier: MIT
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
    primary:"flash",
    repeat: true,
    height: '480',
    width: '840',
      listbar: {
        position: "right",
        size: 280
      }
          });

function setLink() {
let m3u8Player = document.getElementById("m3u8Player")
    let Input = document.getElementById("Input")
    let inputText = input.value
    let Input1 = document.getElementById("Input1")
    let input1Text = input1.value
    let Input2 = document.getElementById("Input2")
    let input2Text = input2.value

    playlist = { file: input.value, 
                image: input1.value,
                title: input2.value };
jwplayer().load(playlist);
//jwplayer().play();

alert('Canal ' + input2.value + ' inserido com sucesso!');
  }

function next() {
let player = document.getElementById("player")
jwplayer().playlistNext();
jwplayer().play(true);
}