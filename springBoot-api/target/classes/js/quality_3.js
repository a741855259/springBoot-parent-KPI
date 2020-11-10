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
function ajax11() {

    $.post("QualityKPI/update3",{},function (data) {
        cp_false_alarm_rate = [];
        cp_false_alarm_rate[0]=data.data[0].cp_false_alarm_rate*100;
        cp_false_alarm_rate[1]=data.data[1].cp_false_alarm_rate*100;
        cp_false_alarm_rate[2]=data.data[2].cp_false_alarm_rate*100;
        cp_false_alarm_rate[3]=data.data[3].cp_false_alarm_rate*100;
        cp_false_alarm_rate[4]=data.data[4].cp_false_alarm_rate*100;
    })
}
$(function () {
    ajax11();
    setInterval(aja11,3000);
})




//-----------------------------------------------------------
$(function quality_A_1_M2(){
    // 基于准备好的dom，初始化echarts实例
    var myChart_quality_A_1_M2 = echarts.init(document.getElementById('quality_A_1_M2'));
    charts.push(myChart_quality_A_1_M2);

    // 指定图表的配置项和数据
    option = {
        color:["#87cefa","#ff7f50","#32cd32","#da70d6",'#8B78F6'],
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
                name:'产品A',
                type:'line',

                itemStyle: {normal: {areaStyle: {}}},
                data:[1, 2, 1, 4, 3,]
            },

        ]

    };


    setInterval(function () {

        option.series[0].data = cp_false_alarm_rate;

        myChart_quality_A_1_M2.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_quality_A_1_M2.setOption(option);
})

//------------------------部件 2 漏检率--quality_A_1_R1----------------------//
//------------------------数据
function ajax12() {
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
$(function quality_A_1_R1(){
    // 基于准备好的dom，初始化echarts实例
    var myChart_quality_A_1_R1 = echarts.init(document.getElementById('quality_A_1_R1'));
    charts.push(myChart_quality_A_1_R1);

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

        myChart_quality_A_1_R1.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_quality_A_1_R1.setOption(option);
})

//------------------------部件 3 废品率--quality_A_2_L1----------------------//
//------------------------数据
// function ajax13() {
//     $.post("QualityKPI/update3",{},function (data) {
//         cp_reject_rate = [];
//         cp_reject_rate[0]=data.data[0]. cp_reject_rate*100;
//         cp_reject_rate[1]=data.data[1]. cp_reject_rate*100;
//         cp_reject_rate[2]=data.data[2]. cp_reject_rate*100;
//         cp_reject_rate[3]=data.data[3]. cp_reject_rate*100;
//         cp_reject_rate[4]=data.data[4]. cp_reject_rate*100;
//         // alert(wip_reject_rate)
//     })
// }
// $(function () {
//     ajax13();
//     setInterval(ajax13,3000);
// })

//------------------------图表
$(function quality_A_2_L1_111(){

    var myChart_quality_A_2_L1_111 = echarts.init(document.getElementById('quality_A_2_L1_111'));
    charts.push(myChart_quality_A_2_L1_111);



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
                    name:'线末产出率',
                    type:'bar',
                    barWidth:30,
                    data:[60,80,70,50,60],
                },
            ]
        }
    ;


    setInterval(function () {
        //option.series[0].data =  cp_reject_rate//改这里

        myChart_quality_A_2_L1_111.setOption(option, true);
    },500);
    myChart_quality_A_2_L1_111.setOption(option);
})


//------------------------部件 4 返工率--quality_A_2_M1----------------------//
//------------------------数据
function ajax14() {
    $.post("QualityKPI/update3",{},function (data) {
        cp_rework_rate = [];
        cp_rework_rate[0]=data.data[0]. cp_rework_rate*100;
        cp_rework_rate[1]=data.data[1]. cp_rework_rate*100;
        cp_rework_rate[2]=data.data[2]. cp_rework_rate*100;
        cp_rework_rate[3]=data.data[3]. cp_rework_rate*100;
        cp_rework_rate[4]=data.data[4]. cp_rework_rate*100;
        // alert(wip_reject_rate)
    })
}
$(function () {
    ajax14();
    setInterval(ajax14,3000);
})

//------------------------图表
$(function quality_A_2_M1(){
    // 基于准备好的dom，初始化echarts实例
    var myChart_quality_A_2_M1 = echarts.init(document.getElementById('quality_A_2_M1'));
    charts.push(myChart_quality_A_2_M1);


    var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];//这条也是要的
    var option = {
        grid: {
            top: '20%',
            left: '20%'//距离左端距离
        },
        xAxis: {
            show: false
        },
        yAxis: [{
            show: true,
            data:  ['部件A','部件B','部件C','部件D','部件E',],
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
        option.series[0].data =cp_rework_rate//改这里


        myChart_quality_A_2_M1.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_quality_A_2_M1.setOption(option);
})


//------------------------部件 5 不良率--quality_A_R1_1----------------------//
//------------------------数据
// function ajax15() {

//     $.post("QualityKPI/update3",{},function (data) {

//         cp_unqualified_rate = [];
//         cp_unqualified_rate[0]=data.data[0].cp_unqualified_rate*100;
//         cp_unqualified_rate[1]=data.data[1].cp_unqualified_rate*100;
//         cp_unqualified_rate[2]=data.data[2].cp_unqualified_rate*100;
//         cp_unqualified_rate[3]=data.data[3].cp_unqualified_rate*100;
//         cp_unqualified_rate[4]=data.data[4].cp_unqualified_rate*100;
//         // alert(repair_rate)
//     })
// }
// $(function () {
//     ajax15();setInterval(ajax15,3000);
// })
//------------------------图表
$(function quality_A_R1_1(){
    // 基于准备好的dom，初始化echarts实例
    var myChart_quality_A_2_R1 = echarts.init(document.getElementById('quality_A_2_R1'));
    charts.push(myChart_quality_A_2_R1);

    // 指定图表的配置项和数据

    var option = {

        color:['#FD6C88'],
        grid:{
            left: '30%',
            right: '60%',
            bottom: '90%',
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
                data : ['部件A','部件B','部件C','部件D','部件E',],
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
                        return value + ""%
                    },
                },
            }
        ],
        series : [
            {
                name:'不良率',
                type:'bar',
                barWidth : 20,
                data:[50,62,80,30,75,],
            },
        ]
    }
    ;

    setInterval(function () {
        // option.series[0].data =  cp_unqualified_rate

        myChart_quality_A_2_R1.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_quality_A_2_R1.setOption(option);
})

//---------------------------------------------------------------quality_A_M1---------KPI---------------------------

// $(function quality_A_M1 (){
//     // 基于准备好的dom，初始化echarts实例
//     var myChart_quality_A_M1 = echarts.init(document.getElementById('quality_A_M1'));
//     charts.push(myChart_quality_A_M1);

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

//     setInterval(function () {
//         option.series[0].data[0].value =  $("#quality_A_M1").attr("data-value")*100;
//         myChart_quality_A_M1.setOption(option, true);
//     },500);
//     // 使用刚指定的配置项和数据显示图表。
//     myChart_quality_A_M1.setOption(option);


// })



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