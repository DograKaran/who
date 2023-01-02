const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send(
        "<h1>Croma</h1>"
        + "<hr/>"
        + "<h3>Smart Devices for sale</h3>"
        + "<br/>"
        + "<ol>"
        + "<l1>Laptops</l1>"
        + "<l1>Mobiles</l1>"

    );
});

app.get('/about', (req, res) => {
    res.send(
        "<h1>Varios products</h1>"
        + "<hr/>"
        + "<h3>Smart Devices for sale</h3>"
        + "<br/>"
        + "<ol>"
        + "<l1>Laptops</l1>"
        + "<l1>Mobiles</l1>"

    );
});


var server = app.listen(9000);
console.log("Server is running at port no:9000");