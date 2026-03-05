const db = require('../database/db');
const Calendar = require('../models/calendarModel');

exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const dados = { ...req.body };
        
        delete dados.id;
        delete dados.dataCriacao;
        delete dados.dataAtualizacao;

        const [result] = await db.query('UPDATE agenda SET ? WHERE id = ?', [dados, id]);
        
        if (result.affectedRows === 0) return res.status(404).json({ error: 'Agendamento não encontrado.' });
        res.status(200).json({ message: 'Agendamento atualizado com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar.', details: error.message });
    }
};

exports.findAll = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM agenda ORDER BY dataInicio ASC');
        const formatted = rows.map(event => ({
            ...event,
            dataInicio: formatDateLocal(event.dataInicio),
            dataFim: formatDateLocal(event.dataFim),
            dataCriacao: formatDateLocal(event.dataCriacao),
            dataAtualizacao: formatDateLocal(event.dataAtualizacao),
            }));
        res.status(200).json(formatted);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar agenda.', details: error.message });
    }
};

exports.findById = async (req, res) => {
    try {
        const { id } = req.params;
        const [rows] = await db.query('SELECT * FROM agenda WHERE id = ?', [id]);
        if (rows.length === 0) return res.status(404).json({ error: 'Agendamento não encontrado.' });
        res.status(200).json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar agendamento.', details: error.message });
    }
};

exports.create = async (req, res) => {
    try {
        const novoAgendamento = new Calendar(req.body);
        const [result] = await db.query('INSERT INTO agenda SET ?', [novoAgendamento]);
        res.status(201).json({ message: 'Agendamento criado!', id: result.insertId });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar agendamento.', details: error.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await db.query('DELETE FROM agenda WHERE id = ?', [id]);
        if (result.affectedRows === 0) return res.status(404).json({ error: 'Agendamento não encontrado.' });
        res.status(200).json({ message: 'Agendamento removido com sucesso.' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao deletar agendamento.', details: error.message });
    }
};
