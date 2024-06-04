/*
    Copyright (c) 2024 Pierleeb
    SPDX-License-Identifier: MIT
    JBF-TV Player - R.Santana/BA
   document.write
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

function PopLink(){
	$("#boxlink").load("meninks.txt");
	}

// Ao clicar nos elementos #overlay ou #close fecha a caixa
$( '#overlay, #close').on('click', function(event) {
    $("#contcanal, #overlay").hide();
});

$( '#show').on('click', function(event) {
    $("#contcanal, #overlay").show();
	var contBeta = $('#beta a').length;
	var contAlfa = $('#alfa a').length;
	var contBeta1 = $('#beta1 a').length;
	var contAlfa1 = $('#alfa1 a').length;
	var contBeta2 = $('#beta2 a').length;
	var contAlfa2 = $('#alfa2 a').length;
	var contBeta3 = $('#beta3 a').length;
	var contAlfa3 = $('#alfa3 a').length;
	var contBeta4 = $('#beta4 a').length;
	var contAlfa4 = $('#alfa4 a').length;
	var contBeta5 = $('#beta5 a').length;
	var contAlfa5 = $('#alfa5 a').length;
	var contBeta6 = $('#beta6 a').length;
	var contAlfa6 = $('#alfa6 a').length;
	document.getElementById("jb_beta").innerHTML = ('☑ Quantidade: ' + contBeta + ' Canais');
	document.getElementById("jb_alfa").innerHTML = ('☑ Quantidade: ' + contAlfa + ' Canais');
	document.getElementById("jb_beta1").innerHTML = ('☑ Quantidade: ' + contBeta1 + ' Canais');
	document.getElementById("jb_alfa1").innerHTML = ('☑ Quantidade: ' + contAlfa1 + ' Canais');
	document.getElementById("jb_beta2").innerHTML = ('☑ Quantidade: ' + contBeta2 + ' Canais');
	document.getElementById("jb_alfa2").innerHTML = ('☑ Quantidade: ' + contAlfa2 + ' Canais');
	document.getElementById("jb_beta3").innerHTML = ('☑ Quantidade: ' + contBeta3 + ' Canais');
	document.getElementById("jb_alfa3").innerHTML = ('☑ Quantidade: ' + contAlfa3 + ' Canais');
	document.getElementById("jb_beta4").innerHTML = ('☑ Quantidade: ' + contBeta4 + ' Canais');
	document.getElementById("jb_alfa4").innerHTML = ('☑ Quantidade: ' + contAlfa4 + ' Canais');
	document.getElementById("jb_beta5").innerHTML = ('☑ Quantidade: ' + contBeta5 + ' Canais');
	document.getElementById("jb_alfa5").innerHTML = ('☑ Quantidade: ' + contAlfa5 + ' Canais');
	document.getElementById("jb_beta6").innerHTML = ('☑ Quantidade: ' + contBeta6 + ' Canais');
	document.getElementById("jb_alfa6").innerHTML = ('☑ Quantidade: ' + contAlfa6 + ' Canais');
});

/*
var a = document.getElementsByTagName('a').length;
$(document).ready(function(){
  
        $('.btn1').click(function(){
		var contar = document.getElementById("jb_contar");
        var elementCount = $('#beta a').length;
var elementAlfa = $('#alfa a').length;
window.alert('Pop Beta ' + elementCount +' Canais e Pop Alfa ' + elementAlfa +' Canais');
 });
  
    });

function myFunction() {
	var contar = document.getElementById("jb_contar");
	var a = document.getElementsByTagName('a').length;
	document.getElementById("jb_contar").innerHTML = ('Quantidade de Canais: ' + a);
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
 $(document).ready(function(){
  
        $('.btn1').click(function(){
var conta = document.getElementById("jb_conta");
            var elementCount = $('#beta a').length;
  
            alert(elementCount + ' Canais');
        });
  
    });


function contou(){
var jb_qtde = document.getElementById("jb_qtde");
var a = document.getElementsByTagName('a').length;
document.write(' ' + a +' Canais');
}

function PopLink() {
    $.ajax({
        url: "meninks.txt",
        cache: true,
        success: function(html){
            $("#boxlink").html(html);
        },
    });
}

 $(function(){
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
	    window.alert(p);
      $("#input").val(prods.join(","));
    prods.length = 0;  
   });
   
});



document.addEventListener("DOMContentLoaded", function(){

   var els = document.body.querySelectorAll("a[href*='rel']");
   
   for(var x=0; x<els.length; x++){
      
      els[x].addEventListener("click", function(){
         var a_txt = this.textContent,
              inpt = document.body.querySelector("#input");
	      
         inpt.value += " "+a_txt;
      });
   }

*/
