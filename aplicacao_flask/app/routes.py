from app import app

@app.route("/")
def home():
    return "Página Inicial"

@app.route("/sobre")
def sobre():
    return "Página Sobre"