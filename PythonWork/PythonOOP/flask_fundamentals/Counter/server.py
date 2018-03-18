from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'ThisIsSecret'
@app.before_first_request
def startup():
    session['counter'] = -1
@app.route('/')
def index():
  session['counter'] += 1 
  return render_template("index.html")
@app.route('/increment', methods=['POST'])
def plusTwo():
    session['counter'] += 1
    return redirect('/')
@app.route('/reset', methods=['POST'])
def Reset():
    session['counter'] = -1
    return redirect('/')
app.run(debug=True)