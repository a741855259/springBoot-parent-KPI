

//定义一个全局变量接受图表，以便resize——————————————————————————————这里是把所有的图表放进去 可以自己调整宽度
charts=[];
//home
function home_A() {
    // 基于准备好的dom，初始化echarts实例
    var myChart_home_A = echarts.init(document.getElementById('home_A'));

    charts.push(myChart_home_A);
    // 指定图表的配置项和数据
    var option = {
        title: {
            text: ''
        },
        tooltip: {},
        legend: {
            data: ['当日', '月平均']
        },
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#fff',
                    backgroundColor: '#999',
                    borderRadius: 3,
                    padding: [3, 5]
                }
            },
            indicator: [
                { name: '人员', max: 6500},
                { name: '设备', max: 16000},
                { name: '流程', max: 30000},
                { name: '质量', max: 38000},
                { name: '物流', max: 52000},

            ]
        },
        series: [{
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [
                {
                    value: [4300, 10000, 28000, 35000, 50000],
                    name: '当日'
                },
                {
                    value: [5000, 14000, 28000, 31000, 42000],
                    name: '月平均'
                }
            ]
        }]
    };

    setInterval(function () {
        option.series[0].data[1].value = [5000, 14000, 28000, 31000, 42000];
        myChart_home_A.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_home_A.setOption(option);

}


//---------------------------------------------------------------上面的先不要动------------------------------------
//------------------------人员 1 一次交检不合格率--quality_A_L1_1----------------------//
//------------------------数据
// function ajax2() {
//
//     $.post("QualityKPI/update1",{},function (data) {
//
//         fty = [];
//         fty[0]=data.data[0].fty*100;
//         fty[1]=data.data[1].fty*100;
//         fty[2]=data.data[2].fty*100;
//         fty[3]=data.data[3].fty*100;
//         fty[4]=data.data[4].fty*100;
//         // alert(rer)
//     })
// }
// $(function () {
//     ajax2();
//     setInterval(ajax2,3000);
// })




//------------------------图表

$(function personChart1(){

    var myChart_personChart1 = echarts.init(document.getElementById('personChart1'));
    charts.push(myChart_personChart1);


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
            data:  ['产品A','产品B','产品C','产品D','产品E'],
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
            data: [40, 40, 40, 40,40,],//条上数值
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
        option.series[0].data =  fty//改这里

        myChart_personChart1.setOption(option, true);
    },500);
    myChart_personChart1.setOption(option);
})



//------------------------产品 2 质量事故--quality_A_L1_2----------------------//
//------------------------数据
function ajax3() {

    $.post("QualityKPI/update",{},function (data) {

        as_p = [];
        as_p[0]=data.data[0].as_p;
        as_p[1]=data.data[1].as_p;
        as_p[2]=data.data[2].as_p;
        as_p[3]=data.data[3].as_p;
        as_p[4]=data.data[4].as_p;
        // alert(rer)
        as_eq = [];
        as_eq[0]=data.data[0].as_eq;
        as_eq[1]=data.data[1].as_eq;
        as_eq[2]=data.data[2].as_eq;
        as_eq[3]=data.data[3].as_eq;
        as_eq[4]=data.data[4].as_eq;

        as_me = [];
        as_me[0]=data.data[0].as_me;
        as_me[1]=data.data[1].as_me;
        as_me[2]=data.data[2].as_me;
        as_me[3]=data.data[3].as_me;
        as_me[4]=data.data[4].as_me;

        as_ma = [];
        as_ma[0]=data.data[0].as_ma;
        as_ma[1]=data.data[1].as_ma;
        as_ma[2]=data.data[2].as_ma;
        as_ma[3]=data.data[3].as_ma;
        as_ma[4]=data.data[4].as_ma;

        as_en = [];
        as_en[0]=data.data[0].as_en;
        as_en[1]=data.data[1].as_en;
        as_en[2]=data.data[2].as_en;
        as_en[3]=data.data[3].as_en;
        as_en[4]=data.data[4].as_en;

        as_ms = [];
        as_ms[0]=data.data[0].as_ms;
        as_ms[1]=data.data[1].as_ms;
        as_ms[2]=data.data[2].as_ms;
        as_ms[3]=data.data[3].as_ms;
        as_ms[4]=data.data[4].as_ms;

        as_r = [];
        as_r[0]=data.data[0].as_r;
        as_r[1]=data.data[1].as_r;
        as_r[2]=data.data[2].as_r;
        as_r[3]=data.data[3].as_r;
        as_r[4]=data.data[4].as_r;

    })
}
$(function () {
    ajax3();
    setInterval(ajax3,3000);
})

