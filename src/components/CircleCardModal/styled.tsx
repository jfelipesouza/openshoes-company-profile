import styled from 'styled-components'

export const Container = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 125px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    to top left,
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secundary},
    ${({ theme }) => theme.colors.secundaryHover}
  );
  box-shadow: 2px 3px 5px ${({ theme }) => theme.colors.shadow};
  cursor: pointer;
  transition: all 0.4s linear;
  &:hover {
    transform: translateY(-3px) scale(1.1);
  }
`

export const Title = styled.h4`
  font-size: ${({ theme }) => theme.sizes.description};
  color: ${({ theme }) => theme.colors.textLigth};
`

export const DescriptionList = styled.ul`
  margin-top: 1rem;
`

export const DescriptionListItem = styled.li`
  margin-top: 0.25rem;
  position: relative;
  color: #fff;
  ::before {
    content: '';
    position: absolute;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.colors.primaryLight};
    left: -1rem;
    top: 0.25rem;
  }
`
