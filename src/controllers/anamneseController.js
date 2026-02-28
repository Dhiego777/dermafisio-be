const Anamnese = require('../models/anamneseModel');
const db = require('../database/db');

exports.create = async (req, res) => {
    try {
        const novaAnamnese = new Anamnese(req.body);
        const [result] = await db.query('INSERT INTO fichas_anamnese SET ?', [novaAnamnese]);

        res.status(201).json({ 
            message: 'Ficha de anamnese salva com sucesso!', 
            id: result.insertId 
        });
    } catch (error) {
        console.error('Erro ao salvar anamnese:', error);
        res.status(500).json({ error: 'Erro interno ao salvar a ficha.' });
    }
};

exports.findAll = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM fichas_anamnese');
        res.status(200).json(rows);
    } catch (error) {
        console.error('Erro ao buscar anamneses:', error);
        res.status(500).json({ error: 'Erro interno ao buscar as fichas.' });
    }
};

exports.findById = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await db.query('SELECT * FROM fichas_anamnese WHERE id = ?', [id]);

        if (rows.length === 0) {
            return res.status(404).json({ error: 'Ficha de anamnese não encontrada.' });
        }

        res.status(200).json(rows[0]);
    } catch (error) {
        console.error('Erro ao buscar anamnese:', error);
        res.status(500).json({ error: 'Erro interno ao buscar a ficha.' });
    }
};

exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const dadosParaAtualizar = req.body;

        if (Object.keys(dadosParaAtualizar).length === 0) {
            return res.status(400).json({ error: 'Nenhum dado enviado para atualização.' });
        }

        const [result] = await db.query('UPDATE fichas_anamnese SET ? WHERE id = ?', [dadosParaAtualizar, id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Ficha de anamnese não encontrada.' });
        }

        res.status(200).json({ message: 'Ficha de anamnese atualizada com sucesso.' });
    } catch (error) {
        console.error('Erro ao atualizar anamnese:', error);
        res.status(500).json({ error: 'Erro interno ao atualizar a ficha.' });
    }
};

exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await db.query('DELETE FROM fichas_anamnese WHERE id = ?', [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Ficha de anamnese não encontrada.' });
        }

        res.status(200).json({ message: 'Ficha de anamnese deletada com sucesso.' });
    } catch (error) {
        console.error('Erro ao deletar anamnese:', error);
        res.status(500).json({ error: 'Erro interno ao deletar a ficha.' });
    }
};