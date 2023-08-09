import { ReactNode } from 'react';

import * as S from './styles';

type InputHelpTextProps = {
  message?: string;
};

export const InputHelpText = ({ message }: InputHelpTextProps) => {
  return <S.InputHelpText>{message && message}</S.InputHelpText>;
};
