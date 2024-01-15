import { GithubLink } from 'components/GithubLink';
import { ButtonWrap, FooterWrap, Text } from './Footer.styled';

export const Footer = () => {
  return (
    <FooterWrap>
      <Text>
        Навчальний проект створений для взаємодії з картою, надаючи користувачам
        можливість легко додавати власні мітки та переглядати інформацію про
        існуючі мітки на карті.
      </Text>
      <ButtonWrap>
        <p>Переглянути код: </p>
        <GithubLink />
      </ButtonWrap>
    </FooterWrap>
  );
};
