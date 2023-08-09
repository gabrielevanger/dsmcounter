import { Component, ComponentProps, ReactNode } from 'react';

import * as S from './styles';

type ButtonFormProps = ComponentProps<'button'> & {
  children: ReactNode;
  variants: 'primary' | 'secondary';
};

function ButtonForm({ children, variants, ...props }: ButtonFormProps) {
  return (
    <S.ButtonForm {...props} $variants={variants}>
      {children}
    </S.ButtonForm>
  );
}

export default ButtonForm;
