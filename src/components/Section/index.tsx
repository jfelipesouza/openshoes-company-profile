import React from 'react'
import { SectionProps } from '../../@types/section'
import { Container } from './styled'

const Section: React.FC<SectionProps> = ({ id, children }) => {
  return <Container id={id}>{children}</Container>
}

export { Section }
