charts=[];


//------------------------生产计划执行情况--quality_A_1_M1----------------------//
//------------------------数据
function ajax7() {
    $.post("QualityKPI/update2",{},function (data) {
        wip_rework_rate = [];
        wip_rework_rate[0]=data.data[0]. wip_rework_rate*100;
        wip_rework_rate[1]=data.data[1]. wip_rework_rate*100;
        wip_rework_rate[2]=data.data[2]. wip_rework_rate*100;
        wip_rework_rate[3]=data.data[3]. wip_rework_rate*100;
        wip_rework_rate[4]=data.data[4]. wip_rework_rate*100;
        // alert(wip_reject_rate)
    })
}
$(function () {
    ajax7();
    setInterval(ajax7,3000);
})

//------------------------图表
$(function persongc1(){
    // 基于准备好的dom，初始化echarts实例
    var myChart_persongc1 = echarts.init(document.getElementById('persongc1'));
    charts.push(myChart_persongc1);

    var  option;
    option = {
        color: ["#ff7f50", "#87cefa"],
        title: {
            text: ''
        },
        tooltip: {},
        legend: {

            right: '10%',
            data: ['月平均'],
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
                {name: '岗位胜任情况', max: 100},
                {name: '技能培训情况', max: 100},
                {name: '生产能力', max: 2},
                {name: '工作努力度', max: 20},
                {name: '6S现场管理', max: 8},
            ]
        },
        series: [{
            // name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [
                {
                    value: [0, 0, 0, 0, 0],
                    name: '当日',
                    lineStyle: {
                        color: "#ff7f50"
                    },
                    areaStyle: {
                        color: "#ff7f50"
                    }
                },
                {
                    value: [75, 75, 1.5, 10, 4],
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
        option.series[0].data =wip_rework_rate//改这里


        myChart_persongc1.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_persongc1.setOption(option);
})

//------------------------人员有效分配情况--quality_A_1_R1----------------------//
//------------------------数据
function ajax7() {
    $.post("QualityKPI/update2",{},function (data) {
        wip_rework_rate = [];
        wip_rework_rate[0]=data.data[0]. wip_rework_rate*100;
        wip_rework_rate[1]=data.data[1]. wip_rework_rate*100;
        wip_rework_rate[2]=data.data[2]. wip_rework_rate*100;
        wip_rework_rate[3]=data.data[3]. wip_rework_rate*100;
        wip_rework_rate[4]=data.data[4]. wip_rework_rate*100;
        // alert(wip_reject_rate)
    })
}
$(function () {
    ajax7();
    setInterval(ajax7,3000);
})

//------------------------图表
$(function persongc3(){
    // 基于准备好的dom，初始化echarts实例
    var myChart_persongc3 = echarts.init(document.getElementById('persongc3'));
    charts.push(myChart_persongc3);

    var option = {
        tooltip: {
            formatter: '{a} <br/>{b} : {c}%'
        },
        series: [
            {
                radius :'80%',
                name: '设备负载率',
                textStyle:{
                  color: '#fff'
                },
                type: 'gauge',
                detail: {formatter: '{value}%'},
                data: [{value: 0}],
                splitLine:{
                    length: 25
                },
                axisLine:{
                    lineStyle :{
                        color:[[0.2, '#ff7f50'], [0.8, '#87cefa'], [1, '#da70d6']],  //  改变刻度的三段颜色
                        width:25   // 刻度的宽度
                    }
                }
            }
        ]
    };

    setInterval(function () {
        option.series[0].data =wip_rework_rate//改这里


        myChart_persongc3.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_persongc3.setOption(option);
})


$(function () {
    ajax7();
    setInterval(ajax7,3000);
})

//------------------------图表
$(function persongc3(){
    // 基于准备好的dom，初始化echarts实例
    var myChart_persongc3 = echarts.init(document.getElementById('persongc3'));
    charts.push(myChart_persongc3);

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
        option.series[0].data =wip_rework_rate//改这里


        myChart_persongc3.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_persongc3.setOption(option);
})

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