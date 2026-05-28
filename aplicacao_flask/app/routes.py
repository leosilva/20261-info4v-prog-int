from app import app
from flask import render_template

@app.route("/")
def home():
    usuario = {
        "nome": "Leo",
        "produtos": ["Banana", "Abacaxi", "Melancia"]
    }
    esta_logado = True
    return render_template("index.html", 
                           pessoa = usuario, 
                           usuario_logado = esta_logado)

@app.route("/sobre")
def sobre():
    return "Página Sobre"

@app.route("/index2")
def index2():
    return render_template('index2.html')