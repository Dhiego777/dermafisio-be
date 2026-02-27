module.exports = class Anamnese {
  constructor(anamnese) {
    // Dados Pessoais
    this.nome = anamnese.nome;
    this.data_nasc = anamnese.dataNasc;
    this.idade = anamnese.idade;
    this.endereco = anamnese.endereco;
    this.profissao = anamnese.profissao;
    this.telefone = anamnese.telefone;
    this.como_conheceu = anamnese.comoConheceu;

    // Queixa Principal
    this.queixa_principal = anamnese.queixaPrincipal;

    // Histórico Patológico
    this.medicacao = anamnese.medicacao;
    this.exames = anamnese.exames;
    this.alergia = anamnese.alergia || "nao";
    this.alergia_qual = anamnese.alergiaQual;
    this.intestino = anamnese.intestino;
    this.ciclo_menstrual = anamnese.cicloMenstrual || "sim";
    this.anticoncepcional = anamnese.anticoncepcional || "nao";
    this.hipotensao = anamnese.hipotensao || "nao";
    this.doencas_pre = anamnese.doencasPre || "nao";
    this.doencas_pre_qual = anamnese.doencasPreQual;

    // Histórico Social e Outros
    this.atividade_fisica = anamnese.atividadeFisica;
    this.alimentacao = anamnese.alimentacao;
    this.liquido = anamnese.liquido;
    this.fuma = anamnese.fuma;
    this.alcool = anamnese.alcool;
    this.procedimento_estetico = anamnese.procedimentoEstetico;
    this.cirurgia = anamnese.cirurgia;
    this.gravida = anamnese.gravida;
    this.metais = anamnese.metais;
  }
};
