// init loading 
var divwidth;
init(); // 开机初始化数据
trend_refresh(); // 如果需要周期性刷新额外启用事件


//通风控制-翻页
function skylight_previous() {
  $('#skylight_manual').show(1000);
  $('#skylight_plan').hide(1000);
};

function skylight_next() {
  $('#skylight_plan').show(1000);
  $('#skylight_manual').hide(1000);
};
//遮阳控制-翻页
function sunshade_previous() {
  $('#sunshade_manual').show(1000);
  $('#sunshade_plan').hide(1000);
};

function sunshade_next() {
  $('#sunshade_plan').show(1000);
  $('#sunshade_manual').hide(1000);
};

//向input写值
function set_val(request) {
  $(request.id).val(request.val);
}

//开机初始化数据
function init() {
  var position = {
    'position': '{{ Project.position }}'
  };
  $.ajax({
    type: "GET",
    url: 'environment/',
    data: position,
    success: function (result) {
      //alert(result)  //对返回数据处理
      result = JSON.parse(result);
      if (result.status == 1) {
        home_chart(result); //刷新首页chart
        home_data(result); //刷新首页数据明细
        //天窗
        $('#skylight_position_input_dis').data('easyPieChart').update(result.data
          .skylight_position);
        $('#skylight_position_input').val(result.data.skylight_position);
        if (result.data.skylight_position_manual == 1) {
          $('#skylight_position_manual').css("background-color", "#3BAD72");
          $('#skylight_manual_control').show();
        } else {
          $('#skylight_position_manual').css("background-color",
            "rgba(0, 0, 0, 0.40)");
          $('#skylight_manual_control').hide();
        }
        //遮阳
        $('#sunshade_position_input_dis').data('easyPieChart').update(result.data
          .sunshade_position);
        $('#sunshade_position_input').val(result.data.sunshade_position);
        if (result.data.sunshade_position_manual == 1) {
          $('#sunshade_position_manual').css("background-color", "#3BAD72");
          $('#sunshade_manual_control').show();
        } else {
          $('#sunshade_position_manual').css("background-color",
            "rgba(0, 0, 0, 0.40)");
          $('#sunshade_manual_control').hide();
        }
      } else {
        alert(result.result);
      }
    }
  });
  $.ajax({
    type: "GET",
    url: 'skylight_plan/',
    data: position,
    success: function (result) {
      //alert(result)  //对返回数据处理
      result = JSON.parse(result);
      if (result.status == 1) {
        //1
        $('#skylight_plan_node_1_checkbox').attr("checked", result.data.node[0].check);
        $('#skylight_plan_node_1_time').val(result.data.node[0].time);
        $('#skylight_plan_node_1_position').val(result.data.node[0].position);
        //2
        $('#skylight_plan_node_2_checkbox').attr("checked", result.data.node[1].check);
        $('#skylight_plan_node_2_time').val(result.data.node[1].time);
        $('#skylight_plan_node_2_position').val(result.data.node[1].position);
        //3
        $('#skylight_plan_node_3_checkbox').attr("checked", result.data.node[2].check);
        $('#skylight_plan_node_3_time').val(result.data.node[2].time);
        $('#skylight_plan_node_3_position').val(result.data.node[2].position);
        //4
        $('#skylight_plan_node_4_checkbox').attr("checked", result.data.node[3].check);
        $('#skylight_plan_node_4_time').val(result.data.node[3].time);
        $('#skylight_plan_node_4_position').val(result.data.node[3].position);
        //5
        $('#skylight_plan_node_5_checkbox').attr("checked", result.data.node[4].check);
        $('#skylight_plan_node_5_time').val(result.data.node[4].time);
        $('#skylight_plan_node_5_position').val(result.data.node[4].position);
      } else {
        alert(result.result);
      }
    }
  });
  $.ajax({
    type: "GET",
    url: 'sunshade_plan/',
    data: position,
    success: function (result) {
      //alert(result)  //对返回数据处理
      result = JSON.parse(result);
      if (result.status == 1) {
        //1
        $('#sunshade_plan_node_1_checkbox').attr("checked", result.data.node[0].check);
        $('#sunshade_plan_node_1_time').val(result.data.node[0].time);
        $('#sunshade_plan_node_1_position').val(result.data.node[0].position);
        //2
        $('#sunshade_plan_node_2_checkbox').attr("checked", result.data.node[1].check);
        $('#sunshade_plan_node_2_time').val(result.data.node[1].time);
        $('#sunshade_plan_node_2_position').val(result.data.node[1].position);
        //3
        $('#sunshade_plan_node_3_checkbox').attr("checked", result.data.node[2].check);
        $('#sunshade_plan_node_3_time').val(result.data.node[2].time);
        $('#sunshade_plan_node_3_position').val(result.data.node[2].position);
        //4
        $('#sunshade_plan_node_4_checkbox').attr("checked", result.data.node[3].check);
        $('#sunshade_plan_node_4_time').val(result.data.node[3].time);
        $('#sunshade_plan_node_4_position').val(result.data.node[3].position);
        //5
        $('#sunshade_plan_node_5_checkbox').attr("checked", result.data.node[4].check);
        $('#sunshade_plan_node_5_time').val(result.data.node[4].time);
        $('#sunshade_plan_node_5_position').val(result.data.node[4].position);
      } else {
        alert(result.result);
      }
    }
  });
  skylight_previous(); //
  sunshade_previous(); //
}

