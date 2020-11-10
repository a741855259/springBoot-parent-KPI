//ajax跟新数据
function ajax() {
    var value = $("#WorkingStation > option:selected").html();
    processInfo = value == ("选择设备" || null) ? "ea_1_1" : value;

    $.post("process/update",{},function (data) {
//ResultInfo{flag=true,
// data=EquimentKPI{ekid=2, equiment_operating_rate=0.6,
// equiment_load_rate=0.7, mtbf=12, mttr=4, oee=0.6},
// errorMsg='null'}
        /*            value_process={ekid:0,process_operating_rate:0,process_load_rate:0,process_capability:0,
                        mtbf:0,mttr:0};
                    value_process=data.data;*/
    })
}


value_process={ekid:0,process_operating_rate:0.8,process_load_rate:0.9,process_capability:1.4,
    mtbf:12,mttr:5};

// ajax交互
$(function () {
    // ajax();
    // alert($("#process_A").attr("data-value"));
    // setInterval(ajax,3000);
})

//定义一个全局变量接受图表，以便resize
charts=[];


//设备图表函数
// 生产节拍符合度
function process_A (){
    // 基于准备好的dom，初始化echarts实例
    var process_A = echarts.init(document.getElementById('process_A'));
    charts.push(process_A);

    // 指定图表的配置项和数据
    var  option = {
        tooltip: {
            formatter: '{a} <br/>{b} : {c}'
        },
        series: [
            {
                radius :'80%',
                name: '线末产出率',
                type: 'gauge',
                max: 100,
                detail: {formatter: '{value}'},
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
        option.series[0].data[0].value =  90;
        process_A.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    process_A.setOption(option);


}
//生产计划完成率
function process_A_1(){
    // 基于准备好的dom，初始化echarts实例
    var process_A_1 = echarts.init(document.getElementById('process_A_1'));
    charts.push(process_A_1);

    // 指定图表的配置项和数据

    var option = {
        color:["#da70d6",'#8B78F6',"#ff7f50","#87cefa","#32cd32"],
        tooltip : {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}元"
        },
        legend: {
            data:['产线A','设备B'],
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
                name:'产线A',
                type:'line',

                itemStyle: {normal: {areaStyle: {}}},
                data:[1, 2, 1, 4, ]
            }/*,
            {
                name:'设备B',
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
                data:[3, 2, 1, 4,  ]
            },
            {
                name:'产品E',
                type:'line',

                itemStyle: {normal: {areaStyle: {}}},
                data:[0, 1, 3, 3, ]
            }*/
        ]

    };
    setInterval(function () {
        option.series[0].data =  [80,90,85,90];//改这里
        // option.series[1].data =  [1.40, 1.35,1.33,1.46];
        process_A_1.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    process_A_1.setOption(option);

}
//产量
function process_A_2(){
    // 基于准备好的dom，初始化echarts实例
    var process_A_2 = echarts.init(document.getElementById('process_A_2'));
    charts.push(process_A_2);

    // 指定图表的配置项和数据
    var option = {
        color:['#8B78F6','#da70d6'],
        legend: {
            textStyle: {
                color: "#fff"
            }
        },
        tooltip: {},
        splitLine:{
            lineStyle:{
                color:"#000000"
            }
        },
        dataset: {
            dimensions: ['product', '产线A'],
            source: [
                {product: '5月', '产线A': 120},
                {product: '6月', '产线A': 100},
                {product: '7月', '产线A': 90},
                {product: '8月', '产线A': 110}
            ]
        },
        barWidth: 50,
        xAxis: {
            type: 'category',
            axisLabel:{
                color:"#ffffff"
            }
        },
        yAxis: {
            splitLine: {
                "show": false
            },
            axisLabel:{
                color:"#ffffff",
                formatter: '{value}'
            }

        },
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
            {type: 'bar'},
            // {type: 'bar'},
            // {type: 'bar'}
        ]
    };

    /*    setInterval(function () {
            option.series[0].data[0] =  value_equipment.mtbf;
            myChart_equipment_A_4.setOption(option, true);
        },500);*/
    // 使用刚指定的配置项和数据显示图表。
    process_A_2.setOption(option);
}
//线末产出率
function process_A_3(){
    // 基于准备好的dom，初始化echarts实例
    var process_A_3 = echarts.init(document.getElementById('process_A_3'));
    charts.push(process_A_3);

    // 指定图表的配置项和数据
    var  option = {
        tooltip: {
            formatter: '{a} <br/>{b} : {c}'
        },
        series: [
            {
                radius :'80%',
                name: '线末产出率',
                type: 'gauge',
                max: 100,
                detail: {formatter: '{value}'},
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
        option.series[0].data[0].value =  85;
        process_A_3.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    process_A_3.setOption(option);

}
//OEE
function process_A_4(){
    // 基于准备好的dom，初始化echarts实例
    var process_A_4 = echarts.init(document.getElementById('process_A_4'));
    charts.push(process_A_4);

    // 指定图表的配置项和数据

    var option = {
        color:["#ff7f50","#87cefa","#32cd32","#da70d6",'#8B78F6'],
        tooltip : {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}元"
        },
        legend: {
            data:['产线A','设备B'],
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
                name:'产线A',
                type:'line',

                itemStyle: {normal: {areaStyle: {}}},
                data:[1, 2, 1, 4, ]
            }/*,
            {
                name:'设备B',
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
                data:[3, 2, 1, 4,  ]
            },
            {
                name:'产品E',
                type:'line',

                itemStyle: {normal: {areaStyle: {}}},
                data:[0, 1, 3, 3, ]
            }*/
        ]

    };
    setInterval(function () {
        option.series[0].data =  [80, 85,75,90];//改这里
        // option.series[1].data =  [1.40, 1.35,1.33,1.46];
        process_A_4.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    process_A_4.setOption(option);


}
//产线平衡率
function process_A_5(){
    // 基于准备好的dom，初始化echarts实例
    var process_A_5 = echarts.init(document.getElementById('process_A_5'));
    charts.push(process_A_5);

    // 指定图表的配置项和数据

    var option = {
        color:["#32cd32","#ff7f50","#87cefa","#da70d6",'#8B78F6'],
        tooltip : {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}元"
        },
        legend: {
            data:['产线A','设备B'],
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
                name:'产线A',
                type:'line',

                itemStyle: {normal: {areaStyle: {}}},
                data:[1, 2, 1, 4, ]
            }/*,
            {
                name:'设备B',
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
                data:[3, 2, 1, 4,  ]
            },
            {
                name:'产品E',
                type:'line',

                itemStyle: {normal: {areaStyle: {}}},
                data:[0, 1, 3, 3, ]
            }*/
        ]

    };
    setInterval(function () {
        option.series[0].data =  [75,90,80, 85];//改这里
        // option.series[1].data =  [1.40, 1.35,1.33,1.46];
        process_A_5.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    process_A_5.setOption(option);


}


$(function(){
    /*    home_A();*/
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
        if (activeTab=="过程KPI"){
            process_A();
            process_A_1();
            process_A_2();
            process_A_3();
            process_A_4();
            process_A_5();
        }


    });
});
//resize图表
window.onresize=function () {
    for(var i=0;i<charts.length;i++){
        charts[i].resize();
    }
}
