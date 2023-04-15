import { Container, Button } from './styles.js'

import { FiPlus } from 'react-icons/fi'

import { Header } from '../../Components/Header/Header.jsx'

export function MovieInfo() {
  return (
    <Container>
      <Header />
      <div>
        <h1>Meus filmes</h1>
        
        <Button>
          <FiPlus />
          Adicionar filme
        </Button>
      </div>
    </Container>
  )
}


