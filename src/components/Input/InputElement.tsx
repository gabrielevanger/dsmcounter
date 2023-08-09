import { ComponentProps, forwardRef } from 'react';

import * as S from './styles';

type InputElementProps = ComponentProps<'input'>;

export const InputElement = forwardRef<HTMLInputElement, InputElementProps>(
  ({ ...props }, ref) => <S.InputElement ref={ref} {...props} />
);
