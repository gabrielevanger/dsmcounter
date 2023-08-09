import { ReactNode } from 'react';

import * as S from './styles';

type InputRootProps = {
  children: ReactNode;
  maxWidth?: number;
};
export const InputRoot = ({ children, maxWidth }: InputRootProps) => {
  return <S.InputRoot $maxWidth={maxWidth}>{children}</S.InputRoot>;
};
