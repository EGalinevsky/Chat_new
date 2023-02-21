import React from 'react';
import { Button as BaseButton } from 'antd';
import classNames from 'classnames';
import s from '../Button/button.module.scss';

interface IButton {
  styleName: string,
  title: string,
}

const Button = ({...props}: IButton | any) => {
  const { styleName } = props as IButton;
  return (
    <>
      <BaseButton type='primary' className={classNames(s.button__large, styleName)} {...props} />
    </>
  );
};


export default Button;