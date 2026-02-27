module.exports = class Anamnese {
  constructor(anamnese) {
    // Dados Pessoais
    this.nome = anamnese.nome;
    this.data_nasc = anamnese.data_nasc;
    this.idade = anamnese.idade;
    this.endereco = anamnese.endereco;
    this.profissao = anamnese.profissao;
    this.telefone = anamnese.telefone;
    this.como_conheceu = anamnese.como_conheceu;

    // Queixa Principal
    this.queixa_principal = anamnese.queixa_principal;

    // Histórico Patológico
    this.medicacao = anamnese.medicacao;
    this.exames = anamnese.exames;
    this.alergia = anamnese.alergia || "nao";
    this.alergia_qual = anamnese.alergia_qual;
    this.intestino = anamnese.intestino;
    this.ciclo_menstrual = anamnese.ciclo_menstrual || "sim";
    this.anticoncepcional = anamnese.anticoncepcional || "nao";
    this.hipotensao = anamnese.hipotensao || "nao";
    this.doencas_pre = anamnese.doencas_pre || "nao";
    this.doencas_pre_qual = anamnese.doencas_pre_qual;

    // Histórico Social e Outros
    this.atividade_fisica = anamnese.atividade_fisica;
    this.alimentacao = anamnese.alimentacao;
    this.liquido = anamnese.liquido;
    this.fuma = anamnese.fuma;
    this.alcool = anamnese.alcool;
    this.procedimento_estetico = anamnese.procedimento_estetico;
    this.cirurgia = anamnese.cirurgia;
    this.gravida = anamnese.gravida;
    this.metais = anamnese.metais;
  }
};
