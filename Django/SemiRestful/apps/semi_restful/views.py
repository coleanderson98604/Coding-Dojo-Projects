# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect
from .models import *

# Create your views here.
def index(request):
    context = {
        "User": User.objects.all()
    }
    return render(request,'index.html',context)
def create(request):
    if request.method == 'POST':
        User.objects.create(
            first_name = request.POST['first_name'],
            last_name = request.POST['last_name'],
            Email = request.POST['email']
        )
        return redirect('/')
    return render(request,'create.html')
def edit(request,id):
    context = {
        'User': User.objects.get(id=id)
    }
    UserEdit = User.objects.get(id=id)
    if request.method == 'POST':
        UserEdit.first_name = request.POST['first_name']
        UserEdit.last_name = request.POST['last_name']
        UserEdit.Email = request.POST['email']
        UserEdit.save()
        return redirect('/')
    return render(request,'edit.html',context)
def show(request,id):
    UserEdit = User.objects.get(id=id)
    context = {
        'User': UserEdit
    }
    return render(request,'show.html',context)
def delete(request,id):
    UserEdit= User.objects.get(id=id)
    UserEdit.delete()
    return redirect('/')
