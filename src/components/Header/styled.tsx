import styled from 'styled-components'
import { List } from 'phosphor-react'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0.5rem;
  width: 100%;
  z-index: 999;
  @media (max-width: 800px) {
    justify-content: flex-end;
    padding: 0 2rem;
    background-color: ${({ theme }) => theme.colors.secundary};
    top: 0;
    height: 3rem;
    align-items: center;
  }
`

export const HamburguerButton = styled(List)`
  font-size: 1.75rem;
  display: none;
  color: #fff;
  cursor: pointer;
  margin-left: 1rem;

  @media (max-width: 800px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const NavBar = styled.nav`
  width: 80%;
  height: 2.5rem;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.secundary};
  border-radius: 10rem;
  box-shadow: 1px 2px 4px ${({ theme }) => theme.colors.shadow};
  @media (max-width: 800px) {
    display: none;
  }
`

export const Links = styled.a`
  color: ${({ theme }) => theme.colors.textLigth};
  position: relative;
  padding: 0.4rem 1rem;

  ::after {
    content: '';
    position: absolute;
    bottom: 0.4rem;
    left: 1rem;

    width: 0%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: all 0.2s linear;
  }

  :hover {
    background-color: #fff;
    border-radius: 1rem;
    color: ${({ theme }) => theme.colors.primary};
  }
  :hover::after {
    width: calc(100% - 2rem);
  }
`

export const ThemeButton = styled.div`
  font-size: 1.75rem;
  display: flex;
  padding: 0.2rem;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
  color: #fff;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.secundary};
  border-radius: 2rem;
  transition: all 0.2s linear;
  box-shadow: 2px 4px 14px ${({ theme }) => theme.colors.shadow};
  :hover {
    background-color: ${({ theme }) => theme.colors.secundaryHover};
  }
  @media (max-width: 800px) {
    background-color: transparent;
    :hover {
      background-color: transparent;
    }
  }
`
