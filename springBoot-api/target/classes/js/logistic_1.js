

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


//---------------------------------------------------------------上面的先不要动------------------------------------
//------------------------产品 1 一次交检不合格率--quality_A_L1_1----------------------//
//------------------------数据


//------------------------产品 2 质量事故--quality_A_L1_2----------------------//
//------------------------数据


//------------------------图表
$(function logistic_A_L1_2() {
    // 基于准备好的dom，初始化echarts实例
    var myChart_logistic_A_L1_2 = echarts.init(document.getElementById('logistic_A_L1_2'));
    charts.push(myChart_logistic_A_L1_2);

    var option = {

        color: ["#99cccc", "#ffcc99", "#ffcccc", "#ff6666", '#cccc99', '#ff9966', '#ccccff', '#F8B448', '#cc9999'],
        legend: {
            x: 'center',//图例位置
            y: 'bottom',//图例位置
            data: ['仓库1', '仓库2', '车间1', '车间2', '缓存区1', '缓存区2', '缓存区3'],
            textStyle: {
                color: '#ffffff',

            }
        },

        calculable: false,


        grid: {
            left: '5%',
            right: '5%',
            bottom: '20%',
            containLabel: true
        },

        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },

        xAxis: [
            {
                type: 'value',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: ['#f2f2f2'],
                        width: 0,
                        type: 'solid'
                    }
                }

            }
        ],

        yAxis: [
            {
                type: 'category',
                data: ['产品E', '产品D', '产品C', '产品B', '产品A'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                splitLine: {
                    lineStyle: {
                        width: 0,
                        type: 'solid'
                    }
                }
            }
        ],

        series: [
            {
                name: '仓库1',
                type: 'bar',
                stack: '总量',
                itemStyle: { normal: { label: { show: true, position: 'insideRight' } } },
                data: [320, 302, 301, 302, 301]
            },
            {
                name: '仓库2',
                type: 'bar',
                stack: '总量',
                itemStyle: { normal: { label: { show: true, position: 'insideRight' } } },
                data: [120, 132, 101, 302, 301]
            },

            {
                name: '车间1',
                type: 'bar',
                stack: '总量',
                itemStyle: { normal: { label: { show: true, position: 'insideRight' } } },
                data: [150, 212, 201, 302, 301]
            },
            {
                name: '车间2',
                type: 'bar',
                stack: '总量',
                itemStyle: { normal: { label: { show: true, position: 'insideRight' } } },
                data: [220, 182, 191, 302, 301]
            },
            {
                name: '缓存区1',
                type: 'bar',
                stack: '总量',
                itemStyle: { normal: { label: { show: true, position: 'insideRight' } } },
                data: [150, 212, 201, 302, 301]
            },
            {
                name: '缓存区2',
                type: 'bar',
                stack: '总量',
                itemStyle: { normal: { label: { show: true, position: 'insideRight' } } },
                data: [150, 212, 201, 302, 301]
            },
            {
                name: '缓存区3',
                type: 'bar',
                stack: '总量',
                itemStyle: { normal: { label: { show: true, position: 'insideRight' } } },
                data: [150, 212, 201, 302, 301]
            }
        ]
    };


    setInterval(function () {
        option.series[0].data = as_p//改这里
        option.series[1].data = as_eq//改这里
        option.series[2].data = as_me//改这里
        option.series[3].data = as_ma//改这里
        option.series[4].data = as_en//改这里
        option.series[5].data = as_ms//改这里
        option.series[6].data = as_r//改这里

        myChart_logistic_A_L1_2.setOption(option, true);
    }, 500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_logistic_A_L1_2.setOption(option);
})


//------------------------产品 3 返修率--quality_A_R1_1----------------------//
//------------------------数据


//------------------------产品 4 质量损失--quality_A_R1_2----------------------//
//------------------------数据

//------------------------图表
$(function logistic_A_R1_2() {
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
})

//---------------------------------------------------------------quality_A_M1---------KPI---------------------------

