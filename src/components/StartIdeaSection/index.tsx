import React, { useContext } from 'react'
import { SectionProps } from '../../@types/section'
import { Context } from '../../service/context'
import { Section } from '../Section'
import { Card } from '../Card'
import {
  Figma,
  StartIdeaContent,
  StartIdeaDescription,
  StartIdeaSectionTitle,
  TopContainer
} from './styled'

type StartIdeaSectionProps = SectionProps & {
  focus?: boolean
}

export const StartIdeaSection: React.FC<StartIdeaSectionProps> = ({ id }) => {
  const { isDark } = useContext(Context)

  const iframe = isDark
    ? 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F1hOMrqSf6hwZLSlIn7uSHz%2FOpen-Shoes-(Copy)%3Fnode-id%3D0%253A1'
    : 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FLU10ALOmixmesxXO1b6OVv%2FOpen-Shoes'

  const cards = [
    {
      title: '1° Ideia',
      description:
        'Inicialmente iriamos criar somente um sistema de gerenciamento de estoque para detarminadas lojas de calçados.',
      direction: 'left',
      delay: 0
    },
    {
      title: '2° Ideia',
      description:
        '  Após um brainstorm com toda equipe notou-se que a problematica não seria resolvida somente com un sistema de estoque e mudou para uma loja digital.',
      direction: 'left',
      delay: 500
    },
    {
      title: '3° Ideia',
      description:
        'Com base nas complexidades burocraticas para geração de notas fisicais optamos por desenvolver uma vitrine digital e não uma  loja completa.',
      direction: 'left',
      delay: 1000
    }
  ]

  return (
    <Section id={id}>
      <TopContainer>
        <StartIdeaSectionTitle>Ideia Inicial</StartIdeaSectionTitle>
        <StartIdeaDescription>
          A ideia do projeto surgiu da dificuldade em comum da equipe de
          encontrar lojas com mais descrições dos produtos que sejam próximas a
          eles ou mesmo digitais quando se tratava de calçados.
        </StartIdeaDescription>

        <StartIdeaContent>
          {cards.map((card, index) => (
            <Card
              description={card.description}
              fadeDelay={card.delay}
              fadeDirection={card.direction as any}
              title={card.title}
              key={index}
            />
          ))}
        </StartIdeaContent>
        <StartIdeaDescription>
          Utilizamos o Figma para a criação de modelos para começarmos a
          desenvolver a aplicação e gerar rascunhos de telas, fluxos e
          interações.
        </StartIdeaDescription>
        <Figma src={iframe} allowFullScreen />
      </TopContainer>
    </Section>
  )
}
