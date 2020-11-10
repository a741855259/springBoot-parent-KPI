

//定义一个全局变量接受图表，以便resize——————————————————————————————这里是把所有的图表放进去 可以自己调整宽度
charts = [];
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
                { name: '人员', max: 6500 },
                { name: '设备', max: 16000 },
                { name: '流程', max: 30000 },
                { name: '质量', max: 38000 },
                { name: '物流', max: 52000 },

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
    }, 500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_home_A.setOption(option);

}




//------------------------图表
function logistic_A_R1_2() {
    // 基于准备好的dom，初始化echarts实例
    var myChart_logistic_A_R1_2 = echarts.init(document.getElementById('logistic_A_R1_2'));
    charts.push(myChart_logistic_A_R1_2);

    // 指定图表的配置项和数据

    var option = {
        color: ["#87cefa", "#ff7f50", "#32cd32", "#da70d6", '#8B78F6'],
        tooltip: {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}%"
        },
        legend: {
            data: ['部件A', '部件B', '部件C', '部件D', '部件E',],
            y: 'bottom',
            x: 'center',
            textStyle: {
                color: '#fff',
                fontSize: 12
            }
        },
        grid: {
            left: '5%',
            right: '5%',
            bottom: '10%',
            containLabel: true
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['8:00', '8:10', '8:20', '8:30', '8:40'],
                axisLine: {
                    lineStyle: {
                        color: '#87cefa'
                    },
                },
                axisLabel: {
                    interval: 0,
                    rotate: 40,

                    textStyle: {
                        color: '#fff',
                        fontSize: 13
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLine: {
                    lineStyle: {
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
        series: [
            {
                name: '部件A',
                type: 'line',

                itemStyle: { normal: { areaStyle: {} } },
                data: [60, 75, 80, 62, 82]
            },
            {
                name: '部件B',
                type: 'line',

                itemStyle: { normal: { areaStyle: {} } },
                data: [70, 75, 73, 68, 73]
            },
            {
                name: '部件C',
                type: 'line',
                itemStyle: { normal: { areaStyle: {} } },
                data: [55, 58, 60, 49, 53]
            },
            {
                name: '部件D',
                type: 'line',

                itemStyle: { normal: { areaStyle: {} } },
                data: [91, 92, 89, 86, 90]
            },
            {
                name: '部件E',
                type: 'line',

                itemStyle: { normal: { areaStyle: {} } },
                data: [80, 81, 83, 83, 79]
            }
        ]

    };
    setInterval(function () {
        // option.series[0].data[0] =  [$("#quality_A_R1_2").attr("data-
        // option.series[0].data = [rer[0],rer[1],rer[2],rer[3],rer[4]];
        // option.series[0].data = rer;
        // option.series[0].data =  [1,1,1,1,1]
        myChart_logistic_A_R1_2.setOption(option, true);
    }, 500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_logistic_A_R1_2.setOption(option);
}

//---------------------------------------------------------------quality_A_M1---------KPI---------------------------

function logistic_A_M1() {
    // 基于准备好的dom，初始化echarts实例
    var myChart_logistic_A_M1 = echarts.init(document.getElementById('logistic_A_M1'));
    charts.push(myChart_logistic_A_M1);

    // 指定图表的配置项和数据
    var option = {
        color: ["#87cefa", "#ff7f50", "#32cd32", "#da70d6", '#8B78F6'],
        title: {
            text: ''
        },
        tooltip: {},
        legend: {

            textStyle: {
                color: '#fff'
            },
            data: ['当日', '月平均']
        },
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#fff',
                    backgroundColor: '#034c6a',
                    borderRadius: 3,
                    padding: [3, 5]
                }
            },
            indicator: [
                { name: '部件A', max: 100 },
                { name: '部件B', max: 100 },
                { name: '部件C', max: 100 },
                { name: '部件D', max: 100 },
                { name: '部件E', max: 100 },

            ]
        },
        series: [{
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [
                {
                    value: [60, 80, 73, 68, 85],
                    name: '当日'
                },
                {
                    value: [75, 75, 90, 50, 72],
                    name: '月平均'
                }
            ]
        }]
    };

    setInterval(function () {
        // option.series[0].data[0].value =  $("#quality_A_M1").attr("data-value")*100;
        myChart_logistic_A_M1.setOption(option, true);
    }, 500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_logistic_A_M1.setOption(option);


}
function logistic_A_1_M1(){
    // 基于准备好的dom，初始化echarts实例
    var myChart_logistic_A_1_M1 = echarts.init(document.getElementById('logistic_A_1_M1'));
    charts.push(myChart_logistic_A_1_M1);

  var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];//这条也是要的
   // var myColor = ["#99cccc","#ffcc99","#ffcccc","#ff6666",'#cccc99', '#ff9966', '#ccccff', '#F8B448', '#cc9999'];
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
            data:  ['8月1日8:00','8月1日8:10','8月1日8:20','8月1日8:30','8月1日8:40','8月1日8:50'],
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
            data: [100, 100, 100, 100,100,100],//右端数值
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
            data: [80, 75, 83, 78, 79,90],//条上数值
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
            data: [100, 100, 100, 100,100,100],//框
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


        myChart_logistic_A_1_M1.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_logistic_A_1_M1.setOption(option);
}
function logistic_A_2_L1(){
    // 基于准备好的dom，初始化echarts实例
    var myChart_logistic_A_2_L1 = echarts.init(document.getElementById('logistic_A_2_L1'));
    charts.push(myChart_logistic_A_2_L1);

    // 指定图表的配置项和数据
    var option = {
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
                name:'产品A',
                type:'line',

                itemStyle: {normal: {areaStyle: {}}},
                data:[1, 2, 1, 4, 3,]
            },

        ]

    };


    setInterval(function () {

        option.series[0].data = wip_false_alarm_rate;

        myChart_logistic_A_2_L1.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_logistic_A_2_L1.setOption(option);
}







$(function () {
   // home_A();
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

        // 获取已激活的标签页的名称
        var activeTab = $(e.target).text();
        // 获取前一个激活的标签页的名称
        var previousTab = $(e.relatedTarget).text();
        /*$(".active-tab span").html(activeTab);
        $(".previous-tab span").html(previousTab);*/
        // alert(activeTab);
        if (activeTab == "总览") {
           // home_A();
        }
        if (activeTab == "物流KPI") {

            logistic_A_R1_2();
            logistic_A_M1();
            logistic_A_1_M1();
            logistic_A_2_L1();
        }
    });
});
//resize图表
window.onresize = function () {
    for (var i = 0; i < charts.length; i++) {
        charts[i].resize();
    }
}

