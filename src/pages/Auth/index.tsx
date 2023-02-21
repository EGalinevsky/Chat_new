import React from 'react';
import Block from 'components/Block';
import Button from 'components/Button';
import { Checkbox, Form, Input } from 'antd';
import style from './styles/auth.module.scss';

const Auth = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <section className={style.auth}>
      <div className={style.auth_content}>
        <div className={style.auth_header}>
          <h2>Sign in</h2>
          <p>please login to your account</p>
        </div>
        <Block>
          
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

          </Form>
          <Button styleName={'btn'}> Registration </Button>
        </Block>
      </div>
    </section>
  );
};

export default Auth;