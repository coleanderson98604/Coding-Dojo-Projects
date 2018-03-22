from django.conf.urls import url
from django.contrib import admin
from . import views

urlpatterns = [
    url(r'^$', views.index, name="my_index"),
    url(r'^create$',views.create, name="my_create"),
    url(r'^(?P<id>\w+)/edit', views.edit, name="my_edit"),
    url(r'^(?P<id>\w+)/show', views.show, name="my_show"),
    url(r'^(?P<id>\w+)/delete', views.delete, name="my_delete")
]