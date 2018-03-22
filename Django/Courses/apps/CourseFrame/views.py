# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
from .models import *
from ..LogReg.models import *

# Create your views here.
def index(request):
    users = User.objects.filter(id = request.session['id'])
    Courses = Course.objects.all()
    context = {
        'Courses': Courses,
        'User': users[0]
    }
    return render(request,'CourseFrame/index.html',context)
def create(request):
    print 'Hello'
    users = User.objects.filter(id = request.session['id'])
    Course.objects.create(
        name = request.POST['name'],
        Description = request.POST['Description'],
        user = users[0]
    )
    return redirect('/user')
def logout(request):
    request.session.flush()
    return redirect('/')
def remove(request,id):
    users = User.objects.filter(id = request.session['id'])
    courses = Course.objects.get(id=id)
    if users[0].id == courses.user.id:
        courses.delete()
        return redirect('/user')
    else:
        messages.error(request,"Can't delete a course you didn't make")
        return redirect('/user')
def show(request,id):
    courses = Course.objects.get(id = id)
    context = {
        "Course": courses
    }
    return render(request,'CourseFrame/show.html',context)
def courses_joined(request,id):
    users = User.objects.get(id = request.session['id'])
    courses = Course.objects.get(id=id)
    courses.joined.add(users)
    courses.save()
    return redirect('/user')
def remove_joined(request,id):
    users = User.objects.get(id = request.session['id'])
    courses = Course.objects.get(id=id)
    courses.joined.remove(users)
    courses.save()
    return redirect('/user')
    
