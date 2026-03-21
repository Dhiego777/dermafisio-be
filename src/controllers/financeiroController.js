const Financeiro = require('../models/financeiroModel');
const db = require('../database/db');

exports.create = async (req, res) => {
    try {
        const novoRegistro = new Financeiro(req.body);
        const [result] = await db.query('INSERT INTO financeiro SET ?', [novoRegistro]);

        res.status(201).json({
            message: 'Registro financeiro criado com sucesso!',
            id: result.insertId
        });
    } catch (error) {
        console.error('Erro ao criar registro financeiro:', error);
        res.status(500).json({ error: 'Erro interno ao criar o registro.' });
    }
};

exports.findAll = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM financeiro ORDER BY data DESC');
        res.status(200).json(rows);
    } catch (error) {
        console.error('Erro ao buscar registros financeiros:', error);
        res.status(500).json({ error: 'Erro interno ao buscar os registros.' });
    }
};

exports.findById = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await db.query('SELECT * FROM financeiro WHERE id = ?', [id]);

        if (rows.length === 0) {
            return res.status(404).json({ error: 'Registro financeiro não encontrado.' });
        }

        res.status(200).json(rows[0]);
    } catch (error) {
        console.error('Erro ao buscar registro financeiro:', error);
        res.status(500).json({ error: 'Erro interno ao buscar o registro.' });
    }
};

exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const { id: _id, ...dadosParaAtualizar } = req.body;

        if (dadosParaAtualizar.data) {
            dadosParaAtualizar.data = new Date(dadosParaAtualizar.data);
        }

        if (Object.keys(dadosParaAtualizar).length === 0) {
            return res.status(400).json({ error: 'Nenhum dado enviado para atualização.' });
        }

        const [result] = await db.query('UPDATE financeiro SET ? WHERE id = ?', [dadosParaAtualizar, id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Registro financeiro não encontrado.' });
        }

        res.status(200).json({ message: 'Registro financeiro atualizado com sucesso.' });
    } catch (error) {
        console.error('Erro ao atualizar registro financeiro:', error);
        res.status(500).json({ error: 'Erro interno ao atualizar o registro.' });
    }
};

exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await db.query('DELETE FROM financeiro WHERE id = ?', [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Registro financeiro não encontrado.' });
        }

        res.status(200).json({ message: 'Registro financeiro deletado com sucesso.' });
    } catch (error) {
        console.error('Erro ao deletar registro financeiro:', error);
        res.status(500).json({ error: 'Erro interno ao deletar o registro.' });
    }
};
