import React from 'react';
import { Route, Routes, useRoutes } from 'react-router-dom';
import style from './styles/auth.module.scss';
import { LoginForm, RegistreForm } from 'modules';

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
        <Route path="/" element={<LoginForm onFinish={onFinish} onFinishFailed={onFinishFailed} />} />
        <Route path="/login" element={<LoginForm onFinish={onFinish} onFinishFailed={onFinishFailed} />} />
        <Route path="/register" element={<RegistreForm onFinish={onFinish} onFinishFailed={onFinishFailed} />} />
      </Routes>
    </section>
  );
};

export default Auth;