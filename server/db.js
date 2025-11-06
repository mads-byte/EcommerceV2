import mysql from "mysql2/promise";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const sslOption = process.env.DB_SSL_CA_PATH
    ? { ca: fs.readFileSync(process.env.DB_SSL_CA_PATH) }
    : { rejectUnauthorized: false };

export const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306,
    ssl: sslOption,
    waitForConnections: true
});


try {
    await pool.query('SELECT 1');
    console.log('Database connected successfully!');
} catch (err) {
    console.error('Database connection failed:', err.message);
}



