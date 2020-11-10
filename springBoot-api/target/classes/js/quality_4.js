

//定义一个全局变量接受图表，以便resize——————————————————————————————这里是把所有的图表放进去 可以自己调整宽度
charts=[];
//home
function home_A() {
    // 基于准备好的dom，初始化echarts实例
    var myChart_home_A = echarts.init(document.getElementById('home_A'));

    charts.push(myChart_home_A);
    // 指定图表的配置项和数据
    var     option = {
        legend: {},
        tooltip: {
            trigger: 'axis',
            showContent: false
        },
        dataset: {
            source: [
                ['product', '2012', '2013', '2014', '2015', '2016', ],
                ['Matcha Latte', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
                ['Milk Tea', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
                ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
                ['Walnut Brownie', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
            ]
        },
        xAxis: {type: 'category'},
        yAxis: {gridIndex: 0},
        grid: {top: '55%'},
        series: [
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {
                type: 'pie',
                id: 'pie',
                radius: '30%',
                center: ['50%', '25%'],
                label: {
                    formatter: '{b}: {@2012} ({d}%)'
                },
                encode: {
                    itemName: 'product',
                    value: '2012',
                    tooltip: '2012'
                }
            }
        ]
    };

    myChart.on('updateAxisPointer', function (event) {
        var xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
            var dimension = xAxisInfo.value + 1;
            myChart.setOption({
                series: {
                    id: 'pie',
                    label: {
                        formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                    },
                    encode: {
                        value: dimension,
                        tooltip: dimension
                    }
                }
            });
        }
    });

    myChart.setOption(option);

    setInterval(function () {
        option.series[0].data[1].value = [5000, 14000, 28000, 31000, 42000];
        myChart_home_A.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_home_A.setOption(option);

}


//---------------------------------------------------------------上面的先不要动------------------------------------

//------------------------零件 加工不良率--quality_A_L----------------------//
//------------------------数据

function ajax17() {

    $.post("QualityKPI/update5",{},function quality_A_L(data) {

        a_p_unqualified_rate = [];
        a_p_unqualified_rate[0]='产品A加工不良率'
        a_p_unqualified_rate[1]=data.data[0].a_p_unqualified_rate;
        a_p_unqualified_rate[2]=data.data[1].a_p_unqualified_rate;
        a_p_unqualified_rate[3]=data.data[2].a_p_unqualified_rate;
        a_p_unqualified_rate[4]=data.data[3].a_p_unqualified_rate;
        a_p_unqualified_rate[5]=data.data[4].a_p_unqualified_rate;
        // alert(a_p_unqualified_rate)
        b_p_unqualified_rate = [];
        b_p_unqualified_rate[0]='产品B加工不良率'
        b_p_unqualified_rate[1]=data.data[0].b_p_unqualified_rate;
        b_p_unqualified_rate[2]=data.data[1].b_p_unqualified_rate;
        b_p_unqualified_rate[3]=data.data[2].b_p_unqualified_rate;
        b_p_unqualified_rate[4]=data.data[3].b_p_unqualified_rate;
        b_p_unqualified_rate[5]=data.data[4].b_p_unqualified_rate;

        c_p_unqualified_rate = [];
        c_p_unqualified_rate[0]='产品C加工不良率'
        c_p_unqualified_rate[1]=data.data[0].c_p_unqualified_rate;
        c_p_unqualified_rate[2]=data.data[1].c_p_unqualified_rate;
        c_p_unqualified_rate[3]=data.data[2].c_p_unqualified_rate;
        c_p_unqualified_rate[4]=data.data[3].c_p_unqualified_rate;
        c_p_unqualified_rate[5]=data.data[4].c_p_unqualified_rate;


        d_p_unqualified_rate = [];
        d_p_unqualified_rate[0]='产品D加工不良率'
        d_p_unqualified_rate[1]=data.data[0].d_p_unqualified_rate;
        d_p_unqualified_rate[2]=data.data[1].d_p_unqualified_rate;
        d_p_unqualified_rate[3]=data.data[2].d_p_unqualified_rate;
        d_p_unqualified_rate[4]=data.data[3].d_p_unqualified_rate;
        d_p_unqualified_rate[5]=data.data[4].d_p_unqualified_rate;

        e_p_unqualified_rate = [];
        e_p_unqualified_rate[0]='产品E加工不良率'
        e_p_unqualified_rate[1]=data.data[0].e_p_unqualified_rate;
        e_p_unqualified_rate[2]=data.data[1].e_p_unqualified_rate;
        e_p_unqualified_rate[3]=data.data[2].e_p_unqualified_rate;
        e_p_unqualified_rate[4]=data.data[3].e_p_unqualified_rate;
        e_p_unqualified_rate[5]=data.data[4].e_p_unqualified_rate;
    })
    }
$(function () {
    ajax17();
    setInterval(ajax17,3000);
               })
    setTimeout($(function quality_A_L() {
        var myChart_quality_A_L = echarts.init(document.getElementById('quality_A_L'));
        charts.push(myChart_quality_A_L);

        var option = {
            color:["#87cefa","#ff7f50","#32cd32","#da70d6",'#8B78F6'],
            legend: { x:'center',//图例位置
                y:'bottom',//图例位置
                textStyle: { //图例文字的样式
                    color: '#fff',
                    // fontSize: 16
                },

            },
            tooltip: {
                trigger: 'axis',
                showContent: false
            },
            dataset: {
                source: [
                    ['product', '4月', '5月', '6月', '7月', '8月', ],
                    ['零件A', 21, 30.4, 65.1, 53.3, 83.8],
                    ['零件B', 86.5, 92.1, 85.7, 83.1, 73.4],
                    ['零件C', 24.1, 67.2, 79.5, 86.4, 65.2],
                    ['零件D', 55.2, 67.1, 69.2, 72.4, 53.9],
                    ['零件E', 5.2, 7.1, 9.2, 2.4, 3.9]
                ]
            },
            xAxis: {type: 'category',
                axisLabel: {
                    show: true,
                    color: '#ffffff',//Y轴字体颜色
                }


                },
            yAxis: {gridIndex: 0,
                axisLabel: {
                    show: true,
                    color: '#ffffff',//Y轴字体颜色
                }},
            grid: {top: '55%'},
            series: [
                {type: 'line',  seriesLayoutBy: 'row'},
                {type: 'line',  seriesLayoutBy: 'row'},
                {type: 'line',  seriesLayoutBy: 'row'},
                {type: 'line',  seriesLayoutBy: 'row'},
                {type: 'line',  seriesLayoutBy: 'row'},
                {
                    type: 'pie',
                    id: 'pie',
                    radius: '30%',
                    center: ['50%', '25%'],
                    label: {
                        formatter: '{b}: {@2016} ({d}%)'
                    },
                    encode: {
                        itemName: 'product',
                        value: '2016',
                        tooltip: '2016'
                    }
                }
            ]
        };

        setInterval(function () {
            option.dataset.source[1] = a_p_unqualified_rate//改这里
            option.dataset.source[2] = b_p_unqualified_rate//改这里
            option.dataset.source[3] = c_p_unqualified_rate//改这里
            option.dataset.source[4] = d_p_unqualified_rate//改这里
            option.dataset.source[5] = e_p_unqualified_rate//改这里
            myChart_quality_A_L.setOption(option, true);
        },500);
        myChart_quality_A_L.setOption(option);

        myChart_quality_A_L.on('updateAxisPointer', function quality_A_L(event) {//额外的4个要改
            var xAxisInfo = event.axesInfo[0];
            if (xAxisInfo) {
                var dimension = xAxisInfo.value + 1;
                myChart_quality_A_L.setOption({
                    series: {
                        id: 'pie',
                        label: {
                            formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                        },
                        encode: {
                            value: dimension,
                            tooltip: dimension
                        }
                    }
                });
            }
        });
        myChart_quality_A_L.setOption(option);
    }));


//------------------------零件 错检率--quality_A_R1_1----------------------//
//------------------------数据
function ajax20() {
    $.post("QualityKPI/update4",{},function (data) {
        p_false_alarm_rate = [];
        p_false_alarm_rate[0]=data.data[0].p_false_alarm_rate*100;
        p_false_alarm_rate[1]=data.data[1].p_false_alarm_rate*100;
        p_false_alarm_rate[2]=data.data[2].p_false_alarm_rate*100;
        p_false_alarm_rate[3]=data.data[3].p_false_alarm_rate*100;
        p_false_alarm_rate[4]=data.data[4].p_false_alarm_rate*100;
    })
}
$(function () {
    ajax20();
    setInterval(ajax20,3000);
})
//------------------------图表
$(function quality_A_R1_1(){
    // 基于准备好的dom，初始化echarts实例
    var myChart_quality_A_R1_1 = echarts.init(document.getElementById('quality_A_R1_1'));
    charts.push(myChart_quality_A_R1_1);

    // 指定图表的配置项和数据
    option = {
        color:["#da70d6",'#8B78F6'],
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
                data : ['零件A','零件B','零件C','零件D','零件E',],
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
                name:'错检率',
                type:'line',

                itemStyle: {normal: {areaStyle: {}}},
                data:[1, 2, 1, 4, 3,]
            },

        ]

    };


    setInterval(function () {

        option.series[0].data = p_false_alarm_rate;

        myChart_quality_A_R1_1.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_quality_A_R1_1.setOption(option);
})

//------------------------零件 漏检率--quality_A_R1_3----------------------//
//------------------------数据

function ajax21() {

    $.post("QualityKPI/update4",{},function (data) {
        p_miss_alarm_rate = [];
        p_miss_alarm_rate[0]=data.data[0]. p_miss_alarm_rate*100;
        p_miss_alarm_rate[1]=data.data[1]. p_miss_alarm_rate*100;
        p_miss_alarm_rate[2]=data.data[2]. p_miss_alarm_rate*100;
        p_miss_alarm_rate[3]=data.data[3]. p_miss_alarm_rate*100;
        p_miss_alarm_rate[4]=data.data[4]. p_miss_alarm_rate*100;
    })
}
$(function () {
    ajax21();
    setInterval(ajax21,3000);
})

//------------------------图表

$(function quality_A_R1_3(){

    var myChart_quality_A_R1_3 = echarts.init(document.getElementById('quality_A_R1_3'));
    charts.push(myChart_quality_A_R1_3);



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
                data : ['零件A','零件B','零件C','零件D','零件E',],
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

        myChart_quality_A_R1_3.setOption(option, true);
    },500);
    myChart_quality_A_R1_3.setOption(option);
})
//------------------------零件 返工率------------------------//
//------------------------数据
function ajax17() {
    $.post("QualityKPI/update4",{},function (data) {
        p_rework_rate = [];
        p_rework_rate[0]=data.data[0]. p_rework_rate*100;
        p_rework_rate[1]=data.data[1]. p_rework_rate*100;
        p_rework_rate[2]=data.data[2]. p_rework_rate*100;
        p_rework_rate[3]=data.data[3]. p_rework_rate*100;p_rework_rate[4]=data.data[4]. p_rework_rate*100;

    })
}
$(function () {
    ajax17();
    setInterval(ajax17,3000);
})
//------------------------图表

$(function quality_A_R2_1(){
    // 基于准备好的dom，初始化echarts实例
    var myChart_quality_A_R2_1 = echarts.init(document.getElementById('quality_A_R2_1'));
    charts.push(myChart_quality_A_R2_1);

    var option = {
            color:['#56D0E3'],
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
                    data : ['零件A','零件B','零件C','零件D','零件E',],
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
        option.series[0].data =p_rework_rate//改这里

        myChart_quality_A_R2_1.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_quality_A_R2_1.setOption(option);
})


//------------------------零件 废品率--quality_A_R2_2----------------------//
//------------------------数据
function ajax19() {
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
$(function quality_A_R2_2(){
    // 基于准备好的dom，初始化echarts实例
    var myChart_quality_A_R2_2 = echarts.init(document.getElementById('quality_A_R2_2'));
    charts.push(myChart_quality_A_R2_2);
    // 指定图表的配置项和数据
    var option = {

        color:["#87cefa","#ff7f50","#32cd32","#da70d6",'#8B78F6'],
        //css提示工具，表示触发类型，当trigger为’item’时只会显示该点的数据，为’axis’时显示该列下所有坐标轴所对应的数据。
        tooltip: {
            trigger: 'item',
            //提示框的内容设置
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            textStyle:{
                color:'#ccc',
                fontSize:16
            },
            left: 'center',
            top: 'bottom',
            //配置类目名称
            data: ['零件A','零件B','零件C','零件D','零件E', ]
        },

        toolbox: {
            show: true,
            feature: {
                mark: {show: true},
                dataView: {show: true, readOnly: false},

                magicType: {
                    show: true,
                    type: ['pie', 'funnel']
                },

                restore: {show: true},

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

        myChart_quality_A_R2_2.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_quality_A_R2_2.setOption(option);
})




//---------------------------------------------------------------quality_A_M1---------KPI---------------------------
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