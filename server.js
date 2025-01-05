const express = require('express');
const app = express();

// Middleware pentru parsarea JSON
app.use(express.json());

// Endpoint de bază
app.get('/', (req, res) => {
    res.send('Serverul funcționează în Codespaces!');
    });

    // Pornire server
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Serverul rulează pe portul ${PORT}`);
        });