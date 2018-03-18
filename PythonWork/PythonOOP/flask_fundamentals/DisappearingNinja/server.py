from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')
@app.route('/ninja')
def Ninjas1():
    color = "tmnt.png"
    return render_template('ninja.html', color = color)
@app.route('/ninja/<color>')
def Ninjas(color):
    if color == 'blue':
        color = 'leonardo.jpg'
    elif color == 'red':
        color = 'raphael.jpg'
    elif color == 'purple':
        color = 'donatello.jpg'
    elif color == 'orange':
        color = 'michelangelo.jpg'
    else:
        color = 'notapril.jpg'
    return render_template('ninja.html', color = color)
app.run(debug=True)