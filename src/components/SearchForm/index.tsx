import { MagnifyingGlass } from 'phosphor-react';

import * as S from './styles';
export default function SearchForm() {
  return (
    <S.SearchFormContainer>
      <input type="text" placeholder="Pesquisar notas" />
      <MagnifyingGlass size={20} />
      <button type="submit">Buscar</button>
    </S.SearchFormContainer>
  );
}
