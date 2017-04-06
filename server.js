const express = require('express');
const data = require('./data');
const bodyParser =  require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/api/profile', data.getProfile);
app.post('/api/addprofile', data.addProfile);
app.delete('api/deletelastprofile', data.deleteLast)

app.listen(3024, function () {
    console.log('listening on port 3024');
})
