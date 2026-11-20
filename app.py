from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/sorry")
def apology():
    return render_template("apology.html")

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)