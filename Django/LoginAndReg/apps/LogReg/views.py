# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from django.contrib import messages
from .models import *
import bcrypt
def index(request):
    return render(request,'index.html')
def register(request):
    errors = User.objects.base_validator(request.POST)
    if len(errors):
        for tag, error in errors.iteritems():
            messages.error(request, error, extra_tags=tag)
        return redirect('/')
    else:
        hash1 = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt())
        User.objects.create(
        first_name = request.POST['first_name'],
        last_name = request.POST['last_name'],
        password = hash1,
        email = request.POST['email']
        )
        context = {
            'User': User.objects.last()
        }
        return render(request,'success.html',context)
def show(request):
    login = request.POST['Email']
    password = request.POST['Password']
    user = User.objects.filter(email=login)
    if len(login) < 1 or len(password) < 1:
        messages.error(request,"Fields cannot be empty")
        return redirect('/')
    if len(user) < 1:
        messages.error(request,"Email or password is incorrect")
        return redirect('/')
    else:
        cpassword = bcrypt.checkpw(password.encode(), user[0].password.encode())
        if cpassword:
            context = {
                "User": user[0]
            }
            return render(request,'success.html',context)
        else:
            messages.error(request,"Email or password is incorrect")
            return redirect('/')

            