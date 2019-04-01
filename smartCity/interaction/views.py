# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse
from . import models


# Create your views here.


# 主页
def index(request):
    data = models.Themes.objects.get(pk=1)
    return render(request, 'index.html', {'self': data})


# 改变主题
def colors(request):
    color = request.GET.get('color')
    themes = models.Themes.objects.get(pk=1)
    themes.color = color
    themes.save()
    result = "OK!"
    return HttpResponse(result)
