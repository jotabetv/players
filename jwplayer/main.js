/*
    Copyright (c) 2024 Pierleeb
    SPDX-License-Identifier: MIT
    JBF-TV Player - R.Santana/BA

$(window).on('load', function () {
if ($("#m3u8-placeholder").val() != '') {
    setflag = false;
    alert("cole o link aqui")
} else {
*/
$(window).on('load', function () {
  if ($('#m3u8-placeholder')[0].value = localStorage.getItem('m3u8-link') || '';) {
      setflag = false;
    alert("cole o link aqui")
}else {
    $('#play-btn').on('click', function () {
        localStorage.setItem('m3u8-link', $('#m3u8-placeholder')[0].value);
        window.location.href = './player' + '?source=' + $('#m3u8-placeholder')[0].value;
    });
}
});
