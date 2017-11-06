$(document).ready(function () {
    //$.ajaxSetup({
    //    //不设置缓存 不然get方法会报304
    //    cache: false
    //});

    $.ajax({
        type: "get",
        url: "json/package.json",
        datatype: "json",
        //请求成功后 将大范围的节点添加到第一个select中
        success: function (data) {
            for (var i = 0; i < data.length; i++) {
                $("#province").append("<option id=" + data[i].id + " name=" + data[i].name + ">" + data[i].name + "</option>");
            }
        }
    });

    $("#province").change(function () {
        //当第一个select发生变化后 获取选中的option的id（-1是为了方面后面数组的操作,数组下标从零开始）,attr()用来获取属性的值。
        var lId = $("#province option:selected").attr("id") - 1;
        //清空第二个select的节点 不然会一直累计其中，清除节点并没有删除节点。
        $("#city").empty();
        $("#area").empty();
        $("#city").append("<option>--------请选择市区--------</option>");
        $("#area").append("<option>------请选择门店类型------</option>");
        $.ajax({
            type: "get",
            url: "json/package.json",
            datatype: "json",
            success: function (data) {
                for (var i = 0; i < data[lId].sons.length; i++) {
                    $("#city").append("<option id=" + data[lId].sons[i].id + " name=" + data[lId].sons[i].name + ">" + data[lId].sons[i].name + "</option>");
                }
            }
        });
    });

    $("#city").change(function () {
        var lId = $("#province option:selected").attr("id") - 1;
        var MId = $("#city option:selected").attr("id").toString().charAt(2);
        MId = parseInt(MId) - 1;
        //清空第三个select的节点 不然会一直累计其中，清除节点并没有删除节点。
        $("#area").empty();
        $("#area").append("<option>------请选择门店类型------</option>");
        $.ajax({
            type: "get",
            url: "json/package.json",
            datatype: "json",
            success: function (data) {
                for (var i = 0; i < data[lId].sons[MId].ssons.length; i++) {
                    $("#area").append("<option id=" + data[lId].sons[MId].ssons[i].id + " name=" + data[lId].sons[MId].ssons[i].name + ">" + data[lId].sons[MId].ssons[i].name + "</option>");
                }
            }
        });
    });
})
