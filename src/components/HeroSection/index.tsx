import React from 'react'
import { SectionProps } from '../../@types/section'
import { Section } from '../Section'
import { Logo, Banner } from '../../assets/'
import {
  BannerContainer,
  BannerImage,
  HeroButton,
  HeroContent,
  HeroContentDescription,
  HeroContentTitle,
  HeroImage,
  HeroSubtitle,
  TopContainer
} from './styled'

export const HeroSection: React.FC<SectionProps> = ({ ...props }) => {
  return (
    <Section {...props}>
      <TopContainer>
        <HeroContent>
          <HeroContentTitle>
            Grupo 4 - <span>Open</span>
            <span>Shoes</span>
          </HeroContentTitle>
          <HeroSubtitle>Sobre nós</HeroSubtitle>
          <HeroContentDescription>
            A Openshoes se trata de uma vitrine digital de calçados que tem por
            objetivo solucionar problemas como a necessidade de deslocamento até
            lojas de sapatos físicas e a dificuldade na busca pelo sapato ideal
            em lojas virtuais. Pensando nisso, nós desenvolvemos uma plataforma
            virtual que oferece o acesso a inúmeras lojas físicas e virtuais, e
            permite que o cliente explore livremente e com praticidade todas as
            informações necessárias que procura para o seu sapato. Com a
            Openshoes, você e o sapato que você deseja estão há uma tela de
            distância.
          </HeroContentDescription>
          <HeroButton href="#start">Veja mais</HeroButton>
        </HeroContent>
        <HeroContent>
          <HeroImage src={Logo} alt={'Logo'} />
        </HeroContent>
      </TopContainer>
      <BannerContainer>
        <BannerImage src={Banner} alt={'banner de sapatos bonitos'} />
      </BannerContainer>
    </Section>
  )
}
