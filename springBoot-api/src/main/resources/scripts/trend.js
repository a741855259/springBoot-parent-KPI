var symptomName = last_year_month();


$(function(){


  init();

})

 function init(){

   var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];

   //主要传染病
   var histogramChart1 = echarts.init(document.getElementById('histogramChart1'));
   histogramChart1.setOption({

     color:['#5bc0de'],
     grid:{
         left: '5%',
         right: '5%',
         bottom: '5%',
         containLabel: true
     },
     tooltip : {
        trigger: 'item',
        formatter: "{a}<br/>{b}<br/>{c}人"
    },
     calculable : true,
     xAxis : [
         {
             type : 'category',
             data : ['部件A','部件B','部件C','部件D','部件E','部件F','部件G','部件H','部件I'],
             axisLine:{
                  lineStyle:{
                      color: '#5bc0de'
                  },
              },
              axisLabel : {
                interval:0,
                rotate:40,
                  textStyle: {
                      color: '#fff'
                  }
              }
         }
     ],
     yAxis : [
         {
             type : 'value',
             axisLine:{
                 lineStyle:{
                     color: '#5bc0de'
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
                     return value + ""
                 },
             },
         }
     ],
     series : [
         {
             name:'主要传染病',
             type:'bar',
             barWidth : 20,
             data:[2210,1085,926,669,634,452,412,312,156],
         },
     ]
   })

   //主要症状
   var histogramChart2 = echarts.init(document.getElementById('histogramChart2'));
   histogramChart2.setOption({

     color:['#FD6C88'],
     grid:{
         left: '5%',
         right: '5%',
         bottom: '10%',
         containLabel: true
     },
     tooltip : {
        trigger: 'item',
        formatter: "{a}<br/>{b}<br/>{c}人"
    },
     calculable : true,
     yAxis : [
         {
             type : 'category',
             data : ['部件A','部件B','部件C','部件D','部件E','部件F','部件G','部件H'],
             axisLine:{
                  lineStyle:{
                      color: '#FD6C88'
                  },
              },
              axisLabel : {
                  textStyle: {
                      color: '#fff'
                  }
              }
         }
     ],
     xAxis : [
         {
             type : 'value',
             axisLine:{
                 lineStyle:{
                     color: '#FD6C88'
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
                     return value + ""
                 },
             },
         }
     ],
     series : [
         {
             name:'主要症状',
             type:'bar',
             barWidth : 20,
             data:[1750,1416,1136,819,704,413,251,175],
         },
     ]
   })

   //传染病发病趋势
   var lineChart1 = echarts.init(document.getElementById('lineChart1'));
   lineChart1.setOption({
     title: {
        text: '传染病趋势',
        textStyle:{
           fontSize:16,
           color:'#ff7f50'
       },
    },
     color:["#ff7f50"],
     grid:{
         left: '15%',
         right: '5%',
         bottom: '15%',

     },
     tooltip : {
          trigger: 'item',
          formatter: "{a}<br/>{b}<br/>{c}人"
      },

     calculable : true,
         yAxis: [
             {
                 type: 'value',
                 axisLine:{
                     lineStyle:{
                         color: '#ff7f50'
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
                         return value + ""
                     },
                 },
             }
         ],
         xAxis: [
             {
                 type: 'category',
                 data : symptomName,
                 boundaryGap : false,
                 axisLine:{
                     lineStyle:{
                         color: '#ff7f50'
                     },
                 },
                 splitLine: {
                     "show": false
                 },
                 axisLabel: {
                   // interval:0,
                   // rotate:40,
                     textStyle: {
                         color: '#fff'
                     },
                     formatter: function (value) {
                         return value + ""
                     },
                 },
             }
         ],
     series : [
         {
             name:'传染病人数',
             type:'line',
             smooth:true,
             itemStyle: {normal: {areaStyle: {type: 'default'}}},
             data:[120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90]
         },
     ]

   })

   //主要疾病排行
   var histogramChart3 = echarts.init(document.getElementById('histogramChart3'));
   histogramChart3.setOption({

     grid: {
         top: '12%',
         left: '30%'
     },
      xAxis: {
          show: false
      },
      yAxis: [{
          show: true,
          data:  ['部件A','部件B','部件C','部件D','部件E','部件F','部件G','部件H'],
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
          data: [2000, 1800, 1200, 1100,900,900,800,700],
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
          data: [20,18,12,11,9,9,8,7],
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
          data: [100, 100, 100, 100,100, 100, 100, 100],
          barWidth: 15,
          itemStyle: {
              normal: {
                  color: 'none',
                  borderColor: '#00c1de',
                  borderWidth: 1,
                  barBorderRadius: 15,
              }
          }
      }, ]
   })

   //疾病发病趋势
   var lineChart2 = echarts.init(document.getElementById('lineChart2'));
   lineChart2.setOption({
     title: {
        text: '疾病发病趋势',
        textStyle:{
           fontSize:16,
           color:'#32cd32'
       },
       x:"center"
    },
     color:["#32cd32"],
     grid:{
         left: '15%',
         right: '5%',
         bottom: '25%',

     },
     tooltip : {
          trigger: 'item',
          formatter: "{a}<br/>{b}<br/>{c}人"
      },

     calculable : true,
         yAxis: [
             {
                 type: 'value',
                 axisLine:{
                     lineStyle:{
                         color: '#32cd32'
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
                         return value + ""
                     },
                 },
             }
         ],
         xAxis: [
             {
                 type: 'category',
                 data : symptomName,
                 boundaryGap : false,
                 axisLine:{
                     lineStyle:{
                         color: '#32cd32'
                     },
                 },
                 splitLine: {
                     "show": false
                 },
                 axisLabel: {
                   // interval:0,
                   // rotate:40,
                     textStyle: {
                         color: '#fff'
                     },
                     formatter: function (value) {
                         return value + ""
                     },
                 },
             }
         ],
     series : [
         {
             name:'疾病发病人数',
             type:'line',
             smooth:true,
             itemStyle: {normal: {areaStyle: {type: 'default'}}},
             data:[520, 232,701, 434, 190, 230, 210,120, 132, 101, 134, 890]
         },
     ]

   })

   //年龄分布
   var pieChart1 = echarts.init(document.getElementById('pieChart1'));
   pieChart1.setOption({
       tooltip: {},
       legend: {
           data: ['目标合格率', '实际合格率']
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
               { name: 'A', max: 6500},
               { name: 'B', max: 16000},
               { name: 'C', max: 30000},
               { name: 'D', max: 38000},
               { name: 'E', max: 52000},
               { name: 'F', max: 25000}
           ]
       },
       series: [{
           name: '预算 vs 开销（Budget vs spending）',
           type: 'radar',
           // areaStyle: {normal: {}},
           data: [
               {
                   value: [4300, 10000, 28000, 35000, 50000, 19000],
                   name: '目标合格率'
               },
               {
                   value: [5000, 14000, 28000, 31000, 42000, 21000],
                   name: '实际合格率'
               }
           ]
       }]
   })

   //性别分布
   var labelFromatter = {
       normal : {
           label : {
              position : 'center',
               formatter : function (params){
                 console.log(params)
                 if(params.name == "错检率"){
                   return "错检率"+":"+(params.percent + '%')
                 }else{
                   return "漏检率"+":"+(params.percent + '%')
                 }
               },
           },
           labelLine : {
               show : false
           }
       },
   };

   var pieChart2 = echarts.init(document.getElementById('pieChart2'));
   pieChart2.setOption({

        color: ['#87cefa','#FD6C88'],
        tooltip : {
            trigger: 'item',
            formatter: "{b}({c})<br/>{d}%"
        },

        series : [
            {
                type : 'pie',
                center : ['50%', '50%'],
                radius : [55, 95],
                x: '0%', // for funnel
                itemStyle : labelFromatter,
                data : [
                    {name:'男性', value:158},
                    {name:'女性', value:142},
                ]
            },
        ],
   })

 }
