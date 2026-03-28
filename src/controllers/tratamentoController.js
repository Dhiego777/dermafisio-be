const Tratamento = require('../models/tratamentoModel');
const db = require('../database/db');

exports.create = async (req, res) => {
    try {
        const novoTratamento = new Tratamento(req.body);
        const [result] = await db.query('INSERT INTO tratamentos SET ?', [novoTratamento]);

        res.status(201).json({
            message: 'Tratamento salvo com sucesso!',
            id: result.insertId
        });
    } catch (error) {
        console.error('Erro ao salvar tratamento:', error);
        res.status(500).json({ error: 'Erro interno ao salvar o tratamento.', detalhes: error.message });
    }
};

exports.findAll = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM tratamentos ORDER BY data DESC');
        res.status(200).json(rows);
    } catch (error) {
        console.error('Erro ao buscar tratamentos:', error);
        res.status(500).json({ error: 'Erro interno ao buscar os tratamentos.', detalhes: error.message });
    }
};

exports.findByClienteId = async (req, res) => {
    try {
        const { clienteId } = req.params;
        const [rows] = await db.query(
            'SELECT * FROM tratamentos WHERE clienteId = ? ORDER BY data DESC',
            [clienteId]
        );
        res.status(200).json(rows);
    } catch (error) {
        console.error('Erro ao buscar tratamentos do cliente:', error);
        res.status(500).json({ error: 'Erro interno ao buscar os tratamentos.', detalhes: error.message });
    }
};

exports.findById = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await db.query('SELECT * FROM tratamentos WHERE id = ?', [id]);

        if (rows.length === 0) {
            return res.status(404).json({ error: 'Tratamento não encontrado.' });
        }

        res.status(200).json(rows[0]);
    } catch (error) {
        console.error('Erro ao buscar tratamento:', error);
        res.status(500).json({ error: 'Erro interno ao buscar o tratamento.', detalhes: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const { id: _id, dataCriacao: _dataCriacao, ...dadosParaAtualizar } = req.body;

        if (dadosParaAtualizar.data) {
            dadosParaAtualizar.data = new Date(dadosParaAtualizar.data);
        }

        if (Object.keys(dadosParaAtualizar).length === 0) {
            return res.status(400).json({ error: 'Nenhum dado enviado para atualização.' });
        }

        const [result] = await db.query('UPDATE tratamentos SET ? WHERE id = ?', [dadosParaAtualizar, id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Tratamento não encontrado.' });
        }

        res.status(200).json({ message: 'Tratamento atualizado com sucesso.' });
    } catch (error) {
        console.error('Erro ao atualizar tratamento:', error);
        res.status(500).json({ error: 'Erro interno ao atualizar o tratamento.', detalhes: error.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await db.query('DELETE FROM tratamentos WHERE id = ?', [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Tratamento não encontrado.' });
        }

        res.status(200).json({ message: 'Tratamento deletado com sucesso.' });
    } catch (error) {
        console.error('Erro ao deletar tratamento:', error);
        res.status(500).json({ error: 'Erro interno ao deletar o tratamento.', detalhes: error.message });
    }
};
