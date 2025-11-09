import express from 'express'
import cors from 'cors'
import { pool } from "./db.js";

import path from 'path'

//create app variable to store express functionality
export const app = express()

//"Cross Origin Resource Sharing" - changes security configurations which allows the server to load resources from an origin other than its own
app.use(cors())
app.use(express.json()) // For parsing application/json






app.get("/products", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM products_table");
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error" });
    }
});

app.get("/products/ascending", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM products_table ORDER BY price ASC");
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error" });
    }
});

app.get("/products/descending", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM products_table ORDER BY price DESC");
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error" });
    }
});

app.get("/products/:type", async (req, res) => {
    try {
        const type = req.params.type;
        const [rows] = await pool.query(`SELECT * FROM products_table WHERE prod_type = ?`, [type]);
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error" });
    }
});


app.get("/products/:type/descending", async (req, res) => {
    try {
        const type = req.params.type;
        const [rows] = await pool.query(`SELECT * FROM products_table WHERE prod_type = ? ORDER BY price DESC`, [type]);
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error" });
    }
});

app.get("/products/:type/ascending", async (req, res) => {
    try {
        const type = req.params.type;
        const [rows] = await pool.query(`SELECT * FROM products_table WHERE prod_type = ? ORDER BY price ASC`, [type]);
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on port ${PORT}`);
});