$(function logistic_A_M1() {
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


})



$(function quality_workstation1() {
    // 基于准备好的dom，初始化echarts实例
    var myChart_quality_workstation1 = echarts.init(document.getElementById('quality_workstation1'));
    charts.push(myChart_quality_workstation1);
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['利润', '支出', '收入']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'value'
            }
        ],
        yAxis: [
            {
                type: 'category',
                axisTick: {
                    show: false
                },
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }
        ],
        series: [
            {
                name: '利润',
                type: 'bar',
                label: {
                    show: true,
                    position: 'inside'
                },
                data: [200, 170, 240, 244, 200, 220, 210]
            },
            {
                name: '收入',
                type: 'bar',
                stack: '总量',
                label: {
                    show: true
                },
                data: [320, 302, 341, 374, 390, 450, 420]
            },
            {
                name: '支出',
                type: 'bar',
                stack: '总量',
                label: {
                    show: true,
                    position: 'left'
                },
                data: [-120, -132, -101, -134, -190, -230, -210]
            }
        ]
    };


    setInterval(function () {
        // option.series[0].data[0].value =  $("#quality_A_M1").attr("data-value")*100;
        myChart_quality_workstation1.setOption(option, true);
    }, 500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_quality_workstation1.setOption(option);


})



$(function () {
    home_A();
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

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
        if (activeTab == "设备KPI") {

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
window.onresize = function () {
    for (var i = 0; i < charts.length; i++) {
        charts[i].resize();
    }
}

// ----------------------------工厂层级的物流总成本-----------------------

$(function logistic_scost() {
    // 基于准备好的dom，初始化echarts实例
    var myChart_logistic_scost = echarts.init(document.getElementById('logistic_scost'));
    charts.push(myChart_logistic_scost);

    var option = {

        color: ["#99cccc", "#ffcc99", "#ffcccc", "#ff6666", '#cccc99', '#ff9966', '#ccccff', '#F8B448', '#cc9999'],
        legend: {
            x: 'center',//图例位置
            y: 'bottom',//图例位置
            data: ['运输成本', '存货持有成本', '物流管理成本'],
            textStyle: {
                color: '#ffffff',

            }
        },

        calculable: false,


        grid: {
            left: '5%',
            right: '5%',
            bottom: '20%',
            containLabel: true
        },

        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },

        xAxis: [
            {
                type: 'value',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: ['#f2f2f2'],
                        width: 0,
                        type: 'solid'
                    }
                }

            }
        ],

        yAxis: [
            {
                type: 'category',
                data: ['2020年5月', '2020年6月', '2020年7月', '2020年8月', '2020年9月'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                splitLine: {
                    lineStyle: {
                        width: 0,
                        type: 'solid'
                    }
                }
            }
        ],

        series: [
            {
                name: '运输成本',
                type: 'bar',
                stack: '总量',
                itemStyle: { normal: { label: { show: true, position: 'insideRight' } } },
                data: [320, 302, 301, 302, 301]
            },
            {
                name: '存货持有成本',
                type: 'bar',
                stack: '总量',
                itemStyle: { normal: { label: { show: true, position: 'insideRight' } } },
                data: [120, 132, 101, 298, 301]
            },

            {
                name: '物流管理成本',
                type: 'bar',
                stack: '总量',
                itemStyle: { normal: { label: { show: true, position: 'insideRight' } } },
                data: [150, 212, 201, 150, 301]
            },
        ]
    };


    setInterval(function () {
        option.series[0].data = as_p//改这里
        option.series[1].data = as_eq//改这里
        option.series[2].data = as_me//改这里
        option.series[3].data = as_ma//改这里
        option.series[4].data = as_en//改这里
        option.series[5].data = as_ms//改这里
        option.series[6].data = as_r//改这里

        myChart_logistic_scost.setOption(option, true);
    }, 500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_logistic_scost.setOption(option);
})

$(function logistic_efficiency() {
    // 基于准备好的dom，初始化echarts实例
    var myChart_logistic_efficiency = echarts.init(document.getElementById('logistic_efficiency'));
    charts.push(myChart_logistic_efficiency);

    var option = {
        textStyle:{
            color:"#ffffff"
        },
        tooltip: {
            formatter: '{a} <br/>{b} : {c}%'
        },
        toolbox: {
            feature: {
                restore: {},
                saveAsImage: {}
            }
        },
        series: [
            {
                name: '',
                type: 'gauge',
                detail: { formatter: '{value}%' },
                data: [{ value: 82, name: '配送效率'}]
                
            }
        ]
    };

    setInterval(function () {
        option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
        myChart_logistic_efficiency.setOption(option, true);
    },2000);
    // 使用刚指定的配置项和数据显示图表。
    myChart_logistic_efficiency.setOption(option);
})

$(function logistic_jiaofu() {
    // 基于准备好的dom，初始化echarts实例
    var myChart_logistic_jiaofu = echarts.init(document.getElementById('logistic_jiaofu'));
    charts.push(myChart_logistic_jiaofu);

    var option = {
        textStyle:{
            color:"#ffffff"
        },
        tooltip: {
            formatter: '{a} <br/>{b} : {c}%'
        },
        toolbox: {
            feature: {
                restore: {},
                saveAsImage: {}
            }
        },
        series: [
            {
                name: '',
                type: 'gauge',
                detail: { formatter: '{value}%' },
                data: [{ value: 82, name: '按时交付率'}]
                
            }
        ]
    };

    setInterval(function () {
        option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
        myChart_logistic_jiaofu.setOption(option, true);
    },2000);
    // 使用刚指定的配置项和数据显示图表。
    myChart_logistic_jiaofu.setOption(option);
})




// ------------------------------采购准时率----------------------------
$(function logistic_purchase() {
    // 基于准备好的dom，初始化echarts实例
    // 基于准备好的dom，初始化echarts实例
    var myChart_logistic_purchase = echarts.init(document.getElementById('logistic_purchase'));
    charts.push(myChart_logistic_purchase);

    // 指定图表的配置项和数据

    var option = {

        color: ['#FD6C88'],
        grid: {
            left: '5%',
            right: '5%',
            bottom: '10%',
            containLabel: true
        },
        tooltip: {
            trigger: 'item',
            formatter: "{b}{a}{c}%"
        },
        calculable: true,
        yAxis: [
            {
                inverse: true,
                type: 'category',
                data: ['部件A', '部件B', '部件C', '部件D', '部件E',],
                axisLine: {
                    lineStyle: {
                        color: '#FD6C88'
                    },
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            }
        ],
        xAxis: [
            {
                type: 'value',
                axisLine: {
                    lineStyle: {
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
        series: [
            {
                name: '采购准时率',
                type: 'bar',
                barWidth: 20,
                data: [75, 66, 56, 89, 74],
            },
        ]
    }
        ;

    setInterval(function () {
        option.series[0].data = cp_unqualified_rate

        myChart_logistic_purchase.setOption(option, true);
    }, 500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_logistic_purchase.setOption(option);
})



// --------------------------工位级：物料需求量符合度
$(function logistic_demand () {
    // 基于准备好的dom，初始化echarts实例
    var myChart_logistic_demand = echarts.init(document.getElementById('logistic_demand'));
    charts.push(myChart_logistic_demand );

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
        myChart_logistic_demand.setOption(option, true);
    }, 500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_logistic_demand.setOption(option);
})


// ----------------时间窗
$(function logistic_timewindow () {
    // 基于准备好的dom，初始化echarts实例
    var myChart_logistic_timewindow  = echarts.init(document.getElementById('logistic_timewindow'));
    charts.push(myChart_logistic_timewindow  );

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
        myChart_logistic_timewindow .setOption(option, true);
    }, 500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_logistic_timewindow .setOption(option);
})