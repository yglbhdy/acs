$(function () {

  var temporaryTimeGroup_tab = $('.temporaryTimeGroup>ul>li');
  var temporaryTimeGroup_div = $('.temporaryTimeGroup .inner>div');

  $.each(temporaryTimeGroup_tab, function (indexInArray, valueOfElement) {
    temporaryTimeGroup_div.eq(0).removeClass('none');
    $(this).click(function () {
      temporaryTimeGroup_tab.removeClass('active');
      $(this).addClass('active');
      temporaryTimeGroup_div.eq(indexInArray).removeClass('none').siblings().addClass('none');
    });

  });

})