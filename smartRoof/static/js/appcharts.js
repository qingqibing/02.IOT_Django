// 雷达图表1，单图二维
function radra_1(request) {

    // 获取参数
    const _title_ = request._title_;
    const _subtitle_ = request._subtitle_;
    const _colors_ = request._colors_;
    const _indicator_ = request._indicator_;
    const _data_ = request._data_;
    const _elementId_ = request._elementId_;
    const _calculable_ = request._calculable_;
    const _rightlable_ = request._rightlable_;
    const _tooltipbackgroundColor_ = request._tooltipbackgroundColor_;


    let myChart = echarts.init(document.getElementById(_elementId_));

    //alert(_data_.length);
    const option = {
        title: {
            text: _title_,
            subtext: _subtitle_,
            top: 10,
            left: 10,
            textStyle: {
                color: _tooltipbackgroundColor_
            }
        },
        tooltip: {
            trigger: 'item',
            backgroundColor: _tooltipbackgroundColor_
        },
        legend: {
            type: 'scroll',
            bottom: 10,
            data: (function () {
                let list = [];
                for (let i = 1; i <= Object.keys(_data_).length; i++) {
                    list.push(_data_[i - 1].name + '');
                }
                return list;
            })()
        },
        visualMap: (function () {
            const _value = _data_[0].value;
            let _dict = {
                dimension: null,
                min: null,
                max: null,
                top: 'middle',
                right: _rightlable_,
                color: _colors_,
                calculable: _calculable_
            };
            for (let i = 0; i < Object.keys(_value).length; i++) {
                if (_value[i] >= ((_indicator_[i].max - _indicator_[i].min) * 5 / 6 + _indicator_[i].min) || _value[i] <= ((_indicator_[i].max - _indicator_[i].min) * 1 / 6 + _indicator_[i].min)) {
                    _dict.dimension = i;
                    _dict.min = _indicator_[i].min;
                    _dict.max = _indicator_[i].max;
                    break;
                } else if (_value[i] >= ((_indicator_[i].max - _indicator_[i].min) * 4 / 6 + _indicator_[i].min) || _value[i] <= ((_indicator_[i].max - _indicator_[i].min) * 2 / 6 + _indicator_[i].min)) {
                    _dict.dimension = i;
                    _dict.min = _indicator_[i].min;
                    _dict.max = _indicator_[i].max;
                } else if (_value[i] < ((_indicator_[i].max - _indicator_[i].min) * 4 / 6 + _indicator_[i].min) && _value[i] > ((_indicator_[i].max - _indicator_[i].min) * 2 / 6 + _indicator_[i].min) && _dict.dimension == null) {
                    _dict.dimension = i;
                    _dict.min = _indicator_[i].min;
                    _dict.max = _indicator_[i].max;
                }
            }

            return _dict;
        })(),

        radar: {
            indicator: _indicator_
        },
        series: (function () {
            let series = [];
            for (let i = 1; i <= Object.keys(_data_).length; i++) {
                series.push({
                    name: _title_,
                    type: 'radar',
                    symbol: 'none',
                    lineStyle: {
                        width: 1
                    },
                    itemStyle: {
                        normal: {
                            areaStyle: {
                                type: 'default'
                            }
                        }
                    },
                    // emphasis: {
                    //     areaStyle: {
                    //         color: 'rgba(0,250,0,0.3)'
                    //     }
                    // },
                    data: [{
                        value: _data_[i - 1].value,
                        name: _data_[i - 1].name + ''
                    }]
                });
            }
            return series;
        })()
    };
    myChart.setOption(option);
}

// 树形图表1
function tree_1(request) {
    // 获取参数
    const _json_ = request._json_;
    const _elementId_ = request._elementId_;

    let myChart = echarts.init(document.getElementById(_elementId_));

    myChart.showLoading();
    $.get(_json_, function (data) {
        myChart.hideLoading();

        echarts.util.each(data.children, function (datum, index) {
            index % 2 === 0 && (datum.collapsed = true);
        });

        myChart.setOption(option = {
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove'
            },
            series: [{
                type: 'tree',

                data: [data],

                top: '1%',
                left: '7%',
                bottom: '1%',
                right: '20%',

                symbolSize: 10,

                label: {
                    normal: {
                        position: 'left',
                        verticalAlign: 'middle',
                        align: 'right',
                        fontSize: 12
                    }
                },

                leaves: {
                    label: {
                        normal: {
                            position: 'right',
                            verticalAlign: 'middle',
                            align: 'left'
                        }
                    }
                },

                expandAndCollapse: true,
                animationDuration: 550,
                animationDurationUpdate: 750
            }]
        });
    });
}

