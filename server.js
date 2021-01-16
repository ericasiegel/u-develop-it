
const express = require('express');
const { get } = require('http');
const PORT = process.env.PORT || 3001;
const app = express();

const db = require('./db/database');


const inputCheck = require('./utils/inputCheck');

const apiRoutes = require('./routes/apiRoutes');


// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', apiRoutes);

// default response for any other request(Not Found) Catch all
app.use((req, res) => {
    res.status(404).end();
});


//start server after DB connection
db.on('open', () => {
    // start the express server on PORT 3001
    app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
})
