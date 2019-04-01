$(document).ready(function() {

//选项卡切换		
var $ap=$(".plalist p");
$ap.click(function(){
$(this).addClass("acti").siblings().removeClass("acti");
var index=$ap.index(this);
$(".selectm5 .plamain").eq(index).show().siblings(".plamain").hide();
});		


});