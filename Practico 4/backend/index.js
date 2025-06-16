const express = require('express');
const cors = require('cors');
const app = express();

const personaRoutes = require("./routes/personas.routes");

app.use(cors());
app.use(express.json());
app.use('/personas', personaRoutes);

const PORT = 3000;

app.listen(PORT,() => {
    console.log(`Servidor en http://localhost:${PORT}`)
});