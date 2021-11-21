import * as S from './styles';

import logo from '../../../assets/images/logo.svg';
import { Search } from '../../../components/elements/Search';
import { Profile } from '../../../components/elements/Profile';
import { Cart } from '../../../components/elements/Cart';

import { HiMenu } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';
import { useState } from 'react';
import MediaMatch from '../../../components/elements/MediaMatch';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Wrapper>
      <S.Content>
        <MediaMatch lessThan="medium">
          <S.IconWrapper onClick={() => setIsOpen(true)}>
            <HiMenu aria-label="Open Menu" />
          </S.IconWrapper>
        </MediaMatch>

        <img src={logo} alt="CoreBiz" aria-label="Logo" />

        <Cart />

        <Search />

        <MediaMatch greaterThan="large">
          <Profile />
        </MediaMatch>
      </S.Content>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <img src={logo} alt="CoreBiz" aria-label="Logo" />
        <MdClose aria-label="Close Menu" onClick={() => setIsOpen(false)} />

        <S.ProfileWrapper>
          <Profile aria-label="Open my account" />
        </S.ProfileWrapper>
      </S.MenuFull>
    </S.Wrapper>
  );
};