//读写通风装置操作方式数据
function skylight_position_manual_mode() {
  var data = {
    'position': '{{ Project.position }}'
  };
  $.ajax({
    type: "GET",
    url: 'skylight_position_manual/',
    data: data,
    success: function (result) {
      //alert(result)  //对返回数据处理
      result = JSON.parse(result);
      if (result.status == 1) {
        if (result.data.skylight_position_manual == 1) {
          $('#skylight_position_manual').css("background-color", "#3BAD72");
          $('#skylight_manual_control').show();
        } else {
          $('#skylight_position_manual').css("background-color",
            "rgba(0, 0, 0, 0.40)");
          $('#skylight_manual_control').hide();
        }

        //alt(result.data.skylight_position_manual);
      } else {
        alert(result.result);
      }
    }
  });
}
//读写遮阳装置操作方式数据
function sunshade_position_manual_mode() {
  var data = {
    'position': '{{ Project.position }}'
  };
  $.ajax({
    type: "GET",
    url: 'sunshade_position_manual/',
    data: data,
    success: function (result) {
      //alert(result)  //对返回数据处理
      result = JSON.parse(result);
      if (result.status == 1) {
        if (result.data.sunshade_position_manual == 1) {
          $('#sunshade_position_manual').css("background-color", "#3BAD72");
          $('#sunshade_manual_control').show();
        } else {
          $('#sunshade_position_manual').css("background-color",
            "rgba(0, 0, 0, 0.40)");
          $('#sunshade_manual_control').hide();
        }

        //alt(result.data.sunshade_position_manual);
      } else {
        alert(result.result);
      }
    }
  });
}

//事件监听
$('#skylight_position_input').on("change", function () {
  $('#skylight_position_input_dis').data('easyPieChart').update($('#skylight_position_input')
    .val());
}) // 监听通风开度滑块
$('#skylight_position_manual').on("change", function () {
  skylight_position_manual_mode($('#skylight_position_manual').val());
})

$('#sunshade_position_input').on("change", function () {
  $('#sunshade_position_input_dis').data('easyPieChart').update($('#sunshade_position_input')
    .val());
}) // 监听通风开度滑块
$('#sunshade_position_manual').on("change", function () {
  sunshade_position_manual_mode($('#sunshade_position_manual').val());
})

// switcher
function switcher(self) {
  var color = {
    'color': self
  };
  $.ajax({
    type: "GET",
    url: 'theme/',
    data: color,
    success: function (result) {
      //alert(result)  //对返回数据处理
    },
  });
}


// 实时数据刷新
var data_refresh = Number('{{ Project.refresh}}');
setInterval(environment_refresh, data_refresh);

