(function(win, doc, $){

    function tableData(data, tmp){
        var tr = '';
        data.forEach(function(elem, index){
            var td = '';
            elem.forEach(function(e, i){
                td += `<td>${e}</td>`;
            });
            tr += `<tr>${td}</tr>`;
        });
        $(tmp).html(tr);
    }

    // 部门选择
    tableData(departmentSelection, '.left-content .left-container .bottom-content .table-container table');

    // 部门成员
    tableData(departmentMember, '.left-content .right-container .bottom-content .table-container table');

    // 权限信息条
    tableData(permissionInformation, '.center-content .top-content .left-container .table-container table');

    // 权限组交叉权限
    tableData(permissionGroupCrossPermission, '.center-content .top-content .right-container .table-container table');

    // 个性化授权
    tableData(personalizedAuthorization, '.center-content .center-container .table-container table');

    // 权限组授权
    tableData(authorityGroupAuthorization, '.center-content .bottom-content .table-container table');

    // 拥有的权限
    tableData(ownedPermissions, '.right-content .top-content .table-container table');

    // 可选择的权限组
    tableData(selectablePermissionGroup, '.right-content .center-container .table-container table');

    // 权限组(包商临时组)包含的门点
    tableData(doorPoint, '.right-content .bottom-content .table-container table');

})(window, document, jQuery);
