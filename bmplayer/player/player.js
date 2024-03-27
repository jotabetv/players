var video = document.getElementById('player');

//var config = {
       // "autoplay": true,
       // dataProvider: {
           // source: [
             //   { url: "http://tv.mapfibra.com.br/live/1496/123456/19.m3u8" }
           // ]
       // }
  //  };

    /** find player container in html DOM tree. */
  //  var element = document.getElementById("player");

    /** create player */
  //  var player = window.bradmax.player.create(element, config);
    var config = {
        dataProvider: {
            source: [
                { url: "http://tv.mapfibra.com.br/live/1496/123456/19.m3u8" }
            ]
        }
    };
  function myFunc(){

     var newurl = window.location.href;
newurl = newurl.split('?src=');
newurl = newurl[1];
source = [{ url: newurl }];
window.bradmaxutil.load(source);
//alert(newurl);      
var element = document.getElementById("player");
 var player = window.bradmax.player.create(element, config);
//alert(newurl);
// Aqui vai o codigo que vai rodar antes da pagina ser carregada...
}
window.onload = myFunc; 
//window.bradmaxutil.config
//source = {url:newurl};
//window.bradmax.player.create(element, config).loadVideoByUrl(source);
//window.bradmax.player.create(element, config).onPlay(true);

// function alerta() { alert('ok'); }
//var button = "<button type='button' onclick='alerta();'>start</button>";

//var body = document.body;
//body.insertAdjacentHTML('beforeend', button); 

(()=>{"use strict";({9570:function(){var t=this&&this.__assign||function(){return t=Object.assign||function(t){for(var e,i=1,r=arguments.length;i<r;i++)for(var l in e=arguments[i])Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l]);return t},t.apply(this,arguments)},e=function(){function e(){var e,i=this;this.videoUrl=window.bradmaxutil.movie.tos.source[0].url,this.formSelector="form#data-provider-src-form",this.urlInputSelector="input#data-provider-src-input",this.NAME="url-playback",this.playerSelector="div#".concat(this.NAME,"-player"),this.manifestUrlAttrName="data-manifest-url",this.playerConfig=t({},window.bradmaxutil.config),this.handleOption=function(t){var e;i.urlInputElement&&(i.urlInputElement.value=(null===(e=null==t?void 0:t.target)||void 0===e?void 0:e.getAttribute(i.manifestUrlAttrName))||""),i.handleSubmit()},this.formElement=document.querySelector(this.formSelector),this.urlInputElement=document.querySelector(this.urlInputSelector),this.playerElement=document.querySelector(this.playerSelector),document.querySelectorAll("[".concat(this.manifestUrlAttrName,"]")).forEach((function(t){return t.addEventListener("click",(function(t){return i.handleOption(t)}))})),null===(e=this.formElement)||void 0===e||e.addEventListener("submit",(function(t){return i.handleSubmit(t)})),this.initPlayer(),this.urlInputElement&&(this.urlInputElement.value=this.videoUrl),this.selectedUrl=this.videoUrl}return e.prototype.initPlayer=function(t){var e,i;this.bxPlayer&&this.bxPlayer.destroy(),this.bxPlayer=null===(i=null===(e=window.bradmax)||void 0===e?void 0:e.player)||void 0===i?void 0:i.create(this.playerElement,t||this.playerConfig),this.bxApi=this.bxPlayer.modules.JavascriptApi},e.prototype.handleSubmit=function(t){var e,i,r;t&&!t.defaultPrevented&&(t.preventDefault(),t.stopPropagation());var l=(null===(e=this.formElement)||void 0===e?void 0:e.reportValidity())||!1;if(null===(i=this.formElement)||void 0===i||i.classList.add("was-validated"),l){var n=(null===(r=this.urlInputElement)||void 0===r?void 0:r.value)||"";if(this.selectedUrl==this.videoUrl&&n==this.videoUrl&&this.bxApi)return this.scrollToPlayer(),void this.bxApi.play();null!=n&&""!=n&&n!=this.selectedUrl&&(this.initPlayer({autoplay:!0,dataProvider:{title:"",source:[{url:n}]}}),this.selectedUrl=n)}},e.prototype.scrollToPlayer=function(){var t;null===(t=document.querySelector("div#bradmax-media-player"))||void 0===t||t.scrollIntoView()},e}();window.bradmaxutil.load((function(){return new e}))}})[9570]()})();
