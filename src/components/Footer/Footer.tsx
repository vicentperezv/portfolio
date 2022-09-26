import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {  FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, SocialContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>       
        <LinkColumn>
          
        </LinkColumn>
        <LinkColumn>
        <LinkTitle></LinkTitle>
        <SocialContainer>
          <SocialIcons href="https://github.com/vicentperezv"  target="_blank">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://linkedin.com/in/vicentperezv" target="_blank">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="mailto:vicentperezv@gmail.com">
            <AiOutlineMail size="3rem" />
          </SocialIcons>           
        </SocialContainer>
        </LinkColumn>
      </LinkList>      
    </FooterWrapper>
  );
};

export default Footer;
