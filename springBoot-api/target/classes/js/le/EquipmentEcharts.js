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
    // 基于准备好的dom，初始化echarts实例
    var myChart_equipment_A_1 = echarts.init(document.getElementById('equipment_A_1'));
    charts.push(myChart_equipment_A_1);

    // 指定图表的配置项和数据
    var  option = {
        tooltip: {
            formatter: '{a} <br/>{b} : {c}%'
        },
        series: [
            {
                radius :'80%',
                name: '设备开动率',
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
        option.series[0].data[0].value =  value_equipment.equipment_operating_rate.toFixed(2)*100;
        myChart_equipment_A_1.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_equipment_A_1.setOption(option);
}
//设备负荷率
function equipment_A_2(){
    // 基于准备好的dom，初始化echarts实例
    var myChart_equipment_A_2 = echarts.init(document.getElementById('equipment_A_2'));
    charts.push(myChart_equipment_A_2);

    // 指定图表的配置项和数据
    var  option = {
        tooltip: {
            formatter: '{a} <br/>{b} : {c}%'
        },
        series: [
            {
                radius :'80%',
                name: '设备负载率',
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
        option.series[0].data[0].value =  value_equipment.equipment_load_rate.toFixed(2)*100;
        myChart_equipment_A_2.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_equipment_A_2.setOption(option);


}
//设备能力指数
function equipment_A_3(){
    // 基于准备好的dom，初始化echarts实例
    var myChart_equipment_A_3 = echarts.init(document.getElementById('equipment_A_3'));
    charts.push(myChart_equipment_A_3);

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
                max: 2,
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
        option.series[0].data[0].value =  value_equipment.equipment_capability.toFixed(2);
        myChart_equipment_A_3.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_equipment_A_3.setOption(option);


}
//MTBF
function equipment_A_4(){
    // 基于准备好的dom，初始化echarts实例
    var myChart_equipment_A_4 = echarts.init(document.getElementById('equipment_A_4'));
    charts.push(myChart_equipment_A_4);

    // 指定图表的配置项和数据
    var  option = {
        color:['#da70d6'],
        calculable : true,
        tooltip: {},
        legend: {
            data:['MTBF']
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
            max:20,
            axisLabel:{
                color:"#ffffff"
            },
            splitLine: {
                "show": false
            },
        },
        barWidth:50,
        series: [{
            // name: '销量',
            type: 'bar',

            data: [0]
        }]
    };

    setInterval(function () {
        option.series[0].data[0] =  value_equipment.mtbf;
        myChart_equipment_A_4.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_equipment_A_4.setOption(option);


}
//MTTR
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
