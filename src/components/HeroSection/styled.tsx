import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
    
  }
  100% {
    transform: rotate(360deg);
    
  }

`
const pulse = keyframes`
  0%{
    transform: scale(.9);
  }
  50%{
    transform: scale(1);
  }
  100%{
    transform: scale(.9);
  }
`

export const TopContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;

  @media screen and (max-width: 861px) {
    flex-direction: column-reverse;
  }
`
export const HeroContent = styled.div`
  width: 50%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  &:nth-child(1) {
    align-items: flex-start;
  }

  &:nth-child(2) {
    &::after {
      content: '';
      width: 90%;
      background-color: ${({ theme }) => theme.colors.secundaryHover};
      height: 100%;
      position: absolute;
      z-index: 1;
      border-radius: 1rem;
      clip-path: polygon(
        92.32051% 40%,
        93.79385% 43.1596%,
        94.69616% 46.52704%,
        95% 50%,
        94.69616% 53.47296%,
        93.79385% 56.8404%,
        92.32051% 60%,
        79.82051% 81.65064%,
        77.82089% 84.50639%,
        75.35575% 86.97152%,
        72.5% 88.97114%,
        69.3404% 90.44449%,
        65.97296% 91.34679%,
        62.5% 91.65064%,
        37.5% 91.65064%,
        34.02704% 91.34679%,
        30.6596% 90.44449%,
        27.5% 88.97114%,
        24.64425% 86.97152%,
        22.17911% 84.50639%,
        20.17949% 81.65064%,
        7.67949% 60%,
        6.20615% 56.8404%,
        5.30384% 53.47296%,
        5% 50%,
        5.30384% 46.52704%,
        6.20615% 43.1596%,
        7.67949% 40%,
        20.17949% 18.34936%,
        22.17911% 15.49361%,
        24.64425% 13.02848%,
        27.5% 11.02886%,
        30.6596% 9.55551%,
        34.02704% 8.65321%,
        37.5% 8.34936%,
        62.5% 8.34936%,
        65.97296% 8.65321%,
        69.3404% 9.55551%,
        72.5% 11.02886%,
        75.35575% 13.02848%,
        77.82089% 15.49361%,
        79.82051% 18.34936%
      );
      animation-name: ${rotate};
      animation-duration: 10s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      box-shadow: 1px 2px 4px #22222289;
    }
  }

  @media screen and (max-width: 861px) {
    width: 100%;
    &:nth-child(2) {
      display: none;
    }
  }
`

export const HeroContentTitle = styled.h2`
  font-size: ${({ theme }) => theme.sizes.title};
  color: ${({ theme }) => theme.colors.textLigth};
  font-weight: 600;
  span {
    color: ${({ theme }) => theme.colors.error};
    filter: drop-shadow(1px 2px 3px ${({ theme }) => theme.colors.shadow});

    &:nth-child(2) {
      color: ${({ theme }) => theme.colors.textLigth};
    }
  }

  @media screen and (max-width: 526px) {
    font-size: ${({ theme }) => theme.mobileSizes.title};
  }

  @media screen and (max-width: 450px) {
    font-size: 2rem;
  }
`

export const HeroSubtitle = styled.h4`
  font-size: ${({ theme }) => theme.sizes.subtitle};
  margin: ${({ theme }) => theme.spaces.md} 0;
  border-radius: ${({ theme }) => theme.spaces.sm};
  color: ${({ theme }) => theme.colors.primaryLight};
  font-weight: 900;

  @media screen and (max-width: 526px) {
    font-size: ${({ theme }) => theme.mobileSizes.subtitle};
  }
`

export const HeroContentDescription = styled.p`
  font-size: ${({ theme }) => theme.sizes.text};
  color: ${({ theme }) => theme.colors.textLigth};
  font-weight: 600;
  text-align: justify;
  margin-bottom: ${({ theme }) => theme.spaces.md};
  @media screen and (max-width: 526px) {
    font-size: ${({ theme }) => theme.mobileSizes.text};
  }
`
export const HeroButton = styled.a`
  width: 50%;
  padding: ${({ theme }) => theme.spaces.md};
  background-color: ${({ theme }) => theme.colors.secundary};
  color: ${({ theme }) => theme.colors.textLigth};
  font-weight: 800;
  text-align: center;
  border-radius: ${({ theme }) => theme.spaces.sm};
  align-self: center;
  cursor: pointer;
  transition: all 0.2s linear;
  box-shadow: 2px 3px 4px #22222289;
  transform: translateY(1rem);

  &:hover {
    background-color: ${({ theme }) => theme.colors.secundaryHover};
    transform: translateY(calc(1rem - 3px));
  }
  &:active {
    transform: translateY(1rem);
  }

  @media screen and (max-width: 526px) {
    font-size: ${({ theme }) => theme.mobileSizes.text};
  }
`
export const HeroImage = styled.img`
  width: 80%;
  height: 50%;
  object-fit: contain;
  position: absolute;
  filter: drop-shadow(2px 3px 4px #22222289);
  z-index: 2;

  animation-name: ${pulse};
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
`
export const BannerContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 50vh;
  position: relative;
  filter: drop-shadow(3px 4px 6px #22222289);
  margin-bottom: 10%;

  @media screen and (max-width: 950px) {
    margin-bottom: 0%;
  }

  @media screen and (max-width: 700px) {
    min-height: 30vh;
  }

  @media screen and (max-width: 350px) {
    min-height: 20vh;
  }
`
