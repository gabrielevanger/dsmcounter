import { ReactNode } from 'react';

import * as S from './styles';

type InputGroupProps = {
  children: ReactNode;
  isError: boolean;
  isDisabled?: boolean;
};
export const InputGroup = ({
  children,
  isError,
  isDisabled
}: InputGroupProps) => {
  return (
    <S.InputGroup $isError={isError} $isDisabled={isDisabled}>
      {children}
    </S.InputGroup>
  );
};