// 旭日图表1
function sunburst_1(request) {

    // 获取参数
    const _title_ = request._title_;
    const _subtitle_ = request._subtitle_;
    const _colors_ = request._colors_;
    const _indicator_ = request._indicator_;
    const _data_ = request._data_;
    const _elementId_ = request._elementId_;
    const _calculable_ = request._calculable_;
    const _rightlable_ = request._rightlable_;
    const _tooltipbackgroundColor_ = request._tooltipbackgroundColor_;
    const _url_ = request._url_


    let myChart = echarts.init(document.getElementById(_elementId_));


    const option = {
        title: {
            text: '_title_',
            subtext: '_subtitle_',
            textStyle: {
                fontSize: 14,
                align: 'center'
            },
            subtextStyle: {
                align: 'center'
            },
            sublink: _url_
        },
        series: {
            type: 'sunburst',
            highlightPolicy: 'ancestor',
            data: data,
            radius: [0, '95%'],
            sort: null,
            levels: [{}, {
                r0: '15%',
                r: '35%',
                itemStyle: {
                    borderWidth: 2
                },
                label: {
                    rotate: 'tangential'
                }
            }, {
                r0: '35%',
                r: '70%',
                label: {
                    align: 'right'
                }
            }, {
                r0: '70%',
                r: '72%',
                label: {
                    position: 'outside',
                    padding: 3,
                    silent: false
                },
                itemStyle: {
                    borderWidth: 3
                }
            }]
        }
    };
    myChart.setOption(option);
}

// 折线图表1，单图二维
function trend_1(request) {

    // 获取参数
    const _title_ = request._title_;
    const _subtitle_ = request._subtitle_;
    const _data_ = request._data_;
    const _elementId_ = request._elementId_;


    let myChart = echarts.init(document.getElementById(_elementId_));


    const option = {
        title: {
            text: _title_,
            subtext: _subtitle_
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: _data_[0].obj,
            x: 'left',
            y: 'bottom'
        },
        toolbox: {
            show: true,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: {
                    readOnly: false
                },
                magicType: {
                    type: ['line', 'bar']
                },
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: _data_[0].time,
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} °C'
            }
        },
        series: [{
                name: '温度',
                type: 'line',
                data: _data_[0].value,
                markPoint: {
                    data: [{
                            type: 'max',
                            name: '最大值'
                        },
                        {
                            type: 'min',
                            name: '最小值'
                        }
                    ]
                },
                markLine: {
                    data: [
                        [{
                            symbol: 'none',
                            x: '90%',
                            yAxis: 'max'
                        }, {
                            symbol: 'circle',
                            label: {
                                normal: {
                                    position: 'start',
                                    formatter: '最高值'
                                }
                            },
                            type: 'max',
                            name: '最高点'
                        }],
                        [{
                            symbol: 'none',
                            x: '90%',
                            yAxis: 'min'
                        }, {
                            symbol: 'circle',
                            label: {
                                normal: {
                                    position: 'start',
                                    formatter: '最低值'
                                }
                            },
                            type: 'min',
                            name: '最低点'
                        }]
                    ]
                }
            },

        ]
    };
    myChart.setOption(option);
}

