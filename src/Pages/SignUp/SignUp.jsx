import { Container,Form,Background } from './styles.js'

import { FiMail, FiLock, FiUser,FiArrowLeft} from 'react-icons/fi'

import { Button } from '../../Components/Button/Button'
import { Input } from '../../Components/Input/Input'

export function SignUp(){
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>
      
        <Input
          icon={FiUser}
          placeholder="Nome"
          type="text"
        />
        <Input
          icon={FiMail}
          placeholder="E-mail"
          type="text"
        />
        <Input
          icon={FiLock}
          placeholder="Senha"
          type="password"
        />
        <Button title="Cadastrar" /> 

        <a href='#'>
          <FiArrowLeft />
          Voltar para login
        </a>
        
       </Form>

       <Background />
    </Container>
  )
}