import styled from 'styled-components'

export const CardContainer = styled.div`
  box-shadow: 3px 4px 10px #22222289;
  border-radius: 0.5rem;
  width: 300px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.card};
  transition: all 0.4s linear;
  &:hover {
    transform: translateY(-0.5rem);
  }
  @media screen and (max-width: 526px) {
    height: 200px;
  }
  @media (max-width: 375px) {
    width: 280px;
  }
`

export const CardTitle = styled.h3`
  font-size: ${({ theme }) => theme.sizes.subtitle};
  color: ${({ theme }) => theme.colors.textLigth};
  margin: 2rem 0;
  font-weight: bold;
  @media screen and (max-width: 526px) {
    font-size: ${({ theme }) => theme.mobileSizes.subtitle};
  }
`

export const CardDescription = styled.p`
  width: 90%;
  text-align: justify;
  font-size: ${({ theme }) => theme.sizes.text};
  color: ${({ theme }) => theme.colors.textLigth};
  @media screen and (max-width: 526px) {
    font-size: ${({ theme }) => theme.mobileSizes.text};
  }
`
