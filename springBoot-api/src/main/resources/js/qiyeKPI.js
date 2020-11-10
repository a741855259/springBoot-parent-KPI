$(function () {
})

//定义一个全局变量接受图表，以便resize
charts=[];


// //财务状况
// function personcx1 (){
//     // 基于准备好的dom，初始化echarts实例
//     var personcx1 = echarts.init(document.getElementById('personcx1'));
//     charts.push(personcx1);
//     // 指定图表的配置项和数据
//     var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6','#da70d6','#87cefa','#ff7f50','#32cd32'];//这条也是要的
//     var option = {
//         grid: {
//             top: '10%',
//             left: '20%'//距离左端距离
//         },
//         xAxis: {
//             show: false
//         },
//         yAxis: [{
//             show: true,
//             data:  ['销售收入','净利润率','人均创利','库存回款周期','现金流','新增订单额','财务费用控制率','投资预算达成率','工艺节约金额'],
//             inverse: true,
//             axisLine: {
//                 show: false
//             },
//             splitLine: {
//                 show: false
//             },
//             axisTick: {
//                 show: false
//             },
//             axisLabel: {
//                 color: '#fff',
//                 formatter: (value, index) => {
//                     return [
//
//                         `{lg|${index+1}}  ` + '{title|' + value + '} '
//                     ].join('\n')
//                 },
//                 rich: {
//                     lg: {
//                         backgroundColor: '#339911',
//                         color: '#fff',
//                         borderRadius: 15,
//                         // padding: 5,
//                         align: 'center',
//                         width: 20,
//                         height: 15
//                     },
//                 }
//             },
//
//         }, {
//             show: true,
//             inverse: true,
//             // data: [100, 100, 100, 100,100,100,100,100],//右端数值
//             axisLabel: {
//                 textStyle: {
//                     fontSize: 12,
//                     color: '#fff',
//                 },
//             },
//             axisLine: {
//                 show: false
//             },
//             splitLine: {
//                 show: false
//             },
//             axisTick: {
//                 show: false
//             },
//
//         }],
//         series: [{
//             name: '条',
//             type: 'bar',
//             yAxisIndex: 0,
//             data: [80, 92, 86, 76, 86,78,76,98,60],//条上数值
//             barWidth: 15,
//             itemStyle: {
//                 normal: {
//                     barBorderRadius: 80,
//                     color: function(params) {//params是传入的参数
//                         var num = myColor.length;//得到myColor颜色数组的长度
//                         return myColor[params.dataIndex % num]//返回颜色数组中的一个对应的颜色值
//                     },
//                 }
//             },
//             label: {
//                 normal: {
//                     show: true,//是否显现，不显示的话设置成false
//                     position: 'inside',//显示的位置
//                     formatter: '{c}'// label要显示的值
//                 }
//             },
//         },
//             {
//             name: '框',
//             type: 'bar',
//             yAxisIndex: 1,
//             barGap: '20%',
//             // data: [100, 100, 100, 100,100,100,100,100],//框
//             barWidth: 20,//y轴柱子宽度
//             itemStyle: {
//                 normal: {
//                     color: 'none',
//                     borderColor: '#00c1de',
//                     borderWidth: 13,
//                     barBorderRadius: 15,
//                 }
//             }
//         }, ]
//     };
//     setInterval(function () {
//         personcx1.setOption(option, true);
//     },500);
//     // 使用刚指定的配置项和数据显示图表。
//     personcx1.setOption(option);
// };

