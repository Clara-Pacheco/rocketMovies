import { Container, Form, Avatar } from './styles'
import { Link } from 'react-router-dom'
import { FiUser, FiMail, FiLock, FiCamera, FiArrowLeft } from 'react-icons/fi'

import { Button } from '../../Components/Button/Button'
import { Input } from '../../Components/Input/Input'
import { ButtonText } from '../../Components/ButtonText/ButtonText'


export function Profile(){
  return (
    <Container>
      <header>
        <ButtonText to="/"
          value="Voltar"
          icon={ FiArrowLeft }
        />
        </header>
        <Form>
          <Avatar>
            <img
              src='https://github.com/Clara-Pacheco.png'
              alt='Foto de usuário'
            />

            <label htmlFor='avatar'>
              <FiCamera />

              <input
                id='avatar'
                type='file'
              />

            </label>
          </Avatar>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />
        <Input
          placeholder="E-mail"
          type="email"
          icon={FiMail}
        />
        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
        />
        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
        />

        <Button title="Salvar" />
      </Form>
    </Container>
  )
}