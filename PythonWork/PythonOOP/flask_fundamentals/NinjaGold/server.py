from flask import Flask, render_template, request, redirect, session
import random
app = Flask(__name__)
app.secret_key = 'ThisIsSecret'
@app.route('/')
def index():
    if session.get('Total') is None:
        session['Total'] = 0
    if session.get('Log') is None:
        session['Log'] = ""
    Gold = session['Total']
    Message = session['Log']
    print Gold
    return render_template('index.html', Gold = Gold, Message = Message)
@app.route('/process_money', methods = ['POST'])
def moneymaker():
    print request.form['Building']
    if request.form['Building'] == 'farm':
        FarmGold = random.randint(10,21)
        session['Total'] += FarmGold
        session['Log'] = "you earned {} from the {}".format(FarmGold,'Farm')
    elif request.form['Building'] == 'cave':
        FarmGold = random.randint(5,10)
        session['Total'] += FarmGold
        session['Log'] = "you earned {} from the {}".format(FarmGold,'Cave')
    elif request.form['Building'] == 'house':
        FarmGold = random.randint(2,5)
        session['Total'] += FarmGold
        session['Log'] = "you earned {} from the {}".format(FarmGold,'House')
    elif request.form['Building'] == 'casino':
        Chance = random.randint(0,1)
        if Chance == 0:
            FarmGold = random.randint(0,50)
            session['Total'] += FarmGold
            session['Log'] = "you earned {} from the {}".format(FarmGold,'Casino')
        if Chance == 1:
            FarmGold = random.randint(0,50)
            session['Total'] -= FarmGold
            session['Log'] = "you lost {} from the {}".format(FarmGold,'Casino')
    elif request.form['Building'] == 'Restart':
        session.pop('Total')
        session.pop('Log')       
    return redirect('/')
app.run(debug=True)
