charts=[];

// //定义一个全局变量接受图表，以便resize——————————————————————————————这里是把所有的图表放进去 可以自己调整宽度
// charts=[];
// //home
// function home_A() {
//     // 基于准备好的dom，初始化echarts实例
//     var myChart_home_A = echarts.init(document.getElementById('home_A'));
//
//     charts.push(myChart_home_A);
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
//                 { name: '人员', max: 6500},
//                 { name: '设备', max: 16000},
//                 { name: '流程', max: 30000},
//                 { name: '质量', max: 38000},
//                 { name: '物流', max: 52000},
//
//             ]
//         },
//         series: [{
//             name: '预算 vs 开销（Budget vs spending）',
//             type: 'radar',
//             // areaStyle: {normal: {}},
//             data: [
//                 {
//                     value: [4300, 10000, 28000, 35000, 50000],
//                     name: '当日'
//                 },
//                 {
//                     value: [5000, 14000, 28000, 31000, 42000],
//                     name: '月平均'
//                 }
//             ]
//         }]
//     };
//
//     setInterval(function () {
//         option.series[0].data[1].value = [5000, 14000, 28000, 31000, 42000];
//         myChart_home_A.setOption(option, true);
//     },500);
//     // 使用刚指定的配置项和数据显示图表。
//     myChart_home_A.setOption(option);
//
// }


//---------------------------------------------------------------上面的先不要动------------------------------------
//------------------------产品 1 一次交检不合格率--quality_A_L1_1----------------------//
//------------------------数据
// function ajax2() {
//
//     $.post("QualityKPI/update1",{},function (data) {
//
//         fty = [];
//         fty[0]=data.data[0].fty*100;
//         fty[1]=data.data[1].fty*100;
//         fty[2]=data.data[2].fty*100;
//         fty[3]=data.data[3].fty*100;
//         fty[4]=data.data[4].fty*100;
//         // alert(rer)
//     })
// }
// $(function () {
//     ajax2();
//     setInterval(ajax2,3000);
// })
// //------------------------图表
//
// $(
function quality1_A_L1_1(){

    var myChart_quality1_A_L1_1 = echarts.init(document.getElementById('quality1_A_L1_1'));
    charts.push(myChart_quality1_A_L1_1);


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
            data:  ['产品A','产品B','产品C','产品D','产品E'],
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
        option.series[0].data =  fty//改这里

        myChart_quality1_A_L1_1.setOption(option, true);
    },500);
    myChart_quality1_A_L1_1.setOption(option);
}





