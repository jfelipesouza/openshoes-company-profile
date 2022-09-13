import styled from 'styled-components'

export const TopContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const StartIdeaSectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.sizes.title};
  color: ${({ theme }) => theme.colors.textLigth};
  font-weight: 900;
  @media screen and (max-width: 526px) {
    font-size: ${({ theme }) => theme.mobileSizes.subtitle};
  }
`

export const StartIdeaDescription = styled.p`
  width: 80%;
  text-align: justify;
  font-size: ${({ theme }) => theme.sizes.description};
  color: ${({ theme }) => theme.colors.textLigth};
  margin: 2rem 0;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
  @media screen and (max-width: 526px) {
    font-size: ${({ theme }) => theme.mobileSizes.text};
  }
`

export const StartIdeaContent = styled.div`
  display: grid;
  width: 80%;
  min-height: 50vh;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem 2rem;
  justify-content: center;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 800px) {
    width: 100%;
    grid-gap: 2rem 1rem;
    justify-items: center;
  }
  @media screen and (max-width: 666px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem 1rem;
    margin-top: 1rem;
    margin-bottom: 0rem;
  }
`

export const Figma = styled.iframe`
  width: 100%;
  height: 90vh;
  border: none;
  border-radius: 0.5rem;
  box-shadow: 3px 5px 8px #0009;

  @media screen and (max-width: 500px) {
    height: 50vh;
    margin-top: 5rem;
  }
`
