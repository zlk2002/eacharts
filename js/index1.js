// 监控
var scroll=document.getElementsByClassName('scroll')

var li=document.getElementsByClassName('li')
for(let i=0;i<li.length;i++){
    li[i].setAttribute('index',i)
    li[i].onclick=function(){
        for(let j=0;j<li.length;j++){
            var index=this.getAttribute('index')
            console.log(index)
            li[j].id=''
            li[index].id='li1'
        }
        for(let k=0;k<li.length;k++){
            scroll[k].style.display='none'
           scroll[index].style.display='block'
        }
    }
}

(function () {
    var myChart = echarts.init(document.getElementsByClassName('bin')[0]);
    
    var option = {
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        tooltip: {
            // item 表述 鼠标到饼图的每一项内容的时候 触发提示信息
            trigger: 'item',
            // a:series 选项下面的name
            // b:  series下面data中的name
            // c:  series下面data中的value
            // d:  当前value 占所以内容的比例
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [
            {
                name: '老陈学员分布',
                // pie 饼图  
                type: 'pie',
                // 百分比 具体指都可以  百分比加一号
                // 1：内圆的半径  2 外圆的半径
                radius: ['10%', '65%'],
                // 设置水平方向  垂直方法  50% 居中
                center: ['50%', '50%'],
                roseType: 'radius',
                itemStyle: {
                    borderRadius: 5
                },
                label: {
                    fontSize: 10
                },
                labelLine: {
                    length: 4,
                    length2: 8
                },
                data: [
                    { value: 20, name: '云南' },
                    { value: 26, name: '北京' },
                    { value: 24, name: '山东' },
                    { value: 25, name: '河北' },
                    { value: 20, name: '江苏' },
                    { value: 25, name: '浙江' },
                    { value: 30, name: '四川' },
                    { value: 42, name: '河南' }
                ]
            }
        ]
    };

    myChart.setOption(option);


    window.addEventListener('load', function () {
        myChart.resize();
    });

   
    window.addEventListener('resize', function () {
        myChart.resize();
    })

})();
(function () {
    var item = {
        name: '',
        value: 1200,
        itemStyle: {
            color: '#254065'
        },
        // 鼠标经过柱子颜色
        emphasis: {
            itemStyle: {
                color: '#254065'
            }
        },
        tooltip: {
            extraCssText: 'opacity:0'
        }

    }
    var myChart = echarts.init(document.querySelector('.statistics'));
    var option = {
        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0, color: '#00fffb' // 0% 处的颜色
            }, {
                offset: 1, color: '#0061ce' // 100% 处的颜色
            }],
            global: false // 缺省为 false
        },
        tooltip: {
            trigger: 'item',
            // 触发的时候 效果  shadow 阴影
            //                line 虚线
            //                none 没效果
            axisPointer: {
                type: 'none'
            }
        },
        // 表格
        grid: {
            left: '0%',
            right: '3%',
            bottom: '3%',
            top: '3%',
            containLabel: true,
            // 是否显示网格
            show: true,
            borderColor: 'rgba(0, 240, 255, 0.3)'
        },
        xAxis: [
            {
                type: 'category',
                data: ['郑州', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'], axisTick: {
                    alignWithLabel: false,
                    show: false
                },
                axisLabel: {
                    color: "#71f2fb"
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(0, 240, 255, 0.3)',
                    }
                }

            }
        ],
        yAxis: [
            {
                type: 'value',
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: "#71f2fb"
                },
                splitLine: {
                    lineStyle: {
                        // 使用深浅的间隔色
                        color: 'rgba(0, 240, 255, 0.3)'
                    }
                }
            }
        ],
        series: [
            {
                name: 'Direct',
                type: 'bar',
                barWidth: '60%',
                data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 750, 600, 480, 240]
            }
        ]
    };

    myChart.setOption(option);

    window.addEventListener('load', function () {
        myChart.resize()
    });
    window.addEventListener('resize', function () {
        myChart.resize()
    })
})();

//渠道分布 雷达图部分
(function () {
    var myChart = echarts.init(document.querySelector('.lei'));
    var option = {
        radar: {
            //控制圆的大小
            radius: '60%',
            indicator: [
                { name: '机场', max: 100 },
                { name: '商场', max: 100 },
                { name: '火车站', max: 100 },
                { name: '汽车站', max: 100 },
                { name: '地铁', max: 100 }
            ],
            shape: 'circle',
            // 整个雷达图 有几个圈
            splitNumber: 4,
            axisName: {
                //雷达图 文字的颜色
                color: '#4c9bfd'
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)'
                }
            },
            splitArea: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)'
                }
            }
        },
        tooltip: {
            show: true,
            // 控制提示框组件的显示位置
            position: ['60%', '0%'],
            backgroundColor: 'rgba(255, 255, 255, 0.3)'
        },
        series: [
            {
                name: 'Beijing',
                type: 'radar',
                lineStyle: {
                    normal: {
                        color: '#fff',
                        // width: 1
                    }
                },
                data: [[90, 100, 56, 11, 34]],
                symbol: 'circle',
                symbolSize: 5,
                itemStyle: {
                    color: '#fff'
                },
                label: {
                    show: true,
                    color: '#fff',
                    fontSize: 10
                },
                areaStyle: {
                    color: 'rgba(238, 197, 102, 0.6)',
                },


            }
        ]
    };

    myChart.setOption(option);

    window.addEventListener('load', function () {
        myChart.resize();
    })
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})();


