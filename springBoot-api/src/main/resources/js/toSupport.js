function to(e){
    var indicator = e.getAttribute("indicator");
    var rank = e.getAttribute("rank");
    var kind = e.getAttribute("kind");
    if (indicator!=null){
        var a = confirm("确定要进入【"+ indicator +"】优化分析界面吗？");
        // var frm = window.event.srcElement;
        if(a==true){window.location.href="entrance.html?indicator="+indicator+"&rank="+rank+"&kind="+kind;return true;}
    }else if (indicator==null||indicator==""){
        var b = confirm("确定要进入优化分析界面吗？");
        if(b==true){window.location.href="entrance.html";return true;}
    }else{
        return false;
    }
}

    function getValue() {
        var value = document.indicatorForm.select.val();
    }
    //提取url中的参数
    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURI(r[2]);
        return null;
    }

    <!--    根据url 选择select的option-->
        $(function() {
            var rank = getUrlParam("rank");
            var select_rank= [];//获取select下拉框的所有值
            $("#rank option").each(function () {
                var option_con = $(this).val();
                select_rank.push(option_con);
            })
            //找到对应选项，追加selected
            for (var j = 0; j < select_rank.length; j++) {
                if (select_rank[j] == rank) {
                    $("#rank option[value='"+select_rank[j]+"']").attr("selected", "selected");
                };}

            var indicator = getUrlParam("indicator");
            var select_indicator= [];
            $("#indicator option").each(function () {var option_con = $(this).val();select_indicator.push(option_con);})
            for (var j = 0; j < select_indicator.length; j++) {
                if (select_indicator[j] == indicator) {
                    $("#indicator option[value='"+select_indicator[j]+"']").attr("selected", "selected");
                };}

            var kind = getUrlParam("kind");
            var select_kind= [];
            $("#kind option").each(function () {var option_con = $(this).val();select_kind.push(option_con);})
            for (var j = 0; j < select_kind.length; j++) {
                if (select_kind[j] == kind) {
                    $("#kind option[value='"+select_kind[j]+"']").attr("selected", "selected");
                };}

            var question = getUrlParam("question");
            document.getElementById('question').value=question;
            var checker = getUrlParam("checker");
            document.getElementById('checker').value=checker;
        })


    function back(a){
        var url = a.getAttribute("toHTML")
        window.location.href=url+"?indicator="+indicator+"&rank="+rank+"&kind="+kind
            +"&question="+question+"&userDate="+userDate+"&checker="+checker;
    }