function environment_refresh() {
  var position = {
    'position': '{{ Project.position }}'
  };
  $.ajax({
    type: "GET",
    url: 'environment/',
    data: position,
    success: function (result) {
      //alert(result)  //对返回数据处理
      result = JSON.parse(result);
      if (result.status == 1) {
        home_chart(result); //刷新首页chart
        home_data(result); //刷新首页数据明细
        if (result.data.skylight_position_manual == 1) {
          $('#skylight_position_manual').css("background-color", "#3BAD72");
          $('#skylight_manual_control').show();
        } else {
          $('#skylight_position_manual').css("background-color",
            "rgba(0, 0, 0, 0.40)");
          $('#skylight_manual_control').hide();
        }
        if (result.data.sunshade_position_manual == 1) {
          $('#sunshade_position_manual').css("background-color", "#3BAD72");
          $('#sunshade_manual_control').show();
        } else {
          $('#sunshade_position_manual').css("background-color",
            "rgba(0, 0, 0, 0.40)");
          $('#sunshade_manual_control').hide();
        }
      } else {
        alert(result.result);
      }
    }
  });
}

// 历史数据刷新
function trend_refresh() {
  var position = {
    'position': '{{ Project.position }}'
  };
  $.ajax({
    type: "GET",
    url: 'trend/',
    data: position,
    success: function (result) {
      //alert(result)  //对返回数据处理
      result = JSON.parse(result);
      if (result.status == 1) {
        temperature_trend(result); //温度曲线
        humidity_trend(result); //湿度曲线
        light_trend(result); //光照曲线
        noise_trend(result); //噪声曲线
        gas_trend(result); //有害气体曲线
      } else {
        alert(result.result);
      }
    }
  });
}

// home_chart首页健康状况图
function home_chart(result) {
  //图表标题
  var _title_ = '健康状况';

  //副标题
  var _subtitle_ = '{{ Project.position }}';

  //标尺颜色由极高至极低
  var _colors_ = ['red', 'yellow', 'green', 'green', 'yellow', 'red'];

  //指标，需设定该指标的上下限，该指标有正常区域、警告区域、报警区域，
  //分别对应颜色的‘green’‘yellow’‘red’，上下限计算方法等同于将量程平均
  //划分6份，中间两份是绿色，其上下两份是黄色，顶头两份是红色
  var _indicator_ = [{
      text: '温度',
      min: -20,
      max: 50
    },
    {
      text: '湿度',
      min: 0,
      max: 60
    },
    {
      text: '光源',
      min: 0,
      max: 40
    },
    {
      text: '噪声',
      min: 0,
      max: 40
    },
    {
      text: '有害气体',
      min: -20,
      max: 20
    }
  ];

  //渲染图表用数据集，这个数据集是一个列表，列表中每个对象是一个字典；
  var _data_ = [];
  _data_ = [{
    value: [result.data.temperature, result.data.humidity, result.data.light, result.data.noise,
      result.data.gas
    ],
    name: '环境状况'
  }];
  //图表生成容器ID
  var _elementId_ = 'home-chart';

  //标尺是否可被操作
  var _calculable_ = false;

  //标尺从右侧起多少像素位置，默认10，如果不想显示标尺，填-100即可
  var _rightlable_ = -100;

  //提示盘底色
  var _tooltipbackgroundColor_ = '#00ADAD';

  //将以上数据打包成字典
  var environment_data = {
    '_title_': _title_,
    '_subtitle_': _subtitle_,
    '_colors_': _colors_,
    '_indicator_': _indicator_,
    '_data_': _data_,
    '_elementId_': _elementId_,
    '_calculable_': _calculable_,
    '_rightlable_': _rightlable_,
    '_tooltipbackgroundColor_': _tooltipbackgroundColor_
  };

  // 执行函数
  radra_1(environment_data);
}

// home_data首页数据明细
function home_data(result) {
  $('#temperature').html(result.data.temperature);
  $('#humidity').html(result.data.humidity);
  $('#light').html(result.data.light);
  $('#noise').html(result.data.noise);
  $('#gas').html(result.data.gas);
  $('#skylight_position').data('easyPieChart').update(result.data.skylight_position);
}

