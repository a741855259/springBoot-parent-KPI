

//定义一个全局变量接受图表，以便resize——————————————————————————————这里是把所有的图表放进去 可以自己调整宽度
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


//---------------------------------------------------------------上面的先不要动------------------------------------
//质量图表函数
//-------------------------------------------------------------------------------------------------
function ajax21() {
//------------------------车间级别 表1 在制品返工率

//------------------------数据
    $.post("QualityKPI/update4",{},function (data) {
        p_miss_alarm_rate = [];
        p_miss_alarm_rate[0]=data.data[0]. p_miss_alarm_rate*100;
        p_miss_alarm_rate[1]=data.data[1]. p_miss_alarm_rate*100;
        p_miss_alarm_rate[2]=data.data[2]. p_miss_alarm_rate*100;
        p_miss_alarm_rate[3]=data.data[3]. p_miss_alarm_rate*100;
        p_miss_alarm_rate[4]=data.data[4]. p_miss_alarm_rate*100;

        // alert(wip_reject_rate)
    })

}
$(function () {
    ajax21();
    setInterval(ajax21,3000);
})

//------------------------图表

$(function quality_A_L1_1(){

    var myChart_quality_A_L1_1 = echarts.init(document.getElementById('quality_A_L1_1'));
    charts.push(myChart_quality_A_L1_1);



    var option = {
        color:['#FD6C88'],
        tooltip : {
            trigger: 'item',
            formatter: "{b}<br/>{a}<br/>{c}%"
        },

        grid:{
            left: '5%',
            right: '5%',
            bottom: '10%',
            containLabel: true
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['部件A','部件B','部件C','部件D','部件E',],
                axisLine:{
                    lineStyle:{
                        color: '#87cefa'
                    },
                },
                axisLabel : {
                    interval:0,
                    rotate:40,

                    textStyle: {
                        color: '#fff',
                        fontSize:13
                    }
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLine:{
                    lineStyle:{
                        color: '#87cefa'
                    },
                },
                splitLine: {
                    "show": false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    },
                    formatter: function (value) {
                        return value + "%"
                    },
                },
            }
        ],
        series : [
            {
                name:'漏检率',
                type:'line',

                itemStyle: {normal: {areaStyle: {}}},
                data:[1, 2, 1, 4, 3,]
            },

        ]

    };


    setInterval(function () {
        option.series[0].data =  p_reject_rate//改这里

        myChart_quality_A_L1_1.setOption(option, true);
    },500);
    myChart_quality_A_L1_1.setOption(option);
})



//---------------------------------------------------------------------------------------
//------------------------车间级别 表2 返工率

//------------------------数据
function ajax12() {
//------------------------车间级别 表1 在制品返工率

//------------------------数据
    $.post("QualityKPI/update3",{},function (data) {
        cp_miss_alarm_rate = [];
        cp_miss_alarm_rate[0]=data.data[0]. cp_miss_alarm_rate*100;
        cp_miss_alarm_rate[1]=data.data[1]. cp_miss_alarm_rate*100;
        cp_miss_alarm_rate[2]=data.data[2]. cp_miss_alarm_rate*100;
        cp_miss_alarm_rate[3]=data.data[3]. cp_miss_alarm_rate*100;
        cp_miss_alarm_rate[4]=data.data[4]. cp_miss_alarm_rate*100;

        // alert(wip_reject_rate)
    })

}
$(function () {
    ajax12();
    setInterval(ajax12,3000);
})

//------------------------图表

