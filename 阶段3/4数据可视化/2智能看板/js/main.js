$(function () {
    // 监控区域模块
    (function () {
        // tabs栏点击换颜色 显示对应的数据
        $(".monitor .tabs").on("click", "a", function () {
            var index = $(this).index();//索引号
            $(this).addClass("aColor");//添加类
            $(this).siblings().removeClass("aColor");//移除类
            $(".monitor .content").eq(index).show();//显示
            $(".monitor .content").eq(index).siblings(".content").hide();//隐藏

        })
    })();
    // 点位分布统计模块
    (function () {
        var myChart = echarts.init(document.querySelector('.pie'))
        var option = {
            color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#00096ff', '#9fe6b6', '#32c5e9', '#1d9dff'],
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            series: [
                {
                    name: '点位统计',
                    type: 'pie',
                    label: {
                        fontsize: 10,
                    },
                    labelLine: {
                        length: 6,
                        length2: 8
                    },
                    radius: ['10%', '70%'],
                    center: ['50%', '50%'],
                    roseType: 'radius',
                    data: [
                        { value: 30, name: '辽宁' },
                        { value: 20, name: '贵州' },
                        { value: 15, name: '云南' },
                        { value: 35, name: '北京' },
                        { value: 20, name: '湖南' },
                        { value: 30, name: '湖北' },
                        { value: 40, name: '南京' },
                        { value: 35, name: '福建' },
                    ]
                }
            ]
        };

        myChart.setOption(option);

        // 跟随浏览器缩放 windpw
        // 1.监听
        window.addEventListener('resize', function () {
            // 调用resize()方法跟随缩放
            myChart.resize();
        });
    }());

    // 全国用户统计
    (function () {
        var item = {
            value: 280,
            itemStyle: {
                color: "#254065"
            },
            emphasis: {
                //鼠标经过高亮颜色和原来一样
                itemStyle: {
                    color: "#254065"
                }
            },
            //鼠标经过柱子不显示提示框,透明度为0
            tooltip: {
                extraCssText: "opacity: 0"
            },
        }
        var myChart = echarts.init(document.querySelector('.bar'));
        var option = {
            color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                    { offset: 0, color: "#00fffb" },
                    { offset: 1, color: "#0061ce" }
                ]
            ),
            tooltip: {
                //坐标轴触发
                trigger: 'item',
                // axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                //     type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                // }
            },
            grid: {
                left: '0%',
                right: '3%',
                top: '3%',
                bottom: '3%',
                //grid包含刻度
                containLabel: true,
                // 是否显示直角坐标系网格 
                show: true,
                //grid 四条边框的颜色
                borderColor: "rgba(0, 240, 255, 0.3)"
            },
            xAxis: [
                {

                    type: 'category',
                    data: [
                        '辽宁',
                        '贵州',
                        '云南',
                        '北京',
                        '湖南',
                        '',
                        '......',
                        '',
                        '湖北',
                        '南京',
                        '福建',
                        '湖北',
                        '南京'],

                    axisTick: {
                        alignWithLabel: false,
                        show: false
                    },
                    axisLabel: {
                        color: "#4c9bfd"
                    },
                    axisLine: {
                        lineStyle: {
                            color: "rgba(0, 240, 255, 0.3)",
                            // width: 2,
                        }
                    }
                }
            ],
            yAxis: [
                {
                    axisLabel: {
                        color: "#4c9bfd"
                    },
                    type: 'value',
                    axisLine: {
                        lineStyle: {
                            color: "rgba(0, 240, 255, 0.3)"
                        }
                    },
                    // y轴分割线
                    splitLine: {
                        lineStyle: {
                            color: "rgba(0, 240, 255, 0.3)"
                        }
                    }
                }
            ],
            series: [
                {
                    name: '用户数量',
                    type: 'bar',
                    barWidth: '60%',
                    data: [100, 52, 200, 334, 390, item, item, item, 334, 390, 330, 346, 300]
                }
            ],
        };

        myChart.setOption(option);

        // 跟随浏览器缩放 windpw
        // 1.监听
        window.addEventListener('resize', function () {
            // 调用resize()方法跟随缩放
            myChart.resize();
        });

    })();

    // 订单模块
    (function () {

    })();

    // 销售统计
    (function () {
        // (1)准备数据
        var data = {
            year: [
                [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            ],
            quarter: [
                [23, 75, 12, 97, /*21, 67, 98, 21, 43, 64, 76, 38*/],
                [43, 31, 65, 23, /*78, 21, 82, 64, 43, 60, 19, 34*/]
            ],
            month: [
                [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
                [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
            ],
            week: [
                [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
                [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
            ]
        };
        // x轴
        var x = {
            year: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029'],
            quarter: ['第一季度', '第二季度', '第三季度', '第四季度'],
            month: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            week: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        };

        var myChart = echarts.init(document.querySelector('.sales .chart .line'));
        var option = {
            tooltip: {
                trigger: 'axis'
            },
            color: ['#00f2f1', '#ed3f35'],
            // 图例组件配置
            legend: {
                // data: ['预期销售额', '实际销售额'],可以省略
                right: '10%',
                textStyle: {
                    color: '#4c9bfd'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                top: '20%',
                containLabel: true,
                show: true,
                borderColor: '#012f4a'
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                // x轴
                data: x.year,
                axisLabel: {//文字颜色
                    color: "#4c9bfd",
                },
                axisTick: {//去除刻度
                    show: false
                },
                axisLine: {//去除轴线
                    show: false
                }, boundaryGap: false//去除轴内间距
            },
            yAxis: {
                type: 'value',
                textStyle: {
                    color: '#4c9bfd'
                },
                axisLabel: {
                    color: "#4c9bfd"
                },
                axisTick: {//去除刻度
                    show: false
                },
                splitLine: {
                    lineStyle: {
                        color: '012f4a',

                    }
                }
            },
            series: [
                {
                    name: '预期销售额',
                    type: 'line',
                    smooth: true,
                    stack: '总量',
                    data: data.year[0],
                },
                {
                    name: '实际销售额',
                    type: 'line',
                    smooth: true,
                    stack: '总量',
                    data: data.year[0],
                }
            ]
        };

        myChart.setOption(option);
        // 跟随浏览器缩放 windpw
        // 1.监听
        window.addEventListener('resize', function () {
            // 调用resize()方法跟随缩放
            myChart.resize();
        });

        //点击切换tabe栏
        $('.sales .caption').on('click', 'a', function () {

            var index0 = $(this).index() - 1;
            index = index0;
            $(this).addClass('active').siblings().removeClass('active');
            // 换数据
            var arr = this.dataset.type;
            option.series[0].data = data[arr][0];
            option.series[1].data = data[arr][1];
            // 换x轴  
            option.xAxis.data = x[arr];
            // 重新渲染
            myChart.setOption(option);
        })
        // 定时器
        var as = $('.sales .caption a');
        var index = 0;
        var timer = setInterval(function () {
            as.eq(index).click();
            index++;
            if (index >= as.length) {
                index = 0;
            }
        }, 1000);
        //鼠标经过离开
        $('.sales').hover(function () {
            clearInterval(timer);
        }, function () {
            clearInterval(timer);
            timer = setInterval(function () {
                as.eq(index).click();
                index++;
                if (index >= as.length) {
                    index = 0;
                }
            }, 1000);
        });
    }());


    // 渠道分布以及季度销售模块
    (function () {
        var myChart = echarts.init(document.querySelector('.wrap .radar'));

        var dataBJ = [
            [90, 19, 56, 11, 34],
        ];


        var option = {
            // backgroundColor: '#161627',
            // visualMap: {
            //     show: true,
            //     min: 0,
            //     max: 20,
            //     dimension: 6,
            //     inRange: {
            //         colorLightness: [0.5, 0.8]
            //     }
            // },
            radar: {
                center: ['50%', '50%'],
                radius: '50%',
                indicator: [
                    { name: "机场", max: 100 },
                    { name: "商场", max: 100 },
                    { name: "火车站", max: 100 },
                    { name: "汽车站", max: 100 },
                    { name: "地铁", max: 100 }
                ],
                shape: 'circle',
                splitNumber: 4,
                name: {
                    textStyle: {
                        // 文字颜色
                        color: '#4c9bfd'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: [
                            // 可以设置多个每圈不一样
                            'rgba(255, 255, 255, 0.5)',

                        ].reverse()
                    }
                },
                splitArea: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.5)'
                    }
                }
            },
            series: [
                {
                    name: '北京',
                    type: 'radar',
                    lineStyle: {
                        normal: {
                            width: 1,
                            opacity: 0.5,
                            color: '#fff',
                            // width: 0.5
                        },

                    },
                    data: dataBJ,
                    //图形拐点
                    symbol: 'circle',
                    symbolSize: 3,
                    itemStyle: {
                        color: '#fff'
                    },
                    label: {
                        show: true,
                        color: '#fff',
                        fontsize: 8
                    },
                    areaStyle: {
                        color: 'rgba(238, 197, 102, 0.6)'
                        // opacity: 0.1
                    },
                },
            ],
            tooltip: {
                show: true,
                position: ['20%', '10%'],
                textStyle: {
                    fontsize: 8,
                    fontWeight: 100
                }
            }
        };



        myChart.setOption(option);
        // 跟随浏览器缩放 windpw
        // 1.监听
        window.addEventListener('resize', function () {
            // 调用resize()方法跟随缩放
            myChart.resize();
        });
    })();

    // 销售进度模块
    (function () {
        var myChart = echarts.init(document.querySelector('.quarter .gauge'));
        var option = {
            // tooltip: {
            //     trigger: 'item',
            //     formatter: '{a} <br/>{b}: {c} ({d}%)'
            // },
            series: [
                {
                    // 鼠标经过不偏移
                    hoverOffset: 0,
                    // 起始角度
                    startAngle: 180,
                    name: '销售进度',
                    type: 'pie',
                    radius: ['130%', '150%'],
                    center: ['48%', '80%'],//水平好垂直
                    // 是否启用阻止标签重叠
                    // avoidLabelOverlap: false,
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '30',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },

                    // 数据及数据样式
                    data: [
                        {
                            value: 1, itemStyle: {
                                color: new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [{ offset: 0, color: '#00c9e0' },
                                    { offset: 1, color: '#005fc1' }]
                                ),
                            }
                        },
                        {
                            value: 1, itemStyle: {
                                color: '#12274d',
                            }
                        },
                        { value: 2, itemStyle: { color: "transparent" } },
                    ]
                }
            ]
        };


        myChart.setOption(option);
        window.addEventListener('resize', function () {
            myChart.resize();
        })
    })();

    // 排行榜模块
    (function () {
        // 1. 准备相关数据
        var hotData = [
            {
                city: "北京", // 城市
                sales: "25, 179", // 销售额
                flag: true, //  上升还是下降
                brands: [
                    //  品牌种类数据
                    { name: "可爱多", num: "9,086", flag: true },
                    { name: "娃哈哈", num: "8,341", flag: true },
                    { name: "喜之郎", num: "7,407", flag: false },
                    { name: "八喜", num: "6,080", flag: false },
                    { name: "小洋人", num: "6,724", flag: false },
                    { name: "好多鱼", num: "2,170", flag: true }
                ]
            },
            {
                city: "河北",
                sales: "23,252",
                flag: false,
                brands: [
                    { name: "可爱多", num: "3,457", flag: false },
                    { name: "娃哈哈", num: "2,124", flag: true },
                    { name: "喜之郎", num: "8,907", flag: false },
                    { name: "八喜", num: "6,080", flag: true },
                    { name: "小洋人", num: "1,724", flag: false },
                    { name: "好多鱼", num: "1,170", flag: false }
                ]
            },
            {
                city: "上海",
                sales: "20,760",
                flag: true,
                brands: [
                    { name: "可爱多", num: "2,345", flag: true },
                    { name: "娃哈哈", num: "7,109", flag: true },
                    { name: "喜之郎", num: "3,701", flag: false },
                    { name: "八喜", num: "6,080", flag: false },
                    { name: "小洋人", num: "2,724", flag: false },
                    { name: "好多鱼", num: "2,998", flag: true }
                ]
            },
            {
                city: "江苏",
                sales: "23,252",
                flag: false,
                brands: [
                    { name: "可爱多", num: "2,156", flag: false },
                    { name: "娃哈哈", num: "2,456", flag: true },
                    { name: "喜之郎", num: "9,737", flag: true },
                    { name: "八喜", num: "2,080", flag: true },
                    { name: "小洋人", num: "8,724", flag: true },
                    { name: "好多鱼", num: "1,770", flag: false }
                ]
            },
            {
                city: "山东",
                sales: "20,760",
                flag: true,
                brands: [
                    { name: "可爱多", num: "9,567", flag: true },
                    { name: "娃哈哈", num: "2,345", flag: false },
                    { name: "喜之郎", num: "9,037", flag: false },
                    { name: "八喜", num: "1,080", flag: true },
                    { name: "小洋人", num: "4,724", flag: false },
                    { name: "好多鱼", num: "9,999", flag: true }
                ]
            }
        ];

        // 根据数据渲染sup
        // 遍历数据$.each()  拼接字符串把数据渲染到li>span中 追加到sup中

        // 遍历对象$.each()
        var supHTML = "";
        $.each(hotData, function (index, item) {
            supHTML += `<li>
            <span>${item.city}</span>
            <span>${item.sales} <s class= ${item.flag ? "icon-up" : "icon-down"}></s></span>
          </li>`

        });
        // 将li添加到spen
        $(".province .sup").html(supHTML);


        // 渲染函数
        function render(that) {
            // 添加和移除类
            that.addClass("active")
                .siblings()
                .removeClass();
            var subHTML = "";
            $.each(hotData[that.index()].brands, function (index, item) {
                // 是对应城市的每一个品牌对象
                subHTML += `<li><span>${item.name}</span><span> ${item.num}<s class=
          ${item.flag ? "icon-up" : "icon-down"}
          ></s></span></li>`;
            });
            // 把生成的6个小li字符串给 sub dom盒子
            $(".sub").html(subHTML);
        }

        // 鼠标经过高
        var index = 0;
        $('.province .sup').on('mouseenter', 'li', function () {
            index = $(this).index();
            render($(this));
        });
        var lis = $('.province .sup li')
        lis.eq(0).mouseenter();//先显示北京

        // 定时器
        var timer = setInterval(function () {
            if (index > 4) { index = 0; }
            // $('.province .sup li').eq(index).mouseenter();
            render(lis.eq(index));
            index++;
        }, 1000);

        // 鼠标经过停止定时器  离开开启定时器
        $('.province .sup').hover(function () {
            clearInterval(timer);
        }, function () {
            clearInterval(timer);
            setInterval(function () {
                if (index > 4) { index = 0; }
                // $('.province .sup').eq(index).mouseenter();
                render(lis.eq(index));
                index++;
            }, 1000);
        })
    })();



});

