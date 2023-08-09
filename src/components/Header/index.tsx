import Image from 'next/image';

import M2Logo from '@/assets/icons/M2logowhite.svg';

import * as S from './styles';

export default function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <M2Logo />
        <S.CompanyButton>Selecione uma empresa</S.CompanyButton>
      </S.HeaderContent>
    </S.HeaderContainer>
  );
}
