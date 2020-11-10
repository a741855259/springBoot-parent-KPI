//ajax跟新数据
function ajax() {
    var value = $("#WorkingStation > option:selected").html();
    equipmentInfo = value == ("选择设备" || null) ? "ea_1_1" : value;

    $.post("equipment/update",{},function (data) {
//ResultInfo{flag=true,
// data=EquimentKPI{ekid=2, equiment_operating_rate=0.6,
// equiment_load_rate=0.7, mtbf=12, mttr=4, oee=0.6},
// errorMsg='null'}
        /*            value_equipment={ekid:0,equipment_operating_rate:0,equipment_load_rate:0,equipment_capability:0,
                        mtbf:0,mttr:0};
                    value_equipment=data.data;*/
    })
}


value_equipment={ekid:0,equipment_operating_rate:0.8,equipment_load_rate:0.9,equipment_capability:1.4,
    mtbf:12,mttr:5};

// ajax交互
$(function () {
    // ajax();
    // alert($("#equipment_A").attr("data-value"));
    // setInterval(ajax,3000);
})

//定义一个全局变量接受图表，以便resize
charts=[];


//设备图表函数
// 雷达图
function equipment_A (){
    // 基于准备好的dom，初始化echarts实例
    var myChart_equipment_A = echarts.init(document.getElementById('equipment_A'));
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
                {name: '设备开动率', max: 100},
                {name: '设备负荷率', max: 100},
                {name: '设备能力指数', max: 2},
                {name: 'MTBF', max: 20},
                {name: 'MTTR', max: 8},
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
        option.series[0].data[0].value =  [value_equipment.equipment_operating_rate.toFixed(2)*100, value_equipment.equipment_load_rate.toFixed(2)*100,
            value_equipment.equipment_capability,value_equipment.mtbf, value_equipment.mttr];
        myChart_equipment_A.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_equipment_A.setOption(option);

}
//设备开动率
function equipment_A_1(){
    var equipment_A_1 = echarts.init(document.getElementById('equipment_A_1'));
    charts.push(equipment_A_1);


    var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];//这条也是要的
    var option = {
        grid: {
            top: '20%',
            left: '20%'//距离左端距离
        },
        xAxis: {
            show: false
        },
        yAxis: [{
            show: true,
            data:  ['设备A'],
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
            data: [100],//右端数值
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
            data: [0],//条上数值
            barWidth: 20,
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
            data: [100],//框
            barWidth: 25,
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
        option.series[0].data =  [80]//改这里

        equipment_A_1.setOption(option, true);
    },500);
    equipment_A_1.setOption(option);

}
//设备负荷率
function equipment_A_2(){
    var equipment_A_2 = echarts.init(document.getElementById('equipment_A_2'));
    charts.push(equipment_A_2);


    var myColor = [ '#56D0E3', '#F8B448','#1089E7', '#F57474', '#8B78F6'];//这条也是要的
    var option = {
        grid: {
            top: '20%',
            left: '20%'//距离左端距离
        },
        xAxis: {
            show: false
        },
        yAxis: [{
            show: true,
            data:  ['设备A'],
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
            data: [100],//右端数值
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
            data: [0],//条上数值
            barWidth: 20,
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
            data: [100],//框
            barWidth: 25,
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
        option.series[0].data =  [80]//改这里

        equipment_A_2.setOption(option, true);
    },500);
    equipment_A_2.setOption(option);

}
//设备能力指数
function equipment_A_3(){
    // 基于准备好的dom，初始化echarts实例
    var equipment_A_3 = echarts.init(document.getElementById('equipment_A_3'));
    charts.push(equipment_A_3);

    // 指定图表的配置项和数据

    var option = {
        color:["#87cefa","#ff7f50","#32cd32","#da70d6",'#8B78F6'],
        tooltip : {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}元"
        },
        legend: {
            data:['设备A'],
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
                min: function (value) {
                    return value.min - 0.1;
                },
                splitLine: {
                    "show": false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    },
/*                    formatter: function (value) {
                        return value + "%"
                    },*/
                },
            }
        ],
        series : [
            {
                name:'设备A',
                type:'line',

                itemStyle: {normal: {areaStyle: {}}},
                data:[0, 0, 0, 0 ]
            }/*,
            {
                name:'设备B',
                type:'line',

                itemStyle: {normal: {areaStyle: {}}},
                data:[3, 3, 4, 1, ]
            }*//*,
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
        option.series[0].data =  [1.31, 1.42,1.50,1.49];//改这里
        // option.series[1].data =  [1.40, 1.35,1.33,1.46];
        equipment_A_3.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    equipment_A_3.setOption(option);


}
//MTBF
function equipment_A_4(){
    // 基于准备好的dom，初始化echarts实例
    var myChart_equipment_A_4 = echarts.init(document.getElementById('equipment_A_4'));
    charts.push(myChart_equipment_A_4);

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
            dimensions: ['product', '设备A'],
            source: [
                {product: '5月', '设备A': 12},
                {product: '6月', '设备A': 10},
                {product: '7月', '设备A': 9},
                {product: '8月', '设备A': 11}
            ]
        },
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
                color:"#ffffff"
            }
        },
        barWidth:50,
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
    myChart_equipment_A_4.setOption(option);


}
//MTTR
function equipment_A_5(){
    // 基于准备好的dom，初始化echarts实例
    var myChart_equipment_A_5 = echarts.init(document.getElementById('equipment_A_5'));
    charts.push(myChart_equipment_A_5);

    var option = {
        color:['#da70d6','#8B78F6'],
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
            dimensions: ['product', '设备A', '设备B'],
            source: [
                {product: '5月', '设备A': 4, '设备B': 1},
                {product: '6月', '设备A': 3, '设备B': 2},
                {product: '7月', '设备A': 4, '设备B': 2},
                {product: '8月', '设备A': 2, '设备B': 3}
            ]
        },
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
                color:"#ffffff"
            }
        },
        barWidth:50,
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
            {type: 'bar'},
            // {type: 'bar'},
            // {type: 'bar'}
        ]
    };

    /*setInterval(function () {
        option.series[0].data[0] =  value_equipment.mttr;
        myChart_equipment_A_5.setOption(option, true);
    },500);*/
    // 使用刚指定的配置项和数据显示图表。
    myChart_equipment_A_5.setOption(option);


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
