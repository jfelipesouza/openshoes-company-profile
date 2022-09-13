import React, { useState } from 'react'
import {
  Container,
  DescriptionList,
  DescriptionListItem,
  ModalContainer,
  Title
} from './styled'

type CircleCardModalProps = {
  data: {
    title: string
    listDescription: { item: string }[]
  }
}

export const CircleCardModal: React.FC = () => {
  const [openModal, setOpenModal] = useState(false)
  return (
    <>
      <Container>
        <Title>Desing (UX/UI)</Title>
        <DescriptionList>
          <DescriptionListItem> Criação de Modelos</DescriptionListItem>
          <DescriptionListItem> Criação de Ilustrações</DescriptionListItem>
          <DescriptionListItem> Criação de Mockups</DescriptionListItem>
        </DescriptionList>
      </Container>
    </>
  )
}
