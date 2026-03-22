const TIPOS_VALIDOS = ['pagamento', 'despesa'];

module.exports = class Financeiro {
    constructor(financeiro) {
        this.valor = financeiro.valor;
        this.descricao = financeiro.descricao;
        this.data = financeiro.data ? new Date(financeiro.data) : new Date();
        this.tipo = financeiro.tipo;
    }

    static isTipoValido(tipo) {
        return TIPOS_VALIDOS.includes(tipo);
    }
};
