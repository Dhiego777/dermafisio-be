module.exports = class Financeiro {
    constructor(financeiro) {
        this.valor = financeiro.valor;
        this.descricao = financeiro.descricao;
        this.data = financeiro.data ? new Date(financeiro.data) : new Date();
    }
};
