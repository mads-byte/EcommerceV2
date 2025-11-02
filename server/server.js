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
        const [rows] = await pool.query("SELECT * FROM products");
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error" });
    }
});

app.get("/products/ascending", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM products ORDER BY price ASC");
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error" });
    }
});

app.get("/products/descending", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM products ORDER BY price DESC");
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error" });
    }
});

app.get("/products/:type", async (req, res) => {
    try {
        const type = req.params.type;
        const [rows] = await pool.query(`SELECT * FROM products WHERE prod_type = ?`, [type]);
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Database error" });
    }
});


app.use(express.static(path.join(process.cwd(), "client/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(process.cwd(), "client/dist", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
