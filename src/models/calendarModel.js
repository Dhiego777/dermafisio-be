module.exports = class Calendar {
  constructor(appointment) {
    this.nomeCliente = appointment.nomeCliente;
    this.telefoneCliente = appointment.telefoneCliente;
    this.procedimento = appointment.procedimento;
    this.dataInicio = appointment.dataInicio;
    this.dataFim = appointment.dataFim;
    this.status = appointment.status || 'agendado';
    this.observacoes = appointment.observacoes;
  }
};