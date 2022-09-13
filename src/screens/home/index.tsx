import React from 'react'
import { Header } from '../../components/Header'
import { HeroSection } from '../../components/HeroSection'
import { MethodologySection } from '../../components/MethodologySection'
import { StartIdeaSection } from '../../components/StartIdeaSection'
import { Container } from './styled'

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <HeroSection id={'hero'} />
        <StartIdeaSection id={'start'} />
        <MethodologySection id={'methodology'} />
      </Container>
    </>
  )
}

export { Home }
