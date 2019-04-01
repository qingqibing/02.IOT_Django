# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.test import TestCase

# Create your tests here.
import sys
# sys.path.append('''/media/dongliang/dongliang'data/MyProgram/IOT/IOT_Django/smartCity/interaction/libry''')
import xlrd
import rwexcel



data = '''/media/dongliang/dongliang'data/MyProject/8.智慧园区/2018-承德-六沟园区/河北承德县高新技术产业开发区-智慧园区可行性研究报告-2018.12.27.xlsx'''
rwexcel.rexcel('''/media/dongliang/dongliang'data/MyProject/8.智慧园区/2018-承德-六沟园区/河北承德县高新技术产业开发区-智慧园区可行性研究报告-2018.12.27.xlsx''')