$(function quality_A_L1_2(){
    // 基于准备好的dom，初始化echarts实例
    var myChart_quality_A_L1_2 = echarts.init(document.getElementById('quality_A_L1_2'));
    charts.push(myChart_quality_A_L1_2);

    var option = {
        color:['#8B78F6'],
        tooltip : {
            trigger: 'item',
            formatter: "{b}<br/>{a}<br/>{c}%"
        },

        grid:{
            left: '5%',
            right: '5%',
            bottom: '10%',
            containLabel: true
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['部件A','部件B','部件C','部件D','部件E',],
                axisLine:{
                    lineStyle:{
                        color: '#87cefa'
                    },
                },
                axisLabel : {
                    interval:0,
                    rotate:40,

                    textStyle: {
                        color: '#fff',
                        fontSize:13
                    }
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLine:{
                    lineStyle:{
                        color: '#87cefa'
                    },
                },
                splitLine: {
                    "show": false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    },
                    formatter: function (value) {
                        return value + "%"
                    },
                },
            }
        ],
        series : [
            {
                name:'漏检率',
                type:'line',

                itemStyle: {normal: {areaStyle: {}}},
                data:[1, 2, 1, 4, 3,]
            },

        ]

    };


    setInterval(function () {
        option.series[0].data =cp_miss_alarm_rate//改这里


        myChart_quality_A_L1_2.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_quality_A_L1_2.setOption(option);
})

//----------------------------------------------------------------------- 表3 在制品返修率---------------------------

function ajax19() {
//------------------------车间级别 表3 在制品返修率

//------------------------数据
    $.post("QualityKPI/update4",{},function (data) {

        p_reject_rate = [];
        p_reject_rate[0]=data.data[0].p_reject_rate*100;
        p_reject_rate[1]=data.data[1].p_reject_rate*100;
        p_reject_rate[2]=data.data[2].p_reject_rate*100;
        p_reject_rate[3]=data.data[3].p_reject_rate*100;
        p_reject_rate[4]=data.data[4].p_reject_rate*100;
        // alert(p_reject_rate)

    })

}
$(function () {
    ajax19();setInterval(ajax19,3000);
})

//------------------------图表
$(function quality_A_R1_1(){
    // 基于准备好的dom，初始化echarts实例
    var myChart_quality_A_R1_1 = echarts.init(document.getElementById('quality_A_R1_1'));
    charts.push(myChart_quality_A_R1_1);

    // 指定图表的配置项和数据

    var option = {
        title: {
            text: '零件废品率',
            //副标题

            left: 'center'
        },
        color:["#87cefa","#ff7f50","#32cd32","#da70d6",'#8B78F6'],
        //css提示工具，表示触发类型，当trigger为’item’时只会显示该点的数据，为’axis’时显示该列下所有坐标轴所对应的数据。
        tooltip: {
            trigger: 'item',
            //提示框的内容设置
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        //图例位置和内容
        legend: {
            textStyle:{//图例文字的样式
                color:'#ccc',
                fontSize:16
            },
            left: 'center',
            top: 'bottom',
            //配置类目名称
            data: ['零件A','零件B','零件C','零件D','零件E', ]
        },
        //工具栏设置
        //      toolbox为工具栏；提供导出图片，数据转化，动态数据等信息
        //  保存图片
        //

        toolbox: {
            //是否显示工具栏组件。
            show: true,
            //导出图片的操作，
            feature: {
                mark: {show: true},
                //显示图像所提供的数据，show:是否显示数据视图工具;readOnly:属性是否可读；
                dataView: {show: true, readOnly: false},

                //启用的动态数据类型
                magicType: {
                    show: true,
                    type: ['pie', 'funnel']
                },

                //配置项还原
                restore: {show: true},

                //保存为图片
                saveAsImage: {show: true}
            }
        },
        series: [

            {
                name: '废品率',
                type: 'pie',
                radius: [30, 110],
                center: ['50%', '50%'],
                roseType: 'area',
                data: [
                    {value: 10, name: '零件A'},
                    {value: 5, name: '零件B'},
                    {value: 15, name: '零件C'},
                    {value: 25, name: '零件D'},
                    {value: 20, name: '零件E'},

                ]
            }
        ]
    };
    setInterval(function () {
        option.series[0].data[0].value =  p_reject_rate[0]
        option.series[0].data[1].value =  p_reject_rate[1]
        option.series[0].data[2].value =  p_reject_rate[2]
        option.series[0].data[3].value =  p_reject_rate[3]
        option.series[0].data[4].value =  p_reject_rate[4]

        myChart_quality_A_R1_1.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_quality_A_R1_1.setOption(option);
})

//---------------------------------------------------------------quality_A_R1_2---------在制品错检率---------------------------
//
function ajax10() {

    //------------------------表0
    $.post("QualityKPI/update2",{},function (data) {

        // var rer=data.data[1].repair_rate;
        // $("#quality_A_R1_2").attr("data-value",rer);

        wip_miss_alarm_rate= [];
        wip_miss_alarm_rate[0]=data.data[0].wip_miss_alarm_rate*100;
        wip_miss_alarm_rate[1]=data.data[1].wip_miss_alarm_rate*100;
        wip_miss_alarm_rate[2]=data.data[2].wip_miss_alarm_rate*100;
        wip_miss_alarm_rate[3]=data.data[3].wip_miss_alarm_rate*100;
        wip_miss_alarm_rate[4]=data.data[4].wip_miss_alarm_rate*100;

    })




}
$(function () {
    ajax10();
    setInterval(ajax10,3000);
})




//-----------------------------------------------------------
$(function quality_A_R1_2(){
    // 基于准备好的dom，初始化echarts实例
    var myChart_quality_A_R1_2 = echarts.init(document.getElementById('quality_A_R1_2'));
    charts.push(myChart_quality_A_R1_2);

    // 指定图表的配置项和数据
    option = {
        color:["#32cd32","#da70d6",'#8B78F6'],
        tooltip : {
            trigger: 'item',
            formatter: "{b}<br/>{a}<br/>{c}%"
        },

        grid:{
            left: '5%',
            right: '5%',
            bottom: '10%',
            containLabel: true
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['在制品A','在制品B','在制品C','在制品D','在制品E',],
                axisLine:{
                    lineStyle:{
                        color: '#87cefa'
                    },
                },
                axisLabel : {
                    interval:0,
                    rotate:40,

                    textStyle: {
                        color: '#fff',
                        fontSize:13
                    }
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLine:{
                    lineStyle:{
                        color: '#87cefa'
                    },
                },
                splitLine: {
                    "show": false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    },
                    formatter: function (value) {
                        return value + "%"
                    },
                },
            }
        ],
        series : [
            {
                name:'漏检率',
                type:'line',

                itemStyle: {normal: {areaStyle: {}}},
                data:[1, 2, 1, 4, 3,]
            },

        ]

    };


    setInterval(function () {

        option.series[0].data = wip_miss_alarm_rate;

        myChart_quality_A_R1_2.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_quality_A_R1_2.setOption(option);
})


//---------------------------------------------------------------quality_A_M1---------KPI---------------------------

$(function quality_A_M1 (){
    // 基于准备好的dom，初始化echarts实例
    var myChart_quality_A_M1 = echarts.init(document.getElementById('quality_A_M1'));
    charts.push(myChart_quality_A_M1);

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
                { name: '产品一次交检合格率', max: 100},
                { name: '质量事故', max: 100},
                { name: '产品返修率', max: 2},
                { name: '产品质量损失率', max: 20},
                { name: '总KPI', max: 8},

            ]
        },
        series: [{
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [
                {
                    value: [0, 0, 0, 0, 0],
                    name: '当日'
                },
                {
                    value: [75, 75, 1.5, 10, 4],
                    name: '月平均'
                }
            ]
        }]
    };

    setInterval(function () {
        option.series[0].data[0].value =  $("#quality_A_M1").attr("data-value")*100;
        myChart_quality_A_M1.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_quality_A_M1.setOption(option);


})



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