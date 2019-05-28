# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse
from . import models
import json
import datetime

# Create your views here.

def HelloWorld(request):
    return render(request, 'HelloWorld.html')

# 主页
def index(request):
    themes = models.Themes.objects.get(pk=1)
    project = models.Project.objects.get(pk=1)
    return render(request, 'index.html', {
        'Themes': themes,
        'Project': project
    })


# 改变主题
def colors(request):
    color = request.GET.get('color')
    themes = models.Themes.objects.get(pk=1)
    themes.color = color
    themes.save()
    result = "OK!"
    return HttpResponse(result)


# 获取环境数据
def environment(request):
    if request.method == "GET":
        position = request.GET.get('position')
        temperature = 24.6  # 接 温度 驱动
        humidity = 20.0  # 接 湿度 驱动
        light = 20.0  # 接 光照 驱动
        noise = 13.0  # 接 噪声 驱动
        gas = 10.0  # 接 有害气体 驱动
        skylight_position = 90.0
        sunshade_position = 30.0

        # 获取应用数据
        Apps = models.Apps.objects.get(pk=1)

        data = {
            "temperature": temperature,
            "humidity": humidity,
            "light": light,
            "noise": noise,
            "gas": gas,
            "skylight_position": skylight_position,
            "skylight_position_manual": Apps.skylight_position_manual,
            "sunshade_position": sunshade_position,
            "sunshade_position_manual": Apps.sunshade_position_manual,
        }
        status = 1
        result = "获取环境数据错误!"
        return HttpResponse(
            json.dumps({
                "status": status,
                "result": result,
                "data": data
            }))


# 获取通风数据
def skylight_plan(request):
    if request.method == "GET":
        position = request.GET.get('position')
        node = []
        for i in range(5):
            plan = models.Skylight.objects.get(pk=i + 1)
            node.append({
                'check': plan.check,
                'time': plan.time,
                'position': plan.position
            })
        data = {"node": node}
        status = 1
        result = "获取天窗计划数据错误!"
        return HttpResponse(
            json.dumps({
                "status": status,
                "result": result,
                "data": data
            }))

# 获取遮阳数据
def sunshade_plan(request):
    if request.method == "GET":
        position = request.GET.get('position')
        node = []
        for i in range(5):
            plan = models.Sunshade.objects.get(pk=i + 1)
            node.append({
                'check': plan.check,
                'time': plan.time,
                'position': plan.position
            })
        data = {"node": node}
        status = 1
        result = "获取遮阳计划数据错误!"
        return HttpResponse(
            json.dumps({
                "status": status,
                "result": result,
                "data": data
            }))


# 获取历史输入
def trend(request):
    if request.method == "GET":
        position = request.GET.get('position')
        time = []
        temperature = []
        humidity = []
        light = []
        noise = []
        gas = []
        air = []
        for i in range(12):
            time.append(
                str(models.Trend.objects.order_by("-time")[11 - i].time.hour))
            temperature.append(
                models.Trend.objects.order_by("-time")[11 - i].temperature)
            humidity.append(
                models.Trend.objects.order_by("-time")[11 - i].humidity)
            light.append(models.Trend.objects.order_by("-time")[11 - i].light)
            noise.append(models.Trend.objects.order_by("-time")[11 - i].noise)
            gas.append(models.Trend.objects.order_by("-time")[11 - i].gas)
            air.append(models.Trend.objects.order_by("-time")[11 - i].air)

    data = {
        'time': time,
        'temperature': temperature,
        'humidity': humidity,
        'light': light,
        'noise': noise,
        'gas': gas,
        'air': air
    }
    status = 1
    result = "获取历史数据错误!"
    return HttpResponse(
        json.dumps({
            "status": status,
            "result": result,
            "data": data
        }))


# 读写通风装置操作方式
def skylight_position_manual(request):
    if request.method == "GET":
        position = request.GET.get('position')
        Apps = models.Apps.objects.get(pk=1)
        Apps.skylight_position_manual = 1 - Apps.skylight_position_manual
        Apps.save()
        data = {"skylight_position_manual": Apps.skylight_position_manual}
        status = 1
        result = "通风装置操作方式数据交互故障!"
        return HttpResponse(
            json.dumps({
                "status": status,
                "result": result,
                "data": data
            }))

