export type FormErrors = {
  nome?: string;
  email?: string;
  telefone?: string;
  mensagem?: string;
};

export type DadosFormulario = {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
};

export function validateForm(dados: DadosFormulario): FormErrors {
  const erros: FormErrors = {};

  if (!dados.nome.trim()) {
    erros.nome = 'Por favor, preencha seu nome.';
  }

  if (!dados.email.trim()) {
    erros.email = 'O email é obrigatório.';
  } else if (!/\S+@\S+\.\S+/.test(dados.email)) {
    erros.email = 'Formato de email inválido.';
  }

  if (!dados.telefone.trim()) {
    erros.telefone = 'Informe seu telefone.';
  } else if (!/^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/.test(dados.telefone)) {
    erros.telefone = 'Telefone inválido.';
  }

  if (!dados.mensagem.trim()) {
    erros.mensagem = 'A mensagem não pode estar vazia.';
  }

  return erros;
}
