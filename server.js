var HTTP_PORT = process.env.PORT || 3000;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    res.send("Jason Kvitaishvili ");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);
