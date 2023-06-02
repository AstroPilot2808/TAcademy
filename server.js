const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());

// Create a MySQL connection
const connection = mysql.createConnection({
    host: 'sql9.freemysqlhosting.net',
    user: 'sql9623008',
    password: 'JWwMnv32Um',
    database: 'sql9623008',
});

// Connect to MySQL
connection.connect((error) => {
    if (error) {
        console.error('Error connecting to MySQL:', error);
    } else {
        console.log('Connected to MySQL database');
    }
});

// Configure CORS options
const corsOptions = {
    origin: 'http://localhost:3000', // Allow requests from this origin
};

// Enable CORS for all routes using the configured options
app.use(cors(corsOptions));

// Define the registration endpoint
app.post('/register', (req, res) => {
    const { firstName, lastName, dateOfBirth, username, password } = req.body;

    // Perform any necessary validation on the server-side
    // ...

    // Insert the user data into the MySQL table
    const query = 'INSERT INTO TAcademy_User_Info (first_name, last_name, date_of_birth, username, password) VALUES (?, ?, ?, ?, ?)';
    const values = [firstName, lastName, dateOfBirth, username, password];

    connection.query(query, values, (error, results) => {
        if (error) {
            console.error('Error inserting user into MySQL:', error);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            console.log('User inserted into MySQL:', results);

            // Return a success response to the client
            res.status(200).json({ success: true });
        }
    });
});

// Start the server
app.listen(8000, () => {
    console.log('Server is running on port 8000');
});
