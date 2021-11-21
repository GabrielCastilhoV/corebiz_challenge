import * as S from './styles';

import user from '../../../assets/icons/user.svg';

export const Profile = () => {
  return (
    <S.Wrapper aria-label="Open my account">
      <img src={user} alt="User of account" />
      <S.Text>Minha Conta</S.Text>
    </S.Wrapper>
  );
};
