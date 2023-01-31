const express = require('express');
const port = 3000;
const cors = require('cors')
const route = require('./routes')
const path = require('path')
const db = require('./config/config')
const corsOptions = {
    origin: '*',
}
const app = express();


db.authenticate()
    .then(()=> console.log("Connect to db successfully"))

app.use(cors(corsOptions))
app.use(express.json());
app.use(express.static(path.join(__dirname, '../src')));
app.use(
    express.urlencoded({
        extended: true,
    })
);
route(app)
app.listen(port,() => {
       console.log( `App running on port: ${port}`)
     })