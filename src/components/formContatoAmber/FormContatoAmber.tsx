// File: src/components/formContatoAmber/FormContatoAmber.tsx

import React, { useState } from 'react';
import './FormContatoAmber.css';
import { validateForm } from './ValidateDataForm';
import type { FormErrors } from './ValidateDataForm';


type Props = {
  sitefilho?: string;
  altura?: number;
  largura?: number;
};

const FormContatoAmber: React.FC<Props> = ({
  sitefilho = 'Componente',
  altura = 450,
  largura = 300,
}) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [enviado, setEnviado] = useState(false);
  const [erros, setErros] = useState<FormErrors>({});

  const formAction =
    'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdEtqTMKOc4_4bnWIAsDKjKdoOLhpCxHuDc0y-4ZIR3ZZ6xpA/formResponse';
  const entryNome = 'entry.1270179656';
  const entryEmail = 'entry.312349951';
  const entryTelefone = 'entry.1804982303';
  const entryMensagem = 'entry.1553458246';
  const entrySiteFilho = 'entry.52721438';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const dados = { nome, email, telefone, mensagem };
    const validacao = validateForm(dados);

    if (Object.keys(validacao).length > 0) {
      setErros(validacao);
      return;
    }

    const formData = new FormData();
    formData.append(entryNome, nome);
    formData.append(entryEmail, email);
    formData.append(entryTelefone, telefone);
    formData.append(entryMensagem, mensagem);
    formData.append(entrySiteFilho, sitefilho);

    fetch(formAction, {
      method: 'POST',
      mode: 'no-cors',
      body: formData,
    }).then(() => {
      setEnviado(true);
      setNome('');
      setEmail('');
      setTelefone('');
      setMensagem('');
      setErros({});
    });
  };

  return (
    <div
      style={{
        height: `${altura}px`,
        width: `${largura}px`,
        overflowY: 'auto',
      }}
      className="form-wrapper"
    >
      {enviado ? (
        <div className="text-green-600 font-semibold text-center">
          Obrigado! Sua mensagem foi enviada. 💌
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2 className="text-xl font-bold mb-4">Fale com a gente</h2>

          <label className="block mb-2">
            Nome:
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Apelido ou Nickname"
              className="w-full border rounded px-3 py-2 mt-1"
              required
            />
            {erros.nome && <span className="text-green-600">{erros.nome}</span>}
          </label>

          <label className="block mb-2">
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className="w-full border rounded px-3 py-2 mt-1"
              required
            />
            {erros.email && <span className="text-green-600">{erros.email}</span>}
          </label>

          <label className="block mb-2">
            Fone/WhatsApp/Telegram:
            <input
              type="tel"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              placeholder="(85) 9 9999-9999"
              className="w-full border rounded px-3 py-2 mt-1"
              required
            />
            {erros.telefone && <span className="text-green-600">{erros.telefone}</span>}
          </label>

          <label className="block mb-4">
            Mensagem:
            <textarea
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              placeholder="Dúvidas, críticas, sugestões..."
              className="w-full border rounded px-3 py-2 mt-1"
              required
            />
            {erros.mensagem && <span className="text-green-600">{erros.mensagem}</span>}
          </label>

          <button
            type="submit"
            className="bg-amber-500 text-white px-4 py-2 rounded hover:bg-amber-600 transition"
          >
            Enviar
          </button>
        </form>
      )}
    </div>
  );
};

export default FormContatoAmber;
