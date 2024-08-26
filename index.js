const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const cwd = process.cwd();

const PORT = process.env.PORT || 3001;
const app = express();

// middleware config
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// redirecting our routes
app.use(routes);

// Starting/Connecting to our DB --> Start our Server Listeneing
db.once('open', () => {
    console.log("DB connected...");
    app.listen(PORT, () => {
        console.log("Server listening");
    });
});