from flask import Flask, render_template, request, redirect, session, Markup
import random
app = Flask(__name__)
app.secret_key = 'ThisIsSecret'
@app.route('/', methods=['GET','POST'])
def index():
    if session.get('random') is None:
        session['random'] = random.randrange(1,101)
    message = ''
    color = ''
    button = ''

    if request.method == 'POST':
        display = ''
        guess = request.form['Guess']
        if int(guess) > session['random']:
            message = "Too high"
            color = 'red'
        elif int(guess) < session['random']:
            message = "Too Low"
            color = 'red'
        elif int(guess) == session['random']:
            message = str(session['random']) + "was the number!"
            color = 'green'
            button = Markup("<a href='/check' class='button'>Restart!</a>")
    else:
        display = "hidden"
    return render_template("index.html",color = color, message = message, button = button)
@app.route('/check')
def Compare():
    session.pop('random')
    return redirect('/')

app.run(debug=True)