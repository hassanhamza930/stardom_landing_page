# this is simple flask api to deploy to python anywhere to send emails to my email for showing user interest.

from flask import Flask,jsonify,request
from random import randint
app = Flask(__name__)



@app.route("/")
def main():
    data=request.args.get("email")
    data2=request.args.get("phone")
    print("email is "+str(data))
    print("phone is "+str(data2))

    with open("contacts.txt",'a') as file:
        file.write("phone is"+str(data2))
        file.close()


    return "done"



if __name__ == '__main__':
    app.run(debug=True)