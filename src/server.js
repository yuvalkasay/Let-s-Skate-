console.log('server is loading...');
const port = 8080;
const express = require('express');
const app = express();
app.use(express.json());

const path = require('path');
const publicPath = path.join(__dirname,'..', "public");
app.use(express.static(publicPath));

const routeHelper = require("./data");



app.get("/data", (req, res) => {
    routeHelper.get_data(res);
});

app.post("/data", (req, res) => {
    routeHelper.create_data(req, res);
});

app.put("/data/:id", (req, res) => {
    routeHelper.update_data(req, res);
});

app.delete("/data/:id", (req, res) => {
    routeHelper.delete_data(req, res);
});



app.listen(port, () => {
    console.log(`listening on port ${port}`)
});