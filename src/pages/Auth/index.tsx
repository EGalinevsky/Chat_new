import React from 'react';
import { Route, Routes } from 'react-router-dom';
import style from './styles/auth.module.scss';
import LoginForm from 'modules/LoginForm';

const Auth = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <section className={style.auth}>
      <Routes>
        <Route path="/" element={<LoginForm onFinish={onFinish} onFinishFailed={onFinishFailed}/>} />
        <Route path="/register" element={<>1111</>} />
      </Routes>
    </section>
  );
};

export default Auth;