// import the required dependencies
const mysql = require('mysql');

// create a MySQL connection pool
const pool = mysql.createPool({
    host: 'sql9.freemysqlhosting.net',
    user: 'sql9623008',
    password: 'JWwMnv32Um',
    database: 'sql9623008',
});

exports.handler = async (event) => {
    // Parse the request body from the event
    const { firstName, lastName, dateOfBirth, username, password } = JSON.parse(event.body);

    try {
        // Get a connection from the pool
        const connection = await new Promise((resolve, reject) => {
            pool.getConnection((error, connection) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(connection);
                }
            });
        });

        // Insert the user registration data into the MySQL database
        const query = `INSERT INTO TAcademy_User_Info (first_name, last_name, date_of_birth, username, password) VALUES (?, ?, ?, ?, ?)`;
        const values = [firstName, lastName, dateOfBirth, username, password];

        await new Promise((resolve, reject) => {
            connection.query(query, values, (error, results) => {
                connection.release(); // Release the connection back to the pool

                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });

        // Return a success response
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Registration successful' }),
        };
    } catch (error) {
        // Handle any errors that occurred during the database operation
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'An error occurred during registration' }),
        };
    }
};
