from django.conf.urls import url
from django.contrib import admin
from . import views

urlpatterns = [
    url(r'^$', views.index, name = "my_index"),
    url(r'^/create$', views.create, name = "my_create"),
    url(r'^/logout', views.logout),
    url(r'^/(?P<id>\d+)/show', views.show),
    url(r'^/(?P<id>\d+)/remove$', views.remove),
    url(r'^/(?P<id>\d+)/join', views.courses_joined),
    url(r'^/(?P<id>\d+)/leave', views.remove_joined)
]
