import Image from 'next/image';

import Ellipse from '@/assets/icons/ellipse.svg';
import LogoDsm from '@/assets/icons/logodsm.svg';
import PayDsm from '@/assets/icons/paydsm.svg';

import * as S from './styles';

function HeaderLogin() {
  return (
    <S.HeaderLogin>
      <div>
        <LogoDsm />
        <p>Simplifique agora mesmo a gestão financeira da sua empresa.</p>
      </div>
      <div>
        <Image
          className="paydsm"
          src="/assets/icons/paydsm.svg"
          width={478}
          height={237}
          alt="paydsm"
        />
      </div>
    </S.HeaderLogin>
  );
}
export default HeaderLogin;
