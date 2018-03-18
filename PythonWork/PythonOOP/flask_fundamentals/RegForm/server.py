from flask import Flask, render_template, redirect, request, session, flash
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app = Flask(__name__)
app.secret_key = 'ThisIsSecret!'
@app.route('/')
def index():
    return render_template("index.html")
@app.route('/verify', methods=['POST'])
def check():
    Email = request.form['email']
    FirstName = request.form['FName']
    LastName = request.form['LName']
    Password = request.form['PW']
    ConfirmPassword = request.form['PWC']
    Typecheck = True
    print Email, FirstName, LastName, Password, ConfirmPassword
    if not EMAIL_REGEX.match(Email):
        flash('Invalid Email Address','EmailError')
    if len(FirstName) < 1 or len(LastName) < 1:
        flash('First or Last name field must be filled','LengthError')
    if not (re.match('^[a-z]*$',FirstName) and re.match('^[a-z]*$',LastName)):
        flash('Must contain only letters','TypeError')
        Typecheck = False
    if len(Password) < 8 or len(ConfirmPassword) <8:
        flash('Password must be longer than 8 Characters','LengthError')
        if Password != ConfirmPassword:
            flash('Passwords do not match','CheckError')
    elif Typecheck == True:
        flash('Success!','Success')
    return redirect('/')
app.run(debug=True)
