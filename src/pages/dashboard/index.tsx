import Header from '@/components/Header';
import SearchForm from '@/components/SearchForm';

import * as S from './styles';

function Dashboard() {
  return (
    <div>
      <Header />

      <S.TransactionsContainer>
        <SearchForm />

        <S.TransactionsTable>
          <thead>
            <tr>
              <th>Status</th>
              <th>NOTA FISCAL</th>
              <th>Total</th>
              <th>Chave</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Aprovada</td>
              <td>1234</td>
              <td>R$500,00</td>
              <td>1234-5678-9012-3456-7890</td>
            </tr>
            <tr>
              <td>Aprovada</td>
              <td>1234</td>
              <td>R$500,00</td>
              <td>1234-5678-9012-3456-7890</td>
            </tr>
            <tr>
              <td>Aprovada</td>
              <td>1234</td>
              <td>R$500,00</td>
              <td>1234-5678-9012-3456-7890</td>
            </tr>
            <tr>
              <td>Aprovada</td>
              <td>1234</td>
              <td>R$500,00</td>
              <td>1234-5678-9012-3456-7890</td>
            </tr>
          </tbody>
        </S.TransactionsTable>
      </S.TransactionsContainer>
    </div>
  );
}
export default Dashboard;
