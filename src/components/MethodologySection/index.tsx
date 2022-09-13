import React from 'react'
import { SectionProps } from '../../@types/section'
import { Scrum } from '../../assets'
import { CircleCardModal } from '../CircleCardModal'
import { Section } from '../Section'
import {
  MethodologyDescription,
  MethodologyDivision,
  MethodologyGroup,
  MethodologyImage,
  MethodologySubTitle,
  MethodologyTilte,
  MethodologyWrapper
} from './styled'

export const MethodologySection: React.FC<SectionProps> = ({ id }) => {
  return (
    <Section id={id}>
      <MethodologyTilte>Metodologia</MethodologyTilte>
      <MethodologyGroup>
        <MethodologyDivision>
          <MethodologyDescription>
            Foi adotado pelo grupo a metodologia agil do Scrum para o
            densenvolvimento da plataforma. Cada membro desempenhou uma ou mais
            funções durante o desenvolvimento. Tendo em vista os três papéis da
            metologia Scrum, sendo eles o Product Owner (PO), Scrum Master e
            equipe de desenvolvimento, foram divididas funções entre os membros
            do grupo onde a Karilana foi a PO, o João Felipe foi o Scrum Master
            e todos os membros atuaram como equipe de desenvolvimento.
          </MethodologyDescription>
        </MethodologyDivision>

        <MethodologyDivision>
          <MethodologyImage src={Scrum} alt="ilustração da metodologia agil" />
        </MethodologyDivision>
      </MethodologyGroup>
      <MethodologyGroup>
        <MethodologyDivision duration={1000}>
          <MethodologySubTitle>Setores do desenvolvimento</MethodologySubTitle>
          <MethodologyWrapper>
            <CircleCardModal />
            <CircleCardModal />
            <CircleCardModal />
          </MethodologyWrapper>
        </MethodologyDivision>
      </MethodologyGroup>
    </Section>
  )
}
