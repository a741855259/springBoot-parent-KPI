charts=[];



//------------------------数据

//------------------------图表
function personcj1(){
    // 基于准备好的dom，初始化echarts实例
    var myChart_personcj1 = echarts.init(document.getElementById('personcj1'));
    charts.push(myChart_personcj1);

    var option = {
        title: {
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['实际交货数量', '计划交货数量'],
            textStyle:{
                color:'#fff',
                fontSize:12
            }
        },
        toolbox: {
            show: true,
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                textStyle: {
                    color: '#fff',
                    fontSize:23
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '实际生产量',
                type: 'bar',
                data: [200, 490, 100, 132, 125, 76, 135, 162, 232, 200, 640, 93],
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
                name: '计划生产量',
                type: 'bar',
                data: [126, 159, 190, 264, 287, 307, 356, 322, 387, 188, 160, 123],
                markPoint: {
                    data: [
                        {name: '年最高', value: 182.2, xAxis: 7, yAxis: 183},
                        {name: '年最低', value: 2.3, xAxis: 11, yAxis: 3}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            }
        ]
    };

    setInterval(function () {
        option.series[0].data =wip_rework_rate//改这里


        myChart_personcj1.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_personcj1.setOption(option);
}

//------------------------人员有效分配情况--quality_A_1_R1----------------------//
//------------------------数据


//------------------------图表
function personcj2(){
    // 基于准备好的dom，初始化echarts实例
    var myChart_personcj2 = echarts.init(document.getElementById('personcj2'));
    charts.push(myChart_personcj2);

    var option = {
        color:["#ff7f50",
            "#87cefa",
        ],
        tooltip : {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}元"
        },
        legend: {
            data:['实际生产数量','计划生产数量'],
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
                name:'实际生产数量',
                type:'line',

                itemStyle: {normal: {areaStyle: {}}},
                data:[40, 38, 66, 28, ]
            },
            {
                name:'计划生产数量',
                type:'line',

                itemStyle: {normal: {areaStyle: {}}},
                data:[80, 85, 90, 89, ]
            },
        ]

    };

    setInterval(function () {
        option.series[0].data =wip_rework_rate//改这里


        myChart_personcj2.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_personcj2.setOption(option);
}


$(function(){
  
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

            personcj1();
            personcj2();
        }
    });
});
//resize图表
window.onresize=function () {
    for(var i=0;i<charts.length;i++){
        charts[i].resize();
    }
}