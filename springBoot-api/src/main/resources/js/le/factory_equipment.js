//ajax跟新数据
function ajax() {
    var value = $("#WorkingStation > option:selected").html();
    equipmentInfo = value == ("选择设备" || null) ? "ea_1_1" : value;

    $.post("equipment/update",{},function (data) {
//ResultInfo{flag=true,
// data=EquimentKPI{ekid=2, equiment_operating_rate=0.6,
// equiment_load_rate=0.7, mtbf=12, mttr=4, oee=0.6},
// errorMsg='null'}
        value_equipment={ekid:0,equipment_operating_rate:0,equipment_load_rate:0,equipment_capability:0,
            mtbf:0,mttr:0};
        value_equipment=data.data;
    })
}


/*value_equipment={ekid:0,equipment_operating_rate:0.8,equipment_load_rate:0.9,equipment_capability:1.4,
    mtbf:12,mttr:5};*/

// ajax交互
$(function () {
    ajax();
    // alert($("#equipment_A").attr("data-value"));
    setInterval(ajax,3000);
})

//定义一个全局变量接受图表，以便resize
charts=[];


//OEE
function equipment_A_1(){
    // 基于准备好的dom，初始化echarts实例
    var equipment_A_1 = echarts.init(document.getElementById('equipment_A_1'));
    charts.push(equipment_A_1);

    var option = {
        color:["#ff7f50",
            "#87cefa",
        ],
        tooltip : {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}元"
        },
        legend: {
            data:['工厂1','工厂2'],
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
                    formatter: function (value) {
                        return value + "%"
                    },
                },
            }
        ],
        series : [
            {
                name:'工厂1',
                type:'line',

                itemStyle: {normal: {areaStyle: {}}},
                data:[40, 68, 66, 38, ]
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


        equipment_A_1.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    equipment_A_1.setOption(option);
}

//设备完好率  放一个柱形图
function equipment_A_2(){
/// 基于准备好的dom，初始化echarts实例
    var myChart_equipment_A_2 = echarts.init(document.getElementById('equipment_A_2'));
    charts.push(myChart_equipment_A_2);

    // 指定图表的配置项和数据
    var  option = {
        tooltip: {
            formatter: '{a} <br/>{b} : {c}'
        },
        series: [
            {
                radius :'80%',
                name: '设备能力指数',
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
        option.series[0].data[0].value =  80;
        myChart_equipment_A_2.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_equipment_A_2.setOption(option);
}

//雷达图
function equipment_A_3(){
    // 基于准备好的dom，初始化echarts实例
    var myChart_equipment_A = echarts.init(document.getElementById('equipment_A_3'));
    charts.push(myChart_equipment_A);
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
            data: ['当日', '月平均'],
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
                {name: 'OEE', max: 100},
                {name: '良品率', max: 100},
                {name: '设备完好率', max: 100}

            ]
        },
        series: [{
            // name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [
                {
                    value: [0, 0, 0 ],
                    name: '当日',
                    lineStyle: {
                        color: "#ff7f50"
                    },
                    areaStyle: {
                        color: "#ff7f50"
                    }
                },
                {
                    value: [60, 95, 88],
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
        option.series[0].data[0].value =  [80,80,70];
        myChart_equipment_A.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_equipment_A.setOption(option);


}

//良品率
function equipment_A_4(){
    // 基于准备好的dom，初始化echarts实例
    var equipment_A_4 = echarts.init(document.getElementById('equipment_A_4'));
    charts.push(equipment_A_4);

    // 指定图表的配置项和数据

    var option = {
        color:['#8B78F6',"#ff7f50","#87cefa","#32cd32","#da70d6"],
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

                // itemStyle: {normal: {areaStyle: {}}},
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
        equipment_A_4.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    equipment_A_4.setOption(option);



}


/*//MTTR
function equipment_A_5(){
    // 基于准备好的dom，初始化echarts实例
    var myChart_equipment_A_5 = echarts.init(document.getElementById('equipment_A_5'));
    charts.push(myChart_equipment_A_5);

    // 指定图表的配置项和数据
    var  option = {
        color:['#da70d6'],
        calculable : true,
        tooltip: {},
        legend: {
            data:['MTTR']

        },
        grid:{
            left: '5%',
            right: '5%',
            bottom: '30%',
            top:'30%',
            containLabel: true
        },
        splitLine:{
            lineStyle:{
                color:"#000000"
            }
        },
        yAxis: {
            data: ["设备1"],
            axisLabel:{
                color:"#ffffff"
            }
        },
        xAxis: {
            max:8,
            axisLabel:{
                color:"#ffffff"
            },
            splitLine: {
                "show": false
            },
        },
        barWidth:50,
        series: [{
            name: '销量',
            type: 'bar',

            data: [0]
        }]
    };

    setInterval(function () {
        option.series[0].data[0] =  value_equipment.mttr;
        myChart_equipment_A_5.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_equipment_A_5.setOption(option);


}*/


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
        if (activeTab=="设备KPI"){
            // equipment_A();
            equipment_A_1();
            equipment_A_2();
            equipment_A_3();
            equipment_A_4();
            // equipment_A_5();
        }


    });
});
//resize图表
window.onresize=function () {
    for(var i=0;i<charts.length;i++){
        charts[i].resize();
    }
}
