import React from 'react'
import Button from 'components/Button';
import { Checkbox, Form, Input } from 'antd';
import style from '../../../pages/Auth/styles/auth.module.scss';
import { Link } from 'react-router-dom';
import Block from 'components/Block';
import { Route } from 'react-router';

interface IRegistreForm {
    onFinish: (values: {
        username: string,
        password: string,
        remember: boolean
    }) => void,
    onFinishFailed?: (values: any) => void;
}

const RegistreForm = ({ onFinish, onFinishFailed }: IRegistreForm) => {
  return (
    <>
      <div className={style.auth_content}>
        <div className={style.auth_header}>
          <h2>Registration</h2>
          <p>to enter the chat, you need to register</p>
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
              label="E-mail"
              name="E-mail"
              rules={[{ required: true, message: 'Please input your E-mail!' }]}
              hasFeedback
              validateStatus="success"
            >
              <Input id="success" />
            </Form.Item>
            <Form.Item
              label="Username"
              name="Username"
              rules={[{ required: true, message: 'Please input your Username!' }]}
              hasFeedback
              validateStatus="success"
            >
              <Input id="success" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="Repead password"
              name="Repead password"
              rules={[{ required: true, message: 'Please input your repead password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Button className={style.auth_button} styleName={'btn'} type="primary" htmlType="submit">
                Registration
            </Button>
            <Link className={style.auth_link} to="/">Sign in</Link>
          </Form>
        </Block>
      </div>
    </>

  );
};

export default RegistreForm;