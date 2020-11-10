charts=[];





//------------------------图表
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






//------------------------图表
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






//------------------------图表
function logistic_A_2_R1(){
    // 基于准备好的dom，初始化echarts实例
    var myChart_logistic_A_2_R1 = echarts.init(document.getElementById('logistic_A_2_R1'));
    charts.push(myChart_logistic_A_2_R1);

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
                data : ['在制品A','在制品B','在制品C','在制品D','在制品E','在制品F','在制品G'],
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
                name:'库存周转率',
                type:'line',

                itemStyle: {normal: {areaStyle: {}}},
                data:[60, 85, 72, 79, 66,50,72]
            },

        ]

    };


    setInterval(function () {

        option.series[0].data = wip_miss_alarm_rate;

        myChart_logistic_A_2_R1.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_logistic_A_2_R1.setOption(option);
}

function logistic_A_L1_2() {
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
        if(activeTab=="总览"){
           // home_A();
        }
        if (activeTab=="物流KPI"){

            logistic_A_2_R1();
            logistic_A_1_M1();
            logistic_A_L1_2();

        }
    });
});
//resize图表
window.onresize=function () {
    for(var i=0;i<charts.length;i++){
        charts[i].resize();
    }
}