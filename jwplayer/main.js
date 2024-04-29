/*
    Copyright (c) 2024 Pierleeb
    SPDX-License-Identifier: MIT
    JBF-TV Player - R.Santana/BA
$(window).on('load', function () {
    $('#input')[0].value = localStorage.getItem('m3u8-link') || '';
    $('#play-btn').on('click', function () {
        localStorage.setItem('m3u8-link', $('#input')[0].value);
        window.location.href = './player' + '?source=' + $('#input')[0].value;
    });
});
    

$(".rdo_confirm").change(function(){  
    if($(this).val() == "Y") {
    $(this).addClass("active");
            return false;
      $("#btn_save").attr("disabled",false);
    } else {
        $("#btn_save").attr("disabled",true);
    }
});
*/
$(window).on('load', function () {
    if($(this).val() == "") {
    $(this).addClass("active");
            return false;
         } else {
    $('#input')[0].value = localStorage.getItem('m3u8-link') || '';
    $('#play-btn').on('click', function () {
        localStorage.setItem('m3u8-link', $('#input')[0].value);
        window.location.href = './player' + '?source=' + $('#input')[0].value;
    });
    }
});