//环境分析-温度图表
function temperature_trend(result) {
  //获取窗口宽度
  var divTemperature = document.getElementById('Temperature-trend');
  divwidth = divTemperature.offsetWidth;

  // 发送参数

  //图表标题
  var _title_1 = '24小时';

  //副标题
  var _subtitle_1 = '{{ Project.position }}-温度';


  //渲染图表用数据集，这个数据集是一个列表，列表中每个对象是一个字典；
  var _data_1 = [{
    obj: ['温度'],
    value: result.data.temperature,
    time: result.data.time
  }];

  //图表生成容器ID
  var _elementId_1 = 'Temperature-trend';

  //将以上数据打包成字典
  var environment_data1 = {
    '_title_': _title_1,
    '_subtitle_': _subtitle_1,
    '_data_': _data_1,
    '_elementId_': _elementId_1
  };

  // 执行函数
  trend_1(environment_data1);
}

//环境分析-湿度图表
function humidity_trend(result) {
  //指定窗口宽度
  var divHumidity = document.getElementById('Humidity-trend');
  divHumidity.style.width = divwidth + "px";

  // 发送参数

  //图表标题
  var _title_2 = '湿度/雨量';

  //副标题
  var _subtitle_2 = '{{ Project.position }}-湿度';


  //渲染图表用数据集，这个数据集是一个列表，列表中每个对象是一个字典；
  var _data_2 = [{
    obj: ['湿度(%)', '降雨量(mm)'],
    value1: result.data.humidity,
    value2: result.data.humidity,
    max1: 100,
    max2: 100,
    time: result.data.time
  }];

  //图表生成容器ID
  var _elementId_2 = 'Humidity-trend';

  //将以上数据打包成字典
  var environment_data2 = {
    '_title_': _title_2,
    '_subtitle_': _subtitle_2,
    '_data_': _data_2,
    '_elementId_': _elementId_2
  };

  // 执行函数
  trend_2(environment_data2);
}

//环境分析-光源图表
function light_trend(result) {
  //指定窗口宽度
  var divLight = document.getElementById('Light-trend');
  divLight.style.width = divwidth + "px";

  // 发送参数
  //图表标题
  var _title_3 = '光照';
  //副标题
  var _subtitle_3 = '{{ Project.position }}-照度';
  //渲染图表用数据集，这个数据集是一个列表，列表中每个对象是一个字典；
  var _data_3 = [{
    obj: ['照度(%)'],
    value1: result.data.light,
    time: result.data.time
  }];

  //图表生成容器ID
  var _elementId_3 = 'Light-trend';

  //将以上数据打包成字典
  var environment_data3 = {
    '_title_': _title_3,
    '_subtitle_': _subtitle_3,
    '_data_': _data_3,
    '_elementId_': _elementId_3
  };

  // 执行函数
  trend_3(environment_data3);
}

//环境分析-噪声图表
function gas_trend(result) {
  //指定窗口宽度
  var divGas = document.getElementById('Gas-trend');
  divGas.style.width = divwidth + "px";

  // 发送参数

  //图表标题
  var _title_4 = '有害气体/天窗开度';

  //副标题
  var _subtitle_4 = '{{ Project.position }}-有害气体';


  //渲染图表用数据集，这个数据集是一个列表，列表中每个对象是一个字典；
  var _data_4 = [{
    obj: ['气体(%)', '开度(%)'],
    value1: result.data.gas,
    value2: result.data.air,
    max1: 100,
    max2: 100,
    time: result.data.time
  }];

  //图表生成容器ID
  var _elementId_4 = 'Gas-trend';

  //将以上数据打包成字典
  var environment_data4 = {
    '_title_': _title_4,
    '_subtitle_': _subtitle_4,
    '_data_': _data_4,
    '_elementId_': _elementId_4
  };

  // 执行函数
  trend_5(environment_data4);
}

//环境分析-噪声图表
function noise_trend(result) {
  //指定窗口宽度
  var divNoise = document.getElementById('Noise-trend');
  divNoise.style.width = divwidth + "px";

  // 发送参数

  //图表标题
  var _title_5 = '噪声污染';

  //副标题
  var _subtitle_5 = '{{ Project.position }}-噪声';


  //渲染图表用数据集，这个数据集是一个列表，列表中每个对象是一个字典；
  var _data_5 = [{
    obj: ['噪声(dB)'],
    value1: result.data.noise,
    alarm1: 0,
    alarm2: 5,
    alarm3: 10,
    alarm4: 15,
    alarm5: 20,
    alarm6: 25,
    time: result.data.time
  }];

  //图表生成容器ID
  var _elementId_5 = 'Noise-trend';

  //将以上数据打包成字典
  var environment_data5 = {
    '_title_': _title_5,
    '_subtitle_': _subtitle_5,
    '_data_': _data_5,
    '_elementId_': _elementId_5
  };

  // 执行函数
  trend_6(environment_data5);
}

