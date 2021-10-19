const express = require('express');
const path = require('path');
const PORT = process.env.PORT;
const app = express();
const api = require('./routes/index.js');


//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
app.use(express.static('public'));

//GET route for homepage
app.get('/', (req, res)=>
res.sendFile(path.join(__dirname, '/public/index.html'))
);

//GET route for notes page
app.get('/notes', (req,res)=>
res.sendFile(path.join(__dirname, '/public/notes.html'))
);


app.listen(PORT, ()=>
console.log(`App listening at http://localhost:${PORT} 🚀`)
);


