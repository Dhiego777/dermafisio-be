const db = require('../database/db');
const Cliente = require('../models/clientModel');

exports.findAll = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM clientes ORDER BY nome ASC');
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar clientes.', details: error.message });
    }
};

exports.findById = async (req, res) => {
    try {
        const { id } = req.params;
        
        const [clienteRows] = await db.query('SELECT * FROM clientes WHERE id = ?', [id]);
        if (clienteRows.length === 0) return res.status(404).json({ error: 'Cliente não encontrada.' });

        const [anamnesesRows] = await db.query('SELECT * FROM fichas_anamnese WHERE clienteId = ? ORDER BY dataCriacao DESC', [id]);

        res.status(200).json({
            ...clienteRows[0],
            historicoAnamneses: anamnesesRows
        });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar detalhes da cliente.', details: error.message });
    }
};

exports.create = async (req, res) => {
    try {
        const novaCliente = new Cliente(req.body);
        const [result] = await db.query('INSERT INTO clientes SET ?', [novaCliente]);
        res.status(201).json({ message: 'Cliente cadastrada com sucesso!', id: result.insertId });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao cadastrar cliente.', details: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        
        const dadosParaAtualizar = { ...req.body };
        delete dadosParaAtualizar.id;
        delete dadosParaAtualizar.dataCriacao;
        delete dadosParaAtualizar.dataAtualizacao;
        delete dadosParaAtualizar.historicoAnamneses;

        if (dadosParaAtualizar.dataNasc) {
            dadosParaAtualizar.dataNasc = new Date(dadosParaAtualizar.dataNasc);
        }

        if (Object.keys(dadosParaAtualizar).length === 0) {
            return res.status(400).json({ error: 'Nenhum dado enviado para atualização.' });
        }

        const [result] = await db.query('UPDATE clientes SET ? WHERE id = ?', [dadosParaAtualizar, id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Cliente não encontrada.' });
        }

        res.status(200).json({ message: 'Dados da cliente atualizados com sucesso!' });
    } catch (error) {
        console.error('Erro ao atualizar cliente:', error);
        res.status(500).json({ 
            error: 'Erro interno ao atualizar a cliente.',
            details: error.sqlMessage || error.message 
        });
    }
};

exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await db.query('DELETE FROM clientes WHERE id = ?', [id]);

        if (result.affectedRows === 0) return res.status(404).json({ error: 'Cliente não encontrada.' });

        res.status(200).json({ message: 'Cliente deletada com sucesso!' });
    } catch (error) {
        console.error('Erro ao deletar cliente:', error);
        res.status(500).json({ 
            error: 'Erro interno ao deletar a cliente.',
            details: error.sqlMessage || error.message 
        });
    }
};
