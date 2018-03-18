# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, HttpResponse, redirect
import random

# Create your views here.
def index(request):
    if request.session.get('Gold') is None:
        request.session['Gold'] = 0
    if request.session.get('Log') is None:
        request.session['Log'] = 0
    context = {
        'gold': request.session['Gold'],
        'log': request.session['Log']
    }
    return render(request,'index.html',context)
def generate(request,building):
    if building == 'Farm':
        farmGold = random.randint(10,21)
        request.session['Gold'] += farmGold
        request.session['Log'] = "You've earned {} gold".format(farmGold)
    elif building == 'Cave':
        caveGold = random.randint(5,11)
        request.session['Gold'] += caveGold
        request.session['Log'] = "You've earned {} gold".format(caveGold)
    elif building == 'House':
        houseGold = random.randint(2,6)
        request.session['Gold'] += houseGold
        request.session['Log'] = "You've earned {} gold".format(houseGold)
    elif building == 'Casino':
        Gamble = random.randint(0,1)
        GambleGold = random.randint(0,51)
        if Gamble == 0:
            request.session['Gold'] -= GambleGold
            request.session['Log'] = "You've lost {} gold".format(GambleGold)
        else:
            request.session['Gold'] += GambleGold
            request.session['Log'] = "You've earned {} gold".format(GambleGold)
    elif building == 'Restart':
        request.session['Gold'] = 0
        request.session['Log'] = "Starting off fresh!"
    else:
        return redirect('/')
    return redirect('/')
    