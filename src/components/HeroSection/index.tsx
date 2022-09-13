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
            OpenShoes é uma vitrine digital de sapatos. O projeto foi iniciado
            2022 e possui uma grande variedade de produtos, desde moda até
            esportes. O site oferece uma interface muito amigável com muitos
            filtros para ajudar o cliente a encontrar o produto desejado. A loja
            tem muitos produtos, que são divididos em diferentes categorias,
            como tênis, sandálias e assim por diante.
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
