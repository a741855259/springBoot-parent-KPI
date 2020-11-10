$(function () {
})

//定义一个全局变量接受图表，以便resize
charts=[];


//6S指标
function persongc1 (){
    // 基于准备好的dom，初始化echarts实例
    var persongc1 = echarts.init(document.getElementById('persongc1'));
    charts.push(persongc1);
    // 指定图表的配置项和数据
    var  option = {
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
                    { value: 50, name: "业绩" },
                    // { value: 25, name: "河北" },
                    { value: 46, name: "能力" },
                    { value: 59, name: "品德" },
                    { value: 48, name: "学识" },
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
        persongc1.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    persongc1.setOption(option);
};

//人员培训计划完成情况
function persongc2 (){
    // 基于准备好的dom，初始化echarts实例
    var persongc2 = echarts.init(document.getElementById('persongc2'));
    charts.push(persongc2);
    // 指定图表的配置项和数据

    var option = {
        color:["#ff7f50",
            "#87cefa",
        ],
        tooltip : {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}元"
        },
        legend: {
            data:['实际培训时长','计划培训时长'],
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
                        return value
                    },
                },
            }
        ],
        series : [
            {
                name:'实际培训时长',
                type:'line',

                itemStyle: {normal: {areaStyle: {}}},
                data:[4, 8, 6, 3, ]
            },
            {
                name:'计划培训时长',
                type:'line',

                itemStyle: {normal: {areaStyle: {}}},
                data:[8, 8, 9, 9, ]
            },
        ]

    };
    setInterval(function () {
        persongc2.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    persongc2.setOption(option);
};
// 订单完成率
function personcx3 (){
    // 基于准备好的dom，初始化echarts实例
    var personcx3 = echarts.init(document.getElementById('personcx3'));
    charts.push(personcx3);
    // 指定图表的配置项和数据
    var  option = {
        tooltip: {
            formatter: '{a} <br/>{b} : {c}%'
        },
        series: [
            {
                radius :'80%',
                name: '订单完成率',
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
        personcx3.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    personcx3.setOption(option);

};
//劳动生产效率
function personcx4 (){
    // 基于准备好的dom，初始化echarts实例
    var personcx4 = echarts.init(document.getElementById('personcx4'));
    charts.push(personcx4);
    // 指定图表的配置项和数据

    var myColor = ['#1089E7'];//这条也是要的
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
            data:  ['劳动生产效率'],
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
            data: [80],//条上数值
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
            data: [100, 100, 100, 100,100],//框
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
        personcx4.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    personcx4.setOption(option);

};
//学习曲线
function personcx5 (){
    // 基于准备好的dom，初始化echarts实例
    var personcx5 = echarts.init(document.getElementById('personcx5'));
    charts.push(personcx5);
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
                data : ['部件A','部件B','部件C','部件D','部件E',],
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
                data:[1, 2, 1, 4, 3,]
            },

        ]

    };
    setInterval(function () {
        personcx5.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    personcx5.setOption(option);

};
//人才流失率
function personcx6 (){
    // 基于准备好的dom，初始化echarts实例
    var personcx6 = echarts.init(document.getElementById('personcx6'));
    charts.push(personcx6);
    // 指定图表的配置项和数据
    var myColor = ['#F57474'];//这条也是要的
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
            data:  ['人才流失率'],
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
            data: [30],//条上数值
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
            data: [100, 100, 100, 100,100],//框
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
        personcx6.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    personcx6.setOption(option);

};
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
        if (activeTab=="人员KPI"){
            persongc1();
            persongc2();
            personcx3();
            personcx4();
            personcx5();
            personcx6();
        }
    });
});
//resize图表
window.onresize=function () {
    for(var i=0;i<charts.length;i++){
        charts[i].resize();
    }
}