// 折线图表2，单图二维
function trend_2(request) {

    // 获取参数
    const _title_ = request._title_;
    const _subtitle_ = request._subtitle_;
    const _data_ = request._data_;
    const _elementId_ = request._elementId_;


    let myChart = echarts.init(document.getElementById(_elementId_));


    const option = {
        title: {
            text: _title_,
            //subtext: _subtitle_,
            x: 'left',
            align: 'right'
        },
        grid: {
            bottom: 80
        },
        toolbox: {
            show: true,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: {
                    readOnly: false
                },
                magicType: {
                    type: ['line', 'bar']
                },
                restore: {},
                saveAsImage: {}
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                animation: false,
                label: {
                    backgroundColor: '#505765'
                }
            }
        },
        legend: {
            data: _data_[0].obj,
            x: 'center',
            top: 30
        },
        dataZoom: [{
                show: true,
                realtime: true,
                start: 65,
                end: 85
            },
            {
                type: 'inside',
                realtime: true,
                start: 65,
                end: 85
            }
        ],
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLine: {
                onZero: false
            },
            data: _data_[0].time.map(function (str) {
                return str.replace(' ', '\n')
            })
        }],
        yAxis: [{
                name: _data_[0].obj[0],
                type: 'value',
                max: _data_[0].max1
            },
            {
                name: _data_[0].obj[1],
                nameLocation: 'start',
                max: _data_[0].max2,
                type: 'value',
                inverse: true
            }
        ],
        series: [{
                name: _data_[0].obj[0],
                type: 'line',
                animation: false,
                areaStyle: {},
                lineStyle: {
                    width: 1
                },
                data: _data_[0].value1
            },
            {
                name: _data_[0].obj[1],
                type: 'line',
                yAxisIndex: 1,
                animation: false,
                areaStyle: {},
                lineStyle: {
                    width: 1
                },
                data: _data_[0].value2
            }
        ]
    };
    myChart.setOption(option);
}

// 折线图表3，单图二维
function trend_3(request) {

    // 获取参数
    const _title_ = request._title_;
    const _subtitle_ = request._subtitle_;
    const _data_ = request._data_;
    const _elementId_ = request._elementId_;


    let myChart = echarts.init(document.getElementById(_elementId_));


    const option = {
        tooltip: {
            trigger: 'axis',
            position: function (pt) {
                return [pt[0], '10%'];
            }
        },
        title: {
            left: 'left',
            text: _title_,
            subtext: _subtitle_,
        },
        toolbox: {
            show: true,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: {
                    readOnly: false
                },
                magicType: {
                    type: ['line', 'bar']
                },
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: _data_[0].time
        },
        yAxis: {
            type: 'value',
            boundaryGap: [0, '100%']
        },
        dataZoom: [{
            type: 'inside',
            start: 0,
            end: 10
        }, {
            start: 0,
            end: 10,
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2
            }
        }],
        series: [{
            name: _data_[0].obj[0],
            type: 'line',
            smooth: true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
                color: 'rgb(255, 70, 131)'
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgb(255, 158, 68)'
                }, {
                    offset: 1,
                    color: 'rgb(255, 70, 131)'
                }])
            },
            data: _data_[0].value1
        }]
    };
    myChart.setOption(option);
}

// 折线图表4，单图二维
function trend_4(request) {

    // 获取参数
    const _title_ = request._title_;
    const _subtitle_ = request._subtitle_;
    const _data_ = request._data_;
    const _elementId_ = request._elementId_;


    let myChart = echarts.init(document.getElementById(_elementId_));


    const option = {
        title: {
            text: _title_,
            subtext: _subtitle_

        },
        legend: {
            data: _data_[0].obj,
            align: 'left'
        },
        toolbox: {
            // y: 'bottom',
            feature: {
                magicType: {
                    type: ['stack', 'tiled']
                },
                dataView: {},
                saveAsImage: {
                    pixelRatio: 2
                }
            }
        },
        tooltip: {},
        xAxis: {
            data: _data_[0].time,
            silent: false,
            splitLine: {
                show: false
            }
        },
        yAxis: {},
        series: [{
            name: 'bar',
            type: 'bar',
            data: _data_[0].value1,
            animationDelay: function (idx) {
                return idx * 10;
            }
        }, {
            name: 'bar2',
            type: 'bar',
            data: _data_[0].value2,
            animationDelay: function (idx) {
                return idx * 10 + 100;
            }
        }],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
            return idx * 5;
        }
    };
    myChart.setOption(option);
}

