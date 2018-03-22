# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from django.contrib import messages
from .models import *

# Create your views here.
def index(request):
    artists = Artist.objects.all()
    context = {
        'artists': artists
    }
    return render(request, "index.html", context)

def show(request, id):
    artist_list = Artist.objects.filter(id=id)
    if len(artist_list) > 0:
        artist = artist_list[0]
        albums = artist.albums.all()
        print artist.albums.all()
        context = {
            'artist': artist,
            'albums': albums
        }
        return render(request, "show.html", context)
    else:
        messages.error(request, "No such artist!")
        return redirect("/artists")
    
def new(request):
    print "hello"
    return render(request, "new.html")

def create(request):
    errors = Artist.objects.validate(request.POST)
    if len(errors):
        for error in errors:
            messages.error(request, error)
        return redirect("/artists/new")
    else:
        Artist.objects.create(name=request.POST['name'])
        return redirect("/artists")

def edit(request, id):
    artist_list = Artist.objects.filter(id=id)
    if len(artist_list) > 0:
        artist = artist_list[0]
        context = {
            "artist": artist
        }
        return render(request, "edit.html", context)
    else:
        messages.error(request, "No such artist!")
        return redirect("/artists")

def update(request, id):
    artist_list = Artist.objects.filter(id=id)
    if len(artist_list) > 0:
        artist = artist_list[0]
        errors = Artist.objects.validate(request.POST)
        if len(errors) > 0:
            for error in errors:
                messages.error(request, error)
        else:
            artist.name = request.POST['name']
            artist.save()
        return redirect("/artists/{}".format(id))
    else:
        messages.error(request, "No such artist!")
        return redirect("/artists")

def delete(request, id):
    Artist.objects.filter(id=id).delete()
    return redirect("/artists")

def create_album(request, id):
    print "Posting to create album route."
    artist_list = Artist.objects.filter(id=id)
    if len(artist_list) > 0:
        artist = artist_list[0]
        errors = Album.objects.validate(request.POST)
        print errors
        if len(errors):
            for error in errors:
                messages.error(request, error)
        else:
            Album.objects.create(
                title = request.POST["title"],
                year = request.POST["year"],
                artist = artist
            )
        return redirect("/artists/{}".format(id))
    else:
        messages.error(request, "No such artist!")
        return redirect("/artists")    