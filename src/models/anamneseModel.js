module.exports = class Anamnese {
  constructor(anamnese) {
    // Dados Pessoais
    this.nome = anamnese.nome;
    this.dataNasc = anamnese.dataNasc;
    this.idade = anamnese.idade;
    this.endereco = anamnese.endereco;
    this.profissao = anamnese.profissao;
    this.telefone = anamnese.telefone;
    this.comoConheceu = anamnese.comoConheceu;

    // Queixa Principal
    this.queixaPrincipal = anamnese.queixaPrincipal;

    // Histórico Patológico
    this.medicacao = anamnese.medicacao;
    this.exames = anamnese.exames;
    this.alergia = anamnese.alergia || "nao";
    this.alergiaQual = anamnese.alergiaQual;
    this.intestino = anamnese.intestino;
    this.cicloMenstrual = anamnese.cicloMenstrual || "sim";
    this.anticoncepcional = anamnese.anticoncepcional || "nao";
    this.hipotensao = anamnese.hipotensao || "nao";
    this.doencasPre = anamnese.doencasPre || "nao";
    this.doencasPreQual = anamnese.doencasPreQual;

    // Histórico Social e Outros
    this.atividadeFisica = anamnese.atividadeFisica;
    this.alimentacao = anamnese.alimentacao;
    this.liquido = anamnese.liquido;
    this.fuma = anamnese.fuma;
    this.alcool = anamnese.alcool;
    this.procedimentoEstetico = anamnese.procedimentoEstetico;
    this.cirurgia = anamnese.cirurgia;
    this.gravida = anamnese.gravida;
    this.metais = anamnese.metais;
  }
};
