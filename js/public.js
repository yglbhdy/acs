(function(win, doc, $){

    $(function(){
        $(win).resize(function(){
            $('section').height($(win).height());
            $('section .sec .sec-container').outerWidth($('section .sec').width() - $('section .sec nav').outerWidth());
        })
        $('section').height($(win).height());
        $('section .sec .sec-container').outerWidth($('section .sec').width() - $('section .sec nav').outerWidth());

        var firTmp = '';
        for(var i=0;i<navList.length;i++){
            var secTmp = '';
            for(var j=0;j<navList[i].navArr.length;j++){
                secTmp += `
                <li class="sec-slide">
                    <img src="${navList[i].navSlideImg[j]}.png">
                    <a href="./${navList[i].navSlideImg[j]}.html">${navList[i].navArr[j]}</a>
                </li>
                `;
            }
            firTmp += `
            <li class="fir-menu">
                <a class="fir-slide" href="javascript:;">${navList[i].name}</a>
                <ul>${secTmp}</ul>
            </li>
            `;
        }
        $('section nav > ul').html(firTmp);
        
    });

})(window, document, jQuery);