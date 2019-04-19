from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^theme/$', views.colors, name='theme'),
    url(r'^environment/$', views.environment, name='environment'),
    url(r'^trend/$', views.trend, name='trend'),
    url(r'^skylight_position_manual/$',
        views.skylight_position_manual,
        name='skylight_position_manual'),
    url(r'^skylight_manual_control/$',
        views.skylight_manual_control,
        name='skylight_manual_control'),
    url(r'^skylight_plan_control/$',
        views.skylight_plan_control,
        name='skylight_plan_control'),
    url(r'^skylight_plan/$', views.skylight_plan, name='skylight_plan'),
    url(r'^sunshade_position_manual/$',
        views.sunshade_position_manual,
        name='sunshade_position_manual'),
    url(r'^sunshade_manual_control/$',
        views.sunshade_manual_control,
        name='sunshade_manual_control'),
    url(r'^sunshade_plan_control/$',
        views.sunshade_plan_control,
        name='sunshade_plan_control'),
    url(r'^sunshade_plan/$', views.sunshade_plan, name='sunshade_plan'),
]
