import styled from 'styled-components'

type ContainerProps = {
  backgroundActive?: boolean
}
export const Container = styled.section<ContainerProps>`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.colors.background};
`
