module.exports = class Client {
  constructor(client) {
    this.nome = client.nome;
    this.cpf = client.cpf;
    this.email = client.email;
    this.telefone = client.telefone;
    this.dataNasc = client.dataNasc;
    this.endereco = client.endereco;
  }
};