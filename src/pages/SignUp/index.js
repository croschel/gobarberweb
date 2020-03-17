import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import logo from '~/assets/logo.svg';

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  const schema = Yup.object().shape({
    name: Yup.string().required('Digite um nome'),
    email: Yup.string()
      .email('Coloque um email válido')
      .required('Digite um email'),
    password: Yup.string()
      .min(6, 'Mínimo 6 caracteres')
      .required('Digite uma senha'),
  });

  return (
    <>
      <img src={logo} alt="GoBarberLogo" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu email" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <button type="submit">Entrar</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
