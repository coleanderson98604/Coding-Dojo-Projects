from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
import re, md5, os, binascii
app = Flask(__name__)
mysql = MySQLConnector(app,'LoginAndRegdb')
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app.secret_key = "ThisIsSecret!"
@app.route('/')
def index():  
    return render_template('index.html')
@app.route('/create', methods=['POST'])
def create():
    queryCheck = "SELECT email FROM Users"
    emails = mysql.query_db(queryCheck)
    print emails
    for i in emails:
        if request.form['email'] == i.get('email'):
            flash('Email exists')
            return redirect('/')
    salt = binascii.b2a_hex(os.urandom(15))
    hashed_password = md5.new(request.form['password']+salt).hexdigest()
    query = "INSERT INTO Users (first_name,last_name,email,password,salt) VALUES (:first_name,:last_name,:email,:password,:salt)"
    data = {
             'first_name': request.form['First_Name'],
             'last_name':  request.form['Last_Name'],
             'email': request.form['email'],
             'password': hashed_password,
             'salt': salt
           }
    mysql.query_db(query, data)
    query1 = "SELECT id FROM Users ORDER BY id desc limit 1"
    session['Identifier'] = mysql.query_db(query1)
    print session['Identifier']
    return redirect('/success')
@app.route('/success')
def show():
    return render_template('success.html')
@app.route('/validate', methods=['POST'])
def LoginValidate():
    data = {
        'email': request.form['emailLogin']
    }
    queryCheck = "SELECT id FROM Users WHERE Users.email = :email LIMIT 1"
    UserID = mysql.query_db(queryCheck,data)
    session['id'] = UserID[0].get('id')
    dataHash = {
        'id': session['id']
    }
    querySalt = "SELECT email,password, salt FROM Users WHERE :id = Users.id LIMIT 1"
    PandS = mysql.query_db(querySalt,dataHash)
    HashedP = PandS[0].get('password')
    SaltP = PandS[0].get('salt')
    EmailLog = PandS[0].get('email')
    hashed_password = md5.new(request.form['PasswordLogin']+SaltP).hexdigest()
    if request.form['emailLogin'] == EmailLog and hashed_password == HashedP:
        return redirect('/success')
    else:
        flash('Invalid credentials')
        return redirect()
app.run(debug=True)