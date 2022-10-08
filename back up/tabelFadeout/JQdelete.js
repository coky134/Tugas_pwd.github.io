$(document).ready(function(){
    $('.data').click(function(){
        let isi = $(this).text();
        let tid = $(this).prop('id');
        let rid = tid.split('_');
        let id_br = rid[1];
        let mhs = $('#mhs_'+id_br).text();

        if(isi=='Hapus'){
            let konfirmasi = confirm(`Sudah yakin di hapus ${mhs}?`);
            if(!konfirmasi) return;

            $('#br_'+id_br).fadeOut();
        }else{
            alert("Anda mengklik kolom yang berisi : " + $(this).html() + "!");
        }
    })
})