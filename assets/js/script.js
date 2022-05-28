$('.js-scroll-trigger').on('click', function(e) {
    
    //ambil isi href
    var tujuan =$(this).attr('href');
    //tangkap elemen ybs
    var elemenTujuan = $(tujuan);
    $('html, body').animate ({
        scrollTop : elemenTujuan.offset().top - 60
    },1000,'swing');
    e.preventDefault();
})
