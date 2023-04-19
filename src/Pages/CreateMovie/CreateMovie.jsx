import { Container, Section, Footer, InternalContainer, InputField, TagsContainer } from './styles'

import { Header } from '../../Components/Header/Header.jsx'
import { ButtonText } from '../../Components/ButtonText/ButtonText.jsx'
import { Input } from '../../Components/Input/Input.jsx'
import { Button } from '../../Components/Button/Button.jsx'
import { Textarea } from '../../Components/Textarea/Textarea.jsx'
import { Tag } from '../../Components/Tag/Tag.jsx'

import { FiArrowLeft, FiX,FiPlus } from 'react-icons/fi'

export function CreateMovie() {
  return (
    <Container>
      <Header />
        <InternalContainer>
          <header>
            <ButtonText
              icon = {FiArrowLeft}
              value="Voltar"
            />
            <h1>Novo Filme</h1>
          </header>
          <InputField>
            <Input placeholder ="Título" />
            <Input placeholder ="Sua nota (de 0 a 5)" />
          </InputField>
          <Textarea value="Observações" />
          <Section>
            <h2>Marcadores</h2>
            <TagsContainer>
              <Tag
                value="React"
                icon={FiX}
                
              />
              <Tag
                value="Novo Marcador"
                icon={FiPlus}
                isNew
              />
            </TagsContainer>
          </Section>
          <Footer>
            <Button title="Excluir filme" />
            <Button toSave title="Salvar Alterações" />
          </Footer>
      </InternalContainer>
    </Container>
  )
}