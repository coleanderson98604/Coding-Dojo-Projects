# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from django.contrib import messages
from .models import *
import bcrypt
def index(request):
    if request.session.get('id') is None:
        request.session['id'] = 0
    return render(request,'LogReg/index.html')
def register(request):
    errors = User.objects.base_validator(request.POST)
    if len(errors):
        for tag, error in errors.iteritems():
            messages.error(request, error, extra_tags=tag)
        return redirect('/')
    else:
        hash1 = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt())
        new_user = User.objects.create(
        first_name = request.POST['first_name'],
        last_name = request.POST['last_name'],
        password = hash1,
        email = request.POST['email']
        )
        context = {
            'User': User.objects.last()
        }
        request.session['id'] = new_user.id
        print request.session['id']
        return redirect("/user")
def show(request):
    errors = User.objects.login_validator(request.POST)
    login = request.POST['Email']
    password = request.POST['Password']
    user = User.objects.filter(email=login)
    request.session['id'] = user[0]. id
    if len(login) < 1 or len(password) < 1:
        messages.error(request,"Fields cannot be empty")
        return redirect('/')
    if len(user) < 1:
        messages.error(request,"Email or password is incorrect")
        return redirect('/')
    else:
        if len(errors):
            for tag, error in errors.iteritems():
                messages.error(request,error, extra_tags=tag)
            return redirect('/')
        else:
            return redirect("/user")

            