# -*- coding: utf-8 -*-
# Generated by Django 1.11.15 on 2018-12-06 06:27
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('interaction', '0003_auto_20181205_1055'),
    ]

    operations = [
        migrations.AddField(
            model_name='themes',
            name='position',
            field=models.CharField(default='local', max_length=32),
        ),
    ]