// 折线图表5，单图二维
function trend_5(request) {

    // 获取参数
    const _title_ = request._title_;
    const _subtitle_ = request._subtitle_;
    const _data_ = request._data_;
    const _elementId_ = request._elementId_;


    let myChart = echarts.init(document.getElementById(_elementId_));


    const option = {
        title: {
            text: _title_,
            // subtext: _subtitle_,
            x: 'left'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                animation: false
            }
        },
        legend: {
            data: _data_[0].obj,
            x: 'center',
            top: 30
        },
        toolbox: {
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                restore: {},
                saveAsImage: {}
            }
        },
        axisPointer: {
            link: {
                xAxisIndex: 'all'
            }
        },
        dataZoom: [{
                show: true,
                realtime: true,
                start: 30,
                end: 70,
                xAxisIndex: [0, 1]
            },
            {
                type: 'inside',
                realtime: true,
                start: 30,
                end: 70,
                xAxisIndex: [0, 1]
            }
        ],
        grid: [{
            left: 50,
            right: 50,
            height: '20%'
        }, {
            left: 50,
            right: 50,
            top: '55%',
            height: '20%'
        }],
        xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLine: {
                    onZero: true
                },
                data: _data_[0].time
            },
            {
                gridIndex: 1,
                type: 'category',
                boundaryGap: false,
                axisLine: {
                    onZero: true
                },
                data: _data_[0].time,
                position: 'top'
            }
        ],
        yAxis: [{
                name: _data_[0].obj[0],
                type: 'value',
                max: _data_[0].max1
            },
            {
                gridIndex: 1,
                name: _data_[0].obj[1],
                type: 'value',
                inverse: true,
                max: _data_[0].max2
            }
        ],
        series: [{
                name: _data_[0].obj[0],
                type: 'line',
                symbolSize: 8,
                hoverAnimation: false,
                data: _data_[0].value1
            },
            {
                name: _data_[0].obj[1],
                type: 'line',
                xAxisIndex: 1,
                yAxisIndex: 1,
                symbolSize: 8,
                hoverAnimation: false,
                data: _data_[0].value2
            }
        ]
    };
    myChart.setOption(option);
}

// 折线图表6，单图二维
function trend_6(request) {

    // 获取参数
    const _title_ = request._title_;
    const _subtitle_ = request._subtitle_;
    const _data_ = request._data_;
    const _elementId_ = request._elementId_;


    let myChart = echarts.init(document.getElementById(_elementId_));


    const option = {
        title: {
            text: _title_,
            subtext: _subtitle_
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisLine: {
                onZero: false
            },
            data: _data_[0].time.map(function (str) {
                return str.replace(' ', '\n')
            })
        },
        yAxis: {
            splitLine: {
                show: false
            }
        },
        toolbox: {
            //left: 'center',
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                restore: {},
                saveAsImage: {}
            }
        },
        dataZoom: [{
            startValue: '2000/6/15 0:00'
        }, {
            type: 'inside'
        }],
        visualMap: {
            top: 10,
            right: 10,
            show: false,
            pieces: [{
                gt: _data_[0].alarm1,
                lte: _data_[0].alarm2,
                color: '#096'
            }, {
                gt: _data_[0].alarm2,
                lte: _data_[0].alarm3,
                color: '#ffde33'
            }, {
                gt: _data_[0].alarm3,
                lte: _data_[0].alarm4,
                color: '#ff9933'
            }, {
                gt: _data_[0].alarm4,
                lte: _data_[0].alarm5,
                color: '#cc0033'
            }, {
                gt: _data_[0].alarm5,
                lte: _data_[0].alarm6,
                color: '#660099'
            }, {
                gt: _data_[0].alarm6,
                color: '#7e0023'
            }],
            outOfRange: {
                color: '#999'
            }
        },
        series: {
            name: _data_[0].obj[0],
            type: 'line',
            data: _data_[0].value1,
            markLine: {
                silent: true,
                data: [{
                    yAxis: _data_[0].alarm2
                }, {
                    yAxis: _data_[0].alarm3
                }, {
                    yAxis: _data_[0].alarm4
                }, {
                    yAxis: _data_[0].alarm5
                }, {
                    yAxis: _data_[0].alarm6
                }]
            }
        }
    };
    myChart.setOption(option);
}