//------------------------图表
$(function personChart2(){
    // 基于准备好的dom，初始化echarts实例
    var myChart_personChart2 = echarts.init(document.getElementById('personChart2'));
    charts.push(myChart_personChart2);

    var option = {
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
                    "旅游行业",
                    "教育培训",
                    "游戏行业",
                    "医疗行业",
                    "电商行业",
                    "社交行业",
                    "金融行业"
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
                data: [200, 300, 300, 900, 1500, 1200, 600],
                itemStyle: {
                    barBorderRadius: 5
                }
            }
        ]
    };

    // 把配置给实例对象
    myChart_personChart2.setOption(option);
    window.addEventListener("resize", function() {
        myChart_personChart2.resize();
    });

    // 数据变化
    var dataAll = [
        { year: "2019", data: [200, 300, 300, 900, 1500, 1200, 600] },
        { year: "2020", data: [300, 400, 350, 800, 1800, 1400, 700] }
    ];

    $(".bar h2 ").on("click", "a", function() {
        option.series[0].data = dataAll[$(this).index()].data;
        myChart_personChart2.setOption(option);
    });
})();

// setInterval(function () {
//     option.series[0].data =as_p//改这里
//     option.series[1].data =as_eq//改这里
//     option.series[2].data =as_me//改这里
//     option.series[3].data =as_ma//改这里
//     option.series[4].data =as_en//改这里
//     option.series[5].data =as_ms//改这里
//     option.series[6].data =as_r//改这里
//
//     myChart_personChart2.setOption(option, true);
// },500);
// 使用刚指定的配置项和数据显示图表。
//     myChart_personChart2.setOption(option);
// })


//------------------------产品 3 返修率--quality_A_R1_1----------------------//
//------------------------数据
function ajax4() {
    $.post("QualityKPI/update1",{},function (data) {

        repair_rate = [];
        repair_rate[0]=data.data[0].repair_rate*100;
        repair_rate[1]=data.data[1].repair_rate*100;
        repair_rate[2]=data.data[2].repair_rate*100;
        repair_rate[3]=data.data[3].repair_rate*100;
        repair_rate[4]=data.data[4].repair_rate*100;
        // alert(repair_rate)

    })

}
$(function () {
    ajax4();setInterval(ajax4,3000);
})

