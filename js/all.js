$(document).ready(function(){
    $('.Quiz').hide();

    $('.Quiz-Start a').click(function(e) {
        e.preventDefault();
        $(this).parent().fadeOut(1000);
        $(this).parent().next().fadeIn(1000);
    });

    $('.select-Btn').each(function(){
        $(this).click(function(e){
            e.preventDefault();
            $('.select-Btn').removeClass('btn-light').addClass('btn-outline-light');
            $(this).removeClass('btn-outline-light').addClass('btn-light');
        });
    });

    $('.confirm-Btn').click(function(){
        var target = $('.select-Btn.btn-light');
        console.log(target.text());

        var Quiz = $(this).parent().parent();
        if(target.data('ans') == '1'){
            target.removeClass('btn-light').addClass('btn-success');
            Quiz.delay(500).fadeOut(1000);
            Quiz.next().delay(500).fadeIn(1000);
            target.removeClass('btn-light').addClass('btn-outline-light');
        }else if(target.data('ans') == '0'){
            target.removeClass('btn-light').addClass('btn-danger');
            Quiz.delay(500).fadeOut(1000);
            $('#Lose').delay(500).fadeIn(1000);
            target.removeClass('btn-light').addClass(' btn-outline-light');
        }else{
            console.log('你還沒選喔');
        }
    });
    $('#Lose a').click(function(){
        var target1 = $('.select-Btn.btn-success, .select-Btn.btn-danger');
        var target2 = $('.select-Btn.btn-danger');
        target1.removeClass('btn-success');
        target1.removeClass('btn-danger');
        $('#Lose').fadeOut(1000);
        $('.Quiz-Start').fadeIn(1000);
    })
    $('#End a').click(function(){
        var target1 = $('.select-Btn.btn-success, .select-Btn.btn-danger');
        var target2 = $('.select-Btn.btn-danger');
        target1.removeClass('btn-success');
        target1.removeClass('btn-danger');
        $('#End').fadeOut(1000);
        $('.Quiz-Start').fadeIn(1000);
    })

});





