import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import logo from '~/assets/logo.svg';
import { signUpRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
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
        <button type="submit">
          {loading ? (
            <AiOutlineLoading3Quarters className="loading-icon" />
          ) : (
              'Cadastrar'
            )}
        </button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
