// const dotenv = require ('dotenv');

// dotenv.config ();

// Get the Host from Environment or use default
const host = process.env.DB_HOST || '127.0.0.1';

// Get the User for DB from Environment or use default
const user = process.env.DB_USER || 'root';

// Get the Password for DB from Environment or use default
const password = process.env.DB_PASS || 'somewordpress';

// Get the Database from Environment or use default
const database = process.env.DB_DATABASE || 'nodejsmysql';

module.exports = {host, user, password, database};
