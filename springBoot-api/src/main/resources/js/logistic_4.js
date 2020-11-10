$(function logistic_A_L1_2(){
    // 基于准备好的dom，初始化echarts实例
    var myChart_logistic_A_L1_2 = echarts.init(document.getElementById('logistic_A_L1_2'));
    charts.push(myChart_logistic_A_L1_2);

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

        myChart_logistic_A_L1_2.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    myChart_logistic_A_L1_2.setOption(option);
})


