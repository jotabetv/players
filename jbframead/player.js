/*
    Copyright (c) 2024 Pierleeb
    SPDX-License-Identifier: MIT
    JBF-TV Player - R.Santana/BA
*/

function setLink(){
    var input = document.form.input;
    var inputText = input.value;
        if (input.value == ""){
            window.alert("Url do vídeo ou áudio é obrigatório!");	
    var jbf_tv = '';document.getElementById('jb_frame').src=jbf_tv;

        }else {
            window.alert('Canal ' + inputText + ' inserido com sucesso!');
    var jb_player = document.getElementById("jb_frame");
    var input = document.getElementById("input");
    var inputText = input.value;
    var jbf_tv = inputText;document.getElementById('jb_frame').src=jbf_tv;
       }
            input.value = ''
    }

function play(){
    var iframe = document.querySelector('#jb_frame');
        // Do fullscreen
        if (iframe.requestFullscreen) {
             iframe.requestFullscreen();
        } else if (iframe.webkitRequestFullscreen) {
            iframe.webkitRequestFullscreen();
        } else if (iframe.mozRequestFullScreen) {
            iframe.mozRequestFullScreen();
        } else if (iframe.msRequestFullscreen) {
            iframe.msRequestFullscreen();
        }
    }

document.addEventListener("DOMContentLoaded", function(){

   var els = document.body.querySelectorAll("a[href*='onclick']");
   
   for(var x=0; x<els.length; x++){
      
      els[x].addEventListener("click", function(){
         var a_txt = this.textContent,
              inpt = document.body.querySelector("#input");
              
         inpt.value += " "+a_txt;
      });
   }

});
