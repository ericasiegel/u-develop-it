const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



// test route
app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

// default response for any other request(Not Found) Catch all
app.use((req, res) => {
    res.status(404).end();
});

// start the express server on PORT 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});