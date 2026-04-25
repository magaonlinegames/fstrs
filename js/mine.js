
var soniaa = 0;

$(document).ready(function () {

});

// 2026 -april
function sonia(){
    // alert(soniaa);
    if (soniaa == 1) {
        soniaa = 0;
        $('.sonia_1').addClass('hide');
        $('.sn1').addClass('hide');
        $('.sn0').removeClass('hide');
        console.log('s1');
        
    }else if (soniaa == 0 || soniaa == '') {
        $('.sonia_1').removeClass('hide');
        $('.sn0').addClass('hide');
        $('.sn1').removeClass('hide');
        console.log('s0');
        soniaa = 1;
    }
}