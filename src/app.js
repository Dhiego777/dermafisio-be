const express = require('express');
const cors = require('cors');
const anamneseRoutes = require('./routes/anamneseRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/anamnese', anamneseRoutes);

// Rota de teste
app.get('/', (req, res) => res.send('API SL DERMAFÍSIO Online!'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});