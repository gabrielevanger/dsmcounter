import { ComponentProps } from 'react';

import * as S from './styles';

type InputLabelProps = {
  text: string;
  required?: boolean;
} & ComponentProps<'label'>;
export const InputLabel = ({ text, required, ...props }: InputLabelProps) => {
  return (
    <S.InputLabel {...props}>
      {text} {required && <span> *</span>}
    </S.InputLabel>
  );
};
