/*
    Copyright (c) 2024 Pierleeb
    SPDX-License-Identifier: MIT
    JBF-TV Player - R.Santana/BA
*/

function play-btn() {
    var m3u8-placeholder = document.form.m3u8-placeholder;
    var m3u8-placeholderText = m3u8-placeholder.value;
    if (m3u8-placeholder.value == ""){
	window.alert("Url do vídeo ou áudio é obrigatório!");
        m3u8-placeholder.focus();
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