function quality_A_L1_2(){
    // 基于准备好的dom，初始化echarts实例
    var myChart_quality_A_L1_2 = echarts.init(document.getElementById('quality_A_L1_2'));
    charts.push(myChart_quality_A_L1_2);

   var option = {

        color:["#87cefa","#ff7f50","#32cd32","#da70d6",'#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'],
        legend: {
            x:'center',//图例位置
            y:'bottom',//图例位置
            data:['人员', '设备','材料','方法', '环境','测量','产品成熟度'],
            textStyle : {
                color : '#ffffff',

            }
        },

        calculable :false,


        grid:{
            left: '5%',
            right: '5%',
            bottom: '20%',
            containLabel: true
        },

        tooltip : {
            trigger: 'axis',
            axisPointer : {
                type : 'shadow'
            }
        },

        xAxis : [
            {
                type : 'value',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                splitLine:{
                    lineStyle:{
                        color:['#f2f2f2'],
                        width:0,
                        type:'solid'
                    }
                }

            }
        ],

        yAxis : [
            {
                type : 'category',
                data:['产品E', '产品D', '产品C', '产品B', '产品A'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                splitLine:{
                    lineStyle:{
                        width:0,
                        type:'solid'
                    }
                }
            }
        ],

        series : [
            {
                name:'人员',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data:[320, 302, 301,302, 301]
            },
            {
                name: '设备',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data:[120, 132, 101,302, 301]
            },

            {
                name:'方法',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data:[150, 212, 201,302, 301]
            },
            {
                name:'材料',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data:[220, 182, 191,302, 301]
            },
            {
                name: '环境',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data:[150, 212, 201,302, 301]
            },
            {
                name:'测量',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data:[150, 212, 201,302, 301]
            },
            {
                name:'产品成熟度',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data:[150, 212, 201,302, 301]
            }
        ]
    };


    setInterval(function () {
        option.series[0].data =as_p//改这里
        option.series[1].data =as_eq//改这里
        option.series[2].data =as_me//改这里
        option.series[3].data =as_ma//改这里
        option.series[4].data =as_en//改这里
        option.series[5].data =as_ms//改这里
        option.series[6].data =as_r//改这里

        myChart_quality_A_L1_2.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_quality_A_L1_2.setOption(option);
}




function quality_A_R1_1(){
    // 基于准备好的dom，初始化echarts实例
    var myChart_quality_A_R1_1 = echarts.init(document.getElementById('quality_A_R1_1'));
    charts.push(myChart_quality_A_R1_1);

    // 指定图表的配置项和数据

    var option = {
        title: {
            // text: '产品返修率'
        },
            color:['#87cefa'],
            grid:{
                left: '5%',
                right: '5%',
                bottom: '5%',
                containLabel: true
            },
            tooltip : {
                trigger: 'item',
                formatter: "{b}<br/>{a}<br/>{c}%"
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    data : ['产品A','产品B','产品C','产品D','产品E',],
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
                    name:'返修率',
                    type:'bar',
                    barWidth:30,
                    data:[60,80,70,50,60],
                },
            ]
        }
    ;

    setInterval(function () {
        option.series[0].data =  repair_rate

        myChart_quality_A_R1_1.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_quality_A_R1_1.setOption(option);
}



function quality_A_R1_2(){
    // 基于准备好的dom，初始化echarts实例
    var myChart_quality_A_R1_2 = echarts.init(document.getElementById('quality_A_R1_2'));
    charts.push(myChart_quality_A_R1_2);

    // 指定图表的配置项和数据

   var option = {
        color:["#87cefa","#ff7f50","#32cd32","#da70d6",'#8B78F6'],
        tooltip : {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}元"
        },
        legend: {
            data:['产品A','产品B','产品C','产品D','产品E',],
            y: 'bottom',
            x:'center',
            textStyle:{
                color:'#fff',
                fontSize:12
            }
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
                data : ['5月','6月','7月','8月',],
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
                data:[1, 2, 1, 4, ]
            },
            {
                name:'产品B',
                type:'line',

                itemStyle: {normal: {areaStyle: {}}},
                data:[3, 3, 4, 1, ]
            },
            {
                name:'产品C',
                type:'line',
                itemStyle: {normal: {areaStyle: {}}},
                data:[1, 2, 0, 1,]
            },
            {
                name:'产品D',
                type:'line',

                itemStyle: {normal: {areaStyle: {}}},
                data:[3, 2, 1, 4, 2 ]
            },
            {
                name:'产品E',
                type:'line',

                itemStyle: {normal: {areaStyle: {}}},
                data:[0, 1, 3, 3, 2 ]
            }
        ]

    };
    setInterval(function () {
        // option.series[0].data[0] =  [$("#quality_A_R1_2").attr("data-
        // option.series[0].data = [rer[0],rer[1],rer[2],rer[3],rer[4]];
        // option.series[0].data = rer;
        // option.series[0].data =  [1,1,1,1,1]
        myChart_quality_A_R1_2.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_quality_A_R1_2.setOption(option);
}

function quality_A_M1 (){
    // 基于准备好的dom，初始化echarts实例
    var myChart_quality_A_M1 = echarts.init(document.getElementById('quality_A_M1'));
    charts.push(myChart_quality_A_M1);

    // 指定图表的配置项和数据


    var option = {
        color:["#da70d6",'#8B78F6'],
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
                    value: [0, 0, 0, 0, 0],
                    name: '月平均'
                }
            ]
        }]
    };

    setInterval(function () {
        // option.series[0].data[0].value =  $("#quality_A_M1").attr("data-value")*100;
        // option.series[0].data[0].value =  [80, 70, 70, 70, 60];
        // option.series[0].data[1].value =  [50, 70, 50, 80, 40];
        myChart_quality_A_M1.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_quality_A_M1.setOption(option);
}

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

            quality1_A_L1_1();
            quality_A_L1_2();
            quality_A_R1_1();
            quality_A_R1_2();
            quality_A_M1();
         //   equipment_A_5();
        }
    });
});
//resize图表
window.onresize=function () {
    for(var i=0;i<charts.length;i++){
        charts[i].resize();
    }
}