//const { connect, connection } = require('mongoose');
const mongoose = require('mongoose');

//const connectionString = 'mongodb://127.0.0.1:27017/socialDB';
mongoose.connect('mongodb://127.0.0.1:27017/socialDB');

//connect(connectionString);

//module.exports = connection;
module.exports = mongoose.connection;
