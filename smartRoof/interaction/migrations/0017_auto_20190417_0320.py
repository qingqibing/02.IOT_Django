# -*- coding: utf-8 -*-
# Generated by Django 1.11.15 on 2019-04-17 03:20
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('interaction', '0016_auto_20190417_0318'),
    ]

    operations = [
        migrations.AlterField(
            model_name='apps',
            name='skylight_position_manual',
            field=models.BooleanField(default=0, help_text='\u901a\u98ce\u8bbe\u5907\u624b\u52a8switch', verbose_name='Skylight manual control'),
        ),
    ]