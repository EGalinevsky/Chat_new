import React from 'react';
import s from './block.module.scss';
import classNames from 'classnames';

interface IBlock {
  children: JSX.Element | JSX.Element[],
  className?: string
}

const Block = ({ children, className }: IBlock) => {
  return (
    <div className={classNames(s.block, className)}>
      {children}
    </div>
  );
};


export default Block;