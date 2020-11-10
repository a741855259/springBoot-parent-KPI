charts=[];


//------------------------生产计划执行情况--quality_A_1_M1----------------------//
//------------------------数据


//------------------------图表
function personcx5(){
    // 基于准备好的dom，初始化echarts实例
    var myChart_personcx5 = echarts.init(document.getElementById('personcx5'));
    charts.push(myChart_personcx5);

    var option = {
        color:["#ff7f50",
            "#87cefa",
        ],
        tooltip : {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}元"
        },
        legend: {
            data:['实际生产数量','计划生产数量'],
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
                name:'实际生产数量',
                type:'line',

                itemStyle: {normal: {areaStyle: {}}},
                data:[40, 68, 66, 38, ]
            },
            {
                name:'计划生产数量',
                type:'line',

                itemStyle: {normal: {areaStyle: {}}},
                data:[80, 85, 90, 89, ]
            },
        ]

    };

    setInterval(function () {
        option.series[0].data =wip_rework_rate//改这里


        myChart_personcx5.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_personcx5.setOption(option);
}

//------------------------人员有效分配情况  personcx4------------------------//
//------------------------数据

//------------------------图表
function personcx4(){
    // 基于准备好的dom，初始化echarts实例
    var myChart_personcx4 = echarts.init(document.getElementById('personcx4'));
    charts.push(myChart_personcx4);

    // 指定图表的配置项和数据

    var option = {
        title: {
            text: '人员有效分配',
            color:'#ff7f50'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['实际分配时间', '理想分配时间']
        },
        toolbox: {
            show: true,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: {readOnly: false},
                magicType: {type: ['line', 'bar']},
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['事件一', '事件二', '事件三', '事件四', '事件五']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} °C'
            }
        },
        series: [
            {
                name: '实际分配实际',
                type: 'line',
                data: [60, 61, 20, 60, 50, 50, 40],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name: '理想分配时间',
                type: 'line',
                data: [20, 30, 12, 15, 30, 12, 10],
                markPoint: {
                    data: [
                        {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'},
                        [{
                            symbol: 'none',
                            x: '90%',
                            yAxis: 'max'
                        }, {
                            symbol: 'circle',
                            label: {
                                position: 'start',
                                formatter: '最大值'
                            },
                            type: 'max',
                            name: '最高点'
                        }]
                    ]
                }
            }
        ]
    };


    setInterval(function () {
        option.series[0].data =  wip_unqualified_rate

        myChart_personcx4.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_personcx4.setOption(option);
}

//------------------------6S指标--quality_A_2_L1----------------------//
//------------------------数据

//------------------------图表
function personcx2(){
    // 基于准备好的dom，初始化echarts实例
    var myChart_personcx2 = echarts.init(document.getElementById('personcx2'));
    charts.push(myChart_personcx2);

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
            "#ed8884",
            "#ff9f7f",
            "#0096ff",
            "#9fe6b8",
            "#32c5e9",
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
                    // { value: 20, name: "云南" },
                    { value: 26, name: "素养" },
                    { value: 50, name: "整顿" },
                    // { value: 25, name: "河北" },
                    { value: 46, name: "清扫" },
                    { value: 59, name: "清洁" },
                    { value: 48, name: "安全" },
                    { value: 42, name: "整理" }
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

        option.series[0].data = wip_false_alarm_rate;

        myChart_personcx2.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_personcx2.setOption(option);
}



//------------------------产品生产效率----------------------//
//------------------------数据



//------------------------图表
function personcx1(){
    // 基于准备好的dom，初始化echarts实例
    var myChart_personcx1 = echarts.init(document.getElementById('personcx1'));
    charts.push(myChart_personcx1);

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
                name:'漏检率',
                type:'line',

                itemStyle: {normal: {areaStyle: {}}},
                data:[65, 81, 41, 73, 32,]
            },

        ]

    };


    setInterval(function () {

        option.series[0].data = wip_miss_alarm_rate;

        myChart_personcx1.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_personcx1.setOption(option);
}




//---------------------------------------------------------------quality_A_M1---------KPI---------------------------





$(function(){
    // home_A();
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
        if (activeTab=="人员KPI"){
            personcx1();
            personcx2();
            personcx4();
            personcx5();
        }
    });
});
//resize图表
window.onresize=function () {
    for(var i=0;i<charts.length;i++){
        charts[i].resize();
    }
}