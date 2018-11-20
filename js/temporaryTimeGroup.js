$(function(){
var temporaryTimeGroup_tab = $('.temporaryTimeGroup>ul>li');
console.log(temporaryTimeGroup_tab.length)
var temporaryTimeGroup_div = $('.temporaryTimeGroup .inner>div');
console.log(temporaryTimeGroup_div.length)

$.each(temporaryTimeGroup_tab, function(indexInArray, valueOfElement) { 
    temporaryTimeGroup_div.eq(0).removeClass('none');
    $(this).click(function(){
      temporaryTimeGroup_div.eq(indexInArray).removeClass('none').siblings().addClass('none');
    })

});




})