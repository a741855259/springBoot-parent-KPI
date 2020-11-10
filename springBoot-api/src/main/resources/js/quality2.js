charts=[];

//---------------------------------------------------------------上面的先不要动------------------------------------
//------------------------在制品 1 废品率--quality_A_1_L1----------------------//
//------------------------数据
// function ajax6() {
//     $.post("QualityKPI/update2",{},function (data) {
//         wip_reject_rate = [];
//         wip_reject_rate[0]=data.data[0]. wip_reject_rate*100;
//         wip_reject_rate[1]=data.data[1]. wip_reject_rate*100;
//         wip_reject_rate[2]=data.data[2]. wip_reject_rate*100;
//         wip_reject_rate[3]=data.data[3]. wip_reject_rate*100;
//         wip_reject_rate[4]=data.data[4]. wip_reject_rate*100;
//
//         // alert(wip_reject_rate)
//     })
// }
// $(function () {
//     ajax6();
//     setInterval(ajax6,3000);
// })
//
// //------------------------图表
//
// $(
function quality_A_1_L1(){
    var myChart_quality_A_1_L1 = echarts.init(document.getElementById('quality_A_1_L1'));
    charts.push(myChart_quality_A_1_L1);

    var option = {
            color:['#8B78F6'],
            grid:{
                left: '5%',
                right: '5%',
                bottom: '5%',
                containLabel: true
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a}<br/>{b}<br/>{c}%"
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
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
                    name:'废品率',
                    type:'bar',
                    barWidth:30,
                    data:[60,80,70,50,60],
                },
            ]
        }
    ;

    setInterval(function () {
        option.series[0].data =  wip_reject_rate//改这里

        myChart_quality_A_1_L1.setOption(option, true);
    },500);
    myChart_quality_quality_A_1_L1.setOption(option);
}
// )
//------------------------部件 3 废品率--quality_A_2_L1----------------------//
//------------------------数据

//------------------------图表
// $(
function quality_A_1_L1(){

    var myChart_quality_A_1_L1 = echarts.init(document.getElementById('quality_A_1_L1'));
    charts.push(myChart_quality_A_1_L1);



    var option = {
            color:['#8B78F6'],
            grid:{
                left: '5%',
                right: '5%',
                bottom: '5%',
                containLabel: true
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a}<br/>{b}<br/>{c}%"
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
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
                    name:'废品率',
                    type:'bar',
                    barWidth:30,
                    data:[60,80,70,50,60],
                },
            ]
        };


    setInterval(function () {
        option.series[0].data =  cp_reject_rate//改这里

        myChart_quality_A_1_L1.setOption(option, true);
    },500);
    myChart_quality_A_1_L1.setOption(option);
}
// )



