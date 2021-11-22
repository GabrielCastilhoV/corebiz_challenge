import * as S from './styles';

import { Heading } from '../../elements/Heading';
import { Button } from '../../../components/elements/Button';

import { MdEmail } from 'react-icons/md';
import { ImHeadphones } from 'react-icons/im';

import logo from '../../../assets/images/logoWhite.svg';
import vtex from '../../../assets/images/vtex.svg';

export const Footer = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <S.Location>
          <Heading name="Localização" color="white" />

          <p className="first">Avenida Andrômeda, 2000. Bloco 6 e 8</p>
          <p>Alphavile SP</p>
          <p>brasil@corebiz.ag</p>
          <p>+55 11 3090 1039</p>
        </S.Location>

        <S.ButtonWrapper>
          <Button label="ENTRE EM CONTATO" color="white" icon={<MdEmail />} />

          <Button
            nameWithHtml="FALE COM O NOSSO <br/> CONSULTOR ONLINE"
            color="white"
            icon={<ImHeadphones />}
          />
        </S.ButtonWrapper>

        <S.LogoWrapper>
          <div>
            <span>Created by</span>
            <img src={logo} alt="Logo CoreBiz branca" />
          </div>

          <div>
            <span>Powered by</span>
            <img src={vtex} alt="Logo Vtex" />
          </div>
        </S.LogoWrapper>
      </S.Content>
    </S.Wrapper>
  );
};
