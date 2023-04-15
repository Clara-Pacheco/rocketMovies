import { Container, Input, Profile } from './styles.js'

export function Header(){
  return (
    <Container >
      <h1>RocketMovies</h1>

      <Input
        type="text"
        placeholder='Pesquisar por título'
        required
      />
     
      <Profile>
        <div>
          <strong>Clara Pacheco</strong>
          <span>Sair</span>
        </div>

        <img src="https://github.com/Clara-Pacheco.png" />
      </Profile>
      
    </Container>
  )
}