# 读写遮阳装置操作方式
def sunshade_position_manual(request):
    if request.method == "GET":
        position = request.GET.get('position')
        Apps = models.Apps.objects.get(pk=1)
        Apps.sunshade_position_manual = 1 - Apps.sunshade_position_manual
        Apps.save()
        data = {"sunshade_position_manual": Apps.sunshade_position_manual}
        status = 1
        result = "通风装置操作方式数据交互故障!"
        return HttpResponse(
            json.dumps({
                "status": status,
                "result": result,
                "data": data
            }))


# 改变天窗开度
def skylight_manual_control(request):
    skylight_manual_control = request.GET.get('skylight_manual_control')
    # 执行程序
    result = "OK!"
    return HttpResponse(result)

# 改变遮阳开度
def sunshade_manual_control(request):
    sunshade_manual_control = request.GET.get('sunshade_manual_control')
    # 执行程序
    result = "OK!"
    return HttpResponse(result)


# 制定天窗计划
def skylight_plan_control(request):
    if request.method == "GET":
        position = request.GET.get(u'position')
        data = [{
            'check': False,
            'time': '00:00',
            'position': 0
        }, {
            'check': False,
            'time': '00:00',
            'position': 0
        }, {
            'check': False,
            'time': '00:00',
            'position': 0
        }, {
            'check': False,
            'time': '00:00',
            'position': 0
        }, {
            'check': False,
            'time': '00:00',
            'position': 0
        }]
        # check_s = 'node[%s][check]' % str(0)  #'node[' + str(c) + '][check]'
        # time_s = 'node[%s][time]' % str(0)  #'node[' + str(c) + '][time]'
        # position_s = 'node[%s][position]' % str(
        #     0)  #'node[' + str(c) + '][position]'
        # a = request.GET.get(u'node[0][check]')
        # b = request.GET.get(time_s)
        # c = request.GET.get(position_s)
        for c in range(5):
            check_s = 'node[%s][check]' % str(
                c)  #'node[' + str(c) + '][check]'
            time_s = 'node[%s][time]' % str(c)  #'node[' + str(c) + '][time]'
            position_s = 'node[%s][position]' % str(
                c)  #'node[' + str(c) + '][position]'
            data[c]['check'] = bool(request.GET.get(check_s) == 'true')
            data[c]['time'] = str(request.GET.get(time_s))
            data[c]['position'] = int(request.GET.get(position_s))
        print data
        for i in range(5):
            node = models.Skylight.objects.get(pk=i + 1)
            node.check = data[i]['check']
            node.time = data[i]['time']
            node.position = data[i]['position']
            node.save()
        result = "设置成功!"
        return HttpResponse(result)

# 制定遮阳计划
def sunshade_plan_control(request):
    if request.method == "GET":
        position = request.GET.get(u'position')
        data = [{
            'check': False,
            'time': '00:00',
            'position': 0
        }, {
            'check': False,
            'time': '00:00',
            'position': 0
        }, {
            'check': False,
            'time': '00:00',
            'position': 0
        }, {
            'check': False,
            'time': '00:00',
            'position': 0
        }, {
            'check': False,
            'time': '00:00',
            'position': 0
        }]
        # check_s = 'node[%s][check]' % str(0)  #'node[' + str(c) + '][check]'
        # time_s = 'node[%s][time]' % str(0)  #'node[' + str(c) + '][time]'
        # position_s = 'node[%s][position]' % str(
        #     0)  #'node[' + str(c) + '][position]'
        # a = request.GET.get(u'node[0][check]')
        # b = request.GET.get(time_s)
        # c = request.GET.get(position_s)
        for c in range(5):
            check_s = 'node[%s][check]' % str(
                c)  #'node[' + str(c) + '][check]'
            time_s = 'node[%s][time]' % str(c)  #'node[' + str(c) + '][time]'
            position_s = 'node[%s][position]' % str(
                c)  #'node[' + str(c) + '][position]'
            data[c]['check'] = bool(request.GET.get(check_s) == 'true')
            data[c]['time'] = str(request.GET.get(time_s))
            data[c]['position'] = int(request.GET.get(position_s))
        print data
        for i in range(5):
            node = models.Sunshade.objects.get(pk=i + 1)
            node.check = data[i]['check']
            node.time = data[i]['time']
            node.position = data[i]['position']
            node.save()
        result = "设置成功!"
        return HttpResponse(result)
