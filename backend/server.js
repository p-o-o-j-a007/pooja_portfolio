const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { MongoClient } = require("mongodb");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const client = new MongoClient(process.env.MONGO_URI, {
    family: 4
});

async function startServer() {
    try {
        await client.connect();

        console.log("MongoDB connected successfully!");

        app.get("/", (req, res) => {
            res.send("Portfolio backend + MongoDB is running!");
        });

        const PORT = 5000;

        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });

    } catch (error) {
        console.error("MongoDB connection failed:", error);
    }
}

startServer();