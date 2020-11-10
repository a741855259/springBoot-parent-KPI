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

//设备图表函数
function equipment_A (){
    // 基于准备好的dom，初始化echarts实例
    var myChart_equipment_A = echarts.init(document.getElementById('equipment_A'));
    charts.push(myChart_equipment_A);

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
                { name: '设备开动率', max: 100},
                { name: '设备负荷率', max: 100},
                { name: '设备能力指数', max: 2},
                { name: 'MTBF', max: 20},
                { name: 'MTTR', max: 8},

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
        option.series[0].data[0].value =  [$("#equipment_A_1").attr("data-value")*100, $("#equipment_A_2").attr("data-value")*100,
            $("#equipment_A_3").attr("data-value"), $("#equipment_A_4").attr("data-value"), $("#equipment_A_5").attr("data-value")];
        myChart_equipment_A.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_equipment_A.setOption(option);

}

function equipment_A_1(){
    // 基于准备好的dom，初始化echarts实例
    var myChart_equipment_A_1 = echarts.init(document.getElementById('equipment_A_1'));
    charts.push(myChart_equipment_A_1);

    // 指定图表的配置项和数据
    var  option = {
        tooltip: {
            formatter: '{a} <br/>{b} : {c}%'
        },
        toolbox: {
            feature: {
                restore: {},
                saveAsImage: {}
            }
        },
        series: [
            {
                name: '业务指标',
                type: 'gauge',
                detail: {formatter: '{value}%'},
                data: [{value: 0, name: '设备开动率'}]
            }
        ]
    };

    setInterval(function () {
        option.series[0].data[0].value =  $("#equipment_A_1").attr("data-value")*100;
        myChart_equipment_A_1.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_equipment_A_1.setOption(option);


}

function equipment_A_2(){
    // 基于准备好的dom，初始化echarts实例
    var myChart_equipment_A_2 = echarts.init(document.getElementById('equipment_A_2'));
    charts.push(myChart_equipment_A_2);

    // 指定图表的配置项和数据
    var  option = {
        tooltip: {
            formatter: '{a} <br/>{b} : {c}%'
        },
        toolbox: {
            feature: {
                restore: {},
                saveAsImage: {}
            }
        },
        series: [
            {
                name: '业务指标',
                type: 'gauge',
                detail: {formatter: '{value}%'},
                data: [{value: 0, name: '设备负荷率'}]
            }
        ]
    };

    setInterval(function () {
        option.series[0].data[0].value =  $("#equipment_A_2").attr("data-value")*100;
        myChart_equipment_A_2.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_equipment_A_2.setOption(option);


}

function equipment_A_3(){
    // 基于准备好的dom，初始化echarts实例
    var myChart_equipment_A_3 = echarts.init(document.getElementById('equipment_A_3'));
    charts.push(myChart_equipment_A_3);

    // 指定图表的配置项和数据
    var  option = {
        tooltip: {
            formatter: '{a} <br/>{b} : {c}%'
        },
        toolbox: {
            feature: {
                restore: {},
                saveAsImage: {}
            }
        },
        series: [
            {
                name: '业务指标',
                type: 'gauge',
                max: 2,
                detail: {formatter: '{value}'},
                data: [{value: 0, name: '设备能力指数'}]
            }
        ]
    };

    setInterval(function () {
        option.series[0].data[0].value =  $("#equipment_A_3").attr("data-value");
        myChart_equipment_A_3.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_equipment_A_3.setOption(option);


}

function equipment_A_4(){
    // 基于准备好的dom，初始化echarts实例
    var myChart_equipment_A_4 = echarts.init(document.getElementById('equipment_A_4'));
    charts.push(myChart_equipment_A_4);

    // 指定图表的配置项和数据
    var  option = {

        tooltip: {},
        legend: {
            data:['MTBF']

        },
        yAxis: {
            data: ["产线A"]
        },
        xAxis: {
            max:20
        },
        series: [{
            name: '销量',
            type: 'bar',

            data: [0]
        }]
    };

    setInterval(function () {
        option.series[0].data[0] =  $("#equipment_A_4").attr("data-value");
        myChart_equipment_A_4.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_equipment_A_4.setOption(option);


}

function equipment_A_5(){
    // 基于准备好的dom，初始化echarts实例
    var myChart_equipment_A_5 = echarts.init(document.getElementById('equipment_A_5'));
    charts.push(myChart_equipment_A_5);

    // 指定图表的配置项和数据
    var  option = {

        tooltip: {},
        legend: {
            data:['MTTR']

        },
        yAxis: {
            data: ["产线A"]
        },
        xAxis: {
            max:8
        },
        series: [{
            name: '销量',
            type: 'bar',

            data: [0]
        }]
    };

    setInterval(function () {
        option.series[0].data[0] =  $("#equipment_A_5").attr("data-value");
        myChart_equipment_A_5.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_equipment_A_5.setOption(option);


}


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