$(function(){
    var tr = '';
   controll.forEach(function(e,i){
    var td = '';
       e.forEach(function(ele,index){
           if(i==0){
               td +=`<th>${ele}</th>`;
           }else{
               td +=`<td>${ele}</td>`;
           }
       });
       tr +=`<tr>${td}</tr>`
   })
$('.tableDiv-content>table').html(tr)




var ul = '';
fixedBtn.forEach(function(e,i){
var btn = '';
e.forEach(function(ele,index){
    btn +=`<li><button>${ele}</button></li>`
})
ul +=`<ul>${btn}</ul>`
})
$('.tableDiv-right-box').html(ul);



})

