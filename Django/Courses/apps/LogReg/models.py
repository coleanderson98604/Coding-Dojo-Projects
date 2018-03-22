# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
import re
import bcrypt
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
# Create your views here.

class LoginManager(models.Manager):
    def base_validator(self,postData):
        errors = {}
        if len(postData['first_name']) < 3:
            errors["first_name"] = "First name should be atleast 2 characters"
        if len(postData['last_name']) < 3:
            errors["last_name"] = "Last name should be atleast 2 characters"
        if not re.match('^[a-z]*$',postData['first_name']):
            errors["characters"] = "Must contain only letters"
        if not re.match('^[a-z]*$',postData['last_name']):
            errors["characters"] = "Must contain only letters"
        if not EMAIL_REGEX.match(postData['email']):
            errors["email"] = "Must be a valid email"
        if postData['password'] < 8:
            errors["PasswordLength"] = "Must be longer than 8 characters"
        if postData['password'] != postData['Cpassword']:
            errors["PasswordMatch"] = "Passwords don't match"
        return errors
    def login_validator(self,postData):
        errors = {}
        emails = postData['Email']
        passwords = postData['Password']
        user = User.objects.filter(email = emails)
        cpasword = bcrypt.checkpw(passwords.encode(),user[0].password.encode())
        if cpasword:
            return errors
        else:
            errors['login'] = "Email or password is incorrect"
            return errors

class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    objects = LoginManager()







    