//------------------------在制品 2 返工率--quality_A_1_M1----------------------//
//------------------------数据
// function ajax7() {
//     $.post("QualityKPI/update2",{},function (data) {
//         wip_rework_rate = [];
//         wip_rework_rate[0]=data.data[0]. wip_rework_rate*100;
//         wip_rework_rate[1]=data.data[1]. wip_rework_rate*100;
//         wip_rework_rate[2]=data.data[2]. wip_rework_rate*100;
//         wip_rework_rate[3]=data.data[3]. wip_rework_rate*100;
//         wip_rework_rate[4]=data.data[4]. wip_rework_rate*100;
//         // alert(wip_reject_rate)
//     })
// }
// $(function () {
//     ajax7();
//     setInterval(ajax7,3000);
// })
//
// //------------------------图表
// $(
    function quality_A_1_M1(){
    // 基于准备好的dom，初始化echarts实例
    var myChart_quality_A_1_M1 = echarts.init(document.getElementById('quality_A_1_M1'));
    charts.push(myChart_quality_A_1_M1);

    var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];//这条也是要的
    var option = {

        grid: {
            top: '7%',
            bottom: '7%',
            left: '20%'//距离左端距离
        },
        xAxis: {
            show: false
        },
        yAxis: [{
            show: true,
            data:  ['在制品A','在制品B','在制品C','在制品D','在制品E',],
            inverse: true,
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#fff',
                formatter: (value, index) => {
                    return [

                        `{lg|${index+1}}  ` + '{title|' + value + '} '
                    ].join('\n')
                },
                rich: {
                    lg: {
                        backgroundColor: '#339911',
                        color: '#fff',
                        borderRadius: 15,
                        // padding: 5,
                        align: 'center',
                        width: 15,
                        height: 15
                    },
                }
            },

        }, {
            show: true,
            inverse: true,
            data: [100, 100, 100, 100,100,],//右端数值
            axisLabel: {
                textStyle: {
                    fontSize: 12,
                    color: '#fff',
                },
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },

        }],
        series: [{
            name: '条',
            type: 'bar',
            yAxisIndex: 0,
            data: [40, 40, 40, 40,40,],//条上数值
            barWidth: 10,
            itemStyle: {
                normal: {
                    barBorderRadius: 20,
                    color: function(params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: '{c}%'
                }
            },
        }, {
            name: '框',
            type: 'bar',
            yAxisIndex: 1,
            barGap: '-100%',
            data: [100, 100, 100, 100,100],//框
            barWidth: 15,
            itemStyle: {
                normal: {
                    color: 'none',
                    borderColor: '#00c1de',
                    borderWidth: 3,
                    barBorderRadius: 15,
                }
            }
        }, ]
    };

    setInterval(function () {
        option.series[0].data =wip_rework_rate//改这里


        myChart_quality_A_1_M1.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_quality_A_1_M1.setOption(option);
}
// )

//------------------------在制品 3 不良率--quality_A_1_R1----------------------//
//------------------------数据
// function ajax8() {
//     $.post("QualityKPI/update2",{},function (data) {
//
//         wip_unqualified_rate = [];
//         wip_unqualified_rate[0]=data.data[0].wip_unqualified_rate*100;
//         wip_unqualified_rate[1]=data.data[1].wip_unqualified_rate*100;
//         wip_unqualified_rate[2]=data.data[2].wip_unqualified_rate*100;
//         wip_unqualified_rate[3]=data.data[3].wip_unqualified_rate*100;
//         wip_unqualified_rate[4]=data.data[4].wip_unqualified_rate*100;
//         // alert(repair_rate)
//     })
// }
// $(function () {
//     ajax8();setInterval(ajax8,3000);
// })
// //------------------------图表
// $(
function quality_A_1_R1(){
    // 基于准备好的dom，初始化echarts实例
    var myChart_quality_A_1_R1 = echarts.init(document.getElementById('quality_A_1_R1'));
    charts.push(myChart_quality_A_1_R1);

    // 指定图表的配置项和数据

    var option = {

        color:['#FD6C88'],
        grid:{
            left: '5%',
            right: '5%',
            bottom: '10%',
            containLabel: true
        },
        tooltip : {
            trigger: 'item',
            formatter: "{b}{a}{c}%"
        },
        calculable : true,
        yAxis : [
            {
                inverse:true,
                type : 'category',
                data : ['在制品A','在制品B','在制品C','在制品D','在制品E',],
                axisLine:{
                    lineStyle:{
                        color: '#FD6C88'
                    },
                },
                axisLabel : {
                    textStyle: {
                        color: '#fff'
                    }
                }
            }
        ],
        xAxis : [
            {
                type : 'value',
                axisLine:{
                    lineStyle:{
                        color: '#FD6C88'
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
                        return value + ""
                    },
                },
            }
        ],
        series : [
            {
                name:'不良率',
                type:'bar',
                barWidth : 20,
                data:[1750,1416,1136,819,704,],
            },
        ]
    };

    setInterval(function () {
        option.series[0].data =  wip_unqualified_rate

        myChart_quality_A_1_R1.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_quality_A_1_R1.setOption(option);
}
// )

//------------------------在制品 4 错检率--quality_A_2_L1----------------------//
//------------------------数据
// function ajax9() {
//
//     $.post("QualityKPI/update2",{},function (data) {
//         wip_false_alarm_rate = [];
//         wip_false_alarm_rate[0]=data.data[0].wip_false_alarm_rate*100;
//         wip_false_alarm_rate[1]=data.data[1].wip_false_alarm_rate*100;
//         wip_false_alarm_rate[2]=data.data[2].wip_false_alarm_rate*100;
//         wip_false_alarm_rate[3]=data.data[3].wip_false_alarm_rate*100;
//         wip_false_alarm_rate[4]=data.data[4].wip_false_alarm_rate*100;
//     })
// }
// $(function () {
//     ajax9();
//     setInterval(ajax9,3000);
// })
// //------------------------图表
// $(
    function quality_A_2_L1(){
    // 基于准备好的dom，初始化echarts实例
    var myChart_quality_A_2_L1 = echarts.init(document.getElementById('quality_A_2_L1'));
    charts.push(myChart_quality_A_2_L1);

    // 指定图表的配置项和数据
    option = {
        color:["#87cefa"],
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
                data : ['3月','4月','5月','6月','7月',],
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
                name:'产品A',
                type:'line',

                itemStyle: {normal: {areaStyle: {}}},
                data:[1, 2, 1, 4, 3,]
            },

        ]

    };


    setInterval(function () {

        option.series[0].data = wip_false_alarm_rate;

        myChart_quality_A_2_L1.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_quality_A_2_L1.setOption(option);
}
// )



//------------------------在制品 5 漏检率--quality_A_2_R1----------------------//
//------------------------数据
//
// function ajax10() {
//
//     $.post("QualityKPI/update2",{},function (data) {
//
//         wip_miss_alarm_rate= [];
//         wip_miss_alarm_rate[0]=data.data[0].wip_miss_alarm_rate*100;
//         wip_miss_alarm_rate[1]=data.data[1].wip_miss_alarm_rate*100;
//         wip_miss_alarm_rate[2]=data.data[2].wip_miss_alarm_rate*100;
//         wip_miss_alarm_rate[3]=data.data[3].wip_miss_alarm_rate*100;
//         wip_miss_alarm_rate[4]=data.data[4].wip_miss_alarm_rate*100;
//     })
// }
// $(function () {
//     ajax10();
//     setInterval(ajax10,3000);
// })
// //------------------------图表
// $(
    function quality_A_2_R1(){
    // 基于准备好的dom，初始化echarts实例
    var myChart_quality_A_2_R1 = echarts.init(document.getElementById('quality_A_2_R1'));
    charts.push(myChart_quality_A_2_R1);

    // 指定图表的配置项和数据
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
                data : ['3月','4月','5月','6月','7月',],
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

        myChart_quality_A_2_R1.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_quality_A_2_R1.setOption(option);
}
// )




//---------------------------------------------------------------quality_A_M1---------KPI---------------------------

// $(
//     function quality_A_M1 (){
//     // 基于准备好的dom，初始化echarts实例
//     var myChart_quality_A_M1 = echarts.init(document.getElementById('quality_A_M1'));
//     charts.push(myChart_quality_A_M1);
//
//     // 指定图表的配置项和数据
//     var option = {
//         title: {
//             text: ''
//         },
//         tooltip: {},
//         legend: {
//             data: ['当日', '月平均']
//         },
//         radar: {
//             // shape: 'circle',
//             name: {
//                 textStyle: {
//                     color: '#fff',
//                     backgroundColor: '#999',
//                     borderRadius: 3,
//                     padding: [3, 5]
//                 }
//             },
//             indicator: [
//                 { name: '产品一次交检合格率', max: 100},
//                 { name: '质量事故', max: 100},
//                 { name: '产品返修率', max: 2},
//                 { name: '产品质量损失率', max: 20},
//                 { name: '总KPI', max: 8},
//
//             ]
//         },
//         series: [{
//             name: '预算 vs 开销（Budget vs spending）',
//             type: 'radar',
//             // areaStyle: {normal: {}},
//             data: [
//                 {
//                     value: [0, 0, 0, 0, 0],
//                     name: '当日'
//                 },
//                 {
//                     value: [75, 75, 1.5, 10, 4],
//                     name: '月平均'
//                 }
//             ]
//         }]
//     };
//
//     setInterval(function () {
//         option.series[0].data[0].value =  $("#quality_A_M1").attr("data-value")*100;
//         myChart_quality_A_M1.setOption(option, true);
//     },500);
//     // 使用刚指定的配置项和数据显示图表。
//     myChart_quality_A_M1.setOption(option);
//
//
// })



$(function(){

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

        // 获取已激活的标签页的名称
        var activeTab = $(e.target).text();
        // 获取前一个激活的标签页的名称
        var previousTab = $(e.relatedTarget).text();
        /*$(".active-tab span").html(activeTab);
        $(".previous-tab span").html(previousTab);*/
        // alert(activeTab);

        if (activeTab=="质量KPI"){

            quality_A_1_M1();
            quality_A_1_R1();
            quality_A_2_L1();
            quality_A_2_R1();
            quality_A_1_L1();


        }
    });
});
//resize图表
window.onresize=function () {
    for(var i=0;i<charts.length;i++){
        charts[i].resize();
    }
}