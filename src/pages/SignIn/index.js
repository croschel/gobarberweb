import React from 'react';
import { Input, Form } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import logo from '~/assets/logo.svg';

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Coloque um email válido')
      .required('Digite um email'),
    password: Yup.string().required('Digite uma senha'),
  });
  return (
    <>
      <img src={logo} alt="GoBarberLogo" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu email" />
        <Input name="password" type="password" placeholder="Sua senha" />
        <button type="submit">Entrar</button>
        <Link to="/register">Criar conta gratuitamente</Link>
      </Form>
    </>
  );
}
