

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
//------------------------产品 1 一次交检不合格率--quality_A_L1_1----------------------//
//------------------------数据
function ajax2() {

    $.post("QualityKPI/update1",{},function (data) {

        fty = [];
        fty[0]=data.data[0].fty*100;
        fty[1]=data.data[1].fty*100;
        fty[2]=data.data[2].fty*100;
        fty[3]=data.data[3].fty*100;
        fty[4]=data.data[4].fty*100;
        // alert(rer)
    })
}
$(function () {
    ajax2();
    setInterval(ajax2,3000);
})
//------------------------图表

$(function quality_A_L1_1(){

    var myChart_quality_A_L1_1 = echarts.init(document.getElementById('quality_A_L1_1'));
    charts.push(myChart_quality_A_L1_1);


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

        myChart_quality_A_L1_1.setOption(option, true);
    },500);
    myChart_quality_A_L1_1.setOption(option);
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
$(function quality_A_L1_2(){
    // 基于准备好的dom，初始化echarts实例
    var myChart_quality_A_L1_2 = echarts.init(document.getElementById('quality_A_L1_2'));
    charts.push(myChart_quality_A_L1_2);

   var option = {

        color:["#99cccc","#ffcc99","#ffcccc","#ff6666",'#cccc99', '#ff9966', '#ccccff', '#F8B448', '#cc9999'],
        legend: {
            x:'center',//图例位置
            y:'bottom',//图例位置
            data:['仓库1', '仓库2','车间1','车间2', '缓存区1','缓存区2','缓存区3'],
            textStyle : {
                color : '#ffffff',

            }
        },

        calculable :false,


        grid:{
            left: '5%',
            right: '5%',
            bottom: '20%',
            containLabel: true
        },

        tooltip : {
            trigger: 'axis',
            axisPointer : {
                type : 'shadow'
            }
        },

        xAxis : [
            {
                type : 'value',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                splitLine:{
                    lineStyle:{
                        color:['#f2f2f2'],
                        width:0,
                        type:'solid'
                    }
                }

            }
        ],

        yAxis : [
            {
                type : 'category',
                data:['产品E', '产品D', '产品C', '产品B', '产品A'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                splitLine:{
                    lineStyle:{
                        width:0,
                        type:'solid'
                    }
                }
            }
        ],

        series : [
            {
                name:'仓库1',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data:[320, 302, 301,302, 301]
            },
            {
                name: '仓库2',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data:[120, 132, 101,302, 301]
            },

            {
                name:'车间1',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data:[150, 212, 201,302, 301]
            },
            {
                name:'车间2',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data:[220, 182, 191,302, 301]
            },
            {
                name: '缓存区1',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data:[150, 212, 201,302, 301]
            },
            {
                name:'缓存区2',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data:[150, 212, 201,302, 301]
            },
            {
                name:'缓存区3',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
                data:[150, 212, 201,302, 301]
            }
        ]
    };


    setInterval(function () {
        option.series[0].data =as_p//改这里
        option.series[1].data =as_eq//改这里
        option.series[2].data =as_me//改这里
        option.series[3].data =as_ma//改这里
        option.series[4].data =as_en//改这里
        option.series[5].data =as_ms//改这里
        option.series[6].data =as_r//改这里

        myChart_quality_A_L1_2.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_quality_A_L1_2.setOption(option);
})


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
$(function quality_A_R1_1(){
    // 基于准备好的dom，初始化echarts实例
    var myChart_quality_A_R1_1 = echarts.init(document.getElementById('quality_A_R1_1'));
    charts.push(myChart_quality_A_R1_1);

    // 指定图表的配置项和数据

    var option = {
        title: {
            // text: '产品返修率'
        },
            color:['#87cefa'],
            grid:{
                left: '5%',
                right: '5%',
                bottom: '5%',
                containLabel: true
            },
            tooltip : {
                trigger: 'item',
                formatter: "{b}<br/>{a}<br/>{c}%"
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
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
                    name:'返修率',
                    type:'bar',
                    barWidth:30,
                    data:[60,80,70,50,60],
                },
            ]
        }
    ;

    setInterval(function () {
        option.series[0].data =  repair_rate

        myChart_quality_A_R1_1.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_quality_A_R1_1.setOption(option);
})

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
$(function logistic_A_R1_2(){
    // 基于准备好的dom，初始化echarts实例
    var myChart_logistic_A_R1_2 = echarts.init(document.getElementById('logistic_A_R1_2'));
    charts.push(myChart_logistic_A_R1_2);

    // 指定图表的配置项和数据

   var option = {
        color:["#87cefa","#ff7f50","#32cd32","#da70d6",'#8B78F6'],
        tooltip : {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}%"
        },
        legend: {
            data:['部件A','部件B','部件C','部件D','部件E',],
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
                data : ['8:00','8:10','8:20','8:30','8:40'],
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
                name:'部件A',
                type:'line',

                itemStyle: {normal: {areaStyle: {}}},
                data:[60, 75, 80, 62, 82]
            },
            {
                name:'部件B',
                type:'line',

                itemStyle: {normal: {areaStyle: {}}},
                data:[70, 75, 73, 68, 73]
            },
            {
                name:'部件C',
                type:'line',
                itemStyle: {normal: {areaStyle: {}}},
                data:[55, 58, 60, 49,53]
            },
            {
                name:'部件D',
                type:'line',

                itemStyle: {normal: {areaStyle: {}}},
                data:[91, 92, 89, 86,90  ]
            },
            {
                name:'部件E',
                type:'line',

                itemStyle: {normal: {areaStyle: {}}},
                data:[80, 81, 83, 83, 79]
            }
        ]

    };
    setInterval(function () {
        // option.series[0].data[0] =  [$("#quality_A_R1_2").attr("data-
        // option.series[0].data = [rer[0],rer[1],rer[2],rer[3],rer[4]];
        // option.series[0].data = rer;
        // option.series[0].data =  [1,1,1,1,1]
        myChart_logistic_A_R1_2.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_logistic_A_R1_2.setOption(option);
})

//---------------------------------------------------------------quality_A_M1---------KPI---------------------------

$(function quality_A_M1 (){
    // 基于准备好的dom，初始化echarts实例
    var myChart_quality_A_M1 = echarts.init(document.getElementById('quality_A_M1'));
    charts.push(myChart_quality_A_M1);

    // 指定图表的配置项和数据
    var option = {
        color:["#87cefa","#ff7f50","#32cd32","#da70d6",'#8B78F6'],
        title: {
            text: ''
        },
        tooltip: {},
        legend: {
           
            textStyle: {
                color:'#fff'},
            data: ['当日', '月平均']
        },
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#fff',
                    backgroundColor: '#034c6a',
                    borderRadius: 3,
                    padding: [3, 5]
                }
            },
            indicator: [
                { name: '部件A', max: 100},
                { name: '部件B', max: 100},
                { name: '部件C', max: 100},
                { name: '部件D', max: 100},
                { name: '部件E', max: 100},

            ]
        },
        series: [{
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [
                {
                    value: [60, 80, 73, 68, 85],
                    name: '当日'
                },
                {
                    value: [75, 75, 90, 50, 72],
                    name: '月平均'
                }
            ]
        }]
    };

    setInterval(function () {
       // option.series[0].data[0].value =  $("#quality_A_M1").attr("data-value")*100;
        myChart_quality_A_M1.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_quality_A_M1.setOption(option);


})



$(function quality_workstation1 (){
    // 基于准备好的dom，初始化echarts实例
    var myChart_quality_workstation1 = echarts.init(document.getElementById('quality_workstation1'));
    charts.push(myChart_quality_workstation1);
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['利润', '支出', '收入']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'value'
            }
        ],
        yAxis: [
            {
                type: 'category',
                axisTick: {
                    show: false
                },
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            }
        ],
        series: [
            {
                name: '利润',
                type: 'bar',
                label: {
                    show: true,
                    position: 'inside'
                },
                data: [200, 170, 240, 244, 200, 220, 210]
            },
            {
                name: '收入',
                type: 'bar',
                stack: '总量',
                label: {
                    show: true
                },
                data: [320, 302, 341, 374, 390, 450, 420]
            },
            {
                name: '支出',
                type: 'bar',
                stack: '总量',
                label: {
                    show: true,
                    position: 'left'
                },
                data: [-120, -132, -101, -134, -190, -230, -210]
            }
        ]
    };
    

    setInterval(function () {
        // option.series[0].data[0].value =  $("#quality_A_M1").attr("data-value")*100;
         myChart_quality_workstation1.setOption(option, true);
     },500);
     // 使用刚指定的配置项和数据显示图表。
     myChart_quality_workstation1.setOption(option);
 
 
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