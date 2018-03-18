# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect
from time import gmtime, strftime, localtime
# Create your views here.
def index(request):
  context = {
  "time": strftime("%a, %d %b %Y %H:%M:%S +0000", localtime())
  }
  return render(request,'index.html', context)
    