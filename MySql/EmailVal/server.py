from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
import re
app = Flask(__name__)
mysql = MySQLConnector(app,'emaildb')
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app.secret_key = "ThisIsSecret!"
@app.route('/')
def index():
    return render_template('index.html')
@app.route('/emails',methods=['POST'])
def create():
    query = "SELECT email FROM emails"
    email = mysql.query_db(query)
    if len(request.form['email']) < 1:
        flash('Email cannot be blank!')
    if not EMAIL_REGEX.match(request.form['email']):
        flash('Email is not valid')
        return redirect('/')
    for Exisiting in email:
        if Exisiting['email'] == request.form['email']:
            flash('Email already exists')
            return redirect('/')
    query = "INSERT INTO emails (email,created_at) VALUES (:email,NOW())"
    data = {
        'email' : request.form['email']
        }
    mysql.query_db(query, data)
    return redirect('/success')
@app.route('/success',methods=['GET','POST'])
def show():
    if request.method == 'POST':
        flash("You've deleted an email")
        query = "DELETE FROM emails ORDER by id desc limit 1"
        mysql.query_db(query)
        return redirect('/success')
    else:
        flash('The email addressed you enter is a VALID email')
        query = "SELECT * FROM emails"
        email = mysql.query_db(query)
        return render_template('success.html',all_email = email)
app.run(debug=True)

    
