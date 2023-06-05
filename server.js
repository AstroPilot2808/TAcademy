const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

// Create an Express app
const app = express();

// Enable CORS
//This is required because Cross-Origin Resource Sharing must be manually configured for the Node server to allow cross-origin requests. 
//By default this is block in web browsers for security reasons. ihav
app.use(cors())

// Configure Express to parse JSON data
app.use(express.json());

// Create a MySQL connection
const connection = mysql.createConnection({
    host: 'sql9.freemysqlhosting.net',
    user: 'sql9623008',
    password: 'JWwMnv32Um',
    database: 'sql9623008',
});

// Connect to the MySQL database
connection.connect((error) => {
    if (error) {
        console.error('Error connecting to the database:', error);
    } else {
        console.log('Connected to the database');
    }
});

// Define a route for user registration

app.post('/register', (req, res) => {
    // Get the user data from the request body
    const { firstName, lastName, dateOfBirth, username, password } = req.body;

    // Construct the SQL query to insert the user data into the database
    const query = `INSERT INTO TAcademy_User_Info (first_name, last_name, date_of_birth, username, password) VALUES (?, ?, ?, ?, ?)`;

    // Execute the SQL query
    connection.query(query, [firstName, lastName, dateOfBirth, username, password], (error, result) => {
        if (error) {
            console.error('Error executing SQL query:', error);
            return res.status(500).json({ error: 'An error occurred while registering the user.' });
        }

        // User registration successful
        return res.status(200).json({ message: 'User registered successfully.' });
    });
});

// Start the server
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
