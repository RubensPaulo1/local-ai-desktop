const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/ask", async (req, res) => {
    try{
        const response = await axios.post("http://localhost:8000/chat", {
            message: req.body.message
        });
        res.json(response.data);
    } catch (err){
        res.status(500).json({error: "Erro na IA"});
    }
});

app.listen(3001, () => {
    console.log("Node backend rodando na porta 3001")
});