$(function () {
})

//定义一个全局变量接受图表，以便resize
charts=[];


//岗位胜任人数
function personChart1 (){
    // 基于准备好的dom，初始化echarts实例
    var personChart1 = echarts.init(document.getElementById('personChart1'));
    charts.push(personChart1);
    // 指定图表的配置项和数据
    var  option = {
        color: ["#2f89cf"],
        tooltip: {
            trigger: "axis",
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: "0%",
            top: "10px",
            right: "0%",
            bottom: "4%",
            containLabel: true
        },
        xAxis: [
            {
                type: "category",
                data: [
                    "操作工位1",
                    "操作工位2 ",
                    "操作工位3",
                    "操作工位4",
                    "管理岗位1",
                    "管理岗位2",
                    "管理岗位3"
                ],
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: "12"
                    }
                },
                axisLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: "value",
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: "12"
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                        // width: 1,
                        // type: "solid"
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }
            }
        ],
        series: [
            {
                name: "直接访问",
                type: "bar",
                barWidth: "35%",
                data: [20, 35, 12, 8, 15, 12, 6],
                itemStyle: {
                    barBorderRadius: 5
                }
            }
        ]
    };
    setInterval(function () {
        personChart1.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    personChart1.setOption(option);
};

//工作努力度
function personChart2 (){
    // 基于准备好的dom，初始化echarts实例
    var personChart2 = echarts.init(document.getElementById('personChart2'));
    charts.push(personChart2);
    // 指定图表的配置项和数据

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
            data:  ['工人A','工人B','工人C','工人D','工人E'],
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
            data: [100, 100, 100, 100,100,],//右端数值
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
            data: [80, 92, 86, 76, 86,],//条上数值
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
        personChart2.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    personChart2.setOption(option);
};
// 员工工时效率
function personChart3 (){
    // 基于准备好的dom，初始化echarts实例
    var personChart3 = echarts.init(document.getElementById('personChart3'));
    charts.push(personChart3);
    // 指定图表的配置项和数据
    var  option = {
        tooltip: {
            formatter: '{a} <br/>{b} : {c}%'
        },
        series: [
            {
                radius :'80%',
                name: '员工工时效率',
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
        personChart3.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    personChart3.setOption(option);

};
//标准作业遵守率
function personChart4 (){
    // 基于准备好的dom，初始化echarts实例
    var personChart4 = echarts.init(document.getElementById('personChart4'));
    charts.push(personChart4);
    // 指定图表的配置项和数据
    var  option = {
        tooltip: {
            formatter: '{a} <br/>{b} : {c}%'
        },
        series: [
            {
                radius :'80%',
                name: '员工工时效率',
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
        personChart4.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    personChart4.setOption(option);

};
//标准作业遵守率
function personChart5 (){
    // 基于准备好的dom，初始化echarts实例
    var personChart5 = echarts.init(document.getElementById('personChart5'));
    charts.push(personChart5);
    // 指定图表的配置项和数据
    var option = {
        title: {
            text: '日常考勤组成（单位:人）',
            textStyle:{
                color:'#fff',
            },
            color:'#fff',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: function (params) {
                var tar = params[1];
                return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            splitLine: {show: false},
            data: ['出勤总数', '7：00~7：20', '7：21~7：40', '7：41~8：00', '8：01~8：20', '8：21~8：40'],
            axisLabel: {
                color: '#fff',
            }
        },
        yAxis: {
            type: 'value',
            color:'#fff'
        },
        series: [
            {
                name: '辅助',
                type: 'bar',
                stack: '总量',
                itemStyle: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                },
                emphasis: {
                    itemStyle: {
                        barBorderColor: 'rgba(0,0,0,0)',
                        // color: 'rgba(0,0,0,0)'
                    }
                },
                data: [0, 1700, 1400, 1200, 300, 0]
            },
            {
                name: '生活费',
                type: 'bar',
                stack: '总量',
                label: {
                    show: true,
                    position: 'inside'
                },
                data: [2900, 1200, 300, 200, 900, 300],
            }
        ]
    };
    setInterval(function () {
        personChart5.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    personChart5.setOption(option);

};
//劳动生产率
function personChart7 (){
    // 基于准备好的dom，初始化echarts实例
    var personChart7 = echarts.init(document.getElementById('personChart7'));
    charts.push(personChart7);
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
            data:  ['有效工时利用率'],

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
                textStyle: {
                    fontSize: 16,
                    color: '#fff',
                },
                rich: {
                    lg: {
                        backgroundColor: '#339911',
                        color: '#fff',
                        borderRadius: 15,
                        // padding: 5,
                        align: 'center',
                        width: 45,
                        height: 45
                    },
                }
            },

        }, {
            show: true,
            inverse: true,
            data: [100],//右端数值
            axisLabel: {
                textStyle: {
                    fontSize: 16,
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
            barWidth: 40,
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
            barWidth: 45,
            itemStyle: {
                normal: {
                    color: 'none',
                    borderColor: '#00c1de',
                    borderWidth: 6,
                    barBorderRadius: 15,
                }
            }
        }, ]
    };
    setInterval(function () {
        personChart7.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    personChart7.setOption(option);

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
            personChart1();
            personChart2();
            personChart3();
            personChart4();
            personChart5();
            personChart7();
        }
    });
});
//resize图表
window.onresize=function () {
    for(var i=0;i<charts.length;i++){
        charts[i].resize();
    }
}
