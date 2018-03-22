# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class CourseManager(models.Manager):
    def basic_validator(self, postData):
        erros = {}
        if len(postData['name']) < 5:
            erros['name'] = "Course name should be more than 5 characters"
        if len(postData['Description']) < 15:
            erros['Description'] = "Course description should be more than 15 characters"
        return erros
class Course(models.Model):
    name = models.CharField(max_length=255)
    Description = models.TextField()
    created_at = models.DateTimeField(auto_now_add = True)
    objects = CourseManager()
