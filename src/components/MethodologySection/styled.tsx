import styled from 'styled-components'
import { Fade } from 'react-awesome-reveal'

export const MethodologyTilte = styled.h2`
  font-size: ${({ theme }) => theme.sizes.title};
  color: ${({ theme }) => theme.colors.textLigth};
  font-weight: 700;
  @media screen and (max-width: 526px) {
    font-size: ${({ theme }) => theme.mobileSizes.subtitle};
  }
`
export const MethodologyGroup = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 3rem;
  &:nth-child(3) {
    flex-direction: column;
  }
  @media screen and (max-width: 880px) {
    flex-direction: column;
  }
`
export const MethodologyDivision = styled(Fade)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  @media screen and (max-width: 880px) {
    margin: 2rem 0;
  }
`
export const MethodologyDescription = styled.p`
  color: ${({ theme }) => theme.colors.textLigth};
  font-size: ${({ theme }) => theme.sizes.text};
  text-align: justify;
  @media screen and (max-width: 526px) {
    font-size: ${({ theme }) => theme.mobileSizes.text};
  }
`

export const MethodologyImage = styled.img`
  width: 80%;
  height: auto;
  object-fit: contain;
  @media screen and (max-width: 880px) {
    width: 50%;
  }
  @media screen and (max-width: 526px) {
    width: 80%;
  }
`

export const MethodologySubTitle = styled.h4`
  font-size: ${({ theme }) => theme.sizes.subtitle};
  color: ${({ theme }) => theme.colors.textLigth};
  margin-bottom: 2rem;
  width: 100%;
  text-align: left;
  @media screen and (max-width: 526px) {
    text-align: center;
    font-size: ${({ theme }) => theme.mobileSizes.subtitle};
  }
`

export const MethodologyWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  margin: 3rem 0;

  @media screen and (max-width: 890px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem 0;
    margin: 0;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`
