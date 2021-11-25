import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Phone</LinkTitle>
          <LinkItem href="tel:+27677849529">+27677849529</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:lincolnruwambara@gmail.com">
            lincolnruwambara@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIcons href="https://linkedin.com/in/lincoln-takudzwa-ruwambara-144a8b1a3">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href=" https://github.com/LincolnRuwambara">
        <AiFillGithub size="3rem" />
      </SocialIcons>
    </FooterWrapper>
  );
};

export default Footer;
