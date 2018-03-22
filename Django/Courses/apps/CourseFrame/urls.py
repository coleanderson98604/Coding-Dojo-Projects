from django.conf.urls import url
from django.contrib import admin
from . import views

urlpatterns = [
    url(r'^$', views.index, name = "my_index"),
    url(r'^create$', views.create, name = "my_create")
]
