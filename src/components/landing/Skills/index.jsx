import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';
import SkillList from './skill-list';
import Resume from '../../../../resume.pdf';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>More about me</h1>
          <h3 align="left">A passionate full stack developer from India</h3>
          <p>
            I'm a developer that loves simplifying things. I love breaking down
            complex problems into simple, easy to understand solutions. I
            Currently live in Uttar Pradesh, India.
          </p>
          <SkillList />
          <Button as={AnchorLink} href="#contact">
            Hire me
          </Button>
          <a
            href={Resume}
            target="_blank"
            style={{
              background: 'transparent',
              color: '#0074D9',
              padding: '1rem',
            }}
          >
            See My Resume
          </a>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
