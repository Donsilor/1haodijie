
//ÏÂÀ­¿ò
(function ($){
    $.fn.input = function (){
        var iptlabel = $(this).find("input[for='label']");
        var iptvalue = $(this).find("input[for='value']");
        var ul = $(this).find('ul');
        var li = ul.find('li');
        var btn = $(this).find('.pubicon');
        iptlabel.click(function (){
            ul.show();
            return false;
        });

        btn.click(function (){
            ul.show();
            return false;
        });
        li.click(function (){
            iptlabel.val($(this).html());
            iptvalue.val($(this).attr("data"));
            ul.hide();
            return false;
        }).mouseover(function (){
            $(this).css({
                'background' : '#008fe7',
                'color' : '#fff'
            })
        }).mouseout(function (){
            $(this).css({
                'background' : '#fff',
                'color' : '#333'
            });
        });
        $(document).click(function (){
            ul.hide();
        });
    }
})(jQuery);

var width=$('.sel-boxone').find('input').width();
$('.sel-boxone').find('ul').width(width+10);

$('#xclose').click(function () {
    $(this).parent().hide();
});