//研发创新
function personcx2 (){
    // 基于准备好的dom，初始化echarts实例
    var personcx2 = echarts.init(document.getElementById('personcx2'));
    charts.push(personcx2);
    // 指定图表的配置项和数据

    var option;
    option = {
        color: ["#ff7f50",],
        title: {
            text: ''
        },
        tooltip: {},
        legend: {

            right: '10%',
            data: ['当月',],
            textStyle: {
                color: "#fff"
            }
        },
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#fff',
                    /*                    backgroundColor: '#999',
                                        borderRadius: 3,
                                        padding: [3, 5]*/
                }
            },
            indicator: [
                {name: '研发预算偏差率', max: 100},
                {name: '研发计划达标完成率', max: 100},
                {name: '定制型产品设计及时率', max: 2},
            ]
        },
        series: [{
            // name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [
                {
                    value: [0, 0, 0,],
                    name: '当日',
                    lineStyle: {
                        color: "#ff7f50"
                    },
                    areaStyle: {
                        color: "#ff7f50"
                    }
                },
                {
                    value: [55, 75, 1.0,],
                    name: '月平均',
                    lineStyle: {
                        color: "#87cefa"
                    },
                    areaStyle: {
                        color: "#87cefa"
                    }
                }
            ]
        }]
    };
    setInterval(function () {
        personcx2.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    personcx2.setOption(option);
};
// 运作流程相关效率
function personcx3 (){
    // 基于准备好的dom，初始化echarts实例
    var personcx3 = echarts.init(document.getElementById('personcx3'));
    charts.push(personcx3);
    // 指定图表的配置项和数据
    var  option;
    option = {
        color: ["#ff7f50", "#87cefa"],
        title: {
            text: ''
        },
        tooltip: {},
        legend: {

            right: '10%',
            data: ['当月',],
            textStyle: {
                color: "#fff"
            }
        },
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#fff',
                    /*                    backgroundColor: '#999',
                                        borderRadius: 3,
                                        padding: [3, 5]*/
                }
            },
            indicator: [
                {name: '材料得率', max: 100},
                {name: '采购价格节约率', max: 100},
                {name: '元件进场检核合格率', max: 100},
                {name: '库存资金周转率', max: 100},
                {name: '销售成本率', max: 100},
            ]
        },
        series: [{
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [
                {
                    value: [75, 75, 55, 80, 94,],
                    name: '当月',
                    lineStyle: {
                        color: "#87cefa"
                    },
                    areaStyle: {
                        color: "#87cefa"
                    }
                }
            ]
        }]
    };

    setInterval(function () {
        personcx3.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    personcx3.setOption(option);

};
//运作流程相关指标
function personcx4 (){
    // 基于准备好的dom，初始化echarts实例
    var personcx4 = echarts.init(document.getElementById('personcx4'));
    charts.push(personcx4);
    // 指定图表的配置项和数据

    var option = {
        legend: {
            top: "90%",
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            }
        },
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        // 注意颜色写的位置
        color: [
            // "#006cff",
            "#60cda0",
            // "#1d9dff"
        ],
        series: [
            {
                name: "点位统计",
                type: "pie",
                // 如果radius是百分比则必须加引号
                radius: ["10%", "70%"],
                center: ["50%", "42%"],
                roseType: "radius",
                data: [
                    { value: 26, name: "素养" },

                ],
                // 修饰饼形图文字相关的样式 label对象
                label: {
                    fontSize: 10
                },
                // 修饰引导线样式
                labelLine: {
                    // 连接到图形的线长度
                    length: 10,
                    // 连接到文字的线长度
                    length2: 10
                }
            }
        ]
    };
    setInterval(function () {
        personcx4.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    personcx4.setOption(option);

};
$(function(){
    /*    home_A();*/
    //  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

    //     // 获取已激活的标签页的名称
    //     var activeTab = $(e.target).text();
    //     // 获取前一个激活的标签页的名称
    //     var previousTab = $(e.relatedTarget).text();
    //     /*$(".active-tab span").html(activeTab);
    //     $(".previous-tab span").html(previousTab);*/
    //     // alert(activeTab);
    //     if(activeTab=="总览"){
    //         // home_A();
    //     }
    //     if (activeTab=="企业KPI"){
    //         personcx2();
    //         personcx3();
    //         personcx4();
    //     }
        personcx2();
        personcx3();
        personcx4();
  

});


//resize图表
window.onresize=function () {
    for(var i=0;i<charts.length;i++){
        charts[i].resize();
    }
}
