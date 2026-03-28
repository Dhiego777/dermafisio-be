module.exports = class Tratamento {
  constructor(tratamento) {
    this.clienteId = tratamento.clienteId;
    this.data = tratamento.data;
    this.tratamento = tratamento.tratamento;
    this.procedimento = tratamento.procedimento;
    this.resultado = tratamento.resultado;
    this.observacoes = tratamento.observacoes;
  }
};
