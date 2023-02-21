import React from 'react';
import { Button as BaseButton } from 'antd';
import classNames from 'classnames';

interface IButton {
  styleName: string,
  title: string,
}

const Button = (props: IButton) => {
  const { styleName } = props;
  // console.log(styleName);  
  return (
    <>
      <BaseButton className={classNames('button', styleName)} {...props} />
    </>
  );
};



export default Button;