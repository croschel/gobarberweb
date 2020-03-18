import React from 'react';
import { Input, Form } from '@rocketseat/unform';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import logo from '~/assets/logo.svg';
import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  console.tron.log(loading);
  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
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
        <button type="submit">
          {loading ? (
            <AiOutlineLoading3Quarters className="loading-icon" />
          ) : (
              'Entrar'
            )}
        </button>
        <Link to="/register">Criar conta gratuitamente</Link>
      </Form>
    </>
  );
}