// 进度水球图

(function () {
    var myChart = echarts.init(document.querySelector('.water'));
    let compositeScore = 0.68;

    option = {
        // backgroundColor: "rgba(225,225,225,.2)",
        graphic: [
            {
                type: "group",
                left: "center",
                top: "58%",
                children: [
                    {
                        type: "text",
                        z: 100,
                        left: "10",
                        top: "middle",
                        style: {
                            fill: "#fff",
                            text: "整体进度",
                            font: "16px PingFangSC-Regular",
                        },
                    },
                ],
            },
        ],
        series: [
            {
                type: "liquidFill", //水位图
                radius: "90%", //显示比例
                center: ["50%", "50%"], //中心点
                data: [compositeScore], // data个数代表波浪数
                // color: ["rgba(56, 194, 198, 0.5)"], //波浪颜色
                color: ["#6ae4f6"], //波浪颜色
                backgroundStyle: {
                    color: {
                        type: "linearGradient",
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [
                            {
                                offset: 1,
                                color: "rgba(17,65,86,0.64)",
                            },
                            {
                                offset: 0.51,
                                color: "rgba(32,70,84,0)",
                            },
                            {
                                offset: 0,
                                color: "rgba(99,254,254,0.35)",
                            },
                        ],
                        globalCoord: false,
                    },
                },
                label: {
                    //标签设置
                    position: ["50%", "50%"],
                    formatter: compositeScore * 100 + "%", //显示文本
                    fontSize: "30px",
                    fontFamily: "DINAlternate-Bold",
                    fontWeight: "bold",
                    color: "#fff",
                },
                outline: {
                    show: true,
                    borderDistance: 5,
                    itemStyle: {
                        borderColor: "#1B5151",
                        borderWidth: 1,
                    },
                },
            },
        ],
    };


    myChart.setOption(option);

    window.addEventListener('load', function () {
        myChart.resize();
    })
    window.addEventListener('resize', function () {
        myChart.resize();
    })
})()
// 订单切换封装后
(function () {
    var timTabs = document.getElementsByClassName('filter')[0].children;
    var orderData = document.getElementsByClassName('orderData');
    var index_ = 0;

    for (var i = 0; i < timTabs.length; i++) {
        timTabs[i].setAttribute('index', i)
        timTabs[i].onclick = function () {
            //因为接下来定时器中需要index_++  所有我们-1
            // 否则 点击哪一个 切换到的是下一个

            index_ = this.getAttribute('index');
            for (var k = 0; k < timTabs.length; k++) {
                timTabs[k].classList.remove('active');
                timTabs[index_].classList.add('active');
            }

            for (var j = 0; j < orderData.length; j++) {
                orderData[j].classList.add('orderDataHidden');
                orderData[index_].classList.remove('orderDataHidden');
            }
        }
    }

    var timer = null;
    // 把定时器封装成一个函数
    function auto() {
        timer = setInterval(function () {
            index_++;
            if (index_ >= timTabs.length) {
                index_ = 0;
            }
            timTabs[index_].click();
        }, 1500)
    }

    auto();

    // 当鼠标移入的时候  停止切换  移出继续
    var order = document.querySelector('.order');
    // 移入停止
    order.onmouseenter = function () {
        console.log('移入了');
        clearInterval(timer);
    }

    // 移出继续
    order.onmouseleave = auto;
})();
// 
var my= echarts.init(document.getElementsByClassName('market')[0]);
var option = {
  xAxis: {
    type: 'category',
    data: ['1月', '','3月','', '5月', '', '7月', '','9月','','11月'],
    
  },
  legend: {
    left: "10%",
    type: "plain",
    show: true
  },
  grid: {
    width: "55%",
    bottom: "16%",
    right: "36%",
    top: "27%",
    show: true,
    tooltip: {
      textStyle: {
        color: "rgba(0, 30, 255, 1)"
      }
    }
  },
  
  legend: {
          data: ['销量']
        },
  yAxis: {
   
    type: 'value',
     data: ['0', '30', '60', '90', '120', '150', '180'],
     name:'单位:万',
    nameTextStyle: {
      color: "#6594E2",
       fontSize: 20
       
    }
  },
  series: [
    {
      data: [65, 110 , 90, 130, 120,95,140,120,110,100],
      type: 'line',
      smooth:'true',
      color:'red'
    },
    {
      data: [40, 90 , 70, 120, 110,100,130,100,85,90],
      type: 'line',
      smooth:'true',
      color:'blue'
    }
  ],
  series: [
    {
      data: [40, 90 , 70, 120, 110,100,130,100,85,90],
      type: 'line',
      smooth:'true',
      color:'blue'
    }
  ]
};
my.setOption(option);