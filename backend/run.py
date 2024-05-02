# from flask import Flask, jsonify, request
# from flask_cors import CORS
# import subprocess

# app = Flask(__name__)
# CORS(app)

# @app.route('/members')
# def members():
#     print("Request received for /members")
#     members_list = ["Member1", "Member2", "Member3"]
#     return jsonify({"members" : members_list })    

# @app.route('/forensics', methods = ['POST', 'GET'])
# def forensics():
#     inputFile = request.form.get('inputFile')
#     filterExpressions = request.form.get('filterExpressions')
#     outputFile = request.form.get('outputFile')
#     inputCommand = request.form.get('inputCommand')

#     commands = ['tshark', '-r', inputFile, '-Y', filterExpressions]
#     flags = list(inputCommand.split(' '))
    
#     commands.extend(flags)
#     print(commands)
    
#     with open(outputFile, 'w') as f:
#         subprocess.run(commands, stdout=f)

#     members_list = ["Member1", "Member2", "Member3"]
#     return jsonify({"members" : members_list })    

# if __name__ == '__main__':
#     app.run(debug = True)

from flask import Flask, jsonify, request
from flask_cors import CORS
import subprocess

app = Flask(__name__)
CORS(app)

@app.route('/forensics', methods=['POST', 'GET'])
def forensics():
    inputFile = request.form['inputFile']
    filterExpressions = request.form['filterExpressions']
    outputFile = request.form['outputFile']
    inputCommand = request.form['inputCommand']

    commands = ['tshark', '-r', inputFile, '-Y', filterExpressions]
    flags = inputCommand.split(' ')
    commands.extend(flags)
    print(commands)
    
    with open(outputFile, 'w') as f:
        subprocess.run(commands, stdout=f)

    return jsonify({"message": "Success"})

if __name__ == '__main__':
    app.run(debug=True)
