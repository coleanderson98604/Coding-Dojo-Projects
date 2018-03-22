# -*- coding: utf-8 -*-
# Generated by Django 1.11.11 on 2018-03-22 18:01
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('LogReg', '0001_initial'),
        ('CourseFrame', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='joined',
            field=models.ManyToManyField(related_name='joined_courses', to='LogReg.User'),
        ),
    ]
