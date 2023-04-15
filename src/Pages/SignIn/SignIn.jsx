import { Container,Form,Background } from './styles.js'

import { FiMail, FiLock, FiArrowLeft} from 'react-icons/fi'

import { Button } from '../../Components/Button/Button'
import { Input } from '../../Components/Input/Input'
import { ButtonText } from '../../Components/ButtonText/ButtonText.jsx'

export function SignIn(){
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>
      
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
        <Button title="Entrar" /> 

        <ButtonText value="Criar conta" icon={ FiArrowLeft } />
      
       </Form>

       <Background />
    </Container>
  )
}