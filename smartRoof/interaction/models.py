# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.


class Themes(models.Model):
    # 主题颜色
    color = models.CharField(max_length=32, default='pink')

    # 在管理界面数据管理显示关键字
    def __unicode__(self):
        return self.color


class Project(models.Model):
    # 应用标题
    title = models.CharField(
        "Project's name", max_length=32, default='智慧城市', help_text='应用标题')

    # 应用名称
    name = models.CharField(
        "App's name", max_length=32, default='环境监控', help_text='应用名称')

    # 应用位置
    position = models.CharField(
        "App's position", max_length=32, default='阳光房', help_text='应用位置')

    # 数据刷新周期
    refresh = models.IntegerField("Data's refresh", help_text='数据刷新时间(ms)')

    # 在管理界面数据管理显示关键字
    def __unicode__(self):
        return self.title


# 历史数据
class Trend(models.Model):
    time = models.DateTimeField("Time", help_text='历史时间')
    temperature = models.FloatField("Temperature's trend", help_text='温度历史数据')
    humidity = models.FloatField("Humidity's trend", help_text='湿度历史数据')
    light = models.FloatField("Light's trend", help_text='光照历史数据')
    noise = models.FloatField("Noise's trend", help_text='噪声历史数据')
    gas = models.FloatField("Gas trend", help_text='有害气体历史数据')
    air = models.IntegerField("Air's trend", default=0, help_text='天窗开度历史数据')

    # 在管理界面数据管理显示关键字
    def __unicode__(self):
        return str(self.time)


# 应用数据
class Apps(models.Model):
    skylight_position_manual = models.BooleanField(
        "Skylight manual control", default=0, help_text='通风设备手动switch')
    sunshade_position_manual = models.BooleanField(
        "Sunshade manual control", default=0, help_text='遮阳设备手动switch')

    # 在管理界面数据管理显示关键字
    def __unicode__(self):
        return str(self.skylight_position_manual)


# 天窗计划数据
class Skylight(models.Model):
    check = models.BooleanField(
        "Skylight plan checkbox", default=0, help_text='计划启用选择')
    time = models.CharField(
        "Skylight time node", max_length=32, help_text='天窗动作时间')
    position = models.IntegerField(
        "Skylight position node", help_text='天窗动作位置')

    # 在管理界面数据管理显示关键字
    def __unicode__(self):
        return str(self.time)


# 遮阳计划数据
class Sunshade(models.Model):
    check = models.BooleanField(
        "sunshade plan checkbox", default=0, help_text='计划启用选择')
    time = models.CharField(
        "sunshade time node", max_length=32, help_text='遮阳动作时间')
    position = models.IntegerField(
        "sunshade position node", help_text='遮阳动作位置')

    # 在管理界面数据管理显示关键字
    def __unicode__(self):
        return str(self.time)