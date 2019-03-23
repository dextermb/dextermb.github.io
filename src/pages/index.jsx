import React from 'react'

import Wrapper from '../components/wrapper'
import Section from '../components/section'
import Avatar from '../components/avatar'
import Social from '../components/link/social'
import Programming from '../components/list/programming'
import Experience from '../components/list/experience'
import Projects from '../components/list/projects'

export default () => (
  <Wrapper>
    <Section>
      <div className={'flex flex-spacing flex-inline flex-start'}>
        <Avatar
          src={'https://github.com/dextermb.png'}
        />
        <div>
          <h1>Dexter Marks-Barber</h1>
          <p className={'mb-gh'}>PHP, MySQL, JavaScript</p>
          <Social />
        </div>
      </div>
    </Section>
    <Section>
      <Programming />
    </Section>
    <Section>
      <Experience />
    </Section>
    <Section>
      <Projects />
    </Section>
  </Wrapper>
)
