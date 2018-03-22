# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect
from .models import *

# Create your views here.
def index(request):
    Courses = Course.objects.all()
    context = {
        'Courses': Courses
    }
    return render(request,'index.html',context)
def create(request):
    print 'Hello'
    Course.objects.create(
        name = request.POST['name'],
        Description = request.POST['Description']
    )
    print "hi"
    return redirect('/')