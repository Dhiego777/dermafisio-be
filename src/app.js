require('dotenv').config();
const express = require('express');
const cors = require('cors');
const anamneseRoutes = require('./routes/anamneseRoutes');
const calendarRoutes = require('./routes/calendarRoutes');
const authRoutes = require('./routes/authRoutes');
const authMiddleware = require('./middleware/auth');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/anamnese', authMiddleware, anamneseRoutes);
app.use('/api/calendar', authMiddleware, calendarRoutes);


app.get('/', (req, res) => res.send('API SL DERMAFÍSIO Online!'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});