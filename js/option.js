$(document).ready(function() {

//选项卡切换		
var $ap=$(".main_option .opt_span");
$ap.click(function(){
$(this).addClass("opt_zt").siblings().removeClass("opt_zt");
var index=$ap.index(this);
$(".option_cont .opt_ctn").eq(index).show().siblings(".opt_ctn").hide();
});		

//选项卡切换		
var $bp=$(".thumbnail .slt");
$bp.click(function(){
$(this).addClass("slt_dqzt").siblings().removeClass("slt_dqzt");
var index=$bp.index(this);
$(".DetailsFigure .xqt").eq(index).show().siblings(".xqt").hide();
});		

//选项卡切换		
var $cp=$(".TAB_option .TAB_opt");
$cp.click(function(){
$(this).addClass("TAB_zt").siblings().removeClass("TAB_zt");
var index=$cp.index(this);
$(".TAB_content .TAB_cont").eq(index).show().siblings(".TAB_cont").hide();
});		

//选项卡切换		
var $dp=$(".TAB_options .TAB_opt");
$dp.click(function(){
$(this).addClass("TAB_optZt").siblings().removeClass("TAB_optZt");
var index=$dp.index(this);
$(".TAB_cont .TAB_ctn").eq(index).show().siblings(".TAB_ctn").hide();
});		


});