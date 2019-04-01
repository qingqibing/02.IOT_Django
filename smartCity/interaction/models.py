# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.


class Themes(models.Model):
    # 应用标题
    title = models.CharField(max_length=32, default='smartCity')
    # 应用位置
    position = models.CharField(max_length=32, default='local')
    # 主题颜色
    color = models.CharField(max_length=32, default='pink')

    # 在管理界面数据管理显示关键字
    def __unicode__(self):
        return self.title