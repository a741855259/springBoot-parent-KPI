//定义一个全局变量接受图表，以便resize
charts=[];
//生产计划完成率
function station_kpi(){
    // 基于准备好的dom，初始化echarts实例
    var station_kpi = echarts.init(document.getElementById('station_kpi'));
    charts.push(station_kpi);

    // 指定图表的配置项和数据

    var option = {
        color:['#8B78F6',"#ff7f50","#87cefa","#32cd32","#da70d6"],
        tooltip : {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}元"
        },
        legend: {
            data:['计划产量','当前产量','不良品数','设备开动率','在岗人数'],
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
                data : ['25号','26号','27号','28号',],
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
                /*                min: function (value) {
                                    return value.min - 0.1;
                                },*/
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
                name:'计划产量',
                type:'line',

                // itemStyle: {normal: {areaStyle: {}}},
                data:[1, 2, 1, 4, ]
            },
            {
                name:'当前产量',
                type:'line',

                // itemStyle: {normal: {areaStyle: {}}},
                data:[3, 3, 4, 1, ]
            },
            {
                name:'不良品数',
                type:'line',
                // itemStyle: {normal: {areaStyle: {}}},
                data:[1, 2, 0, 1,]
            },
            {
                name:'设备开动率',
                type:'line',

                // itemStyle: {normal: {areaStyle: {}}},
                data:[3, 2, 1, 4,  ]
            },
            {
                name:'在岗人数',
                type:'line',

                // itemStyle: {normal: {areaStyle: {}}},
                data:[0, 1, 3, 3, ]
            }
        ]

    };
    setInterval(function () {
        // option.series[0].data =  [80,90,85,90];//改这里
        // option.series[1].data =  [1.40, 1.35,1.33,1.46];
        station_kpi.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    station_kpi.setOption(option);

}

function line_kpi(){
    // 基于准备好的dom，初始化echarts实例
    var line_kpi = echarts.init(document.getElementById('line_kpi'));
    charts.push(line_kpi);

    // 指定图表的配置项和数据

    var option = {
        color:['#8B78F6',"#ff7f50","#87cefa","#32cd32","#da70d6"],
        tooltip : {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}元"
        },
        legend: {
            data:['计划产量','当前产量','不良品数','OEE','线末产出率'],
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
                data : ['25号','26号','27号','28号',],
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
                /*                min: function (value) {
                                    return value.min - 0.1;
                                },*/
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
                name:'计划产量',
                type:'line',

                // itemStyle: {normal: {areaStyle: {}}},
                data:[1, 2, 1, 4, ]
            },
            {
                name:'当前产量',
                type:'line',

                // itemStyle: {normal: {areaStyle: {}}},
                data:[2, 3, 4, 2, ]
            },
            {
                name:'不良品数',
                type:'line',
                // itemStyle: {normal: {areaStyle: {}}},
                data:[1,3, 2, 1,]
            },
            {
                name:'OEE',
                type:'line',

                // itemStyle: {normal: {areaStyle: {}}},
                data:[3, 2, 4, 3,  ]
            },
            {
                name:'线末产出率',
                type:'line',

                // itemStyle: {normal: {areaStyle: {}}},
                data:[2, 1, 3, 3, ]
            }
        ]

    };
    setInterval(function () {
        // option.series[0].data =  [80,90,85,90];//改这里
        // option.series[1].data =  [1.40, 1.35,1.33,1.46];
        station_kpi.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    line_kpi.setOption(option);

}

$(function(){
    station_kpi();
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

        // 获取已激活的标签页的名称
        var activeTab = $(e.target).text();
        // 获取前一个激活的标签页的名称
        var previousTab = $(e.relatedTarget).text();
        /*$(".active-tab span").html(activeTab);
        $(".previous-tab span").html(previousTab);*/
        // alert(activeTab);
        if(activeTab=="工位级"){
            station_kpi();
        }
        if (activeTab=="产线级"){

            line_kpi();

        }


    });
});
//resize图表
window.onresize=function () {
    for(var i=0;i<charts.length;i++){
        charts[i].resize();
    }
}