# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect
from django.utils.crypto import get_random_string

# Create your views here.
def index(request):
    if request.session.get('count') is None:
        request.session['count'] = 0
    GeneratedWord = get_random_string(length=14)
    context = {
        'RandomW': GeneratedWord
    }
    request.session['count'] += 1
    return render(request,'index.html', context)
def reset(request):
    request.session['count'] = -1
    return redirect('/')
