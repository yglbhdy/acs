$(function(){

var oneBtn = $('.doorParameter-left>div');
var oneContent = $('.doorParameter-left>ul');
var showContent = 0;
var twoBtn = $('.doorParameter-left>ul>li>div');




oneBtn.click(function(){
    if(showContent == 1){
oneContent.css('display','block');
oneBtn.text('+')
showContent = 0;
    }else if(showContent == 0){
        oneContent.css('display','none');
        oneBtn.text('-')
        showContent = 1;
    }
})




 var $switch = false;
twoBtn.click(function(){
    $(this).siblings('ul').toggle();
    $switch = !$switch;
    $switch?$(this).text('+'):$(this).text('-');
})



})