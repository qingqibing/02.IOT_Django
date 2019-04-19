# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import xlrd
import libry
import xlwt
import os


# python通过xlrd读写excel
# 六沟可研专用

def rexcel(self):
    # 实例化数据表
    readbook = xlrd.open_workbook(self)
    sheets = readbook.sheet_names()

    # 公共变量
    projectodr = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"]
    systemodr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17",
                 "18", "19", "20"]
    objectodr = [".1", ".2", ".3"]
    listodr = []
    objectodrtemp = ''
    print sheets
    table = []
    print (len(sheets))
    for sheetsls in range(len(sheets)):
        print sheetsls
        table.append(readbook.sheet_by_index(sheetsls))

    # 获取总表信息
    result = {
        "name": table[0].cell(1, 2).value.encode('utf-8'),
        "value": float(table[0].cell(1, 10).value),
        "itemStyle": {
            "color": libry.random_color()
        },
        "children": []
    }
    print result

    # 获取分表合计信息
    for tablels in range(len(table)):
        result2 = {
            "name": table[tablels].name,
            "value": float(table[tablels].cell(1, 7).value),
            "itemStyle": {
                "color": libry.random_color()
            },
            "children": []
        }

        # 获取分表分项信息
        for nrows in range(table[tablels].nrows):
            if table[tablels].cell(nrows, 1).value.encode('utf-8') <> None:
                if not "." in table[tablels].cell(nrows, 1).value.encode('utf-8'):
                    for projectodrs in range(projectodr):
                        if table[tablels].cell(nrows, 1).value.encode('utf-8') == projectodrs:
                            result3 = {
                                "name": table[tablels].cell(nrows, 2).value.encode('utf-8'),
                                "value": float(table[tablels].cell(nrows, 7).value),
                                "itemStyle": {
                                    "color": libry.random_color()
                                },
                                "children": []
                            }
                if not "." in table[tablels].cell(nrows, 1).value.encode('utf-8') and not table[tablels].cell(nrows,
                                                                                                              1).value.encode(
                    'utf-8') in projectodr:
                    for systemodrs in range(systemodr):
                        if table[tablels].cell(nrows, 1).value.encode('utf-8') == systemodrs:
                            result4 = {
                                "name": table[tablels].cell(nrows, 2).value.encode('utf-8'),
                                "value": float(table[tablels].cell(nrows, 7).value),
                                "itemStyle": {
                                    "color": libry.random_color()
                                },
                                "children": []
                            }
                if not "." in table[tablels].cell(nrows, 1).value.encode('utf-8'):
                    for objectodrs in range(objectodr):
                        if table[tablels].cell(nrows, 1).value.encode('utf-8') == (systemodrs + objectodrs):
                            result5 = {
                                "name": table[tablels].cell(nrows, 2).value.encode('utf-8'),
                                "value": float(table[tablels].cell(nrows, 7).value),
                                "itemStyle": {
                                    "color": libry.random_color()
                                },
                                "children": []
                            }
                            objectodrtemp = table[tablels].cell(nrows, 1).value.encode('utf-8') + "."
                if objectodrtemp in table[tablels].cell(nrows, 1).value.encode('utf-8'):
                    result6 = {
                        "name": table[tablels].cell(nrows, 2).value.encode('utf-8'),
                        "value": float(table[tablels].cell(nrows, 7).value),
                        "itemStyle": {
                            "color": libry.random_color()
                        }
                    }
                    result5['children'].append(result6)
                result4['children'].append(result5)
                result3['children'].append(result4)
                result2['children'].append(result3)
        result['children'].append(result2)
    return result
