/*
    Copyright (c) 2024 Pierleeb
    SPDX-License-Identifier: MIT
    JBF-TV Player - R.Santana/BA

if (this.value == "Bike") {
        $('#customer_two_wheel_input').show();
        alert($(this).val())
    }

else  {
        $('#customer_multiple_wheel_input').show();
        alert($(this).val())
    }
*/
$(window).on('load', function () {
    $('#m3u8-placeholder').hide();
if (this.value == "") {
        $('#m3u8-placeholder').show();
        alert($(this).val())
    }else  {
    
  $('#m3u8-placeholder')[0].value = localStorage.getItem('m3u8-link') || '';     
    $('#play-btn').on('click', function () {
        localStorage.setItem('m3u8-link', $('#m3u8-placeholder')[0].value);
        window.location.href = './player' + '?source=' + $('#m3u8-placeholder')[0].value;
    });
}
});
