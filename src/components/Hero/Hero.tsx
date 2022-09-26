import React from 'react';
import Link from 'next/link'
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main>
        Hi, my name is <br/>
        Vicente
      </SectionTitle>
      <SectionText>
          I'm  a software developer specializing in building digital experiences.
          <br/>
          Interested in working together?
          
          
      </SectionText>
      <Button onClick={ () => window.location.hash = "#contact"}> Let's talk </Button>
    </LeftSection>
  </Section>
);

export default Hero;