import React, { useContext } from 'react'
import { Moon, SunDim } from 'phosphor-react'
import { Context } from '../../service/context'
import {
  Container,
  HamburguerButton,
  Links,
  NavBar,
  ThemeButton
} from './styled'

export const Header: React.FC = () => {
  const { open, setOpen, isDark, setDark } = useContext(Context)

  const handleChangeTheme = () => {
    setDark(!isDark)
  }
  const openResponsiveMenu = () => {
    setOpen(!open)
  }

  return (
    <Container>
      <NavBar>
        <Links href="#hero">Sobre</Links>
        <Links href="#start">Ideia Inicial</Links>
        <Links href="#methodology">Metodologia</Links>
        <Links href="#project">Projeto</Links>
        <Links href="#team">Equipe</Links>
        <Links href="#links">Links</Links>
      </NavBar>
      <ThemeButton onClick={handleChangeTheme}>
        {isDark ? <Moon /> : <SunDim />}
      </ThemeButton>
      <HamburguerButton onClick={openResponsiveMenu} />
    </Container>
  )
}
