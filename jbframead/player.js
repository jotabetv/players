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
	var contAberta = $('#aberta a').length;
	var contCultur = $('#cultur a').length;
	var contEsport = $('#esport a').length;
	var contFilmes = $('#filmes a').length;
	var contGlobos = $('#globos a').length;
	var contInfant = $('#infant a').length;
	var contNotici = $('#notici a').length;
	var contRealit = $('#realit a').length;
	var contReligi = $('#religi a').length;
	var contVaried = $('#varied a').length;
	var contMovies = $('#movies a').length;
	var contAlfa6 = $('#beta6 a').length;
	document.getElementById("jb_beta").innerHTML = ('☑ Box Beta: ' + contBeta + ' Canais');
	document.getElementById("jb_alfa").innerHTML = ('☑ Box Alfa: ' + contAlfa + ' Canais');
	document.getElementById("jb_aberta").innerHTML = ('☑ TV Aberta: ' + contAberta + ' Canais');
	document.getElementById("jb_cultur").innerHTML = ('☑ Cultura: ' + contCultur + ' Canais');
	document.getElementById("jb_esport").innerHTML = ('☑ Esportes: ' + contEsport + ' Canais');
	document.getElementById("jb_filmes").innerHTML = ('☑ Filmes: ' + contFilmes + ' Canais');
	document.getElementById("jb_globos").innerHTML = ('☑ Globos: ' + contGlobos + ' Canais');
	document.getElementById("jb_infant").innerHTML = ('☑ Infantis: ' + contInfant + ' Canais');
	document.getElementById("jb_notici").innerHTML = ('☑ Notícias: ' + contNotici + ' Canais');
	document.getElementById("jb_realit").innerHTML = ('☑ Reality Show: ' + contRealit + ' Canais');
	document.getElementById("jb_religi").innerHTML = ('☑ Religiosos: ' + contReligi + ' Canais');
	document.getElementById("jb_varied").innerHTML = ('☑ Variedades: ' + contVaried + ' Canais');
	document.getElementById("jb_movies").innerHTML = ('☑ Movies: ' + contMovies + ' Canais');
	document.getElementById("jb_beta6").innerHTML = ('☑ Quantidade: ' + contBeta6 + ' Canais');
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
