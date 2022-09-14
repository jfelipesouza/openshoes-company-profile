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
        'Inicialmente, foi pensado na criação de um sistema de gerenciamento de estoque, que teria como diferencial a possibilidade do cliente verificar presencialmente se o sapato que procura na loja está disponível e em qual fileira ele se encontra.',
      direction: 'left',
      delay: 0
    },
    {
      title: '2° Ideia',
      description:
        'A ideia inicial passou a incorporar além das lojas físicas, as lojas virtuais, e nesse momento o objetivo do projeto se destinava em apresentar ao cliente, de maneira virtual, quais lojas teriam o estoque do sapato escolhido e qual a maneira de comprar com ela.',
      direction: 'left',
      delay: 500
    },
    {
      title: '3° Ideia',
      description:
        'Como escopo final, definimos que o projeto deixaria seu foco no estoque e passaria a alocar as lojas na plataforma, atuando no redirecionamento para o endereço virtual ou físico, e permitindo que o cliente possa acessar diversos tipos de sapatos de uma vez.',
      direction: 'left',
      delay: 1000
    }
  ]

  return (
    <Section id={id}>
      <TopContainer>
        <StartIdeaSectionTitle>Definição do projeto</StartIdeaSectionTitle>
        <StartIdeaDescription>
          A ideia do projeto surgiu da dificuldade em comum da equipe em
          encontrar lojas de sapatos que informassem descrições mais detalhadas
          dos produtos sem a necessidade de ir até a loja presencialmente.
          Assim, durante as discussões de como poderia ser solucionada essa
          barreira, houveram três principais ideias que contribuíram para a
          escolha do tema final:
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
          Assim, na intenção de ter uma maior visualização de como o projeto se
          estabeleceria, utilizamos o Figma para a criação dos modelos das
          telas, na detalhação de fluxos e na definição de futuras
          funcionalidades.
        </StartIdeaDescription>
        <Figma src={iframe} allowFullScreen />
      </TopContainer>
    </Section>
  )
}