//------------------------图表
$(function personChart3(){
    // 基于准备好的dom，初始化echarts实例
    var myChart_personChart3 = echarts.init(document.getElementById('personChart3'));
    charts.push(myChart_personChart3);

    // 指定图表的配置项和数据

    var  option = {
        tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            position: function(p) {
                //其中p为当前鼠标的位置
                return [p[0] + 10, p[1] - 10];
            }
        },
        legend: {
            top: "90%",
            itemWidth: 10,
            itemHeight: 10,
            data: ["0岁以下", "20-29岁", "30-39岁", "40-49岁", "50岁以上"],
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            }
        },
        series: [
            {
                name: "年龄分布",
                type: "pie",
                center: ["50%", "42%"],
                radius: ["40%", "60%"],
                color: [
                    "#065aab",
                    "#066eab",
                    "#0682ab",
                    "#0696ab",
                    "#06a0ab",
                    "#06b4ab",
                    "#06c8ab",
                    "#06dcab",
                    "#06f0ab"
                ],
                label: { show: false },
                labelLine: { show: false },
                data: [
                    { value: 1, name: "0岁以下" },
                    { value: 4, name: "20-29岁" },
                    { value: 2, name: "30-39岁" },
                    { value: 2, name: "40-49岁" },
                    { value: 1, name: "50岁以上" }
                ]
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart_personChart3.setOption(option);
    window.addEventListener("resize", function() {
        myChart_personChart3.resize();
    });
})();

//     setInterval(function () {
//         option.series[0].data =  repair_rate
//
//         myChart_quality_A_R1_1.setOption(option, true);
//     },500);
//     // 使用刚指定的配置项和数据显示图表。
//     myChart_quality_A_R1_1.setOption(option);
// })







//------------------------产品 4 质量损失--quality_A_R1_2----------------------//
//------------------------数据
function ajax1() {

    $.post("QualityKPI/update",{},function (data) {

        // var rer=data.data[1].repair_rate;
        // $("#quality_A_R1_2").attr("data-value",rer);

        rer = [];
        rer[0]=data.data[0].as_p;
        rer[1]=data.data[1].as_p;
        rer[2]=data.data[2].as_p;
        rer[3]=data.data[3].as_p;
        rer[4]=data.data[4].as_p;
    })
}
$(function () {
    ajax1();
    setInterval(ajax1,3000);
})
//------------------------图表
$(function quality_A_R1_2(){
    // 基于准备好的dom，初始化echarts实例
    var myChart_quality_A_R1_2 = echarts.init(document.getElementById('quality_A_R1_2'));
    charts.push(myChart_quality_A_R1_2);

    // 指定图表的配置项和数据

    var option = {
        color:["#87cefa","#ff7f50","#32cd32","#da70d6",'#8B78F6'],
        tooltip : {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}元"
        },
        legend: {
            data:['产品A','产品B','产品C','产品D','产品E',],
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
                name:'产品A',
                type:'line',

                itemStyle: {normal: {areaStyle: {}}},
                data:[1, 2, 1, 4, ]
            },
            {
                name:'产品B',
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
            }
        ]

    };
    setInterval(function () {
        // option.series[0].data[0] =  [$("#quality_A_R1_2").attr("data-
        // option.series[0].data = [rer[0],rer[1],rer[2],rer[3],rer[4]];
        // option.series[0].data = rer;
        // option.series[0].data =  [1,1,1,1,1]
        myChart_quality_A_R1_2.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_quality_A_R1_2.setOption(option);
})

//---------------------------------------------------------------quality_A_M1---------KPI---------------------------

$(function quality_A_M1 (){
    // 基于准备好的dom，初始化echarts实例
    var myChart_quality_A_M1 = echarts.init(document.getElementById('quality_A_M1'));
    charts.push(myChart_quality_A_M1);

    // 指定图表的配置项和数据
    var option = {
        title: {
            text: ''
        },
        tooltip: {},
        legend: {
            data: ['当日', '月平均']
        },
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#fff',
                    backgroundColor: '#999',
                    borderRadius: 3,
                    padding: [3, 5]
                }
            },
            indicator: [
                { name: '产品一次交检合格率', max: 100},
                { name: '质量事故', max: 100},
                { name: '产品返修率', max: 2},
                { name: '产品质量损失率', max: 20},
                { name: '总KPI', max: 8},

            ]
        },
        series: [{
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [
                {
                    value: [0, 0, 0, 0, 0],
                    name: '当日'
                },
                {
                    value: [75, 75, 1.5, 10, 4],
                    name: '月平均'
                }
            ]
        }]
    };

    setInterval(function () {
        option.series[0].data[0].value =  $("#quality_A_M1").attr("data-value")*100;
        myChart_quality_A_M1.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_quality_A_M1.setOption(option);


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