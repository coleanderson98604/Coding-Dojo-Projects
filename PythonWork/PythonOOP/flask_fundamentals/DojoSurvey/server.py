from flask import Flask, render_template, request, redirect, session, flash
import re
app = Flask(__name__)
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app.secret_key = "SecretKey"
@app.route('/')
def index():
    return render_template('index.html')
@app.route('/result', methods = ['POST'])
def UserInfo():
    name = request.form['name']
    location = request.form['location']
    language = request.form['language']
    comment = request.form['comment']
    if len(name) < 1:
        flash('Name cannot be blank, please fill out')
    if len(comment) > 120:
        flash("Max comment length reached")
    else:
        flash('success')
    print request.form
    return redirect('/')
app.run(debug=True)