# Social-Web
Social Web 2017 - Tic Tac Toe game with Facebook integration

Prior requirements:

1. Install node.js and MongoDB

2. Create (empty) database folder:
mkdir ticatactoedb

3. Install correct versions of node.js packages and link them. Commands to be executed:

npm install mongodb@1.2.4 -g

npm install express@3.0.4 -g

npm install cookie@0.0.5 -g

npm install socket.io@0.9.13 -g


npm link mongodb@1.2.4

npm link express@3.0.4

npm link cookie@0.0.5

npm link socket.io@0.9.13

Run the game:

1. Run mongoDB (Windows example):

cd '.\Program Files\MongoDB\Server\3.4\bin\'

./mongod.exe --dbpath C:/tictactoedb

2. Run the node.js application:

cd '.\Social-Web\tic-tac-toe-master-FINAL\tic-tac-toe-master\'

node app.js
