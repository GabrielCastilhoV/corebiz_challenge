import React, { useState } from 'react';
import * as yup from 'yup';

import api from '../../../services/api';

import { Button } from '../../../components/elements/Button';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import * as S from './styles';

import { toast } from 'react-toastify';
import { Input } from '../Input';

interface NewsletterFormData {
  name: string;
  email: string;
}

const newsLetterFormSchema = yup.object().shape({
  email: yup
    .string()
    .required('Preencha com seu e-mail')
    .email('Digite com um e-mail válido'),
  name: yup.string().required('Preencha com seu nome completo'),
});

export const Newsletter: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(newsLetterFormSchema),
  });

  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmitForm = async (data: NewsletterFormData) => {
    await api
      .post('/newsletter', {
        name: data.name,
        email: data.email,
      })
      .then(() => {
        toast.success('Parabéns, você está inscrito na newsletter!');
        setIsSubscribed(true);
      })
      .catch(() => {
        toast.error('Ops, erro ao se inscrever na newsletter');
      });
  };

  return (
    <S.Wrapper>
      {isSubscribed ? (
        <div className="subscribed">
          <h2>Seu e-mail foi cadastrado com sucesso!</h2>

          <p>
            A partir de agora você receberá as novidade e ofertas exclusivas.
          </p>

          <Button
            onClick={() => setIsSubscribed(false)}
            label="Cadastrar novo e-mail"
          />
        </div>
      ) : (
        <>
          <h2>Participe de nossas news com promoções e novidades!</h2>

          <form onSubmit={handleSubmit(handleSubmitForm)}>
            <Input
              placeholder="Digite seu nome"
              error={errors.name}
              {...register('name')}
            />
            <Input
              placeholder="Digite seu e-mail"
              error={errors.email}
              {...register('email')}
            />

            <Button type="submit" label="Eu quero!" />
          </form>
        </>
      )}
    </S.Wrapper>
  );
};
