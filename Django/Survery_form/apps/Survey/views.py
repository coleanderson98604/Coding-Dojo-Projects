# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):
    if request.session['count'] is None:
        request.session['count'] = 0
    return render(request,'index.html')
def create(request):
    if request.method == "POST":
        context = {
            'name': request.POST['name'],
            'Dojo': request.POST['Dojo'],
            'Language': request.POST['Language'],
            'comment': request.POST['comment']
        }
        request.session['Survey'] = context
        print request.session['Survey']
        request.session['count'] += 1
        if len(request.POST['name']) == 0:
            return redirect('/') 
        return redirect('/results')
    else:
        return redirect('/')
def show(request):
    context = request.session['Survey']
    return render(request,'result.html',context)
