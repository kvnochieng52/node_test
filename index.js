const express = require('express');

//used to setup configurations
const app = express();


app.get('/', (req, res) => {
    res.send({ hi: 'there' });
})


const PORT = process.env.PORT || 5000;


app.listen(PORT)



