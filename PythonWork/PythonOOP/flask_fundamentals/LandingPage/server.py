from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route('/')
def Greeting():
    return render_template('index.html')
@app.route('/ninjas')
def Ninja():
    return render_template('ninjas.html')
@app.route('/dojos/new', methods=['POST'])
def NinjaPreference():
    name = request.form['name']
    color = request.form['color']
    print request.form
    return render_template('dojos.html')
app.run(debug=True)