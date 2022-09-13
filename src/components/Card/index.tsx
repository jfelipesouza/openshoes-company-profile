import React from 'react'
import { Fade } from 'react-awesome-reveal'
import { CardContainer, CardDescription, CardTitle } from './styled'

type CardProps = {
  title: string
  description: string
  fadeDirection: 'left' | 'up'
  fadeDelay: number
}
export const Card: React.FC<CardProps> = ({
  title,
  description,
  fadeDelay,
  fadeDirection
}) => {
  return (
    <Fade delay={fadeDelay} direction={fadeDirection}>
      <CardContainer>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContainer>
    </Fade>
  )
}
