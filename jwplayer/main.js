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
    $('#input').hide();
if (this.value == "") {
        $('#input').show();
        alert($(this).val())
    }else  {
    
  $('#input')[0].value = localStorage.getItem('m3u8-link') || '';     
    $('#play-btn').on('click', function () {
        localStorage.setItem('m3u8-link', $('#input')[0].value);
        window.location.href = './player' + '?source=' + $('#input')[0].value;
    });
}
});
