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
            data: [{
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

    setInterval(function() {
        option.series[0].data[1].value = [5000, 14000, 28000, 31000, 42000];
        myChart_home_A.setOption(option, true);
    }, 500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_home_A.setOption(option);

}



// --------------------------工位级：物料需求量符合度
function logistic_demand() {
    // 基于准备好的dom，初始化echarts实例
    var myChart_logistic_demand = echarts.init(document.getElementById('logistic_demand'));
    charts.push(myChart_logistic_demand);

    // 指定图表的配置项和数据

    var option = {
        //color: ["#87cefa", "#ff7f50", "#32cd32", "#da70d6", '#8B78F6'],
        //color: ["#fff", "#fff", "#fff", "#fff", '#fff'],
        tooltip: {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}%"
        },
        legend: {
            data: ['部件A', '部件B', '部件C', '部件D', '部件E', ],
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
        xAxis: [{
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
        }],
        yAxis: [{
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
                formatter: function(value) {
                    return value + "%"
                },
            },
        }],
        series: [{
                name: '部件A',
                type: 'line',
                color: ['pink'],
                //itemStyle: { normal: { areaStyle: {} } },
                data: [60, 75, 80, 62, 82]
            },
            {
                name: '部件B',
                type: 'line',

                //  itemStyle: { normal: { areaStyle: {} } },
                data: [70, 75, 73, 68, 73]
            },
            {
                name: '部件C',
                type: 'line',
                color: ['white'],
                //  itemStyle: { normal: { areaStyle: {} } },
                data: [55, 58, 60, 49, 53]
            },
            {
                name: '部件D',
                type: 'line',
                color: '#87cefa',
                //  itemStyle: { normal: { areaStyle: {} } },
                data: [91, 92, 89, 86, 90]
            },
            {
                name: '部件E',
                color: '#8B78F6',
                type: 'line',

                // itemStyle: { normal: { areaStyle: {} } },
                data: [80, 81, 83, 83, 79]
            }
        ]

    };
    setInterval(function() {
        // option.series[0].data[0] =[$("#quality_A_R1_2").attr("data-
        // option.series[0].data = [rer[0],rer[1],rer[2],rer[3],rer[4]];
        // option.series[0].data = rer;
        // option.series[0].data =  [1,1,1,1,1]
        myChart_logistic_demand.setOption(option, true);
    }, 500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_logistic_demand.setOption(option);
}


// ----------------时间窗


function logistic_timewindow() {
    // 基于准备好的dom，初始化echarts实例
    var myChart_logistic_timewindow = echarts.init(document.getElementById('logistic_timewindow'));
    charts.push(myChart_logistic_timewindow);

    // 指定图表的配置项和数据

    var option = {
        //color: ["#87cefa", "#ff7f50", "#32cd32", "#da70d6", '#8B78F6'],
        //color: ["#fff", "#fff", "#fff", "#fff", '#fff'],
        tooltip: {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}%"
        },
        legend: {
            data: ['部件A', '部件B', '部件C', '部件D', '部件E', ],
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
        xAxis: [{
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
        }],
        yAxis: [{
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
                formatter: function(value) {
                    return value + "%"
                },
            },
        }],
        series: [{
                name: '部件A',
                type: 'line',
                color: ['pink'],
                //itemStyle: { normal: { areaStyle: {} } },
                data: [50, 75, 78, 62, 68]
            },
            {
                name: '部件B',
                type: 'line',

                //  itemStyle: { normal: { areaStyle: {} } },
                data: [70, 75, 73, 86, 67]
            },
            {
                name: '部件C',
                type: 'line',
                color: ['white'],
                //  itemStyle: { normal: { areaStyle: {} } },
                data: [55, 58, 65, 49, 53]
            },
            {
                name: '部件D',
                type: 'line',
                color: '#87cefa',
                //  itemStyle: { normal: { areaStyle: {} } },
                data: [61, 92, 89, 86, 90]
            },
            {
                name: '部件E',
                color: '#8B78F6',
                type: 'line',

                // itemStyle: { normal: { areaStyle: {} } },
                data: [79, 81, 83, 90, 79]
            }
        ]

    };
    setInterval(function() {
        // option.series[0].data[0] =[$("#quality_A_R1_2").attr("data-
        // option.series[0].data = [rer[0],rer[1],rer[2],rer[3],rer[4]];
        // option.series[0].data = rer;
        // option.series[0].data =  [1,1,1,1,1]
        myChart_logistic_timewindow.setOption(option, true);
    }, 500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_logistic_timewindow.setOption(option);
}

$(function() {
    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {

        // 获取已激活的标签页的名称
        var activeTab = $(e.target).text();
        // 获取前一个激活的标签页的名称
        var previousTab = $(e.relatedTarget).text();
        /*$(".active-tab span").html(activeTab);
        $(".previous-tab span").html(previousTab);*/
        // alert(activeTab);
        if (activeTab == "总览") {
            home_A();
        }
        if (activeTab == "物流KPI") {

            logistic_demand();
            logistic_timewindow();
        }
    });
});
//resize图表
window.onresize = function() {
    for (var i = 0; i < charts.length; i++) {
        charts[i].resize();
    }
}