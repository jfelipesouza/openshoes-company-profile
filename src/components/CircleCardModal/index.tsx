import React from 'react'
import {
  Container,
  DescriptionList,
  DescriptionListItem,
  Title
} from './styled'

type CircleCardModalProps = {
  data: {
    title: string
    listDescription: string[]
  }
}

export const CircleCardModal: React.FC<CircleCardModalProps> = ({ data }) => {
  return (
    <>
      <Container>
        <Title>{data.title}</Title>
        <DescriptionList>
          {data.listDescription.map((item, index) => (
            <DescriptionListItem key={index}>{item}</DescriptionListItem>
          ))}
        </DescriptionList>
      </Container>
    </>
  )
}
