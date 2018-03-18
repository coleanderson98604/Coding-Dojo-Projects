from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'ThisisSecret'
@app.before_first_request
def startup():
    session['count'] = -1
@app.route('/')
def index():
    session['count'] += 1
    return render_template("index.html", count = session['count'])
@app.route('/Alleyway')
def Alleyway():
    return render_template('Alleyway.html')
@app.route('/DeathPage')
def DeathPage():
    return render_template('DeathPage.html')
@app.route('/Bus')
def Bus():
    return render_template('Bus.html')
@app.route('/Shady')
def Shady():
    return render_template('Shady.html')
@app.route('/Logan')
def Logan():
    return render_template('Logan.html')
@app.route('/Success')
def Success():
    session['count'] = -1
    return render_template('Success.html')
app.run(debug=True)
