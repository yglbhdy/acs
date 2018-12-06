$(function(){

    var selectionDepartmentX='';
    for(var i = 0;i<selectionDepartment.length;i++){
        selectionDepartmentX +=`<option value="${selectionDepartment[i]}">${selectionDepartment[i]}</option>`
    }
    $('.selectionDepartment select').html(selectionDepartmentX)


    var tr = '';
    table.forEach(function(element,index){
        var td = '';
        element.forEach(function(e,i){
            if(index ==0){
                td+=`<th>${e}</th>`
            }else{
                td+=`<td>${e}</td>`
            }
        })
        tr +=`<tr>${td}</tr>`
    })
    $('.regionalSetting_left_content table').html(tr)




})