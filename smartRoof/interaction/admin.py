# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from models import Themes
from models import Project
from models import Trend
from models import Apps
from models import Skylight
from models import Sunshade

# Register your models here.

admin.site.register(Themes)
admin.site.register(Project)
admin.site.register(Trend)
admin.site.register(Apps)
admin.site.register(Skylight)
admin.site.register(Sunshade)