import React from 'react'
import { SectionProps } from '../../@types/section'
import { Scrum } from '../../assets'
import { CircleCardModal } from '../CircleCardModal'
import { Section } from '../Section'
import { cards } from './cards'
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
            Uma das metodologias adotadas durante todo o processo de
            desenvolvimento do projeto foi a metodologia ágil do Scrum, onde
            cada membro foi alocado em sua função juntamente com suas
            respectivas atividades a serem realizadas, sendo organizadas
            reuniões periódicas para manter o grupo informado do progresso do
            projeto, assim como possíveis dificuldades que seriam encontradas.
            Dentro dessa metodologia, três papéis fundamentais foram designados:
            Karilana Santos como Product Owner (PO), João Felipe como Scrum
            Master (SM) e restante do time como Developers (DEVs).
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
            {cards.map((card, index) => (
              <CircleCardModal data={card} key={index} />
            ))}
          </MethodologyWrapper>
        </MethodologyDivision>
      </MethodologyGroup>
    </Section>
  )
}
