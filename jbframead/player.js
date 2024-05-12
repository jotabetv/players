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
    localStorage.removeItem("input",document.getElementById("input").value);
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

// $(function(){
   
   var prods = []; // array para guardar os valores clicados
   // evento "click" nos links
   $(".canais a").click(function(e){
      
      e.preventDefault(); // cancela o evento do link
       var p = $(this).attr("rel"); //pega o valor do atributo "rel" do link clicado
      // verifica se o valor já existe na array.
      // se não existe, adiciona com "push"
      // se exite, remove "splice"
      var indice = prods.indexOf(p);
      if(indice < 0) {
  	    prods.push(p);
      } else {
  	    prods.splice(indice, 1);
      }
      // converte a array em string com os valores separados por vírgula
      // e insere no input
      $("#input").val(prods.join(","));
      
   });
   
});

//document.addEventListener("DOMContentLoaded", function(){

  // var els = document.body.querySelectorAll("a[href*='rel']");
   
  // for(var x=0; x<els.length; x++){
      
     // els[x].addEventListener("click", function(){
       //  var a_txt = this.textContent,
           //   inpt = document.body.querySelector("#input");
              
        // inpt.value += " "+a_txt;
   //   });
//   }

