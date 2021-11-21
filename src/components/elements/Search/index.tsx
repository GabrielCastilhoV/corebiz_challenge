import * as S from './styles';

import { HiOutlineSearch } from 'react-icons/hi';
import { useState } from 'react';

export const Search = () => {
  const [value, setValue] = useState('');

  return (
    <S.Wrapper>
      <S.Input
        placeholder="O que está procurando?"
        value={value}
        onChange={e => setValue(e.target.value)}
      />

      <HiOutlineSearch aria-label="Search product" />
    </S.Wrapper>
  );
};