//设备控制-天窗
function skylight_manual_control() {
  var data = {
    'position': '{{ Project.position }}',
    'skylight_manual_control': $('#skylight_position_input_dis').val(),
  };
  $.ajax({
    type: "GET",
    url: 'skylight_manual_control/',
    data: data,
    success: function (result) {
      //alert(result)  //对返回数据处理
    }
  });
}
//设备控制-遮阳
function sunshade_manual_control() {
  var data = {
    'position': '{{ Project.position }}',
    'sunshade_manual_control': $('#sunshade_position_input_dis').val(),
  };
  $.ajax({
    type: "GET",
    url: 'sunshade_manual_control/',
    data: data,
    success: function (result) {
      //alert(result)  //对返回数据处理
    }
  });
}

//控制计划-天窗
function skylight_plan_control() {
  var data = {
    'position': '{{ Project.position }}',
    'node': [{
        'check': $("#skylight_plan_node_1_checkbox").is(":checked"),
        'time': $("#skylight_plan_node_1_time").val(),
        'position': $('#skylight_plan_node_1_position').val()
      },
      {
        'check': $("#skylight_plan_node_2_checkbox").is(":checked"),
        'time': $("#skylight_plan_node_2_time").val(),
        'position': $('#skylight_plan_node_2_position').val()
      },
      {
        'check': $("#skylight_plan_node_3_checkbox").is(":checked"),
        'time': $("#skylight_plan_node_3_time").val(),
        'position': $('#skylight_plan_node_3_position').val()
      },
      {
        'check': $("#skylight_plan_node_4_checkbox").is(":checked"),
        'time': $("#skylight_plan_node_4_time").val(),
        'position': $('#skylight_plan_node_4_position').val()
      },
      {
        'check': $("#skylight_plan_node_5_checkbox").is(":checked"),
        'time': $("#skylight_plan_node_5_time").val(),
        'position': $('#skylight_plan_node_5_position').val()
      }
    ]
  };
  //data = JSON.stringify(data);
  $.ajax({
    type: "GET",
    content_type: "json",
    url: 'skylight_plan_control/',
    data: data,
    success: function (result) {
      $('#skylight_plan_control_result').html(result); //对返回数据处理
    }
  });
}
//控制计划-遮阳
function sunshade_plan_control() {
  var data = {
    'position': '{{ Project.position }}',
    'node': [{
        'check': $("#sunshade_plan_node_1_checkbox").is(":checked"),
        'time': $("#sunshade_plan_node_1_time").val(),
        'position': $('#sunshade_plan_node_1_position').val()
      },
      {
        'check': $("#sunshade_plan_node_2_checkbox").is(":checked"),
        'time': $("#sunshade_plan_node_2_time").val(),
        'position': $('#sunshade_plan_node_2_position').val()
      },
      {
        'check': $("#sunshade_plan_node_3_checkbox").is(":checked"),
        'time': $("#sunshade_plan_node_3_time").val(),
        'position': $('#sunshade_plan_node_3_position').val()
      },
      {
        'check': $("#sunshade_plan_node_4_checkbox").is(":checked"),
        'time': $("#sunshade_plan_node_4_time").val(),
        'position': $('#sunshade_plan_node_4_position').val()
      },
      {
        'check': $("#sunshade_plan_node_5_checkbox").is(":checked"),
        'time': $("#sunshade_plan_node_5_time").val(),
        'position': $('#sunshade_plan_node_5_position').val()
      }
    ]
  };
  //data = JSON.stringify(data);
  $.ajax({
    type: "GET",
    content_type: "json",
    url: 'sunshade_plan_control/',
    data: data,
    success: function (result) {
      $('#sunshade_plan_control_result').html(result); //对返回数据处理
    }
  });
}