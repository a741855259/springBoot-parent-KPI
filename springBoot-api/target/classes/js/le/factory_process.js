
//ajax跟新数据
function ajax() {
    var value = $("#WorkingStation > option:selected").html();
    processInfo = value == ("选择设备" || null) ? "ea_1_1" : value;

    $.post("process/update",{},function (data) {
//ResultInfo{flag=true,
// data=EquimentKPI{ekid=2, equiment_operating_rate=0.6,
// equiment_load_rate=0.7, mtbf=12, mttr=4, oee=0.6},
// errorMsg='null'}
        value_process={ekid:0,process_operating_rate:0,process_load_rate:0,process_capability:0,
            mtbf:0,mttr:0};
        value_process=data.data;
    })
}


/*value_process={ekid:0,process_operating_rate:0.8,process_load_rate:0.9,process_capability:1.4,
    mtbf:12,mttr:5};*/

// ajax交互
/*$(function () {
    ajax();
    // alert($("#process_A").attr("data-value"));
    setInterval(ajax,3000);
})*/

//定义一个全局变量接受图表，以便resize
charts=[];


//设备图表函数
// 雷达图
function process_A (){
    // 基于准备好的dom，初始化echarts实例
    var myChart_process_A = echarts.init(document.getElementById('process_A'));
    charts.push(myChart_process_A);
    // 指定图表的配置项和数据
    var option;
    option = {
        color: ["#ff7f50", "#87cefa"],
        title: {
            text: ''
        },
        tooltip: {},
        legend: {

            right: '10%',
            data: ['当日', '当月'],
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
                {name: '按时交货率', max: 100},
                {name: '生产成本', max: 100},
                {name: '精益指数', max: 100},
                {name: '人均生产率', max: 100}
            ]
        },
        series: [{
            // name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [
                {
                    value: [0, 0, 0, 0],
                    name: '当日',
                    lineStyle: {
                        color: "#ff7f50"
                    },
                    areaStyle: {
                        color: "#ff7f50"
                    }
                },
                {
                    value: [75, 95, 88, 90],
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
        option.series[0].data[0].value =  [80,92,80,95];
        myChart_process_A.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_process_A.setOption(option);

}
//生产成本
function process_A_1(){
    // 基于准备好的dom，初始化echarts实例
    var process_A_1 = echarts.init(document.getElementById('process_A_1'));
    charts.push(process_A_1);

    var option = {
        color:["#ff7f50",
            "#87cefa",
        ],
        tooltip : {
            trigger: 'item',
            // formatter: "{a}<br/>{b}<br/>{c}元"
            formatter: "{a}<br/>{b}<br/>{c}"
        },
        legend: {
            data:['车间1','车间2'],
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
                data : ['29周','30周','31周','32周',],
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
                    /*formatter: function (value) {
                        return value + "%"
                    },*/
                },
            }
        ],
        series : [
            {
                name:'车间1',
                type:'line',

                itemStyle: {normal: {areaStyle: {}}},
                data:[70, 68, 66, 75, ]
            },
            /*            {
                            name:'车间2',
                            type:'line',

                            itemStyle: {normal: {areaStyle: {}}},
                            data:[80, 85, 90, 89, ]
                        },*/
        ]

    };

    setInterval(function () {
        option.series[0].data =wip_rework_rate//改这里


        process_A_1.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    process_A_1.setOption(option);
}

//人均生产率
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
        tooltip: {
            // formatter: "{a}<br/>{b}<br/>{c}%"
        },
        splitLine:{
            lineStyle:{
                color:"#000000"
            }
        },
        dataset: {
            dimensions: ['product', '车间A'],
            source: [
                {product: '25号', '车间A': 65},
                {product: '26号', '车间A': 70},
                {product: '27号', '车间A': 75},
                {product: '28号', '车间A': 70}
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
                formatter: '{value}',
                formatter: function (value) {
                        return value + "%"
                    },
            },
            max: 100

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

//精益指数
/*function process_A_3(){
    // 基于准备好的dom，初始化echarts实例
    var process_A_3 = echarts.init(document.getElementById('process_A_3'));
    charts.push(process_A_3);

    // 指定图表的配置项和数据

    var option = {
        color:['#8B78F6',"#ff7f50","#87cefa","#32cd32","#da70d6"],
        tooltip : {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}元"
        },
        legend: {
            data:['车间A','设备B'],
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
                /!*                min: function (value) {
                                    return value.min - 0.1;
                                },*!/
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
                name:'车间A',
                type:'line',

                // itemStyle: {normal: {areaStyle: {}}},
                data:[1, 2, 1, 4, ]
            }/!*,
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
            }*!/
        ]

    };
    setInterval(function () {
        option.series[0].data =  [80,90,85,90];//改这里
        // option.series[1].data =  [1.40, 1.35,1.33,1.46];
        process_A_3.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    process_A_3.setOption(option);


}*/

//按时交货率
function process_A_4(){
    // 基于准备好的dom，初始化echarts实例
    var process_A_4 = echarts.init(document.getElementById('process_A_4'));
    charts.push(process_A_4);

    // 指定图表的配置项和数据
    var  option = {
        tooltip: {
            formatter: '{a} <br/>{b} : {c}%'
        },
        series: [
            {
                radius :'80%',
                name: 'OEE',
                type: 'gauge',
                max: 100,
                detail: {formatter: '{value}'},
                data: [{value: 90}],
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

    /*    setInterval(function () {
            option.series[0].data[0].value =  value_equipment.oee*100;
            equipment_A_1.setOption(option, true);
        },500);*/
    // 使用刚指定的配置项和数据显示图表。
    process_A_4.setOption(option);


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
            // process_A_3();
            process_A_4();

        }


    });
});
//resize图表
window.onresize=function () {
    for(var i=0;i<charts.length;i++){
        charts[i].resize();
    }
}
        