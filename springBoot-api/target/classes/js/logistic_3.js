charts=[];
//home
function home_A() {
    // 基于准备好的dom，初始化echarts实例
    var myChart_home_A = echarts.init(document.getElementById('home_A'));

    charts.push(myChart_home_A);
    // 指定图表的配置项和数据
    var option = {
        title: {
            text: ''
        },
        tooltip: {},
        legend: {
            data: ['当日', '月平均']
        },
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#fff',
                    backgroundColor: '#999',
                    borderRadius: 3,
                    padding: [3, 5]
                }
            },
            indicator: [
                { name: '人员', max: 6500},
                { name: '设备', max: 16000},
                { name: '流程', max: 30000},
                { name: '质量', max: 38000},
                { name: '物流', max: 52000},

            ]
        },
        series: [{
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [
                {
                    value: [4300, 10000, 28000, 35000, 50000],
                    name: '当日'
                },
                {
                    value: [5000, 14000, 28000, 31000, 42000],
                    name: '月平均'
                }
            ]
        }]
    };

    setInterval(function () {
        option.series[0].data[1].value = [5000, 14000, 28000, 31000, 42000];
        myChart_home_A.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_home_A.setOption(option);

}


//------------------------部件 1 错检率--quality_A_1_M2----------------------//
//------------------------数据

//------------------------部件 2 漏检率--quality_A_1_R1----------------------//
//------------------------数据



$(function(){
    home_A();
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

        // 获取已激活的标签页的名称
        var activeTab = $(e.target).text();
        // 获取前一个激活的标签页的名称
        var previousTab = $(e.relatedTarget).text();
        /*$(".active-tab span").html(activeTab);
        $(".previous-tab span").html(previousTab);*/
        // alert(activeTab);
        if(activeTab=="总览"){
            home_A();
        }
        if (activeTab=="设备KPI"){

            equipment_A();
            equipment_A_1();
            equipment_A_2();
            equipment_A_3();
            equipment_A_4();
            equipment_A_5();
        }
    });
});
//resize图表
window.onresize=function () {
    for(var i=0;i<charts.length;i++){
        charts[i].resize();
    }
}