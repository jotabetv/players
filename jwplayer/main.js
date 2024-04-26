/*
    Copyright (c) 2024 Pierleeb
    SPDX-License-Identifier: MIT
    JBF-TV Player - R.Santana/BA
*/

function play-btn() {
    var input = document.form.input;
    var inputText = input.value;
    if (input.value == ""){
	window.alert("Url do vídeo ou áudio é obrigatório!");
        input.focus();
        return false;
}else {

$(window).on('load', function () {
    $('#m3u8-placeholder')[0].value = localStorage.getItem('m3u8-link') || '';
    $('#play-btn').on('click', function () {
        localStorage.setItem('m3u8-link', $('#m3u8-placeholder')[0].value);
        window.location.href = './player' + '?source=' + $('#m3u8-placeholder')[0].value;
    });
});